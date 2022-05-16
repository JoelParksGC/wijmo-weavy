document.readyState === 'complete' ? init() : window.onload = init;

function init() {
    // Array of countries used to populate data
    var countries = 'US,Germany,UK,Japan,Italy,Greece,China,Russia,France,Italy,Mexico,India'.split(',');
    var data = [];
    // Loops through to create a data object for each country
    for (var i = 0; i < countries.length; i++) {
        data.push({
            id: i,
            country: countries[i],
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000
        });
    }
    // Creates FlexGrid and binds it to data
    var flexGrid = new wijmo.grid.FlexGrid('#theGrid', {
        autoGenerateColumns: false,
        // Defines the width and numeric format of the columns
        columns: [
            { binding: 'country', header: 'Country', width: '2*' },
            { binding: 'sales', header: 'Sales', width: '*', format: 'c2' },
            { binding: 'expenses', header: 'Expenses', width: '*', format: 'c2' }
        ],
        itemsSource: data
    });

    // Creates FlexChart and binds it to data
    var flexChart = new wijmo.chart.FlexChart('#theChart', {
        itemsSource: data,
        header: 'Sales and Expenses by Country',
        legend: { position: wijmo.chart.Position.Bottom },
        // Binds the X axis of the FlexChart
        bindingX: 'country',
        // Binds the series of data to be displayed
        series: [
            { binding: 'sales', name: 'Sales' },
            { binding: 'expenses', name: 'Expenses' }
        ],
        // Sets the color palette
        palette: ['rgb(22, 186, 208)', 'rgb(62, 207, 142)']
    });

    // Gets the JWT used for Weavy
    function getJWTToken() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", 'http://localhost:3000/token', false);
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }

    // JSONWebToken
    var jwt = getJWTToken();

    console.log(jwt);
}