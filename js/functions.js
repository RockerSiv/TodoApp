'use strict';

let isEmpty = str => {
    return !Boolean(str);
};

let clearDoneList = () => {
    $('#clear-btn').click(()=> {
        $('#done-list').empty();
        localStorage.removeItem('doneData');
    });

};

let isExist = (key, value) => {
    if (!JSON.parse(localStorage.getItem(key))) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

let sendTasksToServer = () =>{
    $("#send-to-server").click(()=>{
        $.ajax({
            type: "POST",
            url: "https//avadakentavra.hogvarts.com.ua",
            data: todoData
        });
    });
};

