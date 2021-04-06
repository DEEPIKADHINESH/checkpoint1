function more(){
  var x =document.getElementsById("viewmore");
  console.log(x)
  if(x.textcontent ==="viewmore") {
    document.getElementsById("hiddenview").style.display =flex;
    x.innerText="viewless";
}
else{
  document.getElementsById("hiddenview").style.display=none;
  x.innerText="viewmore"
}
}