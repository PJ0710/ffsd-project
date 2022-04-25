let i = 0;

$(document).ready(function () {
   
     $("#sidebarCollapse").on('click', function () {
      $("#sidebar").toggleClass('active');
     
   });
   
});


document.getElementById("plus").addEventListener("click", function () 
{
      
   
   $("#naming_port").modal();
  
   console.log("ddd"+i);
   
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
   let list = document.getElementsByClassName("port");

  
   for(let i=1; i<=list.length; i++)
   {
      const para = document.getElementById("para"+i).innerHTML;
      console.log(para);
      const result = await fetch('/profile/Sanju064',{
         method : 'POST',
         headers: {
            'Content-Type':'application/json',
         },

         body: JSON.stringify({para}),
      });
   }
   // location.href="/transactions";
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

