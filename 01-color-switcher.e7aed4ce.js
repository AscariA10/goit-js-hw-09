const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");e.addEventListener("click",(function(){e.disabled=!0,n=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(function(){e.disabled=!1,clearInterval(n)}));let n=null;console.log(n);
//# sourceMappingURL=01-color-switcher.e7aed4ce.js.map
