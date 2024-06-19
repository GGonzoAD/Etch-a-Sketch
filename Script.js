var container = document.getElementById("container");

function createColumn(size){
    for(let i = 0; i < size; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("column");
        newDiv.style.width = 600/size + "px";
        document.getElementById("grid-container").appendChild(newDiv);
        createRow(size);
    }
}

function createRow(size){
    for(let i = 0; i < size; i++){
        let newRow = document.createElement("div");
        newRow.classList.add("cell-row");
        newRow.style.width = 600/size + "px";
        document.getElementById("grid-container").appendChild(newRow);
        createRow(size);
    }
}

createColumn(16);