$(function() {
	
	var months = ['January','February','March','April','May','June','July',
	              'August','September','October','November','December'];       
	var date = new Date();
	$('div.footer span#date').html(months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear());
	
	$('#tablinks > li').click(function() {
		navigateTabs($(this));
	});
	/*navigateTabs($('#tablinks > li').eq(0));*/
	
	function navigateTabs(tab) {
		$("#tablinks > li").removeClass("current");
		tab.addClass("current");
		
		$('.contentBody').hide();
		$('div#' + tab.attr('contentId')).show();
	}
});