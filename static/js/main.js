$(function () {
	var firstBoxTopOffset;
	var lastBoxTopOffset;
	var distanceBetween;

	$("details").removeAttr('open');
	$("body:not(.home)").prepend('<div class="dark--bg"></div>');
	$(".humberger-icon").on('click', function () {
		$("body").addClass('move');
		$("nav").addClass('move');
	});
	$("body").on('click', '.close svg', function () {
		$("body").removeClass('move');
		$("nav").removeClass('move');
	});
	$(".dark--bg").on('click', function () {
		$("body").removeClass('move');
		$("nav").removeClass('move');
	});


	var path = window.location.pathname;
	var currentPageNumber = Number(path.split('/')[path.split('/').length - 2]);
    var currentPage = path.split('/')[path.split('/').length - 3];
	if (currentPage === "html_css" && Number.isInteger(currentPageNumber)) {
		$(".container").append(
			'<aside>'+
				'<p><a href="/frontend/html_css/1">البداية مع html و css ماهي وما وظيفة كل منهما</a></p>'+
				'<p><a href="/frontend/html_css/2">الوسوم Tags</a></p>'+
				'<p><a href="/frontend/html_css/3">عناصر Block و Inline</a></p>'+
				'<p><a href="/frontend/html_css/4">عناصر div و p و span والفرق بينهم</a></p>'+
				'<p><a href="/frontend/html_css/5">مقارنة بين Class و ID</a></p>'+
				'<p><a href="/frontend/html_css/6">الهيكل الأساسي لصفحة الويب</a></p>'+
				'<p><a href="/frontend/html_css/7">طرق إستخدام أكواد CSS في صفحات </a></p>'+
				'<p><a href="/frontend/html_css/8">أساسيات CSS</a></p>'+
				'<p><a href="/frontend/html_css/9">خاصية margin</a></p>'+
				'<p><a href="/frontend/html_css/10">الجداول Table</a></p>'+
				'<p><a href="/frontend/html_css/11">Semantic HTML</a></p>'+
				'<p><a href="/frontend/html_css/12">خاصية position: relative vs absolute</a></p>'+
				'<p><a href="/frontend/html_css/13">CSS Flexbox</a></p>'+
				'<p><a href="/frontend/html_css/14">Responsive Web Design</a></p>'+
				'<p><a href="/frontend/html_css/15">Media Queries</a></p>'+
			'</aside>');
	} else if (currentPage === "javascript" && Number.isInteger(currentPageNumber)) {
		$(".container").append(
			'<aside>'+
				'<p><a href="/frontend/javascript/1">البدء في دروس الـ Javascript</a></p>'+
				'<p><a href="/frontend/javascript/2">الـ Document Object Model ولغة الـ Javascript</a></p>'+
				'<p><a href="/frontend/javascript/3">المتغيرات variables و الثوابت constants</a></p>'+
				'<p><a href="/frontend/javascript/4">أنواع البيانات Data Type</a></p>'+
				'<p><a href="/frontend/javascript/5">الجزء الثاني من Data types</a></p>'+
				'<p><a href="/frontend/javascript/6">عمليات المقارنة Comparison Operators</a></p>'+
				'<p><a href="/frontend/javascript/7">طرق كتابة وتضمين اكواد الـJavascript</a></p>'+
				'<p><a href="/frontend/javascript/8">شرط if و else</a></p>'+
				'<p><a href="/frontend/javascript/9">عمل محاكي للكويزات</a></p>'+
				'<p><a href="/frontend/javascript/10">المصفوفة Array</a></p>'+
				'<p><a href="/frontend/javascript/11">تطبيق قائمة المهام</a></p>'+
				'<p><a href="/frontend/javascript/12">تطبيق قائمة المهام (تابع)</a></p>'+
				'<p><a href="/frontend/javascript/13">الحلقات Loops</a></p>'+
				'<p><a href="/frontend/javascript/14">الدوال Functions</a></p>'+
				'<p><a href="/frontend/javascript/15">الكائنات Objects</a></p>'+
				'<p><a href="/frontend/javascript/16">المهمة: عمل محرك بحث عن المنتجات في الموقع</a></p>'+
			'</aside>');
	} else if (currentPage === "git" && Number.isInteger(currentPageNumber)) {
		$(".container").append(
			'<aside>'+
				'<p><a href="/frontend/git/1">مدخل إلى Git و GitHub</a></p>'+
				'<p><a href="/frontend/git/2">ورشة عمل git commit و git push</a></p>'+
				'<p><a href="/frontend/git/3">خلاصة الدرس الأول و الثاني GIT</a></p>'+
				'<p><a href="/frontend/git/4">إستنساخ cloning</a></p>'+
				'<p><a href="/frontend/git/5">Pull & Conflicts</a></p>'+
				'<p><a href="/frontend/git/6">Undoing Changes</a></p>'+
				'<p><a href="/frontend/git/7">Rewriting History</a></p>'+
			'</aside>');
	} else if (currentPage === "facebook_project" && Number.isInteger(currentPageNumber)) {
		$(".container").append(
			'<aside> '+
				'<p><a href="/frontend/projects/facebook_project/1">عن ورشة العمل</a></p>'+
				'<p><a href="/frontend/projects/facebook_project/2">تقسيم ملفات المشروع</a></p>'+
				'<p><a href="/frontend/projects/facebook_project/3">تنزيل الصور التي سنستخدمها</a></p>'+
				'<p><a href="/frontend/projects/facebook_project/4">بدأ العمل على تقسيم صفحة موقع الفيس بوك</a></p>'+
				'<p><a href="/frontend/projects/facebook_project/5">بدأ العمل على جزء الـ header</a></p>'+
				'<p><a href="/frontend/projects/facebook_project/6">تكويد العناصر التي بالداخل</a></p>'+
				'<p><a href="/frontend/projects/facebook_project/7">تكويد الصناديق التي ستحدد موقع العناصر</a></p>'+
				'<p><a href="/frontend/projects/facebook_project/8">بدأ العمل على إدراج شعار الفيس بوك للصفحة</a></p>'+
				'<p><a href="/frontend/projects/facebook_project/9">بدأ العمل على منطقة تسجيل الدخول</a></p>'+
				'<p><a href="/frontend/projects/facebook_project/10">بدأ عمل اللمسات الأخيرة</a></p>'+
				'<p><a href="/frontend/projects/facebook_project/11">حل مشكلة الخلفية</a></p>'+
				'<p><a href="/frontend/projects/facebook_project/12">بداية العمل على قسم main</a></p>'+
				'<p><a href="/frontend/projects/facebook_project/13">تكويد الجزء الأيمن حيث منطقة التسجيل</a></p>'+
				'<p><a href="/frontend/projects/facebook_project/14">العمل على الـ footer</a></p>'+
				'<p><a href="/frontend/projects/facebook_project/15">عمل تشطيبات ولمسات أخيرة</a></p>'+
			'</aside>');
	} else if (currentPage === "one_mac_project" && Number.isInteger(currentPageNumber)) {
		$(".container").append(
			'<aside>'+
				'<p><a href="/frontend/projects/one_mac_project/1">اليوم الأول: ورشة العمل الأولى</a></p>'+
				'<p><a href="/frontend/projects/one_mac_project/2">العمل على الجزء الأول</a></p>'+
				'<p><a href="/frontend/projects/one_mac_project/3">تحدي اليوم الثاني: ورشة العمل الأولى</a></p>'+
				'<p><a href="/frontend/projects/one_mac_project/4">تكويد الـ banner</a></p>'+
				'<p><a href="/frontend/projects/one_mac_project/5">العمل على about-section</a></p>'+
				'<p><a href="/frontend/projects/one_mac_project/6">تحدي اليوم الثالث: ورشة العمل الأولى</a></p>'+
				'<p><a href="/frontend/projects/one_mac_project/7">نظرة عن المواقع التجاوبية وتقنية الـ Fexbox</a></p>'+
				'<p><a href="/frontend/projects/one_mac_project/8">إكمال عمل اقسام المسارات الأخرى</a></p>'+
				'<p><a href="/frontend/projects/one_mac_project/9">تحدي اليوم الرابع والأخير: ورشة العمل الأولى</a></p>'+
				'<p><a href="/frontend/projects/one_mac_project/10">عمل الجزء الأخير في هذه المرحلة</a></p>'+
				'<p><a href="/frontend/projects/one_mac_project/11">اللمسات الأخيرة</a></p>'+
			'</aside>');
	}
	$(".container:not(.links)").append('<div class="navigate"> <a href="#" class="disabled">السابق</a> <a href="#">التالي</a> </div>')
	$("aside a").eq(currentPageNumber - 1).addClass('active');
	var next = $(".navigate").children().eq(1);
	var prev = $(".navigate").children().eq(0);
	if (currentPageNumber === 1) {
		prev.addClass('disabled');
		next.attr('href', '/frontend/' + currentPage + '/' + (currentPageNumber + 1) + '/');
	} else if ((currentPageNumber === 15 && currentPage === "html_css") || (currentPageNumber === 16 && currentPage === "javascript") || (currentPageNumber === 7 && currentPage === "git") || (currentPageNumber === 11 && currentPage === "one_mac_project") || (currentPageNumber === 15 && currentPage === "facebook_project")) {
		next.addClass('disabled');
		prev.removeClass('disabled');
		prev.attr('href', '/frontend/' + currentPage + '/' + (currentPageNumber - 1) + '/');
	} else {
		next.removeClass('disabled');
		prev.removeClass('disabled');
		next.attr('href', '/frontend/' + currentPage + '/' + (currentPageNumber + 1) + '/');
		prev.attr('href', '/frontend/' + currentPage + '/' + (currentPageNumber - 1) + '/');
	}
	if (!Number.isInteger(Number(path.split('/')[path.split('/').length - 1]))) {
		$(".container").addClass('fix');
	}
	//change the courses connector height dynamically
	$(window).on("resize", changeConnectorHeight);
	function changeConnectorHeight(){
		if ($("body").hasClass("home") || currentPage==="projects") {

			firstBoxTopOffset=$(".courses_image").eq(0).offset().top;
			lastBoxTopOffset=$(".courses_image").eq($(".courses_image").length-1).offset().top;
			distanceBetween=lastBoxTopOffset-firstBoxTopOffset;
			$(".connectorStyle").text(".beauty-box .box:first-of-type::after{height:"+distanceBetween+"px}");
		}
	}
	changeConnectorHeight();

	//hide sidebar menu on screen width greater than 1080px
	var screenWidth;
	$(window).on('resize', function(){
		screenWidth=$(window).width();
		if (screenWidth>=1080) {
			$("body").addClass('no-an');
			$("body").removeClass('move');
			$("nav").removeClass('move');
			setTimeout(function(){
				$("body").removeClass('no-an');
			}, 500);
		}
	});

	//auto detecte codes and highlights them
	$(document).ready(function() {
  	$('pre code').each(function(i, block) {
    	hljs.highlightBlock(block);
  	});
	});
});
