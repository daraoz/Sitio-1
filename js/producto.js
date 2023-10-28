const divProducto = document.getElementById("divProducto")
let idProducto=location.search.split("=")[1];
console.log(idProducto);

fetch(`https://fakestoreapi.com/products/${idProducto}`) //mecanismo que le permite realizar llamadas simples AJAX (JavaScript asíncrono y XML)
            .then(res=>res.json())
            .then(
                (producto)=>  
                    (divProducto.innerHTML= `
                        <div class="card my-3" style="width: 18rem;">
                        <img src="${producto.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.title}  </h5>
                                <p class="card-text"> ${producto.description}  </p>
                                
                            </div>
                        </div>`)
                );
                
                
                