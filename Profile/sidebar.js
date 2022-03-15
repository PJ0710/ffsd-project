let i = 0;

$(document).ready(function () {

     $("#sidebarCollapse").on('click', function () {
      $("#sidebar").toggleClass('active');

   });
});


document.getElementById("plus").addEventListener("click", function () 
{
   
   i++;
   let li = document.createElement("li");
   li.innerHTML = "PortFolio " + i;
   let idi = "para" + i;
 
   li.setAttribute("id", "para" + i);

   document.getElementById("homeSubmenu").appendChild(li);

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


$("#launch_btn").on("click", function () {
   $("#exampleModalCenter").modal();
})