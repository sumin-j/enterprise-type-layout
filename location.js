var container = document.getElementById('map');

const t_on = document.querySelectorAll(".traffic li")[0];
const t_off = document.querySelectorAll(".traffic li")[1];

const branch_btns = document.querySelectorAll(".branch li");

let drag = true;
let zoom = true;

var mapOption = { //지도 생성할때 반드시 필요한 옵션
    center : new kakao.maps.LatLng(37.3832163, 126.8040755),
    level : 3
};

var map = new kakao.maps.Map(container, mapOption); //지도 생성 및 객체 리턴

var markerOptions = [
    {
        title : "A company",
        latlng : new kakao.maps.LatLng(37.4013438,126.7223784),
        imgSrc : 'assets/marker1.png',
        imgSize : new kakao.maps.Size(512,512),
        imgPos : {offset : new kakao.maps.Point(256,512)},
        button : branch_btns[0]
    },
    {
        title : "B company",
        latlng : new kakao.maps.LatLng(37.4019115,126.7238323),
        imgSrc : 'assets/marker2.png',
        imgSize : new kakao.maps.Size(512,512),
        imgPos : {offset : new kakao.maps.Point(256,512)},
        button : branch_btns[1]
    },
    {
        title : "C company",
        latlng : new kakao.maps.LatLng(37.4015782,126.7228879),
        imgSrc : 'assets/marker2.png',
        imgSize : new kakao.maps.Size(512,512),
        imgPos : {offset : new kakao.maps.Point(256,512)},
        button : branch_btns[2]
    }
];

for(let i=0; i<markerOptions.length; i++) {
    new kakao.maps.Marker({
        map : map,
        position : markerOptions[i].latlng,
        title :  markerOptions[i].title,
        image : new kakao.maps.MarkerImage(markerOptions[i].imgSrc,markerOptions[i].imgSize,markerOptions[i].imgPos)
    });

    markerOptions[i].button.addEventListener("click",(e)=>{
        e.preventDefault();

        for(let k=0; k<markerOptions.length; k++){
            markerOptions[k].button.classList.remove("on");
        }
        markerOptions[i].button.classList.add("on");

        moveTo(markerOptions[i].latlng);
    })
}

window.onresize = ()=>{
    let active_btn = document.querySelector(".branch li.on");
    let active_index = active_btn.getAttribute("data-index");

    map.setCenter(markerOptions[active_index].latlng);
}

t_on.addEventListener("click",(e)=>{
    e.preventDefault();

    if(t_on.classList.contains("on")) return;

    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

    t_on.classList.add("on");
    t_off.classList.remove("on");
})

t_off.addEventListener("click",(e)=>{
    e.preventDefault();

    if(t_off.classList.contains("on"))return;

    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

    t_off.classList.add("on");
    t_on.classList.remove("on");
})

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

//지도 드래그 이동 
setDraggable(drag);
function setDraggable(draggable){
    map.setDraggable(draggable);
}

//지도 확대 축소
setZoomable(zoom);
function setZoomable(zoomable){
    map.setZoomable(zoomable);
}

//지도 이동 
function moveTo(target) {
    var moveLatLon = target;
    map.setCenter(moveLatLon);
}