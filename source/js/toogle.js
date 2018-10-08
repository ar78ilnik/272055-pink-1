'use strict';

var nav = document.querySelector('.main-nav__wrapper');
var toggle = document.querySelector('.main-nav__toggle');
var pageheaderwrapper = document.querySelector('.intro--index');

nav.classList.add('main-nav__wrapper_top');
nav.classList.toggle('main-nav__wrapper--closed');

pageheaderwrapper.classList.add('page-header__wrapper--index');

toggle.addEventListener('click', function() {
  nav.classList.toggle('main-nav__wrapper--closed');
  toggle.classList.toggle('main-nav__toggle--closed');
});
