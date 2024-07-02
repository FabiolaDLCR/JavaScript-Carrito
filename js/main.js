const productos = [
    {
        id: 1,
        km: "15 KM",
        name: "Valle de Bravo, MX",
        date: "30/11/2024    9:00AM",
        price: 1200, 
    }
]


//CREAR TARJETA DE CARRERA
let cartProducts = []

let productsContainer = document.getElementById("products-container")
function renderProductos (productsArray) {
    productsArray.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `                        
                          <h3>${producto.km}</h3>
                          <p>${producto.name}</p>
                          <p>${producto.date}</p>
                          <h3>$${producto.price} MXN p/persona </h3>
                          <div class="contador">
                          <img class="boton-menos" id="${producto.id}" src= "https://img.icons8.com/ios/50/minus.png" alt="quitar" </img>
                          <input class="cantidad" id="${producto.tickets}" type="text" value="0">
                          <img class="boton-mas" id="${producto.id}" src= "https://img.icons8.com/ios/50/add--v1.png" alt="agregar" </img>
                          <div class="boton-agregar">
                          <button class="productoAgregar" id="${producto.id}">Agregar boletos </button>
                          </div>
                          </div>`
        productsContainer.appendChild(card)
    })
    //addToCartButton()
}
renderProductos(productos)

//ACCION DE BOTONES MAS Y MENOS
let botonMenos = document.querySelector('.boton-menos');
let botonMas = document.querySelector('.boton-mas');
let userInput = document.querySelector('.cantidad');
let userProducts = 0;
botonMas.addEventListener('click', (e)=>{
      userProducts++;
      userInput.value = userProducts;
});
botonMenos.addEventListener('click', (e)=>{
  userProducts--;
    if(userProducts <= 0){
    userProducts = 0;
    }
    userInput.value = userProducts
});

//AGREGAR EL TOTAL DE PRODUCTOS AL CARRITO
const addToCartBtn = document.querySelector('.productoAgregar');
let totalTickets = document.querySelector('.cart-total');
addToCartBtn.addEventListener('click', ()=> {
    totalTickets.innerHTML = `<p>Total <span>(x${userProducts})</span>: $${userProducts*1200} MXN</p>`
    appendChild ()

})

//VACIAR CARRITO

const removeItems=document.querySelector ('.delete-cart');
removeItems.addEventListener('click',()=>{
    totalTickets.innerHTML = `<p>Total <span>(x0)</span>: $0 MXN</p>`

})





