'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;
const topPos = (fieldWidth - spiderWidth) / 2;
const leftPos = (fieldHeight - spiderHeight) / 2;

spider.style.top = topPos + 'px';
spider.style.left = leftPos + 'px';
