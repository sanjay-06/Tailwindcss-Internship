const menu=document.getElementById("menu");
const menubar=document.getElementById("menubar");
const showmore=document.getElementById("show");
const load=document.getElementById("load");
const less=document.getElementById("less");
const visibilty=document.getElementById("vis");
const visibilty1=document.getElementById("vis1");


menu.addEventListener('click',()=>{
    if(menubar.classList.contains('hidden'))
    {
        menubar.classList.remove('hidden');
        visibilty.classList.remove('invisible');
        visibilty1.classList.remove('invisible');
    }
    else
    {
        menubar.classList.add('hidden');
        visibilty.classList.add('invisible');
        visibilty1.classList.add('invisible');
    }
})

load.addEventListener('click',()=>{
    if(showmore.classList.contains('hidden'))
    {
        showmore.classList.remove('hidden');
        showmore.classList.add('grid');
        load.classList.add('hidden');
        less.classList.remove('hidden');
        less.classList.add('flex');
    }
})

less.addEventListener('click',()=>{
    showmore.classList.add('hidden');
    showmore.classList.remove('grid');
    load.classList.remove('hidden');
    less.classList.add('hidden');
    less.classList.remove('flex');   
})
