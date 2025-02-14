
const formulario=document.querySelector(".fale-conosco")
const mascara=document.querySelector(".mascara-formulario")
const link=document.querySelector(".fale-conosco1")

function cliqueiNoBotao(){
formulario.style.left="50%"
formulario.style.transform="translateX(-50%)"
mascara.style.visibility="visible"
}

function esconderFormulario(){
formulario.style.left="-300px"
formulario.style.transform="translateX(0)"
mascara.style.visibility="hidden"
}

function cliqueiNoLink(){
    formulario.style.left="50%"
    formulario.style.transform="translateX(-50%)"
    mascara.style.visibility="visible"
}


