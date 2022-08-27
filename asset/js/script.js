let ratingSelect = document.querySelector('.rating__select-container');
let rateNumber   = document.querySelector('.submit__result--selection')
let btnSubmit    = document.querySelector('.rating__submit-container__btn')
let ratingCard   = document.querySelector('.rating');
let submitCard   = document.querySelector('.submit') 


ratingSelect.addEventListener('click',e=>{
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerHTML);
    let btnNumber = e.target.innerHTML;
    rateNumber.innerHTML= btnNumber;
    console.log(btnNumber)
    if( btnNumber>0 || btn <6){
        btnSubmit.addEventListener('click',()=>{
            ratingCard.style.display = ('none');
            submitCard.style.display = ('flex')
        })
    } 
});


