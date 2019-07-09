var tabs = document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);

for(var i = 0; i < tabs.length; i++){
    tabs[i].onclick = showlist;
}

function showlist(){
    for (vari = 0; i < tabs.length; i++) {
        if (tabs[i] == this) {
            tabs[i].className = "active";
        }
        else {
            tabs[i].className = "";
        }
    }
}