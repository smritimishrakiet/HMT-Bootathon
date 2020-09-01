

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
var radius = (material_conductivity/heat_transfer_coeff).toFixed(3);
document.getElementById("radius").innerHTML=radius;
document.getElementById("amp").setAttribute("data-value", current);
document.getElementById("vol").setAttribute("data-value", voltage);
document.getElementById("temp1").setAttribute("data-value", inner_temp);
document.getElementById("temp2").setAttribute("data-value", outer_temp);
document.getElementById("temp3").setAttribute("data-value", ambient_temp); 
    }



  