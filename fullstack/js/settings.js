var converter = new showdown.Converter();

$(function() {
    var topicsJSON, quizJSON;
    var categoryTitle, topicTitle, quizTitle;
    
    var lang = Cookies.get('lang');
    if (lang === undefined) { lang = "ar"; }
    if (lang == "ar") { $(".lang").html("EN"); } else { $(".lang").html("عربي"); }
    $(".navbar-brand").on("click", ".lang", function(event){
        if (lang == "ar") { Cookies.set('lang', 'en', { expires: 365 }); } else { Cookies.set('lang', 'ar', { expires: 365 }); }
        location.reload();
    });
    
    $(".container aside").html("<p>loading ...</p>");
    $.ajax({
        type: "GET",
        url: "https://rawgit.com/coretabs-academy/fullstack-tutorials/master/topics.json",
        success: function(response) {
            topicsJSON = response;
            $(".container aside").empty();
            $.each(topicsJSON.categories, function(index, category) {
                if (lang == "ar") { categoryTitle = category["title-ar"]; } else { categoryTitle = category["title-en"]; }
                
                $(".navbar-nav nav").append("<a data-idx='" + index + "'>" + categoryTitle + "</a>");
                if (index == 0) {
                    $.each(category.topics, function(index, topic) {
                        if (lang == "ar") { topicTitle = topic["title-ar"]; quizTitle="اختبار"; } else { topicTitle = topic["title-en"]; quizTitle="َQuiz"; }
                        $(".container aside").append("<p><a class='topic' data-id='" + topic.id + "'>" + topicTitle + "</a></p>");
                        if (topic.quiz == "true") {
                            $(".container aside").append("<p><a class='quiz' data-id='" + topic.id + "'>" + quizTitle + ": " + topicTitle + "</a></p>");
                        }
                    });
                }
            });
        }
    });
    
    $(".navbar-nav nav").on("click", "a", function(event){
        $(".container aside, .cooked").empty();

        var idx = $(this).attr("data-idx");

        $.each(topicsJSON.categories, function(index, category) {
            if (lang == "ar") { categoryTitle = category["title-ar"]; } else { categoryTitle = category["title-en"]; }

            if (index == idx) {
                $.each(category.topics, function(index, topic) {
                    if (lang == "ar") { topicTitle = topic["title-ar"]; quizTitle="اختبار"; } else { topicTitle = topic["title-en"]; quizTitle="َQuiz"; }
                    $(".container aside").append("<p><a class='topic' data-id='" + topic.id + "'>" + topicTitle + "</a></p>");
                    if (topic.quiz == "true") {
                        $(".container aside").append("<p><a class='quiz' data-id='" + topic.id + "'>" + quizTitle + ": " + topicTitle + "</a></p>");
                    }
                });
            }
        });
    });

    $("aside").on("click", "a.topic", function(event) {
        $("aside a").removeClass("active");
        $(this).addClass("active");
        $(".cooked").html("<p>loading ...</p>");

        var id = $(this).attr("data-id");
        var title = $(this).attr("data-category");

        var youtube = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g;
        var link = /(?!\S+youtube\.com|youtu\.be)(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        
        $.get(topicsJSON.host + id + "/topic-" + lang + ".txt", function(markdown) {
            markdown = markdown.replace(youtube, "<iframe width='420' height='345' src='http://www.youtube.com/embed/$1' frameborder='0' allowfullscreen></iframe>");
            markdown = markdown.replace(link, "<a href='$1' target='_blank'>$1</a>");
            var html = converter.makeHtml(markdown);
            $(".cooked").html(html);
            $(".cooked img").each(function () {
                var src = $(this).attr("src")
                $(this).attr("src", topicsJSON.host + topic.id + "/" + src);
            })
        }, 'text');
    });

    $("aside").on("click", "a.quiz", function(event){
        $("aside a").removeClass("active");
        $(this).addClass("active");
        $(".cooked").html("<p>loading ...</p>");

        var id = $(this).attr("data-id");
        
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
            }
        });
    });

    $(document).on('submit', '.quiz-form', function(event) {
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
});