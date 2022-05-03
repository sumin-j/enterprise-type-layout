const form = document.querySelector("#joinus");
const btnJoin = form.querySelector("button");
// console.log(btnJoin);

btnJoin.addEventListener("click",(e)=>{
    if(!isTxt("name",8)) e.preventDefault();
    if(!isSelect("location")) e.preventDefault();
    if(!isEmail("email")) e.preventDefault();

});

function isTxt(name, len){
    if(len === undefined) len=8;

    let input = form.querySelector(`[id=${name}]`);

    let txt = input.value;

    if(txt.length >= len) {
        const errMsgs = input.closest("td").querySelectorAll("p");
        if(errMsgs.length>0) input.closest("td").querySelector("p").remove();

        return true;
    }else {
        const errMsgs = input.closest("td").querySelectorAll("p");
        if(errMsgs.length>0) input.closest("td").querySelector("p").remove();
    
        const errMsg = document.createElement("p");
        errMsg.append(`Please enter at least ${len} characters`);

        input.closest("td").append(errMsg);

        return false;
    }

}

function isSelect(name) {
    let sel = form.querySelector(`[id=${name}]`);

    let sel_index = sel.options.selectedIndex;

    let val = sel[sel_index].value;

    if(val !== "") {
        const errMsgs = sel.closest("td").querySelectorAll("p");
        if(errMsgs.length >0) sel.closest("td").querySelector("p").remove();
        return true;
    }else{
        const errMsgs = sel.closest("td").querySelectorAll("p");
        if(errMsgs.length >0) sel.closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append("Please select an item");
        sel.closest("td").append(errMsg);

        return false;
    }
    }



function isEmail(name){

        let input = form.querySelector(`[id=${name}]`);
        let txt = input.value;
    
        //정규식.tset(문자열) 문자열안에 정규식이 있는지 없는지를 불린값으로 반환.
        if(/@/.test(txt)){
    
            const errMsgs = input.closest("td").querySelectorAll("p");
            if(errMsgs.length >0) input.closest("td").querySelector("p").remove();
            return true;
    
        }else{
    
            const errMsgs = input.closest("td").querySelectorAll("p");
            if(errMsgs.length >0) input.closest("td").querySelector("p").remove();
    
            const errMsg = document.createElement("p");
            errMsg.append("Please enter your full email including @");
            input.closest("td").append(errMsg);
            return false;
        }
    }


