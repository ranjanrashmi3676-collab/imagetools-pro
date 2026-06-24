// ===== ImageTools Pro =====

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link=>{
link.addEventListener("click",e=>{
e.preventDefault();
const target=document.querySelector(link.getAttribute("href"));
if(target){
target.scrollIntoView({
behavior:"smooth"
});
}
});
});

// Reveal animation
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".card,.hero,.ads").forEach(el=>{
el.classList.add("hidden");
observer.observe(el);
});

// Add animation CSS
const style=document.createElement("style");

style.innerHTML=`

.hidden{
opacity:0;
transform:translateY(60px);
transition:all .8s ease;
}

.show{
opacity:1;
transform:translateY(0);
}

.card{
cursor:pointer;
}

.card:hover{
transform:translateY(-10px) scale(1.03);
}

.glow{
position:fixed;
width:350px;
height:350px;
border-radius:50%;
background:#00e5ff33;
filter:blur(100px);
pointer-events:none;
transform:translate(-50%,-50%);
z-index:-1;
}

`;

document.head.appendChild(style);

// Mouse glow effect
const glow=document.createElement("div");
glow.className="glow";
document.body.appendChild(glow);

document.addEventListener("mousemove",e=>{
glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";
});

// Typing effect
const title=document.querySelector(".hero h1");

const text=title.innerText;

title.innerText="";

let i=0;

function typing(){

if(i<text.length){

title.innerText+=text.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();

console.log("ImageTools Pro Loaded Successfully");