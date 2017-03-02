// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navBar = document.getElementById("navBar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navBar.className = "bar" + " card-2" + " animate-top" + " blue";
    } else {
        navBar.className = navBar.className.replace(" card-2 animate-top blue", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else {
        x.className = x.className.replace(" show", "");
    }
}
