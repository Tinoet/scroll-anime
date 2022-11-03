const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes(){
   const triggerBottom = window.innerHeight / 5 * 4

   boxes.forEach(box => {

    const boxTop = box.getBoundingClientRect().top

    if(boxTop < triggerBottom){
        box.classList.add('show')
        }
    else{
        box.classList.remove('show')

    }
   }
   
   )
   
}

const themeBtn = document.querySelector('.theme-btn')

themeBtn.addEventListener('click', function(){
    let element = document.body;
    element.classList.toggle('light-mode')
})
element()