const btns = document.querySelector(".p-btns");
const btn = document.querySelectorAll(".p-btn");
const img = document.querySelectorAll(".image-overlay");

btns.addEventListener("click", (e)=>{
    const p_btn_click= e.target;
    console.log(p_btn_click);

     btn.forEach((current)=>current.classList.remove("p-btns-active"));

     p_btn_click.classList.add("p-btns-active");
      
     const btn_num = p_btn_click.dataset.btnNum;
     console.log(btn_num) 

     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

     img.forEach((current) => current.classList.add("p-img-not-active"));
     img_active.forEach((current) =>current.classList.remove("p-img-not-active"));
})

// creating a responsive navba

const mobile_nav = document.querySelector(".mobile-navbar-btn");

const headerEl = document.querySelector(".header")

mobile_nav.addEventListener("click", ()=>{
    headerEl.classList.toggle('active')
})


// scroll to top
const footerEl = document.querySelector(".section-footer");
const herosectionEl = document.querySelector(".header");

const scrollEl = document.createElement("div");
scrollEl.classList.add("scrollTop-style");
scrollEl.innerHTML = ` <ion-icon name="arrow-up-outline" class = "scroll-top"></ion-icon>`
footerEl.after(scrollEl);
const scrolltop = (()=>{
    herosectionEl.scrollIntoView({behavior:"smooth"})

})
scrollEl.addEventListener("click", scrolltop);

   
// animat Number

const counterNUm = document.querySelectorAll(".counter-number");
 const speed = 200;

counterNUm.forEach((currentEl)=>{
    const updateNUM =()=>{
        const target = parseInt(currentEl.dataset.numbers);
        const initialval = parseInt(currentEl.innerText)
     
        const incrementnum = Math.trunc(target/speed)
    //    console.log(incrementnum)
        
       if(initialval<target){
           currentEl.innerText=`${initialval+incrementnum}+`;
           setTimeout(updateNUM,10)
       }

    }
    updateNUM();
})







