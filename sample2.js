var slide_index = 1;  
        displaySlides(slide_index);  
        function nextSlide(n) {  
            displaySlides(slide_index += n);  
        }  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        }  
        function displaySlides(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide");  
            if (n > slides.length) { slide_index = 1 }  
            if (n < 1) { slide_index = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index - 1].style.display = "block";  
        }  


        // var slide_index1 = 1;  
        displaySlides1(slide_index);  
        function nextSlide1(n1) {  
            displaySlides1(slide_index += n1); 
            
        }  
        function currentSlide1(n1) {  
            displaySlides1(slide_index = n1);  
        }  
        function displaySlides1(n1) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide1");  
            if (n1 > slides.length) { slide_index = 1 }  
            if (n1 < 1) { slide_index = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index - 1].style.display = "block";  
        }  