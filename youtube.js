/*
AIzaSyAsLXDLpmXVgedQP2psx-xNl8y57og-eqw

url : https://www.googleapis.com/youtube/v3/playlistItems


*/

const vidList = document.querySelector(".vidList");
const key = "AIzaSyAsLXDLpmXVgedQP2psx-xNl8y57og-eqw";
const playListId = "PLXjsRlnOZcXv6T34s42Z15X5OTBStNXNq";
const num = 6;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;

fetch(url)
.then(data => {
    return data.json();
})

.then(json => {
    let items = json.items;
    console.log(items);
    let result = '';

    items.map(item=>{
        let title = item.snippet.title;

        if(title.length > 20){
            title = title.substr(0.20) + "...";
        }

        let des = item.snippet.description;
        if(des.length > 30) {
            des = des.substr(0,30)+ "...";
        }

        let date = item.snippet.publishedAt;
        date = date.split("T")[0];

        result += `
                <article>
                <a href="${item.snippet.resourceId.videoId}" class="pic">
                <img src="${item.snippet.thumbnails.medium.url}">
                </a>
                <div class="des">
                    <h2>${title}</h2>
                    <p>${des}</p>
                    <span>${date}</span>
                </div>
                </article>`;
    })
    vidList.innerHTML = result;
})

vidList.addEventListener("click",(e)=>{
    e.preventDefault();

    if(!e.target.closest("a")) return;

    const vidId = e.target.closest("a").getAttribute("href");

    let pop = document.createElement("figure");
    pop.classList.add("pop");
    pop.innerHTML = `<iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%"></iframe>
                    <span class="btnClose"><i class="fas fa-window-close"></i></span>
                    `;

                    vidList.append(pop);
});

vidList.addEventListener("click",(e)=>{
    const pop =vidList.querySelector(".pop");
    if(pop) {
        const close = pop.querySelector("i");
        if(e.target == close) pop.remove();
    }

})