(()=>{'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const modal=$('[data-auth-modal]'),registerForm=$('[data-register-preview]'),loginForm=$('[data-login-preview]');
function closeAuth(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
function openAuth(mode='register'){modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';const form=mode==='login'?loginForm:registerForm;setTimeout(()=>form?.querySelector('input')?.focus(),40)}
$$('[data-open-auth]').forEach(button=>button.addEventListener('click',()=>openAuth(button.dataset.openAuth||'register')));
$$('[data-close-auth]').forEach(button=>button.addEventListener('click',closeAuth));
$('[data-focus-register]')?.addEventListener('click',()=>registerForm?.querySelector('input')?.focus());
registerForm?.addEventListener('submit',event=>{event.preventDefault();const msg=$('[data-register-msg]');msg.textContent='هذه نسخة عرض عامة؛ لا يتم إرسال أو حفظ بيانات التسجيل هنا. التسجيل الحقيقي يعمل فقط على خادم PHP/MySQL الإنتاجي.';registerForm.querySelectorAll('input[type=password]').forEach(input=>input.value='')});
loginForm?.addEventListener('submit',event=>{event.preventDefault();const msg=$('[data-login-msg]');msg.textContent='هذه نسخة عرض عامة؛ لا يتم إرسال بيانات الدخول هنا. استخدم رابط الإنتاج عند إطلاق المنصة رسميًا.';loginForm.querySelectorAll('input[type=password]').forEach(input=>input.value='')});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeAuth()});
})();
