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
    hoverColor();
}


function hoverColor(){
  let Items = document.querySelectorAll('.cell');
  Items.forEach(Item => {
    Item.addEventListener('mouseover', () => {
      Item.style.backgroundColor = '#b464be';
    });
  }); 
}

let Size = document.querySelector('size');
function GridReset(){
  var answer = prompt("What grid size would you like?");
  parseInt(answer,10);
  Size = answer;
}

createColumn(16);
GridReset();