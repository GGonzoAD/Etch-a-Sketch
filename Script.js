let Index;

function createColumn(size) {
    for (let i = 0; i < size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("column");
        newDiv.style.width = 600 / size + "px";
        console.log(newDiv);
        document.getElementById("grid-container").appendChild(newDiv);
        //createRow(size);
        Index = size;
    }
}

function createRow(size) {
    for (let j = 0; j < size; j++) {
        let newRow = document.createElement("div");
        newRow.classList.add("cell-row");
        newRow.style.height = 600 / size + "px";
        console.log(newRow);
        let columns = document.querySelectorAll(".column");
        columns[Index].appendChild(newRow);
    }
}

createColumn(16);
createRow(16);