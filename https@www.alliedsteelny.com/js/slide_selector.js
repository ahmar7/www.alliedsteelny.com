$(document).ready(function(){var maxSlides=$('div[data-slide-ref]').length;function createCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}
else var expires="";document.cookie=name+"="+value+expires+"; path=/";}
function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;}
function eraseCookie(name){createCookie(name,"",-1);}
var curSlide;if(readCookie('slide')==null){createCookie('slide',1,1);}else{curSlide=parseInt(readCookie('slide'));$('.refresh-slides').removeClass('active');$('div[data-slide-ref="'+curSlide+'"]').addClass('active');eraseCookie('slide');if(curSlide<maxSlides){createCookie('slide',curSlide+1,1);}else{createCookie('slide',1,1);}}});