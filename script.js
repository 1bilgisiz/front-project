const inputDiv = document.querySelector('.inputDiv');
const input =document.getElementById('input');
const button = document.getElementById('buttonekle');


const contentDiv = document.querySelector('.contentDiv');

button.addEventListener('click', go);

function go(){
    if(input.value !==""){
        var paragraf = document.createElement('p');
        var deletebutton= document.createElement('div');
        deletebutton.classList.add('deleteButton');
        deletebutton.innerText='Sil';
        paragraf.innerText=input.value;
        contentDiv.appendChild(paragraf);
        paragraf.appendChild(deletebutton);

        input.value="";

        deletebutton.addEventListener('click',function(){

            contentDiv.removeChild(paragraf);
        }
        );
    }
}