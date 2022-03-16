let i = 0;

$(document).ready(function () {

     $("#sidebarCollapse").on('click', function () {
      $("#sidebar").toggleClass('active');

   });
});


document.getElementById("plus").addEventListener("click", function () 
{
   
   
   let li = document.createElement("li");
   i++;
   $("#naming_port").modal();
 
   let idi = "para" + i;

   li.setAttribute("id", "para" + i);
   
   $("#save_ch").on("click",function()
   {
      li.innerHTML= document.getElementById("nic_port").value;
      
      $('#naming_port').modal('hide');
      document.getElementById("homeSubmenu").appendChild(li);

   })
   console.log(i);
   console.log(document.getElementById("para"+i));
   
   // document.getElementById("homeSubmenu").appendChild(x);

   for (let j = 1; j <= i; j++) {
      
      $("#para"+j).on("click", function () {
         $("#exampleModalCenter").modal();
      })

   }
});

document.getElementById("delete").addEventListener("click", function () {

   
   if (i >= 1) 
   {
      document.getElementById("para" + i).remove();
      i--;
   }

});


