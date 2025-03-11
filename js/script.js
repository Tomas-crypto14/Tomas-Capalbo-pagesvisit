//const button = document.querySelector("#btnReestablecer");
const button = document.getElementById("btnReestablecer");
//localStorage.setItem("visitas", "0");
const counterContainer = document.querySelector("#contadorVisitas");
//const contadorvisitas = Number(contadorvisitas) + 1;
let contadorvisitas = localStorage.getItem("visitas");


if (contadorvisitas){
    contadorvisitas = Number(contadorvisitas) + 1;
    localStorage.setItem("visitas", contadorvisitas);
}else{
    contadorvisitas = 1;
    localStorage.setItem("visitas", 1);
}
counterContainer.innerHTML = contadorvisitas;


//const contadorvisitas = localStorage.getItem("visitas");
for (let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
} 

button.addEventListener("click", () => {
    contadorvisitas = 1;
    localStorage.setItem("visitas", 1);
    counterContainer.innerHTML = contadorvisitas;
})