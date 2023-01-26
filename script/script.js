$(document).ready(function(){
    
  let slideAtual = 1
  let listaSlides = ["banner-re","banner-fs", "banner-ac", "banner-sf"]
  
  setInterval(mudarSlide, 4500)
  function mudarSlide(){
      //remover o slide anterior
      if(slideAtual > 0){
          $("#carrossel").removeClass(listaSlides [slideAtual - 1])
      }else{
          $("#carrossel").removeClass(listaSlides[listaSlides.length - 1])
      }
      


      //exibir o slide atual
      $("#carrossel").addClass(listaSlides [slideAtual])


      //indicar o slide atual
      console.log("slide atual", slideAtual)
      slideAtual ++;

      if(slideAtual > listaSlides.length - 1){
          slideAtual = 0
      }


  }
}
)

  function mostrarDepartamentos($event){
    let pcgamers= document.getElementById("pc-gamers")
 let departamentos = document.getElementById("departamentos")
 let consoles = document.getElementById("consoles")
  if(getComputedStyle(departamentos).display == "none"){
    departamentos.style.display = "flex"
    } else{
    departamentos.style.display = "none"
  }
  if(getComputedStyle(departamentos).display=="none"){
    pcgamers.style.display = "none"
    consoles.style.display = "none"
  }

 

  
event.preventDefault()}

function mostrarPcgamer($event){
  
  let pcgamers = document.getElementById("pc-gamers")
  let consoles = document.getElementById("consoles")
   if(getComputedStyle(pcgamers).display == "none"){
     pcgamers.style.display = "flex"
     } else{
     pcgamers.style.display = "none"
   }
   if(getComputedStyle(consoles).display =="flex"){
   consoles.style.display ="none"
   pcgamers.style.display="flex"}
  
   

 event.preventDefault()

}

function mostrarConsoles($event){
  let pcgamers = document.getElementById("pc-gamers")
  let consoles = document.getElementById("consoles")
  if(getComputedStyle(consoles).display == "none"){
    consoles.style.display = "flex"
  } else{
    consoles.style.display = "none"
    pcgamers.style.display = "none"
  }
  if(getComputedStyle(pcgamers).display ="flex"){

  
  pcgamers.style.display="none"
  consoles.style.display="flex"
  }else{
    consoles.style.display = "none"
    pcgamers.style.display = "none"
  }
  event.preventDefault()
}
