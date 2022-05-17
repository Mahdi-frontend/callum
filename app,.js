// menue
const hamMenue = document.getElementById('ham');
const mainMenue = document.querySelector('div.main-menue');
let flag = true;
hamMenue.addEventListener('click',()=>{
    mainMenue.classList.toggle('flex')
    mainMenue.classList.toggle('animation')
    if(flag){
        hamMenue.classList.replace('bi-list','bi-x')
        flag = false;
    }
    else{
        hamMenue.classList.replace('bi-x','bi-list');
        flag = true;
    }
})
// changer

const title = document.getElementById('changer');
let flag2 = true
setInterval(()=>{
    if(flag2){
        title.textContent = 'Web Designer'
        flag2 = false;
    }
    else{
        title.textContent = 'Front wevelop'
        flag2 = true;
    }
},3000)
// color switcher

const colorSwitch = document.querySelector('div.color-switcher');
let falg3 = true;
colorSwitch.addEventListener('click',()=>{
    if(falg3){
        colorSwitch.style.right = '0'
        falg3 = false;
    }
    else{
        colorSwitch.style.right = '-6%';
        falg3 = true;
    }
})

// element who has a color classes 

const head = document.querySelector('div.head');
const springGreen = document.querySelector('div.spring-green ');
const defultYellow = document.querySelector('div.defult');
const limePunch = document.querySelector('div.lime-punch');
const About = document.getElementById('About');
const number = document.getElementById('exper');
const NNname = document.querySelector('span#name');
const svgFill = document.querySelectorAll('div.svg-cont svg')
const whatI = document.getElementById('whatI')
const progressBar = document.querySelectorAll('div.pro-skill');
springGreen.addEventListener('click',()=>{
    head.style.backgroundColor = '#00fe9c'
    About.style.backgroundColor = '#00fe9c';
    number.style.backgroundColor = '#00fe9c'
    NNname.style.borderBottom = '4px solid #00fe9c'
    for (const i of svgFill) {
        i.style.fill = '#00fe9c'
    };
    whatI.style.backgroundColor = '#00fe9c';
    for (const pp of progressBar) {
        pp.style.backgroundColor = '#00fe9c'
    }
});
defultYellow.addEventListener('click',()=>{
    head.style.backgroundColor = '#f5df4e'
    About.style.backgroundColor = '#f5df4e';
    number.style.backgroundColor = '#f5df4e'
    NNname.style.borderBottom = '4px solid #f5df4e'
    for (const i of svgFill) {
        i.style.fill = '#f5df4e'
    };
    whatI.style.backgroundColor = '#f5df4e'
    for (const pp of progressBar) {
        pp.style.backgroundColor = '#f5df4e'
    }
});
limePunch.addEventListener('click',()=>{
    head.style.backgroundColor = '#d6ed17';
    About.style.backgroundColor = '#d6ed17';
    number.style.backgroundColor = '#d6ed17'
    NNname.style.borderBottom = '4px solid #d6ed17'
    for (const i of svgFill) {
        i.style.fill = '#d6ed17'
    };
    whatI.style.backgroundColor = '#d6ed17';
    for (const pp of progressBar) {
        pp.style.backgroundColor = '#d6ed17'
    }

})





// change images

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const forth = document.getElementById('forth');
const fifth = document.getElementById('fifth');
const sixth = document.getElementById('sixth');
const images = document.getElementById('images')
const webSite = document.getElementById('website');
const vime = document.getElementById('vime');
const video = document.getElementById('video')

images.addEventListener('click',()=>{
    first.style.display = 'flex'
    second.style.display = 'flex'
    third.style.display = 'flex'
    forth.style.display = 'flex'
    fifth.style.display = 'flex'
    sixth.style.display = 'flex'
})
webSite.addEventListener('click',()=>{
    sixth.style.display = 'none';
    forth.style.display = 'none'
})
vime.addEventListener('click',()=>{
    sixth.style.display = 'none';
    forth.style.display = 'none'
    second.style.display = 'none'
})
video.addEventListener('click',()=>{
    sixth.style.display = 'none';
    forth.style.display = 'none'
    first.style.display = 'none'
    second.style.display = 'none'
})






