import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as o}from"./assets/vendor-bfb47a51.js";const t=document.querySelector("[name='delay']"),c=document.querySelector("[value='fulfilled']"),i=document.querySelector("[value='rejected']"),d=document.querySelector("button");d.addEventListener("click",u);function u(n){if(n.preventDefault(),t.value>=0&&(c.checked||i.checked)){let s=function(){o.success({message:`✅ Fulfilled promise in ${e}ms`})},l=function(){o.error({message:`❌ Rejected promise in ${e}ms`})};const e=t.value;new Promise((r,m)=>{setTimeout(()=>{c.checked&&(r(),console.log(`✅ Fulfilled promise in ${e}ms`)),i.checked&&(m(),console.log(`❌ Rejected promise in ${e}ms`))},e)}).then(s).catch(l)}else o.warning({message:"Enter valid delay time and choose state"})}
//# sourceMappingURL=commonHelpers2.js.map