/*
 * App Settings - For anything that is truly global across the site.
 */
(function ($j) {

  App = Class.extend({
      
    // Classes    
    clsError: 'error',
    clsHidden: 'hidden',
    clsInfo: 'info',    
    clsOpen: 'open',
    clsSuccess: 'success',
    
    clsIE7: 'lt-ie8',
    clsIE8: 'lt-ie9',

    // Selectors
    slctrSpinner: '.js-spin',
    slctrNav: '.js-nav',    

    // Settings (anything & everything)
    scrollOffset: '.js-header',
    throttleDelay: 400,

    // Viewport Widths
    mobileMaxWidth: 767,
    tabletMaxWidth: 991,
    
    isIe7: function() {
			return $j('html').hasClass(this.clsIe7);
		},
		
		isIe8: function() {
			return $j('html').hasClass(this.clsIe8);
		},		
		
  });

})(window.jQuery);