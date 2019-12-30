console.log("sss")
window.onload=function(){
    document.getElementById("v1").addEventListener("mouseover",hoverVideo);
    document.getElementById("v1").addEventListener("mouseout",hideVideo);
    
    function hoverVideo(e) {  
        console.log("lll");
        //  $('video', this).get(0).play(); 
        document.getElementById('movie').play();
        document.getElementById("v1").style.backgroundImage="url('')"
    }
    
    function hideVideo(e) {
        // $('video', this).get(0).pause(); 
        document.getElementById('movie').pause();
    }


    document.getElementById("v2").addEventListener("mouseover",hoverVideo1);
    document.getElementById("v2").addEventListener("mouseout",hideVideo1);
    
    function hoverVideo1(e) {  
        console.log("lll");
        //  $('video', this).get(0).play(); 
        document.getElementById('movie1').play();
        document.getElementById("v2").style.backgroundImage="url('')"
    }
    
    function hideVideo1(e) {
        // $('video', this).get(0).pause(); 
        document.getElementById('movie1').pause();
    }


    document.getElementById("v3").addEventListener("mouseover",hoverVideo3);
    document.getElementById("v3").addEventListener("mouseout",hideVideo3);
    
    function hoverVideo3(e) {  
        console.log("lll");
        //  $('video', this).get(0).play(); 
        document.getElementById('movie3').play();
        document.getElementById("v3").style.backgroundImage="url('')"
    }
    
    function hideVideo3(e) {
        // $('video', this).get(0).pause(); 
        document.getElementById('movie3').pause();
    }


    document.getElementById("v4").addEventListener("mouseover",hoverVideo4);
    document.getElementById("v4").addEventListener("mouseout",hideVideo4);
    
    function hoverVideo4(e) {  
        console.log("lll");
        //  $('video', this).get(0).play(); 
        document.getElementById('movie4').play();
        document.getElementById("v4").style.backgroundImage="url('')"
    }
    
    function hideVideo4(e) {
        // $('video', this).get(0).pause(); 
        document.getElementById('movie4').pause();
    }
    

    document.getElementById("v5").addEventListener("mouseover",hoverVideo5);
    document.getElementById("v5").addEventListener("mouseout",hideVideo5);
    
    function hoverVideo5(e) {  
        console.log("lll");
        //  $('video', this).get(0).play(); 
        document.getElementById('movie5').play();
        document.getElementById("v5").style.backgroundImage="url('')"
    }
    
    function hideVideo5(e) {
        // $('video', this).get(0).pause(); 
        document.getElementById('movie5').pause();
    }

    document.getElementById("v6").addEventListener("mouseover",hoverVideo6);
    document.getElementById("v6").addEventListener("mouseout",hideVideo6);
    
    function hoverVideo6(e) {  
        console.log("lll");
        //  $('video', this).get(0).play(); 
        document.getElementById('movie6').play();
        document.getElementById("v6").style.backgroundImage="url('')"
    }
    
    function hideVideo6(e) {
        // $('video', this).get(0).pause(); 
        document.getElementById('movie6').pause();
    }


    document.getElementById("v7").addEventListener("mouseover",hoverVideo7);
    document.getElementById("v7").addEventListener("mouseout",hideVideo7);
    
    function hoverVideo7(e) {  
        console.log("lll");
        //  $('video', this).get(0).play(); 
        document.getElementById('movie7').play();
        document.getElementById("v7").style.backgroundImage="url('')"
    }
    
    function hideVideo7(e) {
        // $('video', this).get(0).pause(); 
        document.getElementById('movie7').pause();
    }


    document.getElementById("v8").addEventListener("mouseover",hoverVideo8);
    document.getElementById("v8").addEventListener("mouseout",hideVideo8);
    
    function hoverVideo8(e) {  
        console.log("lll");
        //  $('video', this).get(0).play(); 
        document.getElementById('movie8').play();
        document.getElementById("v8").style.backgroundImage="url('')"
    }
    
    function hideVideo8(e) {
        // $('video', this).get(0).pause(); 
        document.getElementById('movie8').pause();
    }

    document.getElementById("v9").addEventListener("mouseover",hoverVideo9);
    document.getElementById("v9").addEventListener("mouseout",hideVideo9);
    
    function hoverVideo9(e) {  
        console.log("lll");
        //  $('video', this).get(0).play(); 
        document.getElementById('movie9').play();
        document.getElementById("v9").style.backgroundImage="url('')"
    }
    
    function hideVideo9(e) {
        // $('video', this).get(0).pause(); 
        document.getElementById('movie9').pause();
    }






}//end


function loadVideo(){
    document.getElementById('id03').style.display='block'
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    lightBoxVideo.play();
}

function closeVideo(){
    document.getElementById('id03').style.display='none';
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    lightBoxVideo.pause();
}

window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  }