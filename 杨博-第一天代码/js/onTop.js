

var header3 =document.querySelector('.header3');
var topDis = getAllTop(header3);
window.onscroll = function(e) {
  var nowTop = document.documentElement.scrollTop || document.body.scrollTop;
  if(nowTop >= topDis) {
    header3.style.position = 'fixed';
    header3.style.marginTop = 0;
  }else {
    header3.style.position = 'relative';
    header3.style.marginTop = topDis + 'px';
  }
};

function getAllTop(obj) {
  var allTop = obj.offsetTop;
  while(obj = obj.offsetParent) {
    allTop += obj.offsetTop;
  }
  return allTop;
}