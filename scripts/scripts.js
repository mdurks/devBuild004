


// Helper outline * class

var e_html = document.getElementsByTagName("html")[0];
function KeyPress(n) { var t = window.event ? event : n; t.keyCode == 90 && t.shiftKey && t.altKey && e_html.classList.toggle("outlineHelper") }
document.onkeydown = KeyPress;



// Mobile burger menu

document.getElementsByClassName("nav__burgerBtn")[0].addEventListener("click", toggle_mobile_menu);
document.getElementsByClassName("nav__close_mobile_menu")[0].addEventListener("click", toggle_mobile_menu);

function toggle_mobile_menu()
{
    var target = document.getElementsByClassName("nav")[0]
    target.classList.toggle('nav--menu_open');
}
