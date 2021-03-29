setHeaderTemplate()
    function  setHeaderTemplate() {
       var headerTemplate= 
        '<img class="logo" src ="C:\web development project\Hotel_Booking_Website_Starter_Code\assests\images\logo.png"  alt = "logo"/>'+
       '<a href="login.html" id="login"><button type="button">LOGIN</button></a>'+
       '</div>';
        } 
      document.getElementsByclass('head').innerHTML=(headerTemplate);
      document.getElementsByid('login').innerHTML=(headerTemplate);