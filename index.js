let slider=document.getElementById("slider");
let slide=document.getElementsByClassName("slide");
document.getElementById("next").addEventListener("click",next);
document.getElementById("prev").addEventListener("click",prev);
console.log(slider);
function next(){
    slider.appendChild(slide[0]);

}
function prev(){
    let pos=slider.firstElementChild;
    slider.insertBefore(slide[slide.length-1],pos);
}