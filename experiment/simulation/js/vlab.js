$(document).ready(function(){
    $("#menu_icon").click(function(){
        $(".open_sidbar").toggleClass("small_sidebar");
        $('.remove_text').toggleClass('text_hide');
        $('#content_body').toggleClass('margin_left');
    });
});

function hideSVG() {
    var style = document.getElementById("myRect").style.display;
    if(style === "block")
    {
      document.getElementById("myRect").style.display = "none";
      document.getElementById("myBtn").disabled = true;
      document.getElementById("onoff").value="Power ON";
      document.getElementById("amp").setAttribute("data-value", 0);
      document.getElementById("vol").setAttribute("data-value", 0);
      document.getElementById("temp1").setAttribute("data-value", 0);
      document.getElementById("temp2").setAttribute("data-value", 0);
      document.getElementById("temp3").setAttribute("data-value", 0); 
      
    }
      
    else
    {
      document.getElementById("myRect").style.display = "block";
      document.getElementById("myBtn").disabled = false;
      document.getElementById("onoff").value="Power OFF";
    }

      
    var dfgf = document.getElementById("switch").style.display;
    if(dfgf === "block")
      document.getElementById("switch").style.display = "none";
    else
      document.getElementById("switch").style.display = "block";
    //or to hide the all svg
    //document.getElementById("mySvg").style.display = "none";
  }

    $(document).ready(function(){
        $("#myModal").modal('show');
    });
      
   
   


  