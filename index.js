const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var relatedIconRight = $('.related-btn-right');
var relatedIcon = $('.related-btn');
var related = $('.related');
var shopIcon1 = $('.shop-btn');
var shopIcon2 = $('.shop-btn-2');
var underline = document.getElementsByClassName('header-item-link');
var underline2 = document.getElementsByClassName('first-item-link');


for (let i = 0; i < underline.length; i++) {
  var spans = underline[i].getElementsByTagName('span');
  spans[0].insertAdjacentHTML("beforeend", `<div class="header-underline-2"></div>`)
}

for (let index = 0; index < underline2.length; index++) {
  var span = underline2[index].getElementsByTagName('span');
  span[0].insertAdjacentHTML("beforeend", `<div class="header-underline-2"></div>`)
}


relatedIconRight.addEventListener("click", function() {
    related.style.transition = "0.4s ease-out";
    related.style.right = "-285px";
    relatedIcon.classList.remove("not-active");
    this.classList.add("not-active");
    shopIcon2.classList.remove("not-active");
    shopIcon1.classList.add("not-active");
});

relatedIcon.addEventListener("click", function() {
    related.style.transition = "0.4s ease-out";
    related.style.right = "0";
    relatedIconRight.classList.remove("not-active");
    this.classList.add("not-active");
    shopIcon2.classList.add("not-active");
    shopIcon1.classList.remove("not-active");
});