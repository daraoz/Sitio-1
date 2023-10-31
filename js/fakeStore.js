// Verbos http  GET(obtener), POST (Crear), PUT (Modificar), PATCH(Modificar) Y DELETE

const divCards =document.getElementById("divCards")

const resFetch = fetch("https://fakestoreapi.com/products") // el metodo por defecto de fetch es GET

  .then((res) => res.json()) // doy un formato json

  .then((response) => 

  divCards.innerHTML= response.map((producto) =>   `
    <div class="card my-3" style="width: 18rem;">
        <img src="${producto.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.title}  </h5>
                <p class="card-text"> ${producto.description}  </p>
                <a href="../html/producto.html?id=${producto.id}" class="btn btn-primary">Ver mas...</a>
            </div>
    </div>`
    )
    .join("") // lo uso para quitar las comas que aparecen (lo opuesto a lo split)
  )
  
  .catch((err) => console.log(err));

console.log(resFetch);