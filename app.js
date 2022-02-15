//Get ID
function getId (id){
    return document.getElementById(id);
}

function cal(product, price, isAdd ){
    const productInput = getId(product+'-input');
    const productPrice = getId(product+'-price');
    if(isAdd == true){
        productInput.value = parseInt(productInput.value) + 1;
    }
    else if (isAdd == false && productInput.value > 0){
        productInput.value = parseInt(productInput.value) - 1;
    }
    productPrice.innerText = parseInt(productInput.value) * price;
    //subtotal
    const subTotal = getId('sub-total');
    subTotal.innerText = parseInt(getId('phone-price').innerText)+parseInt(getId('case-price').innerText);
    //Tax
    const tax = getId('tax');
    tax.innerText= subTotal.innerText /20;
    //total
    const total = getId('total');
    total.innerText = parseFloat(subTotal.innerText) +parseFloat(tax.innerText);
}

//phone pluse
getId('phone-pluse').addEventListener('click', function(){
    cal('phone', 2438, true);
});

//phone minuse
getId('phone-minus').addEventListener('click', function(){
    cal('phone',2438,false);
});
//case pluse
getId('case-pluse').addEventListener('click', function(){
    cal('case', 59, true)
});

//case minuse
getId('case-minus').addEventListener('click', function(){
    cal('case', 59, false);
});