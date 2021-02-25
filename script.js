let elem = document.querySelectorAll('.nav__menu_item');
for(let i = 0; i < elem.length; i++) {
    elem[i].addEventListener('mouseenter', showSub, false);
    elem[i].addEventListener('mouseleave', hideSub, false);
}

function showSub() {
    if(this.children.length > 1) {
        this.children[1].style.height = "auto";
        this.children[1].style.overflow = "visible";
        this.children[1].style.opacity = "1";
  
    } else {
        return false;
    }
}

function hideSub() {
    if(this.children.length > 1) {
        this.children[1].style.height = "0px";
        this.children[1].style.overflow = "hidden";
        this.children[1].style.opacity = "0";
    } else {
        return false;
    }
}