//initialize function called when script loads
function initialize() {
    cities();
};

//Example 2.3 line 6...function to create a table with cities and their populations
function cities() {
    //define an array of objects for cities and population
    var cityPop = [
        {
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    //create a table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>")    //I don't fully understand this line

    //add the header row
    table.appendChild(headerRow);

    //Example 2.3 line 41...loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++) {
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";  //I don't fully understand this line either. What are the td and tr tags doing?
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend', rowHtml);
    };

    //add the table to the div in index.html
    var mydiv = document.querySelector("#mydiv").appendChild(table).style.color = 'red';

    /*
    //get the text color and add it as text to the div
    var thecolor = document.querySelector('#myDiv').style.color;
    document.querySelector('#myDiv').insertAdjacentHTML('beforeend', thecolor);
    */

    //Added below Example 3.8...
    //click listener with anonymous handler function
    document.querySelector("table").addEventListener("click", function () {
        alert('Madison Rocks! Go Badgers!');
    });


    /*
    //named handler function for removable listener
    function clickme() {
        alert('Yeah Green Bay! Go Packers!');
    };
    */

    //add the event listener
    document.querySelector("table").addEventListener('click', clickme);
    /*

    //Added at Example 3.5 line 44...
    //get the div id
    var theid = document.querySelector('#myDiv').getAttribute('id');

    //theid is 'myDiv'; add it as text to the div
    document.querySelector('#myDiv').insertAdjacentHTML('beforeend', theid);

    //add the class 'foo' to the div
    document.querySelector('#myDiv').setAttribute('class', 'foo');

    //Check your work with the Inspector!
    */
};

window.onload = initialize();