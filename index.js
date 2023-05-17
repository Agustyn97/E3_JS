const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

// Guardar
const pizzastring = JSON.stringify(pizzas) //JSON
localStorage.setItem("pizzalist", pizzastring); // localstorage

// Pedir
const pizzaJSON = localStorage.getItem("pizzalist") //JSON
const pizzalist = JSON.parse(pizzaJSON); //array


window.onload = function() {
    //NODOS
    const botonFiltro = document.querySelector(".btn");
    const botonEliminarFiltro = document.querySelector(".eliminar")
    const input = document.querySelector("input");
    const divContainer = document.querySelector(".container")

    input.setAttribute("placeholder",`${pizzas.length} variedades`)

    botonFiltro.addEventListener("click" , () => {

        const unapizza = buscarPizza(input.value)
        
        if(unapizza != "error"){
            divContainer.innerHTML = `
            <div class="card">
        <div class="card-header">
          <img
            src=${unapizza.imagen}
            alt=${unapizza.nombre}
          />
        </div>
        <div class="card-body">
          <h3 class="tag tag-teal">${unapizza.id} - ${unapizza.nombre}</h3>
          <h4>$${unapizza.precio}</h4>
          <p> 
            ${unapizza.ingredientes}
          </p>
        </div>
      </div>`
        }
        else{
            
            divContainer.innerHTML =
            `<h2 class="mjsError"> NO TENEMOS ESA PIZZA CON ID ${input.value}</h2> `
           
        }
    });

    botonEliminarFiltro.addEventListener("click" , () => {
        window.location.reload()})
}

function buscarPizza(valor) {
    const unapizza = pizzalist.find( pizza => pizza.id == valor)
    console.log(unapizza);
    if (unapizza) {
        return unapizza
    } else {
        return "error"
    }
    
}


