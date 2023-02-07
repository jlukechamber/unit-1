function initialize() {
	cities();
};

function cities() {
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

	//add the header row
	table.appendChild(headerRow);

	//add the "City" and "Population" columns to the header row
	headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>")

	//for loop to add new row for each city
	for (var i = 0; i < cityPop.length; i++) {
		//assign longer html strings to a variable
		var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
		//add the row's html string to the table
		table.insertAdjacentHTML('beforeend', rowHtml);
	};

	//add the table to the div in index.html
	var mydiv = document.querySelector("#mydiv").appendChild(table);

	//call functions
	addColumns(cityPop);
	addEvents();
};

function addColumns(cityPop) {
	//for each loop to add columns to the table
	document.querySelectorAll("tr").forEach(function (row, i) {

		if (i == 0) {

			row.insertAdjacentHTML('beforeend', '<th>City Size</th>'); //this inserts a new bit of text "City Size" into the header diz th
		} else {

			var citySize;
			//loops through the rows and adds a city size (small, medium, or large) depending on the population value
			if (cityPop[i - 1].population < 100000) {
				citySize = 'Small';

			} else if (cityPop[i - 1].population < 500000) {
				citySize = 'Medium';

			} else {
				citySize = 'Large';
			};

			//insert the citySize value into the td div
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
		};
	});
};

function addEvents() {

	table = document.querySelector("table");

	table.addEventListener("mouseover", function () {
		//style color rgb format is 'rgb(xxx, xxx, xxx)'
		var color = "rgb(";
		//create a loop to add three random numbers to the rgb format
		for (var i = 0; i < 3; i++) {
			//random number rounded to nearest whole number times 255 (max number for rgb format)
			var random = Math.round(Math.random() * 255);
			//append random number to color format
			color += random;
			//if this is the first or second number, add a comma
			if (i < 2) {
				color += ",";
				//if it is the third number add an end parenthetical
			} else {
				color += ")";
			};
			//change the color of the table by accessing the style property. 
			//we don't need "document.queryselector" in this line because it is already in the table variable
			//changing css style property "color"
			table.style.color = color;
		};
	});

	function clickme() {

		alert('Hey, you clicked me!');
	};

	//runs the function "clickme" when the table is clicked
	table.addEventListener("click", clickme)

};

document.addEventListener('DOMContentLoaded', initialize)