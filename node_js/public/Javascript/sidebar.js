let i = 0;

$(document).ready(function () {
   
     $("#sidebarCollapse").on('click', function () {
      $("#sidebar").toggleClass('active');
     
   });
   
});


document.getElementById("plus").addEventListener("click", function () 
{
      
   
   $("#naming_port").modal();
  
   // console.log("ddd"+i);
   
});

$("#save_ch").on("click",function()
{
   i++;
   let li = document.createElement("li");
   li.setAttribute("id", "para" + i);
   li.setAttribute("class","port");
   document.getElementById("homeSubmenu").appendChild(li);
   li=document.getElementById("para"+i);
   li.innerHTML= document.getElementById("nic_port").value;
   $('#naming_port').modal('hide');
   // console.log(document.getElementById("para"+i).value);
   let el=document.getElementById("para"+i)

if(el)
{
   el.addEventListener("click",function()
{
      $("#exampleModalCenter").modal();
})
}

})

// $("#transactions").on("click",function()
// {
// location.href="/transactions";
// })


document.getElementById("transactions").addEventListener("click",async function(e)
{
   e.preventDefault();
   // let list = document.getElementsByClassName("port");
   // console.log(list.length)
  
   // for(let i=1; i<=list.length; i++)
   // {
   //    const para = document.getElementById("para"+i).innerHTML;
   //    console.log(para);
      
   //    const result = await fetch('/profile/Sanju064',{
   //       method : 'POST',
   //       headers: {
   //          'Content-Type':'application/json',
   //       },

   //       body: JSON.stringify({para}),
   //    });
   // }
   // }
   // if(i===list.length-1)
   // {
   //      let resp = await result.json();
   //     console.log(resp); 
   //     if(resp.redirect)
   //     {
   //         location.assign(resp.redirect);
   //     }
   // }
   location.href="/transactions";
})



// document.getElementById("delete").addEventListener("click", function () {


//    $("#delet").modal();
//    console.log("hello" + i);
//    $("#delete_ch").on("click",function()
//    {
//    for(let k=i;k>=1;k--)
//    {
//       console.log("see me "+document.getElementById("para"+k).innerHTML)
//       console.log("input "+ document.getElementById("dele_port").innerHTML)
//    if(document.getElementById("dele_port").innerHTML===document.getElementById("para"+k).innerHTML);
//    {
//       document.getElementById("para" + k).remove();
//    }
   
//    }

//    })
// })

let table = document.getElementById("example");
let tblData = [];

for (r = 0; r < table.rows.length; r++) 
{   
      let row = table.rows[r];
      let rowData = {};
      for (c = 0; c < row.cells.length; c++) 
      {
         rowData[c] = row.cells[c].innerHTML;
      }
      tblData.push(rowData);
}
console.log(tblData);
console.log(tblData.length);
let c1=0;
let c2=0;
let c3=0;
let c4=0;
let c5=0;
for(i=1;i<=20;i++){
   if(tblData[i][2] === "Buy"){
      c1++;
   }
   else if(tblData[i][2] === "Sell"){
      c1--;
   }
}
console.log(c1);
for(i=21;i<=40;i++){
   if(tblData[i][2] === "Buy"){
      c2++;
   }
   else if(tblData[i][2] === "Sell"){
      c2--;
   }
}
for(i=41;i<=60;i++){
   if(tblData[i][2] === "Buy"){
      c3++;
   }
   else if(tblData[i][2] === "Sell"){
      c3--;
   }
}
for(i=61;i<=80;i++){
   if(tblData[i][2] === "Buy"){
      c4++;
   }
   else if(tblData[i][2] === "Sell"){
      c4--;
   }
}
for(i=81;i<99;i++){
   if(tblData[i][2] === "Buy"){
      c5++;
   }
   else if(tblData[i][2] === "Sell"){
      c5--;
   }
}
console.log(c1,c2,c3,c4,c5);

let ctx = document.getElementById('pg').getContext('2d');
let chart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ["5", "10", "15", "20", "25", "30"],
    datasets: [{
			label: "No. of stocks",
			backgroundColor: 'lightblue',
			borderColor: 'royalblue',
			data: [0,c1, c2, c3, c4, c5],
		}]
	},

	options: {
    layout: {
      padding: 10,
    },
		legend: {
			position: 'bottom',
		},
		title: {
			display: true,
			text: 'Portfolio Growth'
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Stocks in number'
				}
			}],
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Day of the Month'
				}
			}]
		}
	}
});

var oilCanvas = document.getElementById("pb");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
    labels: [
        "WIPRO",
        "LUMAXIND",
        "JBCHEPHARM",
        "MARKSANS",
        "ADVENZYMES"
    ],
    datasets: [
        {
            data: [133.3, 86.2, 52.2, 51.2, 50.2],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF"
            ]
        }]
};

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData
});