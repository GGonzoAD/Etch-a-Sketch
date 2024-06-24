function createColumn(size) {
    let gridContainer = document.querySelector("#grid-container")
      for(let col = 0; col < size; col++){
        let column = document.createElement('div')
        column.className = 'row'
        for(let row = 0; row < size; row++){
          let cell =  document.createElement('div')
          cell.className = 'cell'
          column.appendChild(cell)
        }
        gridContainer.appendChild(column)
      }
  }



createColumn(16);
