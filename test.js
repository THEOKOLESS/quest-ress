        //date picker 

        $( function() {
    $( "#datepicker" ).datepicker({
            changeMonth: true,
            changeYear: true
    });
   });
        //date + 3 mois
        var daate = new Date;
        daate = $('#fstdate');
        jQuery(document).ready(function(){
    	console.log(daate);
    	console.log(document.getElementById('fstdate'));

});
        //accordeons v1

		$(document).ready(function(){
        $(".toogle").click(function(e) {
    	e.preventDefault();
    	var $link = $(this);


     if ($link.hasClass('visible')) {
      $("#moreless").prop('value', '+');
    } else {
      $("#moreless").prop('value', '-');
    }
     $link.toggleClass('visible');
    });
    });
         $(document).ready(function(){
         $('.toogle').click(function(){
   			$(".panel-body").slideToggle();
   			});
	 });

    //  $('.panel-heading').each(function(){
    //  var NODES = $(this).find('h3').length;
    //  console.log(NODES);
    //  if(NODES>0){
    //   $(this).find('h3:first').addClass('first');
    //   $(this).find('h3:last').addClass('last');
    //   $('#panel-heading h3.first').append('&nbsp;<span class="more"><a class="toggle">More</a></span>');
    //   $('#panel-heading h3.last').append('&nbsp;<span class="less"><a class="toggle">less</a></span>');
    //   $('#panel-heading h3').hide().slice(0,1).addClass('fixed').show();
    //   $('.toggle').click(function(){
    //    $( ".more" ).toggle();
    //    $('h3:not(.toggle,.fixed)').toggle();
    //   });
    //  }
    // });

// $(document).keyup(function(touche){ // on écoute l'évènement keyup()

//     var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés

//     if(appui == 13){ // si le code de la touche est égal à 13 (Entrée)
//         alert('Vous venez d\'appuyer sur la touche Entrée !'); // on affiche une alerte
//     }
// });
