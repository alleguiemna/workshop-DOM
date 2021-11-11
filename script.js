// console.log(document)
// console.log(document.querySelector('#total'))
// console.log(document.querySelectorAll('p'))
// console.log(document.getElementById('total').innerHTML)
// console.log(document.getElementsByClassName('plus'))
// console.log(document.getElementsByTagName('button'))

var btnsAdd=document.getElementsByClassName('plus')
var btnsCheck=document.getElementsByClassName('check')
var btnsDel=document.getElementsByClassName('minus')
var btnsCol=document.getElementsByClassName('far fa-heart')
// console.log(btnsCheck)
// console.log(btnsAdd)
for(var i=0;i<btnsAdd.length;i++){
    btnsAdd[i].addEventListener('click',increment)
}
for(var j=0;j<btnsCheck.length;j++){
    btnsCheck[j].onclick=total
    btnsCheck[j].onclick=removeLine
}

for (var k=0;k<btnsDel.length;k++){
    btnsDel[k].onclick=decrement
}
for (var l=0;l<btnsCol.length;l++){
    btnsCol[l].onclick=changeColor
}
//increment
function increment (event){
    var btnAdd=event.target
    var divElt=btnAdd.parentElement
    // console.log(divElt)

    var quantityTag=divElt.querySelector('p')
    var quantity=Number(quantityTag.innerHTML)
    quantity++;
    quantityTag.innerHTML=quantity

    var trElt=divElt.parentElement.parentElement
    var unitPriceTag=trElt.querySelector('.unitPrice')
    var unitPrice=Number(unitPriceTag.innerHTML)
    var priceTag=trElt.querySelector('.price')
    var price=Number(priceTag.innerHTML)
    price=quantity*unitPrice
    priceTag.innerHTML=price
    // console.log(price)
}
//decrement
function decrement (event){
    var btnDel=event.target
    var divElt=btnDel.parentElement
    var trElt=divElt.parentElement.parentElement
    var quantityTag=trElt.querySelector('p')
    var quantity=Number(quantityTag.innerHTML)
    var priceTag=trElt.querySelector('.price')
    var price=Number(priceTag.innerHTML)
   
    if(quantity>0){
        quantity--;
    }
    quantityTag.innerHTML=quantity

    // console.log(divElt)
}
function total (event){
    var btnCheck=event.target
    var trElt=btnCheck.parentElement.parentElement
    var priceTag=trElt.querySelector('.price')
    var price= Number(priceTag.innerHTML)
    // console.log(price)
   var totalTag=document.getElementById('total')
   var total=Number(totalTag.innerHTML)
   //total=total+price
   var btnPlus=trElt.querySelector('.plus')
   var btnMin=trElt.querySelector('.minus')

  if(btnCheck.checked){
    total+=price
      btnPlus.setAttribute('disabled',true)
      btnMin.setAttribute('disabled',true)
  }
  else{
      total-=price
      btnPlus.removeAttribute('disabled')
      btnMin.removeAttribute('disabled')
  }
  totalTag.innerHTML=total
//    console.log(total)
}
function changeColor (event){
    var btnCol=event.target
    console.log(btnCol)
    if(btnCol.style.color !== "pink"){
        btnCol.style.color = "pink"
    }
    else{
        btnCol.style.color="#868E96"
    }
}

function removeLine(event){
    var btnChek=event.target
    trElt=btnChek.parentElement.parentElement
    trElt.remove()

}