document.documentElement.classList.add('js');
const header=document.querySelector('.top');const menu=document.querySelector('.menu');const links=document.querySelector('.links');
menu?.addEventListener('click',()=>links?.classList.toggle('open'));
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>30),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());