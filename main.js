function myNav(){
let bar=document.getElementById("bars");
let nav=document.querySelector(".navigation")
bar.onclick=()=>{
    if(nav.style.right=="0%"){
        nav.style.right="-50%";
        bar.src="pic/menu.png";
    }
    else{
        nav.style.right="0%";
        bar.src="pic/x.png"
    }
}
}
myNav();


function Header(){
    let header=document.getElementById("header");
    let lamp=document.getElementById("lamp");
    window.addEventListener("scroll",()=>{
        if(window.scrollY>0){
            header.classList.add("active");
            lamp.src="pic/bulb2.png";
        }
        else{
            header.classList.remove("active");
            lamp.src="pic/bulb.png";
        }
    })
}
Header();


function myFun(){
    let plus=document.querySelector(".plus");
    let textBox=document.querySelector(".text-box");
    plus.onclick=()=>{
        textBox.classList.toggle("active");
        plus.classList.toggle("img_active");
    }
}

 myFun()

 function myVideo(){
    let links = document.querySelector(".link_a");
    let overs = document.querySelector(".bg-show .overlay");
    let exit = document.querySelector(".cancel");
    let player = document.querySelector(".player");
    let videos = document.getElementById("video");
    links.onclick = (ed)=>{
        ed.preventDefault();
        overs.style.display = "block"
    }
    exit.onclick = ()=>{
        overs.style.display = "none"
    }
    player.onclick = ()=>{
        if(videos.paused){
            videos.play();
            player.src = "pic/pause.png"
        }else{
            videos.pause();
            player.src = "pic/play.png"
        }
    }
}
myVideo();