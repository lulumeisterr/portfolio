const header=document.querySelector('[data-header]');
const menuButton=document.querySelector('[data-menu-toggle]');
const navLinks=document.querySelector('[data-nav-links]');
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelector('[data-year]').textContent=new Date().getFullYear();
const updateHeader=()=>header.classList.toggle('is-scrolled',window.scrollY>12);
updateHeader();
window.addEventListener('scroll',updateHeader,{passive:true});
menuButton.addEventListener('click',()=>{const isOpen=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!isOpen));menuButton.querySelector('.sr-only').textContent=isOpen?'Abrir menu':'Fechar menu';navLinks.classList.toggle('is-open',!isOpen)});
navLinks.addEventListener('click',event=>{if(event.target.closest('a')){menuButton.setAttribute('aria-expanded','false');menuButton.querySelector('.sr-only').textContent='Abrir menu';navLinks.classList.remove('is-open')}});
if(reduceMotion||!('IntersectionObserver'in window)){document.querySelectorAll('.reveal').forEach(element=>element.classList.add('is-visible'))}else{const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -40px'});document.querySelectorAll('.reveal').forEach(element=>observer.observe(element))}
