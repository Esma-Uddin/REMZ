function replaceDotsWithStars(input) {
    input.value = "*".repeat(input.value.length);
}


function toggleMenu() {
    const menuContent = document.getElementById("menuContent");
    menuContent.classList.toggle("show");
  }
  


let currentIndex = 0;

            function updateCarousel() {
                const carousel = document.querySelector(".carousel-wrapper");
                const totalSlides = document.querySelectorAll(".plan").length;
                const visibleSlides = 2; 
            
               
                if (currentIndex < 0) {
                    currentIndex = totalSlides - visibleSlides;
                } else if (currentIndex > totalSlides - visibleSlides) {
                    currentIndex = 0;
                }
            
                
                const translateX = -(currentIndex * (100/ visibleSlides)) + "%";
                carousel.style.transform = `translateX(${translateX})`;
            }
            
            function nextSlide() {
                currentIndex++;
                updateCarousel();
            }
            
            function prevSlide() {
                currentIndex--;
                updateCarousel();
            }


            document.addEventListener("DOMContentLoaded", function () {
                const doctorCard = document.getElementById("doctor-card"); 
                const doctors = document.querySelectorAll("#doctor-card li");
                const dots = document.querySelectorAll(".dot");
                let doctorsPerPage = 3; 
                let intervalTime = 3000; 
                let currentIndex = 0;
                let interval;
            
                function showSlide(index) {
                    
                    for (let i = 0; i < doctors.length; i++) {
                        doctors[i].style.display = "none"; 
                    }
            
                    for (let i = 0; i < doctorsPerPage; i++) {
                        let showIndex = (index + i) % doctors.length; 
                        doctors[showIndex].style.display = "block"; 
                    }
            
                   
                    dots.forEach(dot => dot.style.backgroundColor = "white");
            
                    
                    dots[index % dots.length].style.backgroundColor = "#04404B";
                }
            
                function nextSlide() {
                    currentIndex = (currentIndex + doctorsPerPage) % doctors.length;
                    showSlide(currentIndex);
                }
            
                
                dots.forEach((dot, i) => {
                    dot.addEventListener("click", function () {
                        currentIndex = i * doctorsPerPage;
                        showSlide(currentIndex);
                        resetInterval();
                    });
                });
            
                
                function startInterval() {
                    interval = setInterval(nextSlide, intervalTime);
                }
            
                function resetInterval() {
                    clearInterval(interval);
                    startInterval();
                }
            
                
                showSlide(currentIndex);
                startInterval();
            });

            document.querySelectorAll('.cvv,.number').forEach(input => {
                input.addEventListener('input', function () {
                    this.value = this.value.replace(/\D/g, ''); 
                });
            });



            /*  RATE  */
            
    function rateDoctor(rating) {
        const stars = document.querySelectorAll(".star");
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add("active");
                star.innerHTML = "&#9733;"; // Dolu yıldız
            } else {
                star.classList.remove("active");
                star.innerHTML = "&#9734;"; // Boş yıldız
            }
        });
    }



    document.addEventListener("DOMContentLoaded", function () {
        const grid = document.getElementById("specialisation-grid");

        document.getElementById("left").addEventListener("click", function () {
            grid.scrollBy({ left: -250, behavior: "smooth" });
        });

        document.getElementById("right").addEventListener("click", function () {
            grid.scrollBy({ left: 250, behavior: "smooth" });
        });
    });