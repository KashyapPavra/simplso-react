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

$("#contactSubmit").on("click", function (e) {
	e.preventDefault();

	//Variable Declaration
	var name = $("input[name=name]").val();
	var email = $("input[name=email]").val();
	var message = $("textarea[name=message]").val();
	var error_name = false;
	var error_email = false;
	var error_email_type = false;
	var error_message = false;

	//Validation before submit
	$(".nameErrorText").hide();
	$(".emailErrorText").hide();
	$(".emailTypeErrorText").hide();
	$(".messageErrorText").hide();

	check_name();
	check_email();
	check_message();

	function check_name() {
		var name_length = name.length;
		if (name_length < 1) {
			$(".nameErrorText").html("Name should be atleast 1 character");
			$(".nameErrorText").show();
			error_name = true;
		} else {
			$(".nameErrorText").hide();
		}
	}

	function check_email() {
		var email_length = email.length;

		function validateEmail($email) {
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			return emailReg.test($email);
		}

		if (email_length <= 5) {
			$(".emailErrorText").html("Email should be atleast 5 characters");
			$(".emailErrorText").show();
			error_email = true;
		} else {
			if (!validateEmail(email)) {
				$(".emailTypeErrorText").html("Enter a valid email");
				$(".emailTypeErrorText").show();
				error_email_type = true;
			} else {
				$(".emailTypeErrorText").hide();
			}
			$(".emailErrorText").hide();
		}
	}

	function check_message() {
		var message_length = message.length;
		if (message_length < 1) {
			$(".messageErrorText").html("Message should be atleast 5 characters");
			$(".messageErrorText").show();
			error_message = true;
		} else {
			$(".messageErrorText").hide();
		}
	}

	if (
		error_email === false &&
		error_email_type === false &&
		error_name === false &&
		error_message === false
	) {
		$.ajaxSetup({
			headers: {
				"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
			},
		});
		$.ajax({
			type: "POST",

			url: "/contactus",

			data: {
				name: name,
				message: message,
				email: email,
			},

			success: function (data) {
				$(".resMessage").show();
				$(".resMessage").addClass("customFormMessageSuccess");
				$(".resMessage").html(data.message);
				document.getElementById("contactForm").reset();
				setTimeout(function () {
					$(".resMessage").hide();
				}, 5000);
			},

			error: function (data) {
				$(".resMessage").show();
				$(".resMessage").addClass("customFormMessageError");
				$(".resMessage").html(data.message);
			},
		});
	}
});
