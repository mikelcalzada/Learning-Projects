const contenedor = document.querySelector(".flex-container");
let contador = 0

function crearLlave(nombre,modelo,precio,imagen){
    contador++;
    img = `<img class='llave-img' src='/Img-llaves/llave-${imagen}.png'>`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>${precio}</b></p>`;
    return [nombre,modelo,precio,img];
}

const changeHidden = (number)=>{
    document.querySelector(".key-data").value = number
}
const changePrice = (price)=>{
    document.querySelector(".submit-btn").value = `COMPRAR ${price}$`
}

let documentFragment = document.createDocumentFragment();

function imagenAleatoria(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

for (var i = 1; i <= 20; i++) {
    let precioRandom = Math.round(Math.random()*15+30);
    let modeloRandom = Math.round(Math.random()*10000);
    let imagenrandom = imagenAleatoria(1,5);
    let llave = crearLlave(`Llave ${i}`,`Modelo #${modeloRandom}`,precioRandom + "$", imagenrandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(modeloRandom)});
    div.addEventListener("click",()=>{changePrice(precioRandom)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);