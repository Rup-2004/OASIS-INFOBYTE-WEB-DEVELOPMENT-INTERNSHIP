var i=0;

function createToDo() {
    var createlist = document.querySelector('ul');
    var textarea=document.querySelector('#write-input').value;

    // Create the <li> element
    var li = document.createElement('li');
    li.classList.add('to-do-container');

    // Create the <p> element
    var p = document.createElement('p');
    var context= textarea;
    p.classList.add('paragraph');

    
    if(context===""){
        alert("No list is created as the input field is empty.Please Retry with some value inside the input field.")
        return;
    }else{
        p.textContent=context;
    }

    // Append the <p> and <button> to the <li>
    li.appendChild(p);
    

    // Append the <li> to the <ul>
    createlist.appendChild(li);
    
    createDelete(li);

    document.querySelector('#write-input').value="";


}

function createDelete(list){
    // Create the <button> element
    var button = document.createElement('button');
    button.id = 'cross-button';
    button.textContent = 'delete';

    list.appendChild(button);

    button.onclick=function(){
            list.remove();
    }
}

const button_mode=document.querySelector("#toggle-mode");
const span_mode=document.querySelector(".material-symbols-outlined");

function modeToggle(){
    if(document.body.classList.contains("lightmode")){
        document.body.classList.remove("lightmode");
        span_mode.innerHTML='\n dark_mode \n';
        document.body.classList.add("darkmode");
        console.log("1");
    }
    else{
        document.body.classList.remove("darkmode");
        span_mode.innerHTML='\n light_mode \n';
        document.body.classList.add("lightmode");
        console.log("2");
    }
    console.log(document.body.classList);
}

