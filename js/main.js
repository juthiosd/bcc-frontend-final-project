//header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}
//nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(e){
    e.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})
$(document).ready(function() {
    "use strict";

 //home page
 $(document).ready(function() {
    "use strict";

    // 1) Page load fade-in
    $("body").css("opacity", 0).animate({opacity: 1}, 400);
    
    // 2) Sticky navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $(".navbar").addClass("header-scrolled");
        } else {
            $(".navbar").removeClass("header-scrolled");
        }
    });
    

    // 4) Back-to-top button
    if ($("#backTop").length === 0) {
        $("body").append('<button id="backTop" title="Back to top">↑</button>');
        $("#backTop").css({
            position: "fixed",
            right: "20px",
            bottom: "20px",
            display: "none",
            "z-index": 9999,
            padding: "8px 12px",
            "border-radius": "6px",
            border: "none",
            "background-color": "#5cb917",
            color: "#fff",
            cursor: "pointer",
            "font-size": "18px"
        });
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("#backTop").fadeIn(200);
        } else {
            $("#backTop").fadeOut(200);
        }
    });

    $(document).on("click", "#backTop", function() {
        $("html, body").animate({scrollTop: 0}, 500);
    });

    // 5) About section scroll animation
    $(".landing_about_section .about-content").css({
        opacity: 0,
        transform: "translateY(30px)"
    });

    function animateAbout() {
        $(".landing_about_section .about-content").each(function() {
            let $el = $(this);
            let elTop = $el.offset().top;
            let winBottom = $(window).scrollTop() + $(window).height();

            if (winBottom > elTop + 50 && !$el.data("animated")) {
                $el.data("animated", true);
                $el.animate({opacity: 1, translateY: 0}, {
                    duration: 600,
                    step: function(now, fx) {
                        $el.css("transform", "translateY(" + (30 - now * 30) + "px)");
                    }
                });
            }
        });
    }

    animateAbout();
    $(window).on("scroll resize", animateAbout);

});
   
//about page
    // 1) Page load fade-in
    $("body").css("opacity", 0).animate({opacity: 1}, 400);

    // 2) Sticky header on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $(".navbar").addClass("header-scrolled");
        } else {
            $(".navbar").removeClass("header-scrolled");
        }
    });

    // show/hide on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("#backTop").fadeIn(200);
        } else {
            $("#backTop").fadeOut(200);
        }
    });

    // click to scroll top
    $(document).on("click", "#backTop", function() {
        $("html, body").animate({scrollTop: 0}, 500);
    });

});
