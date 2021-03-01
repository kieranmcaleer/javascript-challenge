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
        // console.log(key, value);
      
// add multiple cells for each row
    var rowCell = tableRow.append("td");
// add the text to each cell
    rowCell.text(value)
    })
});

// creating a function to search the data by date

// Get the user input and store it in a variable
var form = d3.select("#form");

// store the button as a variable
var submitButton = d3.select("#filter-btn")

// when the button is clicked or the form is submitted run the function
submitButton.on("click", searchData);
form.on("submit", searchData);

// create the function that will filter the data when the button is clicked
function searchData() {
    d3.event.preventDefault();
    
    var userInput = d3.select("#datetime");
    
    // get the text that the user input
    var userInputValue = userInput.property("value");
    
    var dateFilter = tableData.filter(tableItem => tableItem.date === userInputValue);
    
    console.log(dateFilter)




};




