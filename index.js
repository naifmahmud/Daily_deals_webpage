// ধরে আনার ফাংশন

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// Event Delegeetion

getElement("product-box").addEventListener("click",function(e){
    if(e.target.className.includes("btn-class"))
    {
        const cardButton= e.target;
       let count=0;
    count++;
    console.log(count);
    // TOTAL QUANTITY
    const totalQuantity= getElement("total-quantity").innerText;
    let currentQuantity= Number(totalQuantity)+Number(count);
    getElement("total-quantity").innerText= currentQuantity;
    //    Product Image
    const productImage =
      cardButton.parentNode.parentNode.children[0].children[0].src;
    console.log(productImage);

    // Product Title
    const productTitle = cardButton.parentNode.children[1].innerText
    console.log(productTitle);

    // Product Price
    const productPrice= cardButton.parentNode.children[2].children[0].innerText

    console.log(productPrice);
    
    const totalPrice= getElement("total-price").innerText;

    const currentTotal= Number(productPrice)+Number(totalPrice);
    getElement("total-price").innerText=currentTotal;


    const cardContainer= getElement("card-container");

    const newCart= document.createElement("div");
    newCart.innerHTML= ` 
    <div class="flex justify-between p-2.5 bg-gray-200 rounded-xl space-x-2.5">
               <img class="w-10" src="${productImage}" alt="">
               <div>
                <h6>${productTitle}</h6>
                <p><span>${productPrice}</span> Tk
                </p>
               </div>
            </div>
    `;

    cardContainer.append(newCart);
    
  


const clearBtn= getElement("clear-btn");
clearBtn.addEventListener("click",function(){
    getElement("card-container").innerHTML="";
     getElement("total-price").innerText=0;
    getElement("total-quantity").innerText= 0;
    }
)
}
})

// DOM TRAVERSE
// const cardBtns = document.getElementsByClassName("btn-class");
// console.log(cardBtns);

// for (let cardButton of cardBtns) {
//   cardButton.addEventListener("click", function () {
//     let count=0;
//     count++;
//     console.log(count);
//     // TOTAL QUANTITY
//     const totalQuantity= getElement("total-quantity").innerText;
//     let currentQuantity= Number(totalQuantity)+Number(count);
//     getElement("total-quantity").innerText= currentQuantity;
//     //    Product Image
//     const productImage =
//       cardButton.parentNode.parentNode.children[0].children[0].src;
//     console.log(productImage);

//     // Product Title
//     const productTitle = cardButton.parentNode.children[1].innerText
//     console.log(productTitle);

//     // Product Price
//     const productPrice= cardButton.parentNode.children[2].children[0].innerText

//     console.log(productPrice);
    
//     const totalPrice= getElement("total-price").innerText;

//     const currentTotal= Number(productPrice)+Number(totalPrice);
//     getElement("total-price").innerText=currentTotal;


//     const cardContainer= getElement("card-container");

//     const newCart= document.createElement("div");
//     newCart.innerHTML= ` 
//     <div class="flex justify-between p-2.5 bg-gray-200 rounded-xl space-x-2.5">
//                <img class="w-10" src="${productImage}" alt="">
//                <div>
//                 <h6>${productTitle}</h6>
//                 <p><span>${productPrice}</span> Tk
//                 </p>
//                </div>
//             </div>
//     `;

//     cardContainer.append(newCart);
    
//   });
// }

// const clearBtn= getElement("clear-btn");
// clearBtn.addEventListener("click",function(){
//     getElement("card-container").innerHTML="";
//      getElement("total-price").innerText=0;
//     getElement("total-quantity").innerText= 0;

// })

/*
    const title2= getElement("card-title-2").innerText;
    const title3= getElement("card-title-3").innerText;

    const price2= getElement("card-price-2").innerText;
    const price3= getElement("card-price-3").innerText;

// Traditional Way
document.getElementById("cooking-spoon-btn").addEventListener("click", function()
{
    const title1= getElement("card-title-1").innerText;
    const price1= getElement("card-price-1").innerText;
    const totalPrice= getElement("total-price").innerText;
    const quantity=getElement("total-quantity").innerText;
    const cardContainer= getElement("card-container");

    let currentTotal=Number(price1)+Number(totalPrice);
    getElement("total-price").innerText=currentTotal.toFixed(2);
    
    const newCart= document.createElement("div");
    newCart.innerHTML=`
     <div class="flex justify-between p-2.5 bg-gray-200 rounded-xl space-x-2.5">
               <img class="w-10" src="./assets/kitchen-1.png" alt="">
               <div>
                <h6>${title1}</h6>
                <p><span>${price1}</span> Tk
                </p>
               </div>
            </div>
            `;

    cardContainer.append(newCart);
 
})
    */
