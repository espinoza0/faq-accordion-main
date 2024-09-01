const accBtn = document.querySelectorAll('img[alt="btn"]')
const accordion = document.querySelectorAll('div.cont')


document.addEventListener("DOMContentLoaded", (e) => {
    main()
});
  

accBtn.forEach(btn => {
    let parent = btn.parentNode.parentNode
    console.log(parent)

    btn.addEventListener('click', function(){
        let accordionContent = parent.querySelector('div.cont')
        
        if (accordionContent.style.display === "none") {
            btn.setAttribute("src", "assets/images/icon-minus.svg")
            accordionContent.style.display = "inline"    
        }else{
            btn.setAttribute("src", "assets/images/icon-plus.svg")
            accordionContent.style.display = "none"
        }
    });
});

function main(){
    accordion.forEach(acc =>{
        acc.style.display = "none"
    });
}