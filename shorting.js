ham=document.querySelector('.hamburger');
nav=document.querySelector('nav');
rescon=document.querySelector('.rescont');
ham.addEventListener('click',(e) =>{
    if(e.target === ham){
        nav.classList.toggle('active');
    }
})
short=document.querySelector('.shorting > input');
form=document.forms[0];
temp=/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
form.addEventListener('submit',(e) =>{
    if(short.value == '' || !temp.test(short.value)){
        e.preventDefault();
        short.setAttribute('placeholder','please put a valid email!!!!!');
        short.classList.add('active');
    }
    else{
        short.classList.remove('active');
        e.preventDefault();
        link=document.createElement('p');
        link.textContent = short.value;
        result=document.createElement('div');
        result.style.cssText='display:flex; justify-content:space-between; align-items: center;';
        result.appendChild(link);
        last=document.createElement('div');
        shortlink=document.createElement('p')
        shortlink.textContent = `https://relink.${Math.random().toString(36).substring(2,7)}`;
        copy=document.createElement('a');
        last.className='end';
        last.appendChild(shortlink)
        copy.textContent = 'Copy';
        last.appendChild(copy);
        result.appendChild(last);
        l=rescon.appendChild(result);
    }
})
document.addEventListener('click',(e) =>{
    let copybtn=document.querySelectorAll('.end a');
    end=document.querySelectorAll('.end p');
    removeactive(copybtn);
    for(i=0;i<copybtn.length;i++){
        if(e.target == copybtn[i]){
            copybtn[i].textContent = 'copied!!';
            navigator.clipboard.writeText(end[i].textContent)
            copybtn[i].classList.add('active');
        }
}
})
function removeactive(s){
    for(i=0;i<s.length;i++){
        if(s[i].className='active'){
            s[i].classList.remove('active');
            s[i].textContent='Copy';
        }
    }
}