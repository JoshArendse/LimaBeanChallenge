window.addEventListener("scroll", function(){
    var y= this.window.pageYOffset;
    this.document.getElementById("banner").style.backgroundPositionY= (y*-0.5)+"px";
})