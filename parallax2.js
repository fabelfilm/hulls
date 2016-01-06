/*
HTML:
scroll everything that has class "parallax".
data-parallax-level is the proximity to the viewer. 0=infinite distance; 10=good flow.

JS:
when scrolling starts, count all 
*/

;(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle ("scroll", "optimizedScroll");
    throttle ("resize", "optimizedResize");
})();

// handle event
window.addEventListener("optimizedScroll", function() {
    console.log("Resource conscious scroll callback!");
});
window.addEventListener("optimizedResize", function() {
    console.log("Resource conscious resize callback!");
});


/*

var scrolling = false;
var pages_positions = [];
var pages_special_positions = [];
var parallaxInterval;
var scrolly=0;
var scrolling = false;
var winh = window.innerHeight;
var winh2 = window.innerHeight/2;


window.onload = function(){
 winh = window.innerHeight;
 winh2 = window.innerHeight/2;
    scrolly=window.pageYOffset+winh2;
    var pc=document.getElementById("pagecontainer");
    pc.style.height=""+winh+"px"; 
window.onscroll=function(){if (!scrolling) initParallax();};
}
function initParallax(){
    winh = window.innerHeight;
    winh2 = window.innerHeight/2;
    if (!pages) { // collect the pages
        pages=document.querySelectorAll(".page");
        for (var i =0; i<pages.length; i++) pages_positions.push(getY(pages[i])+pages[i].clientHeight/2);
        for (var i =0; i<pages.length; i++) {
            if (pages[i].tagName=="IMG")
                pages_special_positions.push((0-sqrt(sqrt(sqrt(pages[i].width*pages[i].height)))/200*800/winh));
            else pages_special_positions.push((-1)/10/winh*800);
        }
    }
    parallaxInterval= setInterval(doParallax, 50);
    scrolling=true;
}

function doParallax(){
    for (var i =0; i<pages.length; i++) {
        var ydiff = scrolly-pages_positions[i];
        if (ydiff>winh2/5*4) ydiff-=winh2/5*4;
        else if (ydiff<0-winh2/5*4) ydiff+=winh2/5*4;
        else ydiff=0;
	translation=ydiff*ydiff*ydiff/40000*pages_special_positions[i];
        if (ydiff!=0&&Math.abs(ydiff)<winh) pages[i].style.transform="translate("+(translation*1)+"px, "+(translation*2)+"px)";
	else pages[i].style.transform="translate("+(0*1)+"px, "+(0*2)+"px)";
    }
    if (scrolly!=window.pageYOffset+winh2) scrolly=window.pageYOffset+winh2; else {clearInterval(parallaxInterval); scrolling = false;}
}


function getY(element) {
    var yPosition = 0;
    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return yPosition;
}

*/
