
var box = document.getElementById("divm2_box");

var screen = box.children[0];
var ul = screen.children[0];
var ol = screen.children[1];
var lisUl = ul.children;

var imgWid = screen.offsetWidth;

var arr = box.children[1];
var arrLeft = arr.children[0];
var arrRight = arr.children[1];


for (var i=0;i<lisUl.length;i++){
    var li=document.createElement("li");

    ol.appendChild(li);

    li.innerHTML=i+1;
}
var lisOl = ol.children;
lisOl[0].className = "current";

for(var i=0; i<lisOl.length;i++){
    lisOl[i].index=i;
    lisOl[i].onclick = function(){
        if(pic == lisUl.length -1){
            ul.style.left = 0+"px";
        }

        for(var j=0;j<lisOl.length;j++){
            lisOl[j].className="";
        }
        this.className="current";
        animate(ul,-this.index * imgWid);
        pic = this.index
    };
}

var firstPic = lisUl[0].cloneNode(true);
ul.appendChild(firstPic);
var pic = 0;

arrRight.onclick = function () {
    if(pic == lisUl.length - 1){
        ul.style.left = 0 +"px";
        pic = 0;
    }
    pic++;
    animate(ul,-pic * imgWid);
    for(var i = 0;i<lisOl.length;i++){
        lisOl[i].className="";
    }
    
    if(pic == lisUl.length-1){
        lisOl[0].className = "current";
    }else{
        lisOl[pic].className = "current";
    }
    
}

arrLeft.onclick = function (){
    if(pic == 0){
        ul.style.left = -(ul.offsetWidth - imgWid) + "px";
        pic = lisUl.length -1;
    }
    pic--;
    animate(ul,-pic * imgWid);
    for(var i = 0; i<lisOl.length;i++){
        lisOl[i].className = "";
    }
    lisOl[pic].className = "current";
}

var timer = null;
timer = setInterval(function (){
    arrRight.click();
},3000)
box.onmouseover = function(){
    arr.style.display = "block";
    clearInterval(timer);
}
box.onmouseout = function(){
    arr.style.display = "none";
    timer = setInterval(function (){
        arrRight.click();
    },3000)
}

function animate(tag,target){
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var leader = tag.offsetLeft;
        var step = 9;
        step = leader > target ? -step : step;
        if(Math.abs(leader - target) > Math.abs(step)){
            leader = leader + step;
            tag.style.left = leader + "px";
        }else{
            tag.style.left = target + "px";
            clearInterval(tag.timer);
        }
    },17)
}