$("#manual").on("click", function() {
    document.getElementById("tab").style.visibility = "visible";
})

$("#close").on("click", function() {
    document.getElementById("tab").style.visibility = "hidden";
})

let i = 1;
$('#new_row').on('click', function() {
    $('#tbl').append('<tr><td><input type="date" name="date' + i++ + '" id="Date' + i++ + '"></td><td><input type="text" name="ticker' + i++ + '" id="Ticker' + i++ + '"></td><td><select id="select' + i++ + '" name="select' + i++ + '"><option value="Buy">Buy</option><option value="Sell">Sell</option></select></td><td><input type="text" name="quantity' + i++ + '" id="Quantity' + i++ + '"></td><td><input type="number" name="price' + i++ + '" id="Price' + i++ + '"></td><td><input type="number" name="total' + i++ + '" id="Total' + i++ + '"></td></tr>');
})

$('#delete_row').on('click', function() {
    if($('#tbl tr').length > 1) {
        $('#tbl tr:last').remove();
    }
})

// const x = document.getElementById("import");

// x.addEventListener("change",()=>{
//     const fr = new FileReader();
//     fr.onloadend = e => {
//         let r = fr.result.split("\n").map(e => {
//             return e.split(",");
//         });
//         r.forEach(e => {
//             let m = e.map(e => {
//                 return `<td>${e}</td>`;
//             }).join("");
//             const ce = document.createElement("tr");
//             ce.innerHTML = m;

//             if (ce.innerText !== "") {
//                 document.getElementById("tbl1").append(ce);
//             }
//         });
//     }
//     fr.readAsText(x.files[0]);
// })
