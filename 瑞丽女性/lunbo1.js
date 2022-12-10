var m_box = document.getElementById("m_box");

var m_screen = m_box.children[0];
var m_ul = m_screen.children[0];
var m_ol = m_screen.children[1];
var m_lisUl = m_ul.children;

var m_imgWid = m_screen.offsetWidth;

var m_arr = m_box.children[1];
var m_arrLeft = m_arr.children[0];
var m_arrRight = m_arr.children[1];


for (var i=0;i<m_lisUl.length;i++){
    var m_li=document.createElement("m_li");

    m_ol.appendChild(m_li);

    /*m_li.innerHTML=i+1;*/
}
var m_lisOl = m_ol.children;
m_lisOl[0].className = "current";

for(var i=0; i<m_lisOl.length;i++){
    m_lisOl[i].index=i;
    m_lisOl[i].onclick = function(){
        if(m_pic == m_lisUl.length -1){
            m_ul.style.left = 0+"px";
        }

        for(var j=0;j<m_lisOl.length;j++){
            m_lisOl[j].className="";
        }
        this.className="current";
        animate(m_ul,-this.index * m_imgWid);
        m_pic = this.index
    };
}

var m_firstPic = m_lisUl[0].cloneNode(true);
m_ul.appendChild(m_firstPic);
var m_pic = 0;

m_arrRight.onclick = function () {
    if(m_pic == m_lisUl.length - 1){
        m_ul.style.left = 0 +"px";
        m_pic = 0;
    }
    m_pic++;
    animate(m_ul,-m_pic * m_imgWid);
    for(var i = 0;i<m_lisOl.length;i++){
        m_lisOl[i].className="";
    }
    
    if(m_pic == m_lisUl.length-1){
        m_lisOl[0].className = "current";
    }else{
        m_lisOl[m_pic].className = "current";
    }
    
}

m_arrLeft.onclick = function (){
    if(m_pic == 0){
        m_ul.style.left = -(m_ul.offsetWidth - m_imgWid) + "px";
        m_pic = m_lisUl.length -1;
    }
    m_pic--;
    animate(m_ul,-m_pic * m_imgWid);
    for(var i = 0; i<m_lisOl.length;i++){
        m_lisOl[i].className = "";
    }
    m_lisOl[m_pic].className = "current";
}

var m_timer = null;
m_timer = setInterval(function (){
    m_arrRight.click();
},3000)
m_box.onmouseover = function(){
    m_arr.style.display = "block";
    clearInterval(m_timer);
}
m_box.onmouseout = function(){
    m_arr.style.display = "none";
    m_timer = setInterval(function (){
        m_arrRight.click();
    },3000)
}

function animate(m_tag,m_target){
    clearInterval(tag.m_timer);
    m_tag.m_timer = setInterval(function () {
        var m_leader = tag.offsetLeft;
        var m_step = 9;
        m_step = m_leader > m_target ? -m_step : m_step;
        if(Math.abs(m_leader - m_target) > Math.abs(m_step)){
            m_leader = m_leader + m_step;
            m_tag.style.left = m_leader + "px";
        }else{
            m_tag.style.left = m_target + "px";
            clearInterval(m_tag.m_timer);
        }
    },17)
}