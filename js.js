cantidad= document.querySelector('.cantidad')

for (var i = 1; i <121;i++) {
    boton=document.createElement("button");
    boton.style.padding= "5px";
    boton.name=i
    numero= document.createTextNode(i)
    boton.appendChild(numero)
    cantidad.appendChild(boton)
    boton.onclick=botones(i)
}

function botones(i){
    console.log(i)
    window.open(i)
}

