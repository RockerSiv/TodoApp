'use strict';
addTODO();
generateTODOlist();
generateDoneList();
clearDoneList();
$('#add-block').hide();
sendTasksToServer();
let spinnerParent = '#my-spinner-modal';
$(spinnerParent).modal({
    backdrop: 'static',
    keyboard: false
});
setTimeout(()=>$(spinnerParent).modal('hide'), 2000);

