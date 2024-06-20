function createColumn(size) {
    for (let i = 0; i < size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("column");
        newDiv.style.width = 600 / size + "px";
        console.log(newDiv);
        document.getElementById("grid-container").appendChild(newDiv);
        

        function createRow(size) {
            for (let j = 0; j < size; j++) {
                let newRow = document.createElement("div");
                newRow.classList.add("cell");
                newRow.style.height = 600 / size + "px";
                console.log(newRow);
                let columns = document.querySelectorAll(".column");
                columns[i].appendChild(newRow);
            }
        }
      createRow(size);
    }
    
}




createColumn(16);
