import"./assets/styles-71744e92.js";const e=document.querySelector(".feedback-form");e.addEventListener("input",a=>{const t={email:e.elements.email.value,message:e.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))});document.addEventListener("DOMContentLoaded",()=>{const a=localStorage.getItem("feedback-form-state");if(a){const t=JSON.parse(a);e.elements.email.value=t.email,e.elements.message.value=t.message}});e.addEventListener("submit",a=>{a.preventDefault();const t=e.elements.email.value.trim(),s=e.elements.message.value.trim();if(t===""||s===""){alert("Поля форми не можуть бути порожніми.");return}console.log({email:t,message:s}),localStorage.removeItem("feedback-form-state"),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map