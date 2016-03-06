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
    let publishedTemplate = "<li>" +"published: "+news[i].published+ "</li>"+"<hr>";

    //push templates to cache
    titleCache.push(titleTemplate);
    publishCache.push(publishedTemplate); 
  } 


  //...This function caches and outputs data until
  //...the threshold is reached
  function initialDataHandler (){ 
    let newCache =[];

    for(let i = 0; i<titleCache.length; i++){
      let hopperH = $('.hopper').height();
      let threshold = $('.app').height();

      if(hopperH < threshold){
        $('.hopper').append(titleCache[i]+publishCache[i]);
        newCache.push(i);
      }
   }

   //...caches and loads when scrolling
   //...until titleCache and publishCache are done iterating
    function feed(){
      $('.app').bind('scroll', function(){
      if($(this).scrollTop()+$(this).height() >= $('.hopper')[0].scrollHeight){
        console.log(newCache);
         let length = newCache.length;

        for(let i = length; i<length+1; i++){
          $('.hopper').append(titleCache[i]+publishCache[i]);
          newCache.push(i);
          console.log(length);
        }
      }
    })
  }
  feed();
}
  
  initialDataHandler();
});


