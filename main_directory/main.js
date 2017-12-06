$('document').ready(function(){
    var lat;
    var lon;
    var temp;
    var currentTempUnit;
    var descript;

    getWeather();  
function getWeather(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
          $("#data").html("Your current location: latitude: " + lat + "||        longitude: " + lon);

          var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +'&appid=1b56f8a82e50f7dc04ad5e24dd1ac7be';
          $.getJSON(url, function(data){
              temp = (data.main.temp)-273.15;
              descript = data.weather[0].main;
              $('#city').html(data.name + ', ');
              $('#country').html(data.sys.country)
              $('#temp').html(temp);
              $('#weather').html(descript);
              $('#tempunit').html('°C');
              descript = descript.toLowerCase();
              console.log(descript);
            
              switch(descript){
                case 'clear':
                $('i').addClass('wi-owm-800');
                break;
                case 'thunderstorm':
                $('i').addClass('wi-owm-200');                  
                break;
                case 'cloudy-gusts':
                $('i').addClass('wi-owm-801');                
                break;
                case 'rain':
                $('i').addClass('wi-owm-302');                                  
                break;
                case 'snow':
                $('i').addClass('wi-owm-600');                                  
                break;
                case 'showers':
                $('i').addClass('wi-owm-520');                                  
                break;
                case 'lightning':
                $('i').addClass('wi-owm-210');                                  
                break;
                default:
                $('i').addClass('wi-owm-800');                
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

    
});

// Open Weather Map

// wi-owm-200: thunderstorm
// wi-owm-201: thunderstorm
// wi-owm-202: thunderstorm
// wi-owm-210: lightning
// wi-owm-211: lightning
// wi-owm-212: lightning
// wi-owm-221: lightning
// wi-owm-230: thunderstorm
// wi-owm-231: thunderstorm
// wi-owm-232: thunderstorm
// wi-owm-300: sprinkle
// wi-owm-301: sprinkle
// wi-owm-302: rain
// wi-owm-310: rain-mix
// wi-owm-311: rain
// wi-owm-312: rain
// wi-owm-313: showers
// wi-owm-314: rain
// wi-owm-321: sprinkle
// wi-owm-500: sprinkle
// wi-owm-501: rain
// wi-owm-502: rain
// wi-owm-503: rain
// wi-owm-504: rain
// wi-owm-511: rain-mix
// wi-owm-520: showers
// wi-owm-521: showers
// wi-owm-522: showers
// wi-owm-531: storm-showers
// wi-owm-600: snow
// wi-owm-601: snow
// wi-owm-602: sleet
// wi-owm-611: rain-mix
// wi-owm-612: rain-mix
// wi-owm-615: rain-mix
// wi-owm-616: rain-mix
// wi-owm-620: rain-mix
// wi-owm-621: snow
// wi-owm-622: snow
// wi-owm-701: showers
// wi-owm-711: smoke
// wi-owm-721: day-haze
// wi-owm-731: dust
// wi-owm-741: fog
// wi-owm-761: dust
// wi-owm-762: dust
// wi-owm-771: cloudy-gusts
// wi-owm-781: tornado
// wi-owm-800: day-sunny
// wi-owm-801: cloudy-gusts
// wi-owm-802: cloudy-gusts
// wi-owm-803: cloudy-gusts
// wi-owm-804: cloudy
// wi-owm-900: tornado
// wi-owm-901: storm-showers
// wi-owm-902: hurricane
// wi-owm-903: snowflake-cold
// wi-owm-904: hot
// wi-owm-905: windy
// wi-owm-906: hail
// wi-owm-957: strong-wind
// wi-owm-day-200: day-thunderstorm
// wi-owm-day-201: day-thunderstorm
// wi-owm-day-202: day-thunderstorm
// wi-owm-day-210: day-lightning
// wi-owm-day-211: day-lightning
// wi-owm-day-212: day-lightning
// wi-owm-day-221: day-lightning
// wi-owm-day-230: day-thunderstorm
// wi-owm-day-231: day-thunderstorm
// wi-owm-day-232: day-thunderstorm
// wi-owm-day-300: day-sprinkle
// wi-owm-day-301: day-sprinkle
// wi-owm-day-302: day-rain
// wi-owm-day-310: day-rain
// wi-owm-day-311: day-rain
// wi-owm-day-312: day-rain
// wi-owm-day-313: day-rain
// wi-owm-day-314: day-rain
// wi-owm-day-321: day-sprinkle
// wi-owm-day-500: day-sprinkle
// wi-owm-day-501: day-rain
// wi-owm-day-502: day-rain
// wi-owm-day-503: day-rain
// wi-owm-day-504: day-rain
// wi-owm-day-511: day-rain-mix
// wi-owm-day-520: day-showers
// wi-owm-day-521: day-showers
// wi-owm-day-522: day-showers
// wi-owm-day-531: day-storm-showers
// wi-owm-day-600: day-snow
// wi-owm-day-601: day-sleet
// wi-owm-day-602: day-snow
// wi-owm-day-611: day-rain-mix
// wi-owm-day-612: day-rain-mix
// wi-owm-day-615: day-rain-mix
// wi-owm-day-616: day-rain-mix
// wi-owm-day-620: day-rain-mix
// wi-owm-day-621: day-snow
// wi-owm-day-622: day-snow
// wi-owm-day-701: day-showers
// wi-owm-day-711: smoke
// wi-owm-day-721: day-haze
// wi-owm-day-731: dust
// wi-owm-day-741: day-fog
// wi-owm-day-761: dust
// wi-owm-day-762: dust
// wi-owm-day-781: tornado
// wi-owm-day-800: day-sunny
// wi-owm-day-801: day-cloudy-gusts
// wi-owm-day-802: day-cloudy-gusts
// wi-owm-day-803: day-cloudy-gusts
// wi-owm-day-804: day-sunny-overcast
// wi-owm-day-900: tornado
// wi-owm-day-902: hurricane
// wi-owm-day-903: snowflake-cold
// wi-owm-day-904: hot
// wi-owm-day-906: day-hail
// wi-owm-day-957: strong-wind
// wi-owm-night-200: night-alt-thunderstorm
// wi-owm-night-201: night-alt-thunderstorm
// wi-owm-night-202: night-alt-thunderstorm
// wi-owm-night-210: night-alt-lightning
// wi-owm-night-211: night-alt-lightning
// wi-owm-night-212: night-alt-lightning
// wi-owm-night-221: night-alt-lightning
// wi-owm-night-230: night-alt-thunderstorm
// wi-owm-night-231: night-alt-thunderstorm
// wi-owm-night-232: night-alt-thunderstorm
// wi-owm-night-300: night-alt-sprinkle
// wi-owm-night-301: night-alt-sprinkle
// wi-owm-night-302: night-alt-rain
// wi-owm-night-310: night-alt-rain