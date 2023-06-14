// Menu portatil mobile ---------------------------------

class MobileNavbar {
     constructor(mobileMenu, navList, navLinks) {
       this.mobileMenu = document.querySelector(mobileMenu);
       this.navList = document.querySelector(navList);
       this.navLinks = document.querySelectorAll(navLinks);
       this.activeClass = "active";
   
       this.handleClick = this.handleClick.bind(this);
     }
   
     animateLinks() {
       this.navLinks.forEach((link, index) => {
         link.style.animation
           ? (link.style.animation = "")
           : (link.style.animation = `navLinkFade 0.5s ease forwards ${
               index / 7 + 0.3
             }s`);
       });
     }
   
     handleClick() {
       this.navList.classList.toggle(this.activeClass);
       this.mobileMenu.classList.toggle(this.activeClass);
       this.animateLinks();
     }
   
     addClickEvent() {
       this.mobileMenu.addEventListener("click", this.handleClick);
     }
   
     init() {
       if (this.mobileMenu) {
         this.addClickEvent();
       }
       return this;
     }
   }
   
   const mobileNavbar = new MobileNavbar(
     ".menu-mobile",
     ".lista-nav",
     ".lista-nav li",
   );
   mobileNavbar.init();


// Scroll smooth ---------------------------------

$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('nav').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});


// Voltar ao topo ---------------------------------

$(document).ready(function(){

    $('#voltar-ao-top').hide();

    $(window).scroll(function(){
      if($(this).scrollTop()>0){
          $('#voltar-ao-top').fadeIn();
      }else{
          $('#voltar-ao-top').fadeOut();
        }
      });

    $('#voltar-ao-top').click(function(){
        $('html, body').animate({
          scrollTop: 0
        }, 1000);
      });

});
