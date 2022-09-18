function show(id) {
    element = document.getElementById(id);
    element.style.display = "block";
    lockScroll();
    hideScrollBar();
}

function hide(id) {
    element=document.getElementById(id);
    element.style.display = "none";
    releaseScroll();
    showScrollBar();
}


function lockScroll() {
    var x = window.pageXOffset;
    var y = window.pageYOffset;

    window.onscroll = function() {
        window.scrollTo(x,y);
    }

    document.getElementById("page").onscroll= function() {
        window.scrollTo(x,y);
    }
}

function releaseScroll() {
    window.onscroll = function() {
    }
 
    document.getElementById("page").onscroll= function() {
        window.scrollTo(x,y);
    }
}

function hideScrollBar() {
    parent = document.getElementById("body");
    child = document.getElementById("page");


    child.style.boxSizing = "content-box";
    child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";
}

function showScrollBar() {
    parent = document.getElementById("body");
    child = document.getElementById("page");

    child.style.boxSizing = ""
    child.style.paddingRight = "";
}
