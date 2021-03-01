// Grab the data from data.js and store it in a variable
var tableData = data;

// Get a reference to where the tablebody is in the html code
tableBody = d3.select("tbody")

// function to add a row for each data Item and get the key and value pairs for each entry
function toTable(dataGroup){
    dataGroup.forEach(dataItem => {

    // Add a row for each item in the dataset
    var tableRow = tableBody.append("tr");
    // get the key and value pair for later use
    Object.entries(dataItem).forEach(function([key, value]) {
        // console.log(key, value);
      
// add multiple cells for each row
    var rowCell = tableRow.append("td");
// add the text to each cell
    rowCell.text(value)
    })
})
};
// make sure that when you first open the site all of the data is showing
toTable(tableData)

// Get the user input and store it in a variable
var form = d3.select("#form");

// store the button as a variable
var submitButton = d3.select("#filter-btn")

// when the button is clicked or the form is submitted run the function
submitButton.on("click", searchData);
form.on("submit", searchData);

// create the function that will filter the data when the button is clicked
function searchData() {
    // clear the whole table when searching for data so it can be updated
    d3.select("tbody").selectAll("tr").remove();
    d3.event.preventDefault();
    
    // gather the users input
    var userInput = d3.select("#datetime");
    
    // get the text that the user input
    var userInputValue = userInput.property("value");
    
    // filter the data so that we can get all of the rows that have the date that the user selected
    var dateFilter = tableData.filter(tableItem => tableItem.datetime === userInputValue);
    
    // check if the data is correct
    // console.log(dateFilter)
    // use the to table function to put only the rows that the user selected into the table
    toTable(dateFilter)

    // if the filter is blank just return all of the rows
    if (userInputValue === ""){
        toTable(tableData)
    }
};




