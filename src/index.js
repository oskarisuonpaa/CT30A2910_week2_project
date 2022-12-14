const btn1 = document.querySelector("#submit-data");
const btn2 = document.querySelector("#empty-table");
const image_input = document.querySelector("#input-image");
const preview = document.querySelector("#output");



btn1.addEventListener("click", function(){
    
    var username = document.querySelector("#input-username").value;
    var email = document.querySelector("#input-email").value;
    var address = document.querySelector("#input-address").value;
    var adminStatus = document.querySelector("#input-admin");
    var image = document.querySelector("#output").src;
    var table = document.querySelector("#data-table");
    
    var rows = table.rows;

    for (var i = 0; i < rows.length; i++) {
        if (username == rows[i].cells[0].innerHTML) {
          rows[i].cells[1].innerHTML = email;
          rows[i].cells[2].innerHTML = address;
          
          if(adminStatus.checked){
            rows[i].cells[3].innerHTML = "X";
          }
          else{
            rows[i].cells[3].innerHTML = "-";
          }
          
          rows[i].cells[4].firstChild.src = image;
          return;
         }
     }

     var row = table.insertRow();

     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);
     var cell5 = row.insertCell(4);
     
     var imgnode = document.createElement("img");
     
     imgnode.src = image;
     imgnode.style.height = "64px";
     imgnode.style.width = "64px";

     cell1.innerHTML = username;
     cell2.innerHTML = email;
     cell3.innerHTML = address;
     
     if(adminStatus.checked){
        cell4.innerHTML = "X";
      }
      else{
        cell4.innerHTML = "-";
      }
      
     cell5.appendChild(imgnode);
      
});

btn2.addEventListener("click", function() {
        var table = document.querySelector("#data-table");

        while (table.rows.length != 1) {
          table.deleteRow(-1);
        }
});

image_input.addEventListener("change", function() {
  preview.src = URL.createObjectURL(image_input.files[0]);
});