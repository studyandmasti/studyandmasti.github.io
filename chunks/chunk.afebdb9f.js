(function(){const d=window,n=document.documentElement;n.classList.remove("no-js"),n.classList.add("js"),document.body.classList.contains("has-animations")&&(window.sr=ScrollReveal()).reveal(".hero-title, .hero-paragraph, .hero-form",{duration:1e3,distance:"40px",easing:"cubic-bezier(0.5, -0.01, 0, 1.005)",origin:"bottom",interval:150});const m=document.querySelectorAll(".is-moving-object");function f(s,e){let t=null,a=e;return(...o)=>{let r=Date.now();(!t||r-t>=a)&&(t=r,s.apply(this,o))}}let g=0,u=0,p=0,l=0,c=0,v=n.clientWidth,h=n.clientHeight;function y(s,e){g=s.pageX,u=s.pageY,p=d.scrollY,l=v/2-g,c=h/2-(u-p);for(let t=0;t<e.length;t++){const a=e[t].getAttribute("data-translating-factor")||20,o=e[t].getAttribute("data-rotating-factor")||20,r=e[t].getAttribute("data-perspective")||500;let i=[];e[t].classList.contains("is-translating")&&i.push("translate("+l/a+"px, "+c/a+"px)"),e[t].classList.contains("is-rotating")&&i.push("perspective("+r+"px) rotateY("+-l/o+"deg) rotateX("+c/o+"deg)"),(e[t].classList.contains("is-translating")||e[t].classList.contains("is-rotating"))&&(i=i.join(" "),e[t].style.transform=i,e[t].style.transition="transform 1s ease-out",e[t].style.transformStyle="preserve-3d",e[t].style.backfaceVisibility="hidden")}}m&&d.addEventListener("mousemove",f(function(s){y(s,m)},150))})();
