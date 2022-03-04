window.onload = () =>{


    // loading page --------------------------------------------------------------------------------
    const loading = document.querySelector('.loading');

    loading.style.display='none';
   




    // ----------------------------------- navigation functon ----------------------------------------
    const tabSwitchers = document.querySelectorAll('[data-switcher]');
    
    for (let i = 0; i < tabSwitchers.length; i++) {
        const tabSwitcher = tabSwitchers[i];
        const pageId = tabSwitcher.dataset.tab;
        
        tabSwitcher.addEventListener('click', ()=>{
            document.querySelector('.tab.is-active').classList.remove('is-active');
            tabSwitcher.parentNode.classList.add('is-active');

            switchPage(pageId)
        })
    }
}

function switchPage(pageId) {
    const currentPage = document.querySelector('.page.is-active');
    currentPage.classList.remove('is-active');

    const nextPage = document.querySelector(`.page[data-page="${pageId}"]`);
    nextPage.classList.add('is-active')
}
    // ----------------------------------- navigation functon ----------------------------------------


 // ---------------------------------- burger button ------------------------------------------

    
    const burgerButton = document.querySelector('.burger-button');
    const burgerLine1 = document.querySelector('.line1');
    const burgerLine2 = document.querySelector('.line2');
    const burgerLine3 = document.querySelector('.line3');
    const openSectionLeft = document.querySelector('.section-left');
    


 let i=0;
 
 function burger(){

    // open
     if(i!=1){
         burgerLine1.style.transform = 'rotate(-45deg)';
         burgerLine1.style.marginBottom = '-6px';
         burgerLine2.style.visibility ='hidden';
         burgerLine2.style.opacity ='0';
         burgerLine2.style.transform ='translateX(-100%)';
         burgerLine3.style.transform = 'rotate(45deg)';
         burgerLine3.style.marginTop ='-8px';
         burgerButton.style.top = '48px';
         openSectionLeft.style.display = 'flex';
         openSectionLeft.style.animation ='show 1s';
         openSectionLeft.style.right = '0%';
         return i=1;

     }      //close

     else{
         burgerLine1.style.transform = 'rotate(0deg)';
         burgerLine1.style.marginBottom = '4px';
         burgerLine2.style.visibility ='visible';
         burgerLine2.style.opacity ='1';
         burgerLine2.style.transform ='translateX(0%)';
         burgerLine3.style.transform = 'rotate(0deg)';
         burgerLine3.style.marginTop ='0px';
         burgerButton.style.top = '41px';
         openSectionLeft.style.display = 'flex';
         openSectionLeft.style.animation ='hide 1s';
         openSectionLeft.style.right = '-100%';

        
         return i=0;

     }
     
     
     
 }
 

 // ---------------------------------- burger button ------------------------------------------

    
// ----------------------close tab when click at navigation buttons ---------------

const closeTabWhenClick = ()=>{
    burgerLine1.style.transform = 'rotate(0deg)';
    burgerLine1.style.marginBottom = '4px';
    burgerLine2.style.visibility ='visible';
    burgerLine2.style.opacity ='1';
    burgerLine2.style.transform ='translateX(0%)';
    burgerLine3.style.transform = 'rotate(0deg)';
    burgerLine3.style.marginTop ='0px';
    burgerButton.style.top = '41px';
    openSectionLeft.style.display = 'flex';
    openSectionLeft.style.animation ='hide 1s';
    openSectionLeft.style.right = '-100%';
    return i=0;
}



// -----------button to send form -------------------
const submitForm = document.querySelector("#send-form");

submitForm.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById("submit-button").click();
    }
});