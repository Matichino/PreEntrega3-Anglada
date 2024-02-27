$(document).ready(function()		{
		$("#secondpane p.menu_head").click(function()		{
		$(this).css({backgroundImage:"url(img/down.png)"}).next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
		$(this).siblings().css({backgroundImage:"url(img/left.png)"});
		});
		});