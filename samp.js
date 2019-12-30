window.onload=function(){
document.getElementById("v1").addEventListener("mouseover",hoverVideo);
document.getElementById("v1").addEventListener("mouseout",hideVideo);

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}
}