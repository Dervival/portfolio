'use strict';
//Scriptlet to try and rotate background images in top background
let srcArray = ['../../images/300px-Binary_search_tree.png','../../images/todoList.jpg','../../images/dog-duck.jpg'];
var showIndex = 0;
renderSlideshow();

function renderSlideshow(){
  showIndex = showIndex % srcArray.length;

  $('#introImageSlideShow > img')
    .fadeOut(function(){
      $('#introImageSlideShow > img').attr('src', srcArray[showIndex++])
        .fadeIn('slow',function(){
          setTimeout(renderSlideshow,1000);
        });
    });
}
