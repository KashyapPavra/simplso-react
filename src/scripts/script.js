import $ from "jquery";

$(".navigMenu").on("click", function () {
	$(".navigBar").addClass("navigOpen");
	$(".navigHome").css("display", "none");
});
$(".navigClose").on("click", function () {
	$(".navigBar").removeClass("navigOpen");
	$(".navigHome").css("display", "block");
});

// handle links with @href started with '#' only
$(document).on("click", 'a[href^="#"]', function (e) {
	e.preventDefault();
	// target element id
	var id = $(this).attr("href");

	// target element
	var $id = $(id);
	if ($id.length === 0) {
		return;
	}

	// prevent standard hash navigation (avoid blinking in IE)
	e.preventDefault();

	// top position relative to the document
	var pos = $id.offset().top;

	// animated top scrolling
	if ($(".navigBar").hasClass("navigOpen") === true) {
		$(".navigBar").removeClass("navigOpen");
		$(".navigHome").css("display", "block");
	}

	$("body, html").animate({ scrollTop: pos });
});

//Nav Box Shadow
$(window).on("scroll", function () {
	if ($(window).scrollTop() >= 100) {
		$(".navigDesktop").addClass("navigScroll");
		$(".navigHome").addClass("navigScroll");
	}
	if ($(window).scrollTop() <= 100) {
		$(".navigDesktop").removeClass("navigScroll");
		$(".navigHome").removeClass("navigScroll");
	}
});

$(".modalOpenBtn").on("click", function (e) {
	console.log(1);
	e.preventDefault();
	if ($(".navigBar").hasClass("navigOpen") === true) {
		$(".navigBar").removeClass("navigOpen");
		$(".navigHome").css("display", "block");
	}
	$("body").addClass("bodyModalOpen");
	$(".customModal").fadeIn(500);
});

$(".closeBtn").on("click", function (e) {
	e.preventDefault();
	$("body").removeClass("bodyModalOpen");
	$(".customModal").fadeOut(500);
});
