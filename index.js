const decreaseBtn=document.getElementById("decreaseButton");
const resetBtn=document.getElementById("Reset");
const addBtn=document.getElementById("addButton");
const countLabel=document.getElementById("countLabel");
let count=0;

addBtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}
decreaseBtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}
resetBtn.onclick=function(){
    count=0;
    countLabel.textContent=count
}
