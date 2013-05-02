$(function() {
	
	var months = ['January','February','March','April','May','June','July',
	              'August','September','October','November','December'];       
	var date = new Date();
	$('div.footer span#date').html(months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear());
	
	/* Navigation Javascript */
	$('span.tabspan').click(function() {
		navigateTabs($(this));
	});
	function navigateTabs(tab) {
		$("span.tabspan").removeClass("current");
		tab.addClass("current");
		
		$('.contentBody').hide();
		$('div#' + tab.attr('data-tabId')).show();
	}
	
	/* Video Javascript */
	$('video#intro').click(function() {
		var status = $(this).status;
		if(status == 'play') {
			$(this).status = 'pause';
			this.pause();
		} else {
			$(this).status = 'play';
			this.play();
		}
	});
	$('div#content div#video').show();
	
	/* PrettyPhoto Javascript */
	$(document).ready(function(){
		$("a[rel^='prettyPhoto']").prettyPhoto();
	});
});