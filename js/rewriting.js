'use strict';

let todoData = JSON.parse(localStorage.getItem('todoData'));
let doneData = JSON.parse(localStorage.getItem('doneData'));

$.ajax({
    url: "prioritiesData.json"
}).done(response=> {
    priorities = response;
});

$.ajax({
    url: "statusesData.json"
}).done(response=> {
    statuses = response;
});