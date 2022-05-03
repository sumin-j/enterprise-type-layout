const dl = document.querySelector("dl");
const dts = dl.querySelectorAll("dt");
const dds = dl.querySelectorAll("dd");

dl.addEventListener("click",(e)=>{

    if(e.target == dl) return;
    let targetdt = e.target.closest("dt");

    activation(dds);
    activation(dts);

    targetdt.classList.add("on");
    targetdt.nextElementSibling.classList.add("on");

})

function activation(item){
    for(let el of item) {
        el.classList.remove("on");
    }
}