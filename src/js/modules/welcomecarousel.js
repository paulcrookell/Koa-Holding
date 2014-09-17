(function ($j) {
	WelcomeCarousel = Class.extend({
		settings: {
      		carousel: '.js-welcome-carousel'
    	},
    	init: function () {
		    
		    this.$carousel = $j(this.settings.carousel);
		    if (this.$carousel.length < 1) return;

		    // setup slider
		    this.createSlider();    

		},
	    createSlider: function() {
	    	console.log("create slider");
	    	$j(this.$carousel).on( 'initialized.owl.carousel', $j.proxy(function(event) {
	    		$j('.owl-item.active').addClass('translated');
	    	}, this));
	    	this.$carousel.owlCarousel({
	    		items: 1,
	    		autoplay: true,
	    		autoplayTimeout: 4500,
	    		smartSpeed: 1200,
	    		loop: true,
	    		nav: false,
	    		dots: false,
	    		onChanged: function(){
	    			console.log(this.currentItem);

	    		},
	    		afterInit : function(el){
	    			//el.trigger('owl.jumpTo', closestEvent);
	    		}
	    	});
	    	this.bindControls();
	    },
	    bindControls: function() {

	    	$j('.carousel-nav a', this.$container).on( 'click', $j.proxy(function(e) {
	    		e.preventDefault();
	    	 	var $currentTarget = $j(e.currentTarget),
	    	  		id = $currentTarget.parent('li').index();
	    	  	$j('.carousel-nav li').removeClass('active');
	    	  	$currentTarget.parent().addClass('active');
	    	  	this.changeSlide(id);
	    	  	
	    	}, this));

	    	

	    	$j(this.$carousel).on( 'change.owl.carousel', $j.proxy(function(event) {
	    		$j('.owl-item').removeClass('translated');
	    	}, this));

	    	$j(this.$carousel).on( 'translated.owl.carousel', $j.proxy(function(event) {
	    		$j(event.target).addClass("translated");
	    		console.log(event.item.index);
	    		$j('.owl-item:nth-of-type('+(event.item.index+1)+')').addClass('translated');
	    	}, this));
	    	

	    },
	    changeSlide:function(id) {
	    	console.log("change slide to "+id);
	    	this.$carousel.trigger('to.owl.carousel',id);
	    }
  });

  $j().ready(function () {
    var welcomecarousel = new WelcomeCarousel();
  });

})(window.jQuery);