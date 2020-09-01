var i = 0;

function calculation() {
var voltage = document.getElementById("user_voltage").value;
var current = document.getElementById("user_current").value;
var inner_temp = document.getElementById("user_inner_temp").value;
var outer_temp = document.getElementById("user_outer_temp").value;
var ambient_temp = document.getElementById("user_ambient_temp").value;
var surface_area = 0.0376;
var material_conductivity = 0.48;

var heat_input = voltage * current;
var temp_diff = outer_temp - ambient_temp;


var heat_transfer_coeff = ( heat_input/(surface_area * temp_diff)).toFixed(3);
    //return heat_transfer_coeff;
document.getElementById("heat_transfer_coeff").innerHTML=heat_transfer_coeff;
var radius = (material_conductivity/heat_transfer_coeff).toFixed(4);

var obser = [
    {"Voltage(Volt)":voltage,"Current(Amp)":current,"Inner temp(C)":inner_temp,"Outer temp(C)":outer_temp,"Room temp(C)":ambient_temp,"Heat Transfer Coff. (w/m^2.degC)":heat_transfer_coeff, "Critical radius(m)":radius},
  ];	
  
  
  function buildTable(data) {
      var table = document.createElement("table");
      table.className="gridtable";
      var thead = document.createElement("thead");
      var tbody = document.createElement("tbody");
      var headRow = document.createElement("tr");
      
      while (i == 0) {
        ["Voltage(Volt)","Current(Amp)","Inner temp(C)","Outer temp(C)","Room temp(C)","Heat Transfer Coff. (w/m^2.degC)","Critical radius(m)"].forEach(function(el) {
            var th=document.createElement("th");
            th.appendChild(document.createTextNode(el));
            headRow.appendChild(th);
          });
        i++;
      }
      

      thead.appendChild(headRow);
      table.appendChild(thead); 
      data.forEach(function(el) {
        var tr = document.createElement("tr");
        for (var o in el) {  
          var td = document.createElement("td");
          td.appendChild(document.createTextNode(el[o]))
          tr.appendChild(td);
        }
        tbody.appendChild(tr);  
      });
      table.appendChild(tbody);             
      return table;
  }

document.getElementById("radius").innerHTML=radius;
document.getElementById("amp").setAttribute("data-value", current);
document.getElementById("vol").setAttribute("data-value", voltage);
document.getElementById("temp1").setAttribute("data-value", inner_temp);
document.getElementById("temp2").setAttribute("data-value", outer_temp);
document.getElementById("temp3").setAttribute("data-value", ambient_temp); 
document.getElementById("content").appendChild(buildTable(obser));

    }


   