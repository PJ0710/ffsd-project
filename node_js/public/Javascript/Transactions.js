$("#manual").on("click", function() {
    document.getElementById("tab").style.visibility = "visible";
})

$("#close").on("click", function() {
    document.getElementById("tab").style.visibility = "hidden";
})

let i = 1;
$('#new_row').on('click', function() {
    $('#tbl').append('<tr><td><input type="date" name="date' + i++ + '" id="Date"></td><td><input type="text" name="ticker" id="Ticker"></td><td><select id="select" name="select"><option value="Buy">Buy</option><option value="Sell">Sell</option></select></td><td><input type="text" name="quantity" id="Quantity"></td><td><input type="number" name="price" id="Price"></td><td><input type="number" name="total" id="Total"></td></tr>');
})

$('#delete_row').on('click', function() {
    if($('#tbl tr').length > 1) {
        $('#tbl tr:last').remove();
    }
})

// const x = document.getElementById("import");

// x.addEventListener("change",()=>{

// })
