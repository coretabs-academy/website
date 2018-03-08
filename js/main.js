$(function(){
  $("details").removeAttr('open');
  $("body:not(.home)").prepend('<div class="dark--bg"></div>');
  $(".humberger-icon").on('click', function() {
    $("body").addClass('move');
    $("nav").addClass('move');
  });
  $("body").on('click', '.close svg',function() {
    $("body").removeClass('move');
    $("nav").removeClass('move');
  });
  $(".dark--bg").on('click',function() {
    $("body").removeClass('move');
    $("nav").removeClass('move');
  });


  var path=window.location.pathname;
  var currentPageNumber=Number(path.split('/')[path.split('/').length-1].split(".")[0]);
  var currentPage=path.split('/')[path.split('/').length-2];
  var next=$(".navigate").children().eq(1);
  var prev=$(".navigate").children().eq(0);
  if(currentPageNumber===1){
    prev.addClass('disabled');
    next.attr('href', (currentPageNumber+1)+'.html');
  }
  else if((currentPageNumber===14 && currentPage==="html_css") || (currentPageNumber===16 && currentPage==="javascript") || (currentPageNumber===11 && currentPage==="one_mac_project") || (currentPageNumber===15 && currentPage==="facebook_project")){
    next.addClass('disabled');
    prev.removeClass('disabled');
    prev.attr('href', (currentPageNumber-1)+'.html');
  }
  else{
    next.removeClass('disabled');
    prev.removeClass('disabled');
    next.attr('href', (currentPageNumber+1)+'.html');
    prev.attr('href', (currentPageNumber-1)+'.html');
  }
});
