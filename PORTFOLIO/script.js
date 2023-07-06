const text1=document.querySelector(".multiText");

const txtload = ()=>{
    setTimeout(()=>{
        text1.textContent="Developer.";
    },0);
    setTimeout(()=>{
        text1.textContent="Coder.";
    },3500);
    setTimeout(()=>{
        text1.textContent="designer.";
    },7000);
}

txtload();
setInterval(txtload, 10500);