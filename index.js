// image slider
var index = 0;
penampung();

function penampung(){
    var i;
    var x = document.getElementsByClassName("imgslides");
    for(i = 0;i < x.length;i++){
        x[i].style.display = "none";
    }
    index++;
    if(index > x.length){
        index = 1
    }
    x[index-1].style.display = "block";
    setTimeout(penampung, 3000);
}