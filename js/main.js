import $ from 'jquery';


//AJAX Call
let url = 'http://www.stellarbiotechnologies.com/media/press-releases/json';
let promise = $.getJSON(url);


//returns a promise
promise.then((data)=> {
  console.log('success');
  let news = data.news;


//cache results
let titleCache = [];
let publishCache = [];

  for(let i = 0; i<news.length; i++){

    //declare templates
    let titleTemplate = "<h3>" + news[i].title + "</h3>";
    let publishedTemplate = "<li>" +"published: "+news[i].published+ "</li>";

    //push templates to cache
    titleCache.push(titleTemplate);
    publishCache.push(publishedTemplate); 
  } 


  console.log(titleCache.length);

  function scrollHandler (){ 
    for(let i = 0; i<titleCache.length; i++){
      let hopperH = $('.hopper').height();
      let threshold = $('.app').height();

      if(hopperH < threshold){
        $('.hopper').append(titleCache[i]+publishCache[i]);
        console.log(hopperH);
      }
    }
  }

  function endHandler(){
      $('.app').bind('scroll', function(){
      if($(this).scrollTop()+$(this).innerHeight() >= $('.hopper')[0].scrollHeight){
        for(let i = 3; i<100; i++){
          $('.hopper').append(titleCache[i]+publishCache[i]);
        }
      }
    })
  }
  scrollHandler();
  endHandler();

});


