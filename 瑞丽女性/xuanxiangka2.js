window.onload = function(){
    var tabItem = document.getElementsByClassName("divm2_3_img")
    var item = tabItem[0].getElementsByTagName("img");

    var tabContent = document.getElementsByClassName("divm2_3_content");
    var content = tabContent[0].getElementsByTagName("div");

    for(let i = 0;i<item.length;i++){

        item[i].index=i;
        item[i].onclick = function(){
            for(let j=0; j<item.length;j++){
                item[j].className = '';
                content[j].style.display = "none";
            }
            this.className="divm2_3_img1";
            content[item[i].index].style.display = "block";
        }
    }
}