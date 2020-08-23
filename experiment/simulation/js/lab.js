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

var heat_transfer_coeff = heat_input/(surface_area * temp_diff);
    //return heat_transfer_coeff;
document.getElementById("heat_transfer_coeff").innerHTML=heat_transfer_coeff;
var radius = material_conductivity/heat_transfer_coeff;
document.getElementById("radius").innerHTML=radius;

    //var voltage = document.getElementById("user_voltage").value;
    document.getElementById("click_voltage").value = voltage;
    //var current = document.getElementById("user_current").value;
    document.getElementById("click_current").value = current;
    //var inner_temp = document.getElementById("user_inner_temp").value;
    document.getElementById("click_temp1").value = inner_temp;
    //var outer_temp = document.getElementById("user_outer_temp").value;
    document.getElementById("click_temp2").value = outer_temp;
    //var ambient_temp = document.getElementById("user_ambient_temp").value;
    document.getElementById("click_temp3").value = ambient_temp;
    }