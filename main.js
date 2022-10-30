//settig up variables.
let theInput = document.querySelector(".add-task input");
let theAddButton =  document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".task-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

//Focus on Input Field.
window.onload = function() {
    theInput.focus();
};

// Adding The Task.

theAddButton.onclick = function() {

    if( theInput.value === '') {
        console.log('No Value');
        
    }
    else{

    let noTasksMsg = document.querySelector(".no-tasks-message");

    if(document.body.contains(document.querySelector(".no-tasks-message"))){
        noTasksMsg.remove();

    }




let mainSpan = document.createElement('span');

/*mainSpan.innerText = theInput.value;*/


let text =document.createTextNode(theInput.value);

mainSpan.appendChild(text);

mainSpan.className= 'task-box';

tasksContainer.appendChild(mainSpan);




let deleteSpan = document.createElement('span');

deleteSpan.innerText = "Delete";

deleteSpan.className = 'delete';

mainSpan.appendChild(deleteSpan);



theInput.focus();
theInput.value='';

calculateTasks();



}

};


document.addEventListener('click', function(e){
 
    if(e.target.className =='delete'){

        e.target.parentNode.remove();
        calculateTasks();

        if(tasksContainer.childElementCount == 0){
            createNoTasks();

        }
    }

    if(e.target.classList.contains('task-box')){

        e.target.classList.toggle("finished");
        calculateTasks();
    }

   


});


function createNoTasks() {

    let msgSpan = document.createElement('span');
    

    let msgText = document.createTextNode("No Tasks To Show");

    msgSpan.appendChild(msgText);

    msgSpan.className='no-tasks-message';

    tasksContainer.appendChild(msgSpan);
    

};


function calculateTasks(){
    
    //calculate all tasks
    tasksCount.innerHTML = document.querySelectorAll('.task-content .task-box').length;

    //calculate completed tasks

    tasksCompleted.innerHTML = document.querySelectorAll('.task-content .finished').length;





};