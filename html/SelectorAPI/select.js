var i = 0;
function selectFirstOdd() {
    var selectedRow = document.querySelector('li.odd');
    selectedRow.style.color = 'Red';
}

function selectFirstEven() {
    var selectedRow = document.querySelector('li.even');
    selectedRow.style.color = 'Green';
}

function selectAllOdd() {
    var selectedRows = document.querySelectorAll('li.odd');
    for(i = 0; i < selectedRows.length; i++) {
        selectedRows[i].style.color = 'Red';
    }
}

function selectAllEven() {
    var selectedRows = document.querySelectorAll('li.even');
    for(i = 0; i < selectedRows.length; i++) {
        selectedRows[i].style.color = 'Green';
    }
}

function selectAll() {
    var selectedRows = document.querySelectorAll('li.odd, li.even');
    for(i = 0; i < selectedRows.length; i++) {
        selectedRows[i].style.color = 'Blue';
    }
}