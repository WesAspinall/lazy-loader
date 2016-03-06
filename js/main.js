import $ from 'jquery';


//AJAX Call
let url = 'http://www.stellarbiotechnologies.com/media/press-releases/json';
let promise = $.getJSON(url);


//returns a promise
promise.then((data)=> {
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
  //insert initial HTML content
  $('.app').append(titleCache);
  $('.app').append(publishCache);

});

function endHandler(){
  $('.app').bind('scroll', function(){
    if($(this).scrollTop()+$(this).innerHeight() >= $(this)[0].scrollHeight){
      console.log('end reached');

    }
  })
};

endHandler(); 

