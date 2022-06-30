$(document).ready(function () {


  $("ul.hover li a ").hover(function () {
    $(this).css("color", "#7AFDD6");
  }, function () {
    $(this).css("color", "#0A192F");
  });



  $("div.hablemos a").mouseover(function () {
    $('.arrow').css({ transform: 'rotate(90deg)', transition: "0.5s" }, 500);
  });

  $("div.hablemos a").mouseout(function () {
    $('.arrow').css({ transform: "rotate(0deg)" }, 500);
  });

  $(".logos picture img#github").on({
    mouseenter: function () {
      $(this).attr("src", $(this).attr("src").replace("../assets/githubgris.png", "../assets/githubcian.png"))
    },
    mouseleave: function () {
      $(this).attr("src", $(this).attr("src").replace("../assets/githubcian.png", "../assets/githubgris.png"))
    }
  });

  $(".logos picture img#linkedin").on({
    mouseenter: function () {
      $(this).attr("src", $(this).attr("src").replace("../assets/linkedingris.png", "../assets/linkedincian.png"))
    },
    mouseleave: function () {
      $(this).attr("src", $(this).attr("src").replace("../assets/linkedincian.png", "../assets/linkedingris.png"))
    }
  });



  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("a.volverarriba").css({ "display": "block" });

    } else if ($(window).scrollTop() == 0) {
      $("a.volverarriba").css({ "display": "none" });

    }
  })




  $(".competencia").mouseover(function () {
    $(this).css({ transform: "scale(1.05)", transition: "0.3s" });
  });
  $(".competencia").mouseout(function () {
    $(this).css({ transform: "scale(1)", transition: "0.3s" });
  });



  $("div.tipo").click(function () {

    if ($(this).children("div.descripcion").is(":hidden")) {
      $(this).children("div.descripcion").stop(true);
      $(this).children("div.descripcion").slideToggle();
    } else {
      $(this).children("div.descripcion").stop(true);
      $(this).children("div.descripcion").slideToggle();
    }

    if (!$(this).children("div.titulo").children(".arrow").is(":hidden")) {
      $(this).children("div.titulo").children(".arrow").css({ display: "none" });
      $(this).children("div.titulo").children(".arrowup").css({ display: "block" });

    } else {
      $(this).children("div.titulo").children(".arrowup").css({ display: "none" });
      $(this).children("div.titulo").children(".arrow").css({ display: "block" });

    }

    $(this).parent("div.formacion").siblings().children("div.tipo").children("div.descripcion").slideUp();

    $(this).parent("div.formacion").siblings().children("div.tipo").children("div.titulo").children(".arrow").css({ display: "block" });
    $(this).parent("div.formacion").siblings().children("div.tipo").children("div.titulo").children(".arrowup").css({ display: "none" });

  });


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu-opciones a[href="#${id}"]`)
      if (entry.isIntersecting) {
        menuLink.classList.add("selected");
      } else {

        menuLink.classList.remove("selected");
      }
    })
  }, { rootMargin: "-50% 0px -50% 0px" })

  const menuLinks = document.querySelectorAll('.menu-opciones a[href^="#"]');
  menuLinks.forEach(menuLink => {

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
      observer.observe(target);

    }
  })

});












