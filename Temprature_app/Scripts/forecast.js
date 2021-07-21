const key ='AkIeUb4c6VgOGohjCX0ZGyCynOfhrLBT'
// get weather information

const getWeather = async(id)=>{
    const base= 'http://dataservice.accuweather.com/currentconditions/v1/'

    const query= `${id}?apikey=${key}`;
    const response= await fetch(base + query);
    const data = response.json();
    return data;
    console.log(data);
    
};
// getWeather("329260").then(data=>console.log(data))


// get city information
const getCity= async(city)=>{
    const base= 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query=`?apikey=${key}&q=${city}`;
    const response= await fetch(base + query);
    const data = response.json();
    return data;
    console.log(data[0]);
};
// getCity('manchester').then(data=>{
//     return getWeather(data.Key);
// }).then(data=console.log(data))
// .catch(err=>console.log(err))
getCity('manchester').then(data=>{
    return getWeather(data[0].Key);
}).then(data=>{
    //console.log('now it works',data[0]);
}).catch(err=>console.log(err));