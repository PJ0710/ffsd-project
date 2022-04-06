$("#manual").on("click", function() {
    document.getElementById("tab").style.visibility = "visible";
})

$("#close").on("click", function() {
    document.getElementById("tab").style.visibility = "hidden";
})

$('#new_row').on('click', function() {
    $('#tbl').append('<tr><td><input type="date" id="Date"></td><td><input type="text" id="Ticker"></td><td><select id="select"><option value="Buy">Buy</option><option value="Sell">Sell</option></select></td><td><input type="text" id="Quantity"></td><td><input type="number" id="Price"></td><td><input type="number" id="Total"></td></tr>');
})

$('#delete_row').on('click', function() {
    if($('#tbl tr').length > 1) {
        $('#tbl tr:last').remove();
    }
})