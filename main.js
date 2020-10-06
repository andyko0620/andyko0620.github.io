const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const total = document.getElementById('total_count');
const LINE_THROUGH = "lineThrough";
var ID=0;

var LIST=[];

function addToDo(toDo,ID,done,remove){
    if(remove) return;
    const LINE = done ? LINE_THROUGH :"";
    const item =`<li class="todo-app__item">
                    <div class="todo-app__checkbox">
                        <input type="checkbox"  id="${ID}" >
                        <label for="${ID}" ></label>
                     </div>
                    <h1 class="todo-app__item-detail ${LINE}" id="text">${toDo}</h1>
                    <img src="img/x.png" class="todo-app__item-x">
                </li>
                `;
    const position = "beforeend";
    list.insertAdjacentHTML(position,item);
}

function completeToDo(element){
    element.parentNode.querySelector(".todo-app__item-detail").classList.toggle(LINE_THROUGH);
    LIST[element.ID].done = LIST[element.ID].done ? false:true;
}

list.addEventListener('click',function(event){
    const element = event.target;
});

input.addEventListener('keyup', event => {
    if(event.keyCode === 13 && event.target.value !== ''){
        const toDo = input.value;
        addToDo(toDo,ID,false,false);
        LIST.push({
            name :toDo,
            id: ID,
            done: false,
            remove: false
        });
        ID++;
        total.innerHTML=ID+" left";
        input.value="";
    }
});

