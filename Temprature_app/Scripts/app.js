const cityForm= document.querySelector('.change-location');
const updateCity= async(town)=>{

    const cityDetail = await getCity(town);
    const weather= await getWeather(cityDetail[0].Key);
    return {cityDetail:cityDetail, weather:weather};
}
cityForm.addEventListener('submit',e=>{
    // prevent default
    e.preventDefault();
   const town = cityForm.city.value.trim();
   
   updateCity(town)
   .then( data=>console.log(data)
   )
   .catch(err=>console.log(err));
  // cityForm.reset();
   
})