
const search=()=>{
const searchbox=document.getElementById('search-item').value.toUpperCase();
const storeitems=document.getElementById('product-list');
const product=document.querySelectorAll('.cart-prt')
const pname=storeitems.getElementsByTagName('h2');
for(var i=0; i<pname.length; i++){

    let match=product[i].getElementsByTagName('h2')[0];
    if(match){
        let textValue=match.textContent ||match.innerHTML;
        if(textValue.toUpperCase().indexOf(searchbox)>-1){
            product[i].style.display="";
        }
        else{
            product[i].style.display="none";
 
        }
    }
}

}




let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let count=0;
let p=0;
function AddToCart(Name,price,src,id){
    if(count<=4){
if(id==1){
    count++;
    p+=price;
     let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>
                `;
                listCard.appendChild(newDiv);
                
                
}
if(id==2){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}

if(id==3){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==4){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==5){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==6){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==7){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==8){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==9){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==10){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}


if(id==11){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}


if(id==12){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==13){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==14){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==15){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==16){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==17){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==18){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}

if(id==19){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==20){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==21){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==22){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}


if(id==23){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==24){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}

if(id==25){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}


if(id==26){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==27){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==28){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==29){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==30){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==31){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==32){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}
if(id==33){
    count++;
     let newDiv = document.createElement('li');
      p+=price;
            newDiv.innerHTML = `
                <div><img src="${src}"/></div>
                <div>${Name}</div>
                <div>₹${price}</div>
                <button class="trt" onclick="buyt()">buy Now</button>

                `;
                listCard.appendChild(newDiv);
               

}




               
    let t=document.querySelector('.total');


let counto=document.querySelector('.quantity');
counto.innerHTML=count;
t.innerHTML=p;
}
}



var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


function buy(){
    if(p==0){
        Swal.fire(
                'Opps..!',
                'cart is empty',
                'please select items'
            );
    }
    else{
alert(`purchase succesful of Rupees ${p} `);
                        location.href='card.html';

       
    }
}


