


    var displayHeaderTemplate = ()=>{
    var headerTemplate = `<a href="index.html"><img src="assests\images\logo.png" alt="logo" class="logo"></a>;
    <button id="login" type="button" class="btn btn-light btn-sm" data-bs-toggle="modal"
    data-bs-target="#loginModal">
    LOGIN
</button>
<button id="logout" type="button" onclick="logout()" class="btn btn-light btn-sm" style="display: none;">
    LOGOUT`                      


document.getElementById('header').innerHTML = headerTemplate;
};
displayHeaderTemplate();
var displayFooterTemplate =()=>{
    var footerTemplate=
    `<a href="https://www.facebook.com" target="_blank">
    <img  class="socialmediaimage"src ="assests/images/facebook.png"></a>
    <a href="https://www.instagram.com" target="_blank">
    <img class="socialmediaimage" src ="assests/images/instagram.png"></a>
    <a href="https://twitter.com"target="_blank">
    <img class="socialmediaimage"src ="assests/images/twitter.png" ></a>
 </div>
   <p id="room">&copy 2020 ROOM SERVICE PVT LTD</p>
                  <button type="button" class="btn btn-info btn-sm" id="contactus" data-toggle="modal" data-backdrop="false"
   data-target="#contact-modal">Contact Us</button>
<div class="modal fade" id="contact-modal" tabindex="-1" role="dialog" aria-labelledby="contact-modal-label"
   aria-hidden="true">
   <div class="modal-dialog" role="document">
       <div class="modal-content">
           <div class="modal-header">
               <h5 class="modal-title" id="contact-modal-label">Get in touch</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
               </button>
           </div>
           <div class="modal-body">
               <form>
                   <p>
                       Thank you for reaching out!!! <br>
                       Please enter you email and we will get back to you.
                   </p>
                   <label for="email">Email: </label>
                   <input type="text" id="email" name="email" placeholder="Enter your email id" required>
               </form>
           </div>
           <div class="modal-footer">
               <button type="button" class="btn btn-primary" data-dismiss="modal">Sumbit</button>
           </div>
       </div>
   </div>
</div>`;
   
document.getElementById('footer').innerHTML = footerTemplate;
};
displayFooterTemplate();
var dologin=()=>{
    let userName=document.getElementsById("username").value;
    let password=document.getElementsById("password").value;
    let errorMsg=document.getElementsById("errormsg");
    if(userName=="admin"&&password=="admin"){
        sessionStorage.setItem("username",userName);
        sessionStorage.setItem("isloggedin",true);
        if(errorMsg.style.display ==="block")
        errorMsg.style.display ="none";
    }
    closeLoginModal();
} 
else {
    alert("invalid username or password");
    errorMsg.style.display="block";
}
var closeLoginModal={
 modal  =document.getElementsById("close").innerHTML
}
var loginTemplate=()=>{
    let loginTemplate=`<button type="button" id="login" class="btn btn-light btn-sm" data-toggle="modal" data-backdrop="false"
    data-target="#login-modal" onclick="login.html">LOGIN</button>
<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="login-modal-label"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="login-modal-label" onclick="login()">Please Login</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    <span id=close onclick="closelogin()"></span>
                </button>
            </div>
            <div class="modal-body">
                <form id="login-form" action="index.html" method="get" target="_self">
                    <div class="login-field">
                        <label for="username">Username: </label>
                        <input type="text" id="username" name="username" placeholder="Enter Username"
                            required />
                    </div>
                    <div class="login-field">
                        <label for="password">Password: </label>
                        <input type="password" id="password" name="password" placeholder="Enter Password"
                            required /><span id="errormsg"></span>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button id="login-button" type="button" class="btn btn-primary" data-dismiss="modal"
                            onclick="dologin()">Login</button>
                           
                    </div>
                </div>
            </div>
        </div>`;
        document.getElementsById("login").innerHTML=loginTemplate;
    }
    loginTemplate();