import $ from 'jquery';


let url = 'http://www.stellarbiotechnologies.com/media/press-releases/json';
//AJAX Call
let promise = $.getJSON(url);


promise.then((data)=> {
  let news = data.news;

  for(let i = 0; i < 5; i++){
    let titleTemplate = "<h3>" + news[i].title + "</h3>";
    let publishedTemplate = "<li>" +"published: "+news[i].published+ "</li>";
    $('.lazy').append(titleTemplate)
    $('.lazy').append(publishedTemplate)
  }  
});

// scroll detection
$('.lazy').scroll(function(){

    let wintop = $('.lazy').scrollTop(), docheight = $(document).height(), winheight = $('.lazy').height();
    let  scrolltrigger = 0.95;

    console.log('wintop='+wintop);
    console.log('docheight='+docheight);
    console.log('winheight='+winheight);
    console.log(wintop+'=='+(docheight-winheight));
    console.log(wintop==(docheight-winheight));
    console.log('%scrolled='+(wintop/(docheight-winheight))*100);

    if  ((wintop/(docheight-winheight)) > scrolltrigger) {
       console.log('scroll bottom');
  
    }
});

console.log(2904/100);