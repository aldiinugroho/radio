// drop down
function dropklik(){
    document.getElementById("droponklik").classList.toggle("lihat");
}

window.onclick = function(e){
    if(!e.target.matches('.navdown')){
        var droponklik = document.getElementById("droponklik");
        if(droponklik.classList.contains('lihat')){
            droponklik.classList.remove('lihat');
        }
    }
}