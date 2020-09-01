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
      
    var sw = {
      /* [INIT] */
      etime : null, // holds HTML time display
     
      ego : null, // holds HTML start/stop button
      timer : null, // timer object
      now : 0, // current timer
      init : function () {
        // Get HTML elements
        sw.etime = document.getElementById("sw-time");
        sw.ego = document.getElementById("sw-go");
        sw.ego = document.getElementById("onoff")
    
        // Attach listeners
        sw.ego.addEventListener("click", sw.start);
        sw.ego.disabled = false;
      },
    
      /* [ACTIONS] */
      tick : function () {
      // tick() : update display if stopwatch running
    
        // Calculate hours, mins, seconds
        sw.now++;
        var remain = sw.now;
        var hours = Math.floor(remain / 3600);
        remain -= hours * 3600;
        var mins = Math.floor(remain / 60);
        remain -= mins * 60;
        var secs = remain;
    
        // Update the display timer
        if (hours<10) { hours = "0" + hours; }
        if (mins<10) { mins = "0" + mins; }
        if (secs<10) { secs = "0" + secs; }
        sw.etime.innerHTML = hours + ":" + mins + ":" + secs;
      },
    
      start : function () {
      // start() : start the stopwatch
    
        sw.timer = setInterval(sw.tick, 1000);
        sw.ego.value = "Power Off";
        sw.ego.removeEventListener("click", sw.start);
        sw.ego.addEventListener("click", sw.stop);
      },
    
      stop  : function ()  {
      // stop() : stop the stopwatch
    
        clearInterval(sw.timer);
        sw.timer = null;
        sw.ego.value = "Power ON";
        sw.ego.removeEventListener("click", sw.stop);
        sw.ego.addEventListener("click", sw.start);
      },
    
    };
    
    window.addEventListener("load", sw.init);


  