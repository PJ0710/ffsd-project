$("#manual").on("click", function() {
    document.getElementById("tab").style.visibility = "visible";
    window.i = 0;
})

$("#close").on("click", function() {
    document.getElementById("tab").style.visibility = "hidden";
})

$('#new_row').on('click', function(e) {
    e.preventDefault();
    $('#tbl').append('<tr><td><input class="record" type="date" name="date' + window.i + '" id="Date' + window.i + '"></td><td><input type="text" name="ticker' + window.i + '" id="Ticker' + window.i + '"></td><td><select id="select' + window.i + '" name="select' + window.i + '"><option value="Buy">Buy</option><option value="Sell">Sell</option></select></td><td><input type="text" name="quantity' + window.i + '" id="Quantity' + window.i + '"></td><td><input type="number" name="price' + window.i + '" id="Price' + window.i + '"></td><td><input type="number" name="total' + window.i + '" id="Total' + window.i + '"></td></tr>');
    window.i++;
})

$('#delete_row').on('click', function(e) {
    e.preventDefault();
    window.i--;
    if($('#tbl tr').length > 1) {
        $('#tbl tr:last').remove();
    }
})

// async function check(event)
// {
//     event.preventDefault();
//     const form= document.getElementById("trans_form");
//     // const form_data=new FormData(form)
//     // console.log(form_data);
//     console.log(event.target.elements);
//         // const username = document.getElementById('username').value
//         // const password = document.getElementById('password').value
       
//             const result = await fetch('/transactions', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body:  JSON.stringify(new FormData(form)) 
//             })

//             let resp = await result.json();
//             console.log(resp);
// }

document.getElementById("add_data").addEventListener("click",async function(e){
    e.preventDefault();
    let list = document.getElementsByClassName("record");
    console.log(list.length);
    for(let i = 0; i < list.length; i++){
        const date = document.getElementById("Date" + i).value;
        const ticker = document.getElementById("Ticker" + i).value;
        const select = document.getElementById("select" + i).value;
        const quantity = document.getElementById("Quantity"+i).value;
        const price = document.getElementById("Price"+i).value;
        const total = document.getElementById("Total"+i).value;
        console.log(ticker);
        const result = await fetch('/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify({date,ticker,select,quantity,price,total})
            })
    }
    // let resp = await result.json();
    // console.log(resp);
})
// const x = document.getElementById("import");
const x = document.getElementById("import");

x.addEventListener("change",()=>{
    window.i = 0;
    const fr = new FileReader();
    fr.onloadend = e => {
        let r = fr.result.split("\n").map(e => {
            return e.split(",");
        });
        r.forEach((e,index) => {
            window.i++;
            console.log(window.i);
            let m = e.map(e => {
                return `<td>${e}</td>`;
            }).join("");
            const ce = document.createElement("tr");
            let d = e[2]==='Buy'?`<option value="Buy" selected>Buy</option><option value="Sell">Sell</option>`:`<option value="Buy">Buy</option><option value="Sell" selected>Sell</option>`;
            ce.innerHTML = '<tr><td><input type="date" name="date' + index + '" id="Date' + index + '" value="'+ e[0] + '"></td><td><input type="text" name="ticker' + index + '" id="Ticker' + index + '" value="'+ e[1] + '"></td><td><select id="select' + index + '" name="select' + index + '">'+d+'</select></td><td><input type="text" name="quantity' + index + '" id="Quantity' + index + '" value="'+ e[3] + '"></td><td><input type="number" name="price' + index + '" id="Price' + index + '" value="'+ e[4] + '"></td><td><input type="number" name="total' + index + '" id="Total' + index + '" value="'+ e[5].replace(/[\n\r]/g,'')+ '"></td></tr>';

            if (ce.innerText !== "") {
                $('#tbl').append(ce);
            }
        });
    }
    fr.readAsText(x.files[0]);
    document.getElementById("tab").style.visibility = "visible";
})
