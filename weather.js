// key: aa45087aa1e5e19df62fb9d5cba1074e

//url: api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi={
    key:"aa45087aa1e5e19df62fb9d5cba1074e",
  
    url: "https://api.openweathermap.org/data/2.5/weather",
}

const searchInputBox=document.getElementById('input-box');


//event listener function on key press

searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getdata(searchInputBox.value);
    
    }

});

//get reather report
let getdata=(city)=>{
    fetch(`${weatherApi.url}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(data=>{return data.json();})
    .then(showdata);
}

// show weather report

let showdata = (data)=>{
    console.log(data)

    let city=document.getElementById('city');
    city.innerText=`${data.name},${data.sys.country}`;

    let temp=document.getElementById('temp');
    temp.innerHTML=`${Math.round(data.main.temp)}&deg;c`;

    let minmax=document.getElementById('min-max');
    minmax.innerHTML=`${Math.floor(data.main.temp_max )}&deg;c (min)- ${Math.ceil(data.main.temp_min
    )}&deg;c (max)`;

    let weather =document.getElementById('weather');
    weather.innerHTML=`${data.weather[0].main}`



// bg
if(weather.textContent == 'Clear') {
    document.body.style.backgroundImage = "url('image/clear.jpg')";
    
} 
else if(weather.textContent == 'Clouds') {

    document.body.style.backgroundImage = "url('image/clouds2.jpg')";
    
}
 else if(weather.textContent == 'Haze') {

    document.body.style.backgroundImage = "url('image/cloude2.jpg')";
    
}
     else if(weather.textContent == 'Rain') {
    
    document.body.style.backgroundImage = "url('image/rain.jpeg')";
    
}
 else if(weather.textContent == 'Snow') {
    
    document.body.style.backgroundImage = "url('image/snow.jpg')";

}
 else if(weather.textContent == 'Thunderstorm') {

    document.body.style.backgroundImage = "url('image/thunderstrom2.jpg')";
    
}

}
// date manage

let todaydate=new Date();
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months=["January","February","March","April","May","June","July","August","September","Octomber","November","December"];

let day=days[todaydate.getDay()];
let month=months[todaydate.getMonth()] ;
let year=todaydate.getFullYear();
let date1=todaydate.getDate();

let date=document.getElementById("date");
date.innerHTML=`${date1} ${month} (${day}) ${year}`


