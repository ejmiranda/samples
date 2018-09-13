const MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

let mountains = document.getElementById(`mountains`);
mountains.appendChild(createTableFromArrayOfObjects(MOUNTAINS));

function createTableFromArrayOfObjects(objects) {
  let table = document.createElement(`table`);
  let isHeader = true;
  for (let object of objects) {
    if (isHeader) {
      let headerRow = document.createElement(`tr`);  
      let headerStrings = Object.keys(object);
      headerStrings.forEach((headerString) => {
        let headerCell = document.createElement(`th`);
        let headerText = headerString.charAt(0).toUpperCase() + headerString.slice(1).toLowerCase();
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
      });  
      table.appendChild(headerRow);
      isHeader = false;  
    }
    let row = document.createElement(`tr`);
    for (let key in object) {
      let cell = document.createElement(`td`);
      cell.textContent = object[key];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  return table;
}



