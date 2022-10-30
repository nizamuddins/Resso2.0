// -------------
let body = $("body")
window.addEventListener('keydown', (e) => {  
    if (e.keyCode === 32 && e.target === document.body) {  
      e.preventDefault();  
    }  
});


$(document).keydown((event)=> {
    if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
            event.preventDefault();
         }
        // 107 Num Key  +
        // 109 Num Key  -
        // 173 Min Key  hyphen/underscore key
        // 61 Plus key  +/= key
    });
    
    $(window).bind('mousewheel DOMMouseScroll',  (event)=> {
           if (event.ctrlKey == true) {
           event.preventDefault();
           }
});


let width = window.innerWidth;

if(width < 1230){


$("#home").remove();
body.css("background-color","#fff");
body.text("Error!");
}

window.addEventListener("resize",(e)=>{
    if(window.innerWidth < 1426){
        $("#home").remove();
        body.text("Error!");
        body.css("background-color","#fff");
    }
})
