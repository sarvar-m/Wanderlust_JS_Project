// Page Elements
const $input = $('#city');
const inputField = document.getElementById('city');
const $submit = $('#button');
const submitBtn = document.getElementById('button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = $("#venues");
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Foursquare API Info
// const clientId = '1FYL3UDSA4FEATQF0GZJJON1TCPWVYCK1QISOZPOYZG1IBG5';
// const clientSecret = '4HULZXBJV0H1P3RKYBRH5IPFQRP44FKGDWUILLYTML4QXA4A';
const clientId = 'LPEV44SM52N2GZOSAQBRYCSA1QO30NDX1AKGYAAI3XKWBLYS';
const clientSecret = 'MHFFSDYVV4N2CRDJSY3OZHTS3BQVRZQHMPSIO3M03H5FVDJP';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// // WEATHER API Info
const apiKey = '2082573baa2c88e4ee84edd0044c8192';
const weatherUrl = 'http://api.weatherstack.com/current?access_key=';

// Add AJAX functions here:
const getVenues = async () => {
  const city = inputField.value;
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20201209`; 

  try {
    const response = await fetch(urlToFetch);
    if(response.ok) {
      const jsonResponse = await response.json();
      // console.log(jsonResponse);
      const venues = jsonResponse.response.groups[0].items;
      console.log(venues);
      createVenuesHTML(venues);
      // return venues;
    } 
  } catch (error) {
    console.log(error);   
  }
}

const getForecast = async () => {
  const urlToFetch = `${weatherUrl}${apiKey}&query=${$input.val()}`
  try{
    const response = await fetch(urlToFetch);
    if(response.ok) {
      const jsonResponse = await response.json();
      createWeatherHTML(jsonResponse);
      // return jsonResponse;
    }
  } catch(e){
    console.error(e);
  }
}


// Execute function
//$submit.click(() => {
    submitBtn.addEventListener("click",()=>{
        $venueDivs.empty();
        $weatherDiv.empty();
        $destination.empty();
        getForecast();
        getVenues();
        return false;
      }
      )
