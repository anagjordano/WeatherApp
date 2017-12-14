$('document').ready(function(){
    var lat;
    var lon;
    var loc;
    var temp;
    var currentTempUnit;
    var descript;
    var daynight;
    var targetDate; 
    var hours;
    var minutes;
    var seconds;
    var timeArr;
    var toggleHour = document.getElementById('12-24Toggle');

    getTime(); 
    setInterval(getTime, 1000);    
    

    function getTime(){
        targetDate = new Date(); // Current date/time of user computer
        hours = targetDate.getHours();
        minutes = targetDate.getMinutes();
        seconds = targetDate.getSeconds();
        if (minutes < 10 ){     // With these ifs two digits will always be displayed on the clock
            minutes = '0' + minutes;
        }
        if (seconds < 10 ){     
            seconds = '0' + seconds;
        }
        if (hours < 10){
            hours = '0' + hours;
        }
        timeArr = [hours, ":", minutes, ":", seconds];

        var hours_12;
        if(toggleHour.checked){
            hours_12 = hours; //Make 24 hour format
            $('#localTime').html(timeArr);
        } else {
            hours_12 = hours % 12 || 12; //Make hours 12 hour format
            var ampm = hours >= 12 ? 'PM' : 'AM';
            if (hours_12 < 10){
                hours_12 = '0' + hours_12;
            }
            timeArr.splice(0,1,hours_12);
            $('#localTime').html(timeArr.join("") + ampm);
        }
    };

    getWeather();
      
function getWeather(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
             lat = position.coords.latitude;
             lon = position.coords.longitude;
             loc = lat + "," + lon;
          var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +'&appid=1b56f8a82e50f7dc04ad5e24dd1ac7be';
          $.getJSON(url, function(data){
              temp = Math.round((data.main.temp)-273.15);
              descript = data.weather[0].description;
              $('#city').html(data.name + ', ');
              $('#country').html(data.sys.country)
              $('#temp').html(temp);
              $('#weather').html(data.weather[0].main);
              $('#tempunit').html('°C');
              descript = descript.toLowerCase();

            if(hours < 17){
                daynight = 'day';
            } else {
                daynight = 'night';
            }
            
              switch(descript){
                case 'clear sky':
                    if(daynight === 'day'){
                        $('i').fadeOut(50).addClass('wi-day-sunny').fadeIn(1000);
                    }else if(daynight === 'night'){
                        $('i').fadeOut(50).addClass('wi-night-clear').fadeIn(1000);
                    };
                break;
                case 'few clouds':
                $('i').fadeOut(50).addClass('wi-'+ daynight +'-cloudy').fadeIn(1000);
                break;
                case 'scattered clouds':
                $('i').fadeOut(50).addClass('wi-cloud').fadeIn(1000);                                  
                break;
                case 'broken clouds':
                $('i').fadeOut(50).addClass('wi-cloudy').fadeIn(1000);                                  
                break;
                case 'rain':
                $('i').fadeOut(50).addClass('wi-'+ daynight +'-rain').fadeIn(1000);                                  
                break;
                case 'shower rain':
                $('i').fadeOut(50).addClass('wi-showers').fadeIn(1000);                                  
                break;
                case 'thunderstorm':
                $('i').fadeOut(50).addClass('wi-thunderstorm').fadeIn(1000);                                  
                break; 
                case 'snow':
                $('i').fadeOut(50).addClass('wi-snow').fadeIn(1000);                                  
                break;
                case 'mist':
                $('i').fadeOut(50).addClass('wi-fog').fadeIn(1000);                                  
                break;    
              }
          });
        });
      }
}
    $('#tempunit').click(function(){
        currentTempUnit = $('#tempunit').text();
        if (currentTempUnit === '°C'){ 
            $('#tempunit').text('°F');
            $('#temp').fadeOut(200);
            $('#temp').text(((temp)*9/5)+32).fadeIn(200);
            temp = ((temp)*9/5)+32;
        } else {
            $('#tempunit').text('°C');
            temp = ((temp)-32)/1.8;
            console.log(temp);                     
            $('#temp').fadeOut(200);
            $('#temp').text(Math.round(temp)).fadeIn(200);
        }
    });

    $('#12-24Toggle').onclick = function(){
        getTime();
    };

    
});
