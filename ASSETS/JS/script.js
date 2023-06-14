let LI = document.querySelector(".LI")
LI.addEventListener('click', Desc);

function Desc(){
let info = document.querySelector(".info");
if(info.classList.contains("displayNone")===true){
    info.classList.remove("displayNone");
    info.classList.add("display")
    LI.style.color="#00f";
} else if (info.classList.contains("display")){
    info.classList.add("displayNone");
    info.classList.remove("display")
    LI.style.color="#515151";
}
}


let behindImg = document.querySelector(".behindImg");
behindImg.addEventListener('click', Show2);
let showImg2 = document.querySelector(".showImg2");

let cameraImg = document.querySelector(".cameraImg");
let showImg3 = document.querySelector(".showImg3");

let frontImg = document.querySelector(".frontImg");
let showImg1 = document.querySelector(".showImg1");

frontImg.addEventListener('click', Show1);

function Show1(){
    showImg1.classList.remove("displayNone");
    showImg1.classList.add("display");
    showImg2.classList.add("displayNone");
   showImg3.classList.add("displayNone");


}

function Show2(){
    
    if(showImg2.classList.contains("displayNone")===true){
        showImg2.classList.remove("displayNone");
        showImg2.classList.add("display");
        showImg1.classList.add("displayNone");
       showImg3.classList.add("displayNone");
    } 

 
}

cameraImg.addEventListener('click', Show3);

function Show3(){
    if(showImg3.classList.contains('displayNone')=== true){
        showImg3.classList.remove("displayNone");
        showImg3.classList.add("display");
        showImg1.classList.add("displayNone");
       showImg2.classList.add("displayNone");

    }

  
}


