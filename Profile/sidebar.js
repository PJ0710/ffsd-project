let i = 0;

$(document).ready(function () {

     $("#sidebarCollapse").on('click', function () {
      $("#sidebar").toggleClass('active');

   });
});


document.getElementById("plus").addEventListener("click", function () 
{
   
   
   
   i++;
   $("#naming_port").modal();
  
   
   
   $("#save_ch").on("click",function()
   {
     
      let li = document.createElement("li");
      let idi = "para" + i;
      li.setAttribute("id", "para" + i);
      document.getElementById("homeSubmenu").appendChild(li);
      li=document.getElementById("para"+i);
      li.innerHTML= document.getElementById("nic_port").value;
      
      $('#naming_port').modal('hide');
      console.log(document.getElementById("para"+i).innerHTML);
      

   })
   console.log(i);
   
   
   // document.getElementById("homeSubmenu").appendChild(x);

   for (let j = 1; j <= i; j++) {
      
      $("#para"+j).on("click", function () {
         $("#exampleModalCenter").modal();
      })

   }
});

document.getElementById("delete").addEventListener("click", function () {


   $("#delet").modal();
   console.log("hello" + i);
   $("#delete_ch").on("click",function()
   {
   for(let k=i;k>=1;k--)
   {
      console.log("see me "+document.getElementById("para"+k).innerHTML)
      console.log("input "+ document.getElementById("dele_port").innerHTML)
   if(document.getElementById("dele_port").innerHTML===document.getElementById("para"+k).innerHTML);
   {
      document.getElementById("para" + k).remove();
   }
   
   }

   })
}
);


