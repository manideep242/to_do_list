let array=[];
function addtoarray(){
    let  y=document.querySelector('.time');
   let x= document.querySelector('.input');
   array.push({
    name:x.value,
    duedate:y.value
   });
   x.value="";
   renderlist();
   y.value="";
  
}
let x= document.querySelector('.time');
console.log(array);
function renderlist(){
let list='';
for(let i=0;i<array.length;i++){
    const todolist=`<div>${array[i].name}</div><div>${array[i].duedate}</div><div><button class="delte-button" onclick="
        array.splice(${i},1);
        renderlist();
        
        ">Delete</button></div>`;
    list+=todolist;

}

document.querySelector('.js-output').innerHTML=list;
        }