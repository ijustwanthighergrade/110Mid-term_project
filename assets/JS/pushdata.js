var pushdata =  function() {
  
  // 姓名
  var name = $('#input_name').val() || '未填寫';

  // 電子郵件
  var email = $('#input_email').val() || '未填寫';
  //影片評分
  var video_score = function() {
    var v;
    $('[name="vedio_score"]').each(function() {
      if($(this).prop('checked') === true) v = $(this).val();
    });
    return v;
  };
  //網頁評分
  var web_score = function() {
    var v;
    $('[name="web_score"]').each(function() {
      if($(this).prop('checked') === true) v = $(this).val();
    });
    return v;
  };
  // 偷偷告訴我們
  var text_msg = $('#input_text').val() || '未填寫';

   // post
  var data = {
    'entry.1874703059': name,
    'entry.807229909': email,
    'entry.617986349': video_score,
    'entry.1181539638': web_score,
    'entry.1702962574': text_msg,
  };
  $.ajax({
    type: 'POST',
    url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeE6jkRIfUrXrUYoIw-fbC2uAkyoPETIfmm_dLUoG8e0_M20A/formResponse',
    data: data,
    contentType: 'application/json',
    dataType: 'jsonp',
    complete: function() {
      alert('資料已送出！');

    }
  });
};