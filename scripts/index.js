more()

var i=0;
function more() {
   if(!i){
     document.getElementsById("moreview").style.display="inline";
     document.getElementsById("viewless").style.display="block";
     document.getElementsById("more").innerHTML="readless";
     i=1;
   }
else{
  document.getElementsById("moreview").style.display="block";
  document.getElementsById("viewless").style.display="inline";
  document.getElementsById("more").innerHTML="readmore"
}
}
