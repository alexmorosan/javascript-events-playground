console.log("now it's hooked up")

document.addEventListener('DOMContentLoaded', function(){

    let changeColorButton = document.querySelector('#changeColor')
  
    let colorDiv = document.querySelector('#colorDiv')
  
    changeColorButton.addEventListener('click', function(){
  
        colorDiv.style.background = 'green'
  
    })

    colorDiv.addEventListener('mouseover', function(){ colorDiv.style.background = 'red'})
    colorDiv.addEventListener('mouseout', function(){ colorDiv.style.background = 'white'})
  
  })