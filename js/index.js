document.getElementById('infoButton').addEventListener('click', getInfo);


function getInfo(e){
  const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  const zip = document.getElementById('zipBox').value;
  const units = '&units=imperial';
  const apiKey = '&YOUR_API_KEY';
  const query = url + zip + units + apiKey;
  e.preventDefault;
fetch(query)
  .then(function(response) {
    return response.json();
  })
  .then(data => {
    console.log(data);
    let output = `<h3> The Weather in ${data.name} Is As Follows:<br>`
    output += `
      <div class="main"><i class="material-icons">filter_drama</i><br><p>Current Weather</p><br>${data.weather.description}</div>
      <div class="main"><i class="material-icons">wb_incandescent</i><br><p>Current Temp.</p><br>${data.main.temp}</div>
      <div class="main"><i class="material-icons">wb_incandescent</i><br><p>Humidity</p><br>${data.main.temp}</div>
      <div class="main"><i class="material-icons">cloud</i><br><p>Cloud Cover</p><br>${data.clouds.all}</div>
      <div class="main"><i class="material-icons">clear_all</i><br><p>Wind Speed</p><br>${data.wind.speed}</div>

    `;


      document.getElementById('info').innerHTML = output;

  });
};
