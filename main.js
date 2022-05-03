const phone = document.querySelector("#phone");
const ul = phone.querySelector("ul");
const pics = ul.querySelectorAll("li");
const prev = phone.querySelector(".prev");
const next = phone.querySelector(".next");

const speed = 300;

let len = pics.length;
let enableClick = true;

init();

prev.addEventListener("click",function(e){
    e.preventDefault();
    if(enableClick){
        prevSlide();
        enableClick=false;
    }
})

next.addEventListener("click",function(e){
    e.preventDefault();
    if(enableClick){
        nextSlide();
        enableClick=false;
    }
})

// 초기화 함수
function init(){
    ul.style.left = "-100%";
    ul.prepend(ul.lastElementChild);

    ul.style.width = `${100 * len}%`;
    pics.forEach(li=>{
        li.style.width = `${100 / len}%`;
    })
}

function prevSlide(){
    new Anim(ul,{
        prop:"left",
        value:"0%",
        duration:speed,
        callback:()=>{
            ul.style.left="-100%";
            ul.prepend(ul.lastElementChild);
            enableClick=true;
        }
    })
}

function nextSlide(){
    new Anim(ul,{
        prop:"left",
        value:"-200%",
        duration:speed,
        callback:()=>{
            ul.style.left="-100%";
            ul.append(ul.firstElementChild);
            enableClick=true;
        }
    })
}