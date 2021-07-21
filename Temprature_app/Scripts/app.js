const cityForm= document.querySelector('.change-location');
const card= document.querySelector('.card');
const details= document.querySelector('.details');
// function that updates the ui
const updateUI = (data)=>{
    const cityDetail= data.cityDetail[0];
    const weather= data.weather[0];
    console.log(weather.WeatherText)
    console.log(weather)
  
    details.innerHTML=
    `<h5 class="my-3">${cityDetail.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
               </div>`
    
}

const updateCity= async(town)=>{

    const cityDetail = await getCity(town);
    const weather= await getWeather(cityDetail[0].Key);
    return {cityDetail,weather};
}
cityForm.addEventListener('submit',e=>{
    // prevent default
    e.preventDefault();
   const town = cityForm.city.value.trim();
   
   updateCity(town)
   .then( data=>updateUI(data))
   .catch(err=>console.log(err));
  // cityForm.reset();
   
})