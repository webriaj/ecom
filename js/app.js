function lessQty(){
    var quantity =parseInt(document.getElementById("qty").value);
    quantity --
    document.getElementById("qty").value = quantity;
}
function incQty(){
    var quantity =parseInt(document.getElementById("qty").value);
    quantity ++
    document.getElementById("qty").value = quantity;
}
function amount(){
    var priceValue = 49990.00;
    var wqty =parseFloat(document.getElementById("qty").value);
    document.getElementById("price").value = (priceValue*wqty).toFixed(2);
}
function amount2(){
    var priceValue = 49990.00;
    var wqty =parseFloat(document.getElementById("qty").value);
    document.getElementById("price").value = (priceValue*wqty).toFixed(2);
}


var n = 5;
var sum = 0;

for(n==1;n>=5; n++){
    sum += n**2
    n*n
}
console.log(sum)