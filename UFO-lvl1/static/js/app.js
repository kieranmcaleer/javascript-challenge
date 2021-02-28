// Grab the data from data.js and store it in a variable
var tableData = data;

// Get a reference to where the tablebody is in the html code
tableBody = d3.select("tbody")

// add a row for each data Item and get the key and value pairs for each entry
tableData.forEach(dataItem => {
    tableBody.append("tr")
    Object.entries(dataItem).forEach(function([key, value]) {
        console.log(key, value);
      });
});
