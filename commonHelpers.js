import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i}from"./assets/vendor-bfb47a51.js";const a=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]"),l=document.querySelector("[data-days]"),m=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),h=document.querySelector("[data-seconds]");let r;n.disabled=!0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]-new Date<=0?(i.error({message:"Please choose a date in the future"}),n.disabled=!0):(r=e[0],n.disabled=!1)}};a.flatpickr(y);n.addEventListener("click",S);function S(){n.disabled=!0,a.disabled=!0;const e=setInterval(()=>{if(r-new Date>=0){const t=b(r-new Date);l.textContent=o(t.days),m.textContent=o(t.hours),f.textContent=o(t.minutes),h.textContent=o(t.seconds)}else clearInterval(e),a.disabled=!1},1e3)}function b(e){const s=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:d,minutes:c,seconds:u}}function o(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map