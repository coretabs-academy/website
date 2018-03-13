$(function () {
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
	var currentPageNumber = Number(path.split('/')[path.split('/').length - 1].split(".")[0]);
	var currentPage = path.split('/')[path.split('/').length - 2];
	if (currentPage === "html_css" && Number.isInteger(currentPageNumber)) {
		$(".container").append('<aside><p><a href="1.html">البداية مع html و css ماهي وما وظيفة كل منهما</a></p><p><a href="2.html">الوسوم Tags</a></p><p><a href="3.html">عناصر Block و Inline</a></p><p><a href="4.html">عناصر div و p و span والفرق بينهم</a></p><p><a href="5.html">مقارنة بين Class و ID</a></p><p><a href="6.html">الهيكل الأساسي لصفحة الويب</a></p><p><a href="7.html">طرق إستخدام أكواد CSS في صفحات </a></p><p><a href="8.html">أساسيات CSS</a></p><p><a href="9.html">خاصية margin</a></p><p><a href="10.html">الجداول Table</a></p><p><a href="11.html">Semantic HTML</a></p><p><a href="12.html">CSS Flexbox</a></p><p><a href="13.html">Responsive Web Design</a></p><p><a href="14.html">Media Queries</a></p></aside>');
	} else if (currentPage === "javascript" && Number.isInteger(currentPageNumber)) {
		$(".container").append('<aside><p><a href="1.html">البدء في دروس الـ Javascript</a></p><p><a href="2.html">الـ Document Object Model ولغة الـ Javascript</a></p><p><a href="3.html">المتغيرات variables و الثوابت constants</a></p><p><a href="4.html">أنواع البيانات Data Type</a></p><p><a href="5.html">الجزء الثاني من Data types</a></p><p><a href="6.html">عمليات المقارنة Comparison Operators</a></p><p><a href="7.html">طرق كتابة وتضمين اكواد الـJavascript</a></p><p><a href="8.html">شرط if و else</a></p><p><a href="9.html">عمل محاكي للكويزات</a></p><p><a href="10.html">المصفوفة Array</a></p><p><a href="11.html">تطبيق قائمة المهام</a></p><p><a href="12.html">تطبيق قائمة المهام (تابع)</a></p><p><a href="13.html">الحلقات Loops</a></p><p><a href="14.html">الدوال Functions</a></p><p><a href="15.html">الكائنات Objects</a></p><p><a href="16.html">المهمة: عمل محرك بحث عن المنتجات في الموقع</a></p></aside>');
	} else if (currentPage === "git" && Number.isInteger(currentPageNumber)) {
		$(".container").append('<aside><p><a href="1.html">مدخل إلى Git و GitHub</a></p><p><a href="2.html">ورشة عمل git commit و git push</a></p><p><a href="3.html">خلاصة الدرس الأول و الثاني GIT</a></p><p><a href="4.html">إستنساخ cloning</a></p></aside>');
	} else if (currentPage === "facebook_project" && Number.isInteger(currentPageNumber)) {
		$(".container").append('<aside> <p><a href="1.html">عن ورشة العمل</a></p><p><a href="2.html">تقسيم ملفات المشروع</a></p><p><a href="3.html">تنزيل الصور التي سنستخدمها</a></p><p><a href="4.html">بدأ العمل على تقسيم صفحة موقع الفيس بوك</a></p><p><a href="5.html">بدأ العمل على جزء الـ header</a></p><p><a href="6.html">تكويد العناصر التي بالداخل</a></p><p><a href="7.html">تكويد الصناديق التي ستحدد موقع العناصر</a></p><p><a href="8.html">بدأ العمل على إدراج شعار الفيس بوك للصفحة</a></p><p><a href="9.html">بدأ العمل على منطقة تسجيل الدخول</a></p><p><a href="10.html">بدأ عمل اللمسات الأخيرة</a></p><p><a href="11.html">حل مشكلة الخلفية</a></p><p><a href="12.html">بداية العمل على قسم main</a></p><p><a href="13.html">تكويد الجزء الأيمن حيث منطقة التسجيل</a></p><p><a href="14.html">العمل على الـ footer</a></p><p><a href="15.html">عمل تشطيبات ولمسات أخيرة</a></p></aside>');
	} else if (currentPage === "one_mac_project" && Number.isInteger(currentPageNumber)) {
		$(".container").append('<aside><p><a href="1.html">اليوم الأول: ورشة العمل الأولى</a></p><p><a href="2.html">العمل على الجزء الأول</a></p><p><a href="3.html">تحدي اليوم الثاني: ورشة العمل الأولى</a></p><p><a href="4.html">تكويد الـ banner</a></p><p><a href="5.html">العمل على about-section</a></p><p><a href="6.html">تحدي اليوم الثالث: ورشة العمل الأولى</a></p><p><a href="7.html">نظرة عن المواقع التجاوبية وتقنية الـ Fexbox</a></p><p><a href="8.html">إكمال عمل اقسام المسارات الأخرى</a></p><p><a href="9.html">تحدي اليوم الرابع والأخير: ورشة العمل الأولى</a></p><p><a href="10.html">عمل الجزء الأخير في هذه المرحلة</a></p><p><a href="11.html">اللمسات الأخيرة</a></p></aside>');
	}
	$(".container:not(.links)").append('<div class="navigate"> <a href="#" class="disabled">السابق</a> <a href="#">التالي</a> </div>')
	$("aside a").eq(currentPageNumber - 1).addClass('active');
	var next = $(".navigate").children().eq(1);
	var prev = $(".navigate").children().eq(0);
	if (currentPageNumber === 1) {
		prev.addClass('disabled');
		next.attr('href', (currentPageNumber + 1) + '.html');
	} else if ((currentPageNumber === 14 && currentPage === "html_css") || (currentPageNumber === 16 && currentPage === "javascript") || (currentPageNumber === 4 && currentPage === "git") || (currentPageNumber === 11 && currentPage === "one_mac_project") || (currentPageNumber === 15 && currentPage === "facebook_project")) {
		next.addClass('disabled');
		prev.removeClass('disabled');
		prev.attr('href', (currentPageNumber - 1) + '.html');
	} else {
		next.removeClass('disabled');
		prev.removeClass('disabled');
		next.attr('href', (currentPageNumber + 1) + '.html');
		prev.attr('href', (currentPageNumber - 1) + '.html');
	}
	if (!Number.isInteger(Number(path.split('/')[path.split('/').length - 1].split('.')[0]))) {
		$(".container").addClass('fix');
	}
});
