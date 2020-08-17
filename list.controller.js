var htmlList = document.getElementById('listItem');
var addBtn = document.getElementById('btn-add');


addBtn.addEventListener('click',addToList);
htmlList.addEventListener('click', onListClicked);
var todoList = [{
    value: "Hello from Earth-1",
    status: 0
}
];


function onListClicked(event){
    var button = event.target;
    if (button.dataset.hasOwnProperty('delete')) {
        var deleteId = parseInt(button.dataset['delete']);
        todoList.splice(deleteId,1);
    };
    if (button.dataset.hasOwnProperty('complete')){
        var completeId = parseInt(button.dataset['complete']);
        todoList[completeId].status = 1 - todoList[completeId].status;
    }
    render();
}

function addToList() {
    var input = document.getElementById('item');
    var newItem = {
        value: input.value,
        status: 0
    }
    todoList.push(newItem);
    render();
    input.value = '';
}

function render() {
    var content = todoList.map(function(item,i){
        if (!item.status)
        return '<li class="d-flex justify-content-center align-items-center"><div data-complete="'+i+'" class="alert alert-secondary btn-fake">'+item.value+'</div><div class="mb-3 ml-3"><i data-delete="'+i+'" class=" text-danger fa fa-times btn-fake" style="font-size: 24px"></i></div></li>';
        else return '<li class="d-flex justify-content-center align-items-center completed"><div data-complete="'+i+'" class="alert alert-secondary btn-fake">'+item.value+'</div><div class="mb-3 ml-3"><i data-delete="'+i+'" class=" text-danger fa fa-times btn-fake" style="font-size: 24px"></i></div></li>'
    });
    htmlList.innerHTML = content.join('');
}

render();