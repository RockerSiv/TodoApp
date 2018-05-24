'use strict';
let todoParent = $('#todo-list');
let generateDoneList = () => {

    let parent = $('#done-list');
    parent.empty();

    doneData.forEach(doneTask=> {
        let taskNameDiv = $('<div>').addClass('doneTask todoName').html(doneTask);
        parent.append(taskNameDiv);
    });


};
let generateTODOlist = () => {
    $(todoParent).empty();
    let row = $('<div/>').addClass('myRow');
    todoData.forEach((todoPoint, i)=> {
        let todoPointDiv = $('<div/>', {
            'data-todo-point': i
        }).addClass('todoPoint col-lg-4 text-center');

        let todoPointName = $('<div/>').addClass('todoName').html(todoPoint.name);
        let todoPointStatus = $('<div/>').addClass('todoStatus').html(`Status: ${todoPoint.status}`);
        let todoPointPriority = $('<div/>').addClass('todoPriority').html(`${todoPoint.todoPriority} priority`);

        todoPointDiv.append(todoPointName);
        todoPointDiv.append(todoPointStatus);
        todoPointDiv.append(todoPointPriority);

        createActionButtons(todoPointDiv, row);

        $(row).append(todoPointDiv);
    });

    todoParent.append(row);

};

