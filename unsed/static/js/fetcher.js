var converter = new showdown.Converter();

$(function() {
    var topicsJSON, quizJSON, start, categoryTitle, categoryDesc, topicTitle, autoId;
    var navigationScope = [];

    //<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
    //var lang = Cookies.get('lang');
    //if (lang === undefined) { lang = "ar"; }
    var lang = "ar";

    $(".container aside").html("<p>Loading... Please Wait</p>");

    $.ajax({
        type: "GET",
        url: "https://cdn.rawgit.com/coretabs-academy/fullstack-tutorials/master/topics.json",
        success: function(response) {
            topicsJSON = response;
            $("#main .courses_container, .container aside").empty();
            $.each(topicsJSON.categories, function(cIndex, category) {
                if (lang == "ar") { categoryTitle = category["title-ar"]; categoryDesc = category["desc-ar"]; start = "إبدأ"; } else { categoryTitle = category["title-en"]; categoryDesc = category["desc-en"]; start = "Start"; }
                $(".container aside").append("<a class='category' data-idx='" + cIndex + "'>" + categoryTitle + "</a>");
                $.each(category.topics, function(tIndex, topic) {
                    navigationScope.push([topic.id, "topic"]);
                    if (tIndex == 0) { autoId = topic.id; }
                    if (lang == "ar") { topicTitle = topic["title-ar"]; quizTitle="اختبار"; } else { topicTitle = topic["title-en"]; quizTitle="َQuiz"; }
                    $(".container aside").append("<p><a class='topic' data-id='" + topic.id + "'>" + topicTitle + "</a></p>");
                    /*
                    if (topic.quiz == "true") {
                        navigationScope.push([topic.id, "quiz"]);
                        $(".container aside").append("<p><a class='quiz' data-id='" + topic.id + "'>" + quizTitle + ": " + topicTitle + "</a></p>");
                    }
                    */
                });

                $("#main .courses_container").append("<div class='box'><div class='courses_image'><img src='" + topicsJSON.host + "/images/" + category.image + "' alt=''></div><div class='text'><h2>" + categoryTitle + "</h2><p>" + categoryDesc + "</p><a class='button-link' data-id='" + autoId + "'>" + start + "</a></div><a class='box-link' data-id='" + autoId + "'></a></div>");
            });
        }
    });

    $("#main .courses_container").on("click", "a", function(event) {
        var id = $(this).attr("data-id");
        $("body").removeClass("home");
        $("#animate, .background-image, #main, .about, footer").remove();
        $("#navbar").addClass("navbar");
        $(".icon-container").removeClass("hidden");
        $(".navbar-nav, .container").show();

        $(".container a.topic[data-id='" + id + "']").trigger("click");
    });

    $(".container").on("click", "a.topic", function(event) {
        $(".navigate").remove();
        var id = $(this).attr("data-id");
        var navigationIndex = isItemInArray([Number(id), "topic"], navigationScope);

        if ($(window).width() < 1080) { $("aside").hide(); }
        $("aside a, a.topic").removeClass("active");
        $("a.topic[data-id='" + id + "']").addClass("active");
        $("aside").animate({ scrollTop: id * 50}, 500);
        $(".cooked").html("<p>Loading... Please Wait</p>");

        var youtube = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g;
        var link = /(?!\S+youtube\.com|youtu\.be)(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

        $.get(topicsJSON.host + id + "/topic-" + lang + ".txt", function(markdown) {
            markdown = markdown.replace(youtube, "<iframe class='youtube' height='345' src='http://www.youtube.com/embed/$1' frameborder='0' allowfullscreen></iframe>");
            markdown = markdown.replace(link, "<a href='$1' target='_blank'>$1</a>");
            var html = converter.makeHtml(markdown);
            $(".cooked").html(html);

            $(".cooked iframe.youtube").each(function () {
                var src = $(this).attr("src");
                src = src.replace("http://", "//");
                $(this).attr("src", src);
            });
            $(".cooked img").each(function () {
                var src = $(this).attr("src");
                $(this).attr("src", topicsJSON.host + id + "/" + src);
            });
            $('pre code').each(function(i, code) {
                hljs.highlightBlock(code);
            });

            viewNavigation(navigationIndex);
        }, 'text');
    });

    $(".container").on("click", "a.quiz", function(event){
        $(".navigate").remove();
        var id = $(this).attr("data-id");
        var navigationIndex = isItemInArray([Number(id), "quiz"], navigationScope);

        if ($(window).width() < 1080) { $("aside").hide(); }
        $("aside a, a.quiz").removeClass("active");
        $("a.quiz[data-id='" + id + "']").addClass("active");
        $("aside").animate({ scrollTop: (Number(id) + 1) * 50}, 500);
        $(".cooked").html("<p>Loading... Please Wait</p>");

        $.ajax({
            type: "GET",
            url: topicsJSON.host + id + "/quiz.json",
            success: function(response) {
                quizJSON = response;
                $.each(quizJSON, function (qIndex, question) {
                    var form = $("<form id='quiz-form-" + qIndex + "' class='quiz-form' method='post'></form>");
                    form.append("<div class='result'></div>")
                    form.append("<div class='question'>" + question.question + "</div>");
                    $.each(question.answers, function (aIndex, answer) {
                        if (question.correct.length == 1) {
                            form.append("<div class='answer'><input type='radio' id='q" + qIndex + "a" + aIndex + "' name='q" + qIndex + "' value='" + aIndex + "' /> <label for='q" + qIndex + "a" + aIndex + "'>" + answer + "</label></div>");
                        } else {
                            form.append("<div class='answer'><input type='checkbox' id='q" + qIndex + "a" + aIndex + "' name='q" + qIndex + "' value='" + aIndex + "' /> <label for='q" + qIndex + "a" + aIndex + "'>" + answer + "</label></div>");
                        }
                    })
                    form.append("<div class='submit'><input type='submit' name='submit' value='إرسال' /></div>");
                    if (qIndex == 0) { $(".cooked").html(form); } else { $(".cooked").append(form); }
                })

                viewNavigation(navigationIndex);
            }
        });
    });

    $(document).on("submit", ".quiz-form", function(event) {
        event.preventDefault();
        var form = $(this);
        var id = $(this).attr("id").replace("quiz-form-", "");
        var answers = [];
        form.find(".answer > input:checked").each(function () {
            answers.push($(this).val());
        });

        $.each(quizJSON, function (qIndex, question) {
            if (qIndex == id) {
                var correct = question.correct.toString();
                answers = answers.toString();
                if (correct === answers) {
                    form.find(".result").removeClass("fail").addClass("success");
                    form.find(".result").html("success");
                } else {
                    form.find(".result").removeClass("success").addClass("fail");
                    form.find(".result").html(question.hint);
                }
            }
        });
    });

    function isItemInArray(item, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][0] == item[0] && array[i][1] == item[1]) {
                return i;
            }
        }
        return -1;
    }

    function viewNavigation(navigationIndex) {
        $(".container").append("<div class='navigate'><a>السابق</a><a>التالي</a></div>");

        if (navigationIndex == 0) {
            $(".navigate a").first().addClass("disabled");
        } else {
            $(".navigate a").first().attr("data-id", navigationScope[navigationIndex - 1][0]);
            $(".navigate a").first().addClass(navigationScope[navigationIndex - 1][1]);
        }

        if (navigationIndex == navigationScope.length - 1) {
            $(".navigate a").last().addClass("disabled");
        } else {
            $(".navigate a").last().attr("data-id", navigationScope[navigationIndex + 1][0]);
            $(".navigate a").last().addClass(navigationScope[navigationIndex + 1][1]);
        }
    }

    $(document).on("click", ".icon-container", function(event) {
        if ($("aside").css("display") == "none") {
            $("aside").show();
        } else { $("aside").hide(); }
    });

    $(window).resize(function() {
        if ($(window).width() >= 1080 && $("aside").css("display") == "none") { $("aside").show(); }
    });

    //fix return to perevious page button
    $(".go-back").on('click', function(){
      if($("body").hasClass("home fullstack")) $(".go-back").attr('href', '/');
      else if($("body").hasClass("fullstack")) $(".go-back").attr('href', '/fullstack/');
    });

    //change the courses connector height dynamically
    var path = window.location.pathname;
    var firstBoxTopOffset;
    var lastBoxTopOffset;
    var distanceBetween;
    $(window).on("load resize", changeConnectorHeight);
    function changeConnectorHeight(){
      if (path.split('/')[path.split('/').length-2]==="fullstack") {
        firstBoxTopOffset=$(".courses_image").eq(0).offset().top;
        lastBoxTopOffset=$(".courses_image").eq($(".courses_image").length-1).offset().top;
        distanceBetween=lastBoxTopOffset-firstBoxTopOffset;
        $(".connectorStyle").text(".beauty-box .box:first-of-type::after{height:"+distanceBetween+"px}");
      }
    }
    changeConnectorHeight();
});
