'use strict';

let taskFinished = e =>{
    let index = e.target.parentNode.getAttribute('data-todo-point');
    let task=todoData[index].name;
    doneData.push(task);
    localStorage.setItem('doneData', JSON.stringify(doneData));
    generateDoneList();
};



let deleteTODO = (e, parent) => {
    let doYouWannaDeleteThis = confirm('Are you sure?');
    if (doYouWannaDeleteThis) {
        let index = e.target.parentNode.getAttribute('data-todo-point');

        todoData.splice(index, 1);
        localStorage.setItem('todoData', JSON.stringify(todoData));
        $(parent).empty();
        generateTODOlist();

    } else {
        generateTODOlist();
        console.log('canceled')
    }

};

let editTODO = e => {
    let editInput = `
    <form name='editForm' id="editForm">
        <h2>Edit</h2>
        <label for="todo-form-name-edit">Todo</label>
        <input type="text" id="todo-form-name-edit" class="form-control" placeholder="Todo what?">
    </form>`;
    $("#modal-content-").empty().html(editInput);
    $('#my-modal').modal('show');
    let editInputName = $('#todo-form-name-edit');
    let index = e.target.parentNode.getAttribute('data-todo-point');
    $(editInputName).val(todoData[index].name);
    $('#modal-save').click( () => {
        if (!isEmpty($(editInputName).val())) {

            todoData[index].name = $(editInputName).val();
            localStorage.setItem('todoData', JSON.stringify(todoData));
            generateTODOlist();
            $('#my-modal').modal('hide');
        } else {
            console.log('error');
        }
    })


};

let downThisPriority = e => {
    let index = e.target.parentNode.getAttribute('data-todo-point');

    let currentPriority = todoData[index].todoPriority;
    let minPriority = priorities[0];
    if (currentPriority === minPriority) {
        return;
    }

    let curIndex = priorities.indexOf(currentPriority);
    todoData[index].todoPriority = priorities[--curIndex];
    localStorage.setItem('todoData', JSON.stringify(todoData));
};

let upThisPriority = e => {
    let index = e.target.parentNode.getAttribute('data-todo-point');
    let currentPriority = todoData[index].todoPriority;
    let maxPriority = priorities[priorities.length - 1];
    if (currentPriority === maxPriority) {
        return;
    }

    let curIndex = priorities.indexOf(currentPriority);
    todoData[index].todoPriority = priorities[++curIndex];
    localStorage.setItem('todoData', JSON.stringify(todoData));
};

let changeThisStatus = e => {
    let index = e.target.parentNode.getAttribute('data-todo-point');
    if (todoData[index].status === statuses[0]) {
        todoData[index].status = statuses[1];
    } else {
        todoData[index].status = statuses[0];
    }
    localStorage.setItem('todoData', JSON.stringify(todoData));
};

let createActionButtons = (todoPointDiv, row) => {

    let upPriority = $('<input/>', {
        type: 'button',
        value: 'Up priority',
        click: e => {
            upThisPriority(e);
            generateTODOlist();
        }
    }).addClass('action-btn btn btn-info');

    let downPriority = $('<input/>', {
        type: 'button',
        value: 'Down priority',
        click: e => {
            downThisPriority(e);
            generateTODOlist();
        }
    }).addClass('action-btn btn btn-info');



    let todoDone = $('<input/>', {
        type: 'button',
        value: 'It is done',
        click: e => {

            taskFinished(e);
            deleteTODO(e, row);
        }
    }).addClass('action-btn btn btn-primary');


    let changeStatus = $('<input/>', {
        type: 'button',
        value: 'Change status',
        click: e => {
            changeThisStatus(e);
            generateTODOlist();
        }
    }).addClass('action-btn btn btn-secondary');



    let todoEdit = $('<input/>', {
        type: 'button',
        value: 'Edit',
        click: e => {
            editTODO(e);
        }
    }).addClass('action-btn btn btn-warning');

    let todoDelete = $('<input/>', {
        type: 'button',
        value: 'Delete',
        click: e => {
            deleteTODO(e, row);
        }
    }).addClass('action-btn btn btn-danger');

    todoPointDiv.append(upPriority);
    todoPointDiv.append(downPriority);
    todoPointDiv.append(todoDone);
    todoPointDiv.append(changeStatus);
    todoPointDiv.append(todoEdit);
    todoPointDiv.append(todoDelete);
};
