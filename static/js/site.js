$(function() {
    $('#login').click(function() {
        $('#login-panel').show();
        $('#login').addClass('active');
    });


    $('#signup').click(function() {
        $('#signup-panel').show();
        $('#signup').addClass('active');
    });

    $(document).mouseup(function(e) {
        var container = $("#signup-panel, #login-panel");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
            $('#signup, #login').removeClass('active');
        }
    });

    $('.select').each(function() {
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option:selected').text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            $("#language-selector").submit();
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });

	
});