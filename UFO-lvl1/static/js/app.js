// Grab the data from data.js and store it in a variable
var tableData = data;

// Get a reference to where the tablebody is in the html code
tableBody = d3.select("tbody")

// add a row for each data Item and get the key and value pairs for each entry
tableData.forEach(dataItem => {

    // Add a row for each item in the dataset
    var tableRow = tableBody.append("tr");
    // get the key and value pair for later use
    Object.entries(dataItem).forEach(function([key, value]) {
        console.log(key, value);
      
// add multiple cells for each row
    var rowCell = tableRow.append("td");
// add the text to each cell
    rowCell.text(value)
    })
});
