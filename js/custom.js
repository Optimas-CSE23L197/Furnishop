// navabar

$(function () {
  // Toggler Menu + Icon Change
  $(".toggler").on("click", function () {
    let menu = $(".nav_right");
    let icon = $(".toggler i");

    menu.toggleClass("d-menu");

    if (menu.hasClass("d-menu")) {
      icon.removeClass("fa-bars").addClass("fa-xmark");
    } else {
      icon.removeClass("fa-xmark").addClass("fa-bars");
    }
  });

  // Active navigation highlighting + hide menu after click

  let navlinks = $(".nav_right ul li a");
  let menuPart = $(".nav_right");
  let toggleIcon = $(".toggler i");

  navlinks.on("click", function () {
    navlinks.removeClass("activee");
    $(this).addClass("activee");

    menuPart.removeClass("d-menu");

    toggleIcon.removeClass("fa-xmark").addClass("fa-bars");
  });

  // sticky navbar
  $(window).on("scroll", function () {
    let navbar = $(".nav_bar");
    if ($(this).scrollTop() > 70) {
      navbar
        .addClass("sticky")
        .css("box-shadow", "0px 4px 8px rgba(0,0,0.0.2)");
    } else {
      navbar.removeClass("sticky").css("box-shadow", "none");
    }
  });

  // Add to cart functionlity

  $(".add-btn").on("click", function () {
    let productName = $(this).closest(".card").find("h4").text();
    let msgbox = $(this).siblings(".msg");

    msgbox.text(productName + " adeed to cart!").fadeIn();

    setTimeout(function () {
      msgbox.fadeOut();
    }, 2000);
  });

  $("#submitBtn").on("click", function (e) {
    e.preventDefault();

    let email = $("#email").val().trim();
    let msgBox = $("#emailMsg");

    // email regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      msgBox.text("Please enter your email").css("color", "red").fadeIn();
    } else if (!emailPattern.test(email)) {
      msgBox.text("Invalid email format").css("color", "red").fadeIn();
    } else {
      alert("Message submitted successfully");
      $("#email").val(""); // reset the input after success
    }

    setTimeout(function () {
      msgBox.fadeOut();
    }, 3000);
  });

  //smmoth scroll
  let scrollBtn = $("#scrollBtn");

  $(window).on("scroll", function () {
    //page scroll
    let scrollTop = $(this).scrollTop();

    //display area height and width
    let windowHeight = $(this).height();

    // total document height

    let docHeight = $(document).height();

    if (scrollTop + windowHeight >= docHeight - 10)
      scrollBtn.fadeIn(); // show button smoothly
    else scrollBtn.fadeOut();
  });

  scrollBtn.on("click", function (e) {
    e.preventDefault();

    $("html,body").animate({ scrollTop: 0 }, "slow");
  });
});

// first-slider
$(document).ready(function () {
  $("#owlone").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000, // autoplay delay
    autoplaySpeed: 1000, // smooth autoplay transition
    smartSpeed: 1000, // smooth manual nav transition
    nav: true,
    dots: false,
    navText: [
      "Check All <i class='fa-solid fa-arrow-left'></i>",
      "Check All <i class='fa-solid fa-arrow-right'></i>",
    ],
    autoplayHoverPause: true, // pause on hover for better UX
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      500: {
        items: 2,
        margin: 20,
      },
      991: {
        items: 3,
        margin: 20,
      },
      1200: {
        items: 4,
        margin: 80,
      },
    },
  });
});

//second-slider
$(document).ready(function () {
  $("#owltwo").owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000, // 4s per slide
    autoplaySpeed: 1000, // smooth autoplay transition (1s)
    smartSpeed: 1000, // smooth nav transition (1s)
    nav: true,
    dots: false,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    autoplayHoverPause: true, // pause on hover
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
    },
  });
});

//third slider
$(document).ready(function () {
  $("#owlthree").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000, // slide delay (4s)
    autoplaySpeed: 1000, // autoplay transition duration
    smartSpeed: 1000, // manual nav transition duration
    nav: true,
    dots: false,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    autoplayHoverPause: true, // pause when user hovers
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      500: {
        items: 2,
        margin: 15,
      },
      991: {
        items: 3,
        margin: 15,
      },
      1200: {
        items: 3,
        margin: 15,
      },
      1399: {
        items: 4,
        margin: 15,
      },
    },
  });
});
