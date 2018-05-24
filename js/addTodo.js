'use strict';

let generateOptions = (arr, parent) => {
    arr.forEach((element)=> {

        let optionBlock = $('<option/>', {
            value: element
        }).html(element);
        parent.append(optionBlock);
    })
};

let generateForm = parent => {
    let form = `
    <form id="add-form">
        <label for="todo-form-name">Todo</label> <input type="text" id="todo-form-name" class="form-control" placeholder="Todo what?">
        <label for="todo-form-status">Status</label><select id="todo-form-status" class="form-control">

        </select>
         <label for="todo-form-priority">Priority</label><select id="todo-form-priority" class="form-control">

        </select>

    </form>`;

    parent.append(form);

    let statusParent=$('#todo-form-status');
    let priorityParent=$('#todo-form-priority');



    generateOptions(statuses, statusParent);
    generateOptions(priorities, priorityParent);


    let subBut = $('<input>', {
        type: 'button',
        id: 'add-form-subBut',
        value: 'Add',
        click: () => {
            $(parent).fadeToggle(1000);

            let taskName = $('#todo-form-name').val(),
                taskStatus = $('#todo-form-status').val(),
                taskPriority = $('#todo-form-priority').val();

            if (!isEmpty(taskName)) {

                todoData.push({
                    name: taskName,
                    status: taskStatus,
                    todoPriority: taskPriority
                });
                localStorage.setItem('todoData', JSON.stringify(todoData));
                generateTODOlist();
            } else {
                console.log('error');
            }
        }
    }).addClass('btn btn-info');

    $('#add-form').append(subBut);


};

let addTODO = () => {

    let parent = $('#add-block');
    let addBtn = $('<input>', {
        type: 'button',
        value: 'Add todo',
        id: 'add-button',
        click: () => {
            $(parent).fadeToggle(1000);
            $(parent).empty();

            $(parent).append(generateForm(parent));
        }
    }).addClass('btn btn-success form-control');

    $('#add-btn-div').append(addBtn);


};