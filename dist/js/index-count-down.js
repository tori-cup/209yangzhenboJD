!function(e){var l=e(".time")[0];console.log(e(".time"));var a=l.children[0],a=l.children[2],a=l.children[4];function n(e){var n=new Date,o=Math.floor((e-n)/1e3),r=Math.floor(o/3600),e=Math.floor(o/60%60),n=Math.floor(o%60);function t(e){return e<10?0+e:e}r=t(r),e=t(e),n=t(n),console.log(r,e,n,o),l.innerText=r,a.innerText=e,oTime3.innerText=n,console.log("aa")}var o=new Date("2020/11/30 12:00:00");n(o);setInterval(function(){n(o)},1e3)}(jQuery);