let expr="";
const display=document.getElementById("displayText");

function render(){
display.innerHTML='';
[...expr].forEach((c,i)=>{
const s=document.createElement('span');
s.className='char';
s.style.animationDelay=(i*0.01)+'s';
s.textContent=c;
display.appendChild(s);
});
}

function append(v){
expr+=v;
render();
}

function clearDisplay(){
expr='';
render();
}

function backspace(){
expr=expr.slice(0,-1);
render();
}

function calculate(){
try{
expr=String(eval(expr));
render();
}catch{
expr='Error';
render();
}
}

document.addEventListener('keydown',e=>{
let k=e.key;
if(/[0-9]/.test(k)||['+','-','*','/','.','(',')'].includes(k)) append(k);
if(k==='Enter') calculate();
if(k==='Backspace') backspace();
if(k==='Escape') clearDisplay();
});
