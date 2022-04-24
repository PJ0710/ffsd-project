$("#manual").on("click", function() {
    document.getElementById("tab").style.visibility = "visible";
    window.i = 0;
})

$("#close").on("click", function() {
    document.getElementById("tab").style.visibility = "hidden";
})

$('#new_row').on('click', function(e) {
    e.preventDefault();
    window.i++;
    $('#tbl').append('<tr><td><input type="date" name="date' + window.i + '" id="Date' + window.i + '"></td><td><input type="text" name="ticker' + window.i + '" id="Ticker' + window.i + '"></td><td><select id="select' + window.i + '" name="select' + window.i + '"><option value="Buy">Buy</option><option value="Sell">Sell</option></select></td><td><input type="text" name="quantity' + window.i + '" id="Quantity' + window.i + '"></td><td><input type="number" name="price' + window.i + '" id="Price' + window.i + '"></td><td><input type="number" name="total' + window.i + '" id="Total' + window.i + '"></td></tr>');
})

$('#delete_row').on('click', function(e) {
    e.preventDefault();
    window.i--;
    if($('#tbl tr').length > 1) {
        $('#tbl tr:last').remove();
    }
})

async function check(event)
{
    event.preventDefault();
    const form= document.getElementById("trans_form");
    // const form_data=new FormData(form)
    // console.log(form_data);
    console.log(event.target.elements);
        // const username = document.getElementById('username').value
        // const password = document.getElementById('password').value
       
            const result = await fetch('/transactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:  JSON.stringify(new FormData(form)) 
            })

            let resp = await result.json();
            console.log(resp);
}
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
