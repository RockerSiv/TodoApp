'use strict';
let priorities = [];
let statuses = [];

let doneDataDefault = [];

let todoDataDefault = [
    {
        name: 'Drink water',
        status: 'Open',
        todoPriority: 'Minor'
    },
    {
        name: 'Find work',
        status: 'In progress...',
        todoPriority: 'Low'
    }
];

isExist('todoData', todoDataDefault);
isExist('doneData', doneDataDefault);
