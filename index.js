console.log("now it's hooked up")

document.addEventListener('DOMContentLoaded', function(){

    let changeColorButton = document.querySelector('#changeColor')
  
    let colorDiv = document.querySelector('#colorDiv')
  
    changeColorButton.addEventListener('click', function(){
  
        colorDiv.style.background = 'green'
  
    })
  
  })