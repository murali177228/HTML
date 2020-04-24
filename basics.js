function myFunction(){
    document.getElementById('demo').innerHTML = "Paragraph has been changed by clicking button";
}
function add(){
    var val1 = parseInt(document.getElementById('txtNum1').value);
    var val2 = parseInt(document.getElementById('txtNum2').value);
    var total;
    total = val1 + val2;
    alert(total);
    
    document.getElementById("demo").innerHTML =
"The value of z is: " + total;
  
}