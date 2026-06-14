const buttonE1=document.querySelector("#button");
const apikey="11d0f6bc3c8b6ee55a20e4691f6d5796";
const inputE1=document.querySelector("#city-input");
const weatherDataE1=document.getElementById("weather-data")
const formE1=document.querySelector("form");
formE1.addEventListener("submit", async (event)=>{
  event.preventDefault();
    const cityValue=inputE1.value;
  getWeatherdata(cityValue);
  //    checkinput();
  //   const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputE1.value}&appid=${apikey}&units=metric`)
  //   console.log(response);
  //   if(!response.ok){
  //       alert(`Response status ${response.status}`)
  //   }
  //   const data= await response.json()
  //   console.log(data); 
  // }catch(error){
  //   alert(error);
  // }
    
})



async function getWeatherdata(cityValue){

try {
  const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)
  if(!response.ok){
    throw new Error("network response was not ok");
  }
  const data=await response.json();
  // console.log(data)
  const temperature=Math.round(data.main.temp);
  const description=data.weather[0].description;
  const icon =data.weather[0].icon
  const details=[`Feels like:${Math.round(data.main.feels_like)}°C`,
    `Humidity:${data.main.humidity}%`,
    `Wind Speed:${data.wind.speed}m/s`
  ]
  // console.log(details);
weatherDataE1.querySelector(".icon").innerHTML=` <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather-Icon">`
weatherDataE1.querySelector(".temperature").textContent=`${temperature}°C`;
weatherDataE1.querySelector(".description").textContent=`${description}`;
weatherDataE1.querySelector(".details").innerHTML=details.map(d =>
  ` <div>${d}</div>`
).join("");

} catch (error) {
  console.error(error);
}
    // if(inputE1.value==="")
    // {
    //       throw new Error("input should not be empty");
    //       return false;
    //     }
    //  else{
    //     return true;
    //  }   
}

