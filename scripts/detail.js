paymentdetail=(callback)=>{
    var adults=document.getElementsById("member").value;
    var name=document.getElementsById("name").innerHTML;
    var fromdate=new Date(document.getElementsById("fromdate").value);
    var todate=new Date(document.getElementsById("todate").value);
    var totaldate=fromdate.getTime()-todate.getTime();
    var totalAmount=parseInt(totaldate/(1000*60*60*24))*adults*1000;
    callback();
    document.getElementsById("submit").value=totalAmount;
  
}
