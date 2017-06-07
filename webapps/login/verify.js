$(document).ready(function(){
  $("input").blur(function(){
      // if ($(this).val().length == 0) {
      //     $(this).addClass('error').after('<span class="error">不可是空的!</span>');
      // }
      // 取得表單欄位值
      var username = $('#username').val();
      // 使用HTTP POST方法送出Ajax請求
      $.post("target.jsp", { username : username } ,
      function(data){
          // 取出XML元素值
          $("#result").html(data);
      });
  });
  $("input").focus(function(){
      $(this).removeClass('error').next('span').remove();
  });
  $("form").submit(function(){
    // 取得表單欄位值
    var password = $('#password').val();
    var username = $('#username').val();
    // 使用HTTP POST方法送出Ajax請求
    $.post("target.jsp", { username : username , password : password } ,
    function(data){
        // 取出XML元素值
        $("#result").html(data);
    });
    return false;
  });
});

// $(document).ready(function(){
//   var nameVal = $('#username').val();
//   //var aVal = $('#a').val();
//     $.post("target.jsp",
//     {
//       name : nameVal,
//     },
//     function(data, status){
//       alert(data);
//       verify(data);
//     });
//
// });

// function verify(data){
//   alert(data);
//   if(data=="no"){
//     alert("account not usable");
//   }else{
//     alert("this account is available");
//   }
// }



// function verify(){
//   var nameVal = $('#username').val();
//   var aVal = $('#a').val();
//   $.post('target.jsp',
//   {
//     name : nameVal,
//     a : aVal;
//   },
//   function(data){
//     if(data =="ok"){
//       alert("帳號可以使用");
//     }else{
//       alert("帳號已被使用過");
//     }
//   });
// }
  //   $('#result').html($(data).find('data').text());
  //   alert(data);
  //   if($('#result').html($(data).find('data').text())==no){
  //     alert("帳號被使用過");
  //   }else{
  //     alert("帳號可以使用");
  //   }
  //   //alert("姓名: " + $(data).find('name').text());
  //   }
  //
  //   );
  //   return false;
  // }
// var nameVal = $('#username').val();
// var aVal = $('#a').val();
// $.post('target.jsp',
// { name : nameVal,
//   a : aVal,
// },
// function(data) {
// // 取出XML元素值

// });
// });
