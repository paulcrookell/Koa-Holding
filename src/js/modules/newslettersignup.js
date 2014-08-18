(function ($j) {
	NewsletterSignup = Class.extend({
		settings: {
      		form: '.js-newsletter-signup'
    	},
    	init: function () {
		    
		    this.$form = $j(this.settings.form);
		    if (this.$form.length < 1) return;

		    // setup slider
		    this.initForm();    

		},
	    initForm: function() {
	    	$('.js-newsletter-confirm').hide();
	    	$j(this.$form).validate({
	    		submitHandler: this.onSubmit,
	    		errorClass: 'newsletterError'
	    	});
	    },
	    onSubmit: function(){
	    	var fields = {
	    		'email' : $('input#email').val(),
	    		'submitted' : 'true'
	    	};

	    	console.log(fields);

	    	
	    	$.ajax({
	    		type 		: 'POST',
	    		url 		: 'inc/newsletter.php',
	    		data 		: fields,
	    		dataType 	: 'json'
	    	})
	    	.done(function(data) {
	    		var json = $.parseJSON(data);
	    		console.log(json);
	    		if(json.result == 'success'){
	    			$('.js-newsletter-signup').hide();
	    			$('.js-newsletter-confirm').show();
	    		}
	    	});
	    	return false;
	    }
  	});

  	$j().ready(function () {
    	var newslettersignup = new NewsletterSignup();
  	});

})(window.jQuery);