!function(){var t,e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");console.log(e),console.log(o),e.addEventListener("click",(function(){e.disabled=!0,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),o.addEventListener("click",(function(){e.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.335b291e.js.map