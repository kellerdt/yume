$(function() {
	
	$('#tablinks > li').click(function() {
		navigateTabs($(this));
	});
	navigateTabs($('#tablinks > li').eq(0));
	
	function navigateTabs(tab) {
		$("#tablinks > li").removeClass("current");
		tab.addClass("current");
		
		$('.contentBody').hide();
		$('div#' + tab.attr('contentId')).show();
	}
});