document.readyState === 'complete' ? init() : window.onload = init;

function init() {
    // Array of user names to populate the ComboBox
    var users = 'Chloe Hunt,Patrick Russel,Alisa Malone,Kendal Herbert'.split(',');
    // Creates ComboBox and binds to data
    var theCombo = new wijmo.input.ComboBox('#userDropdown', {
        itemsSource: users,
        placeholder: "User",
        text: "test",
    });
}