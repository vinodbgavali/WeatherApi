let apikey ='aa2b60a3cff69b871acffa9552182f8d';




const checkWeather = () => {
    let city = document.querySelector('.inputcity');
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&units=metric&appid='+apikey)
    .then((responce) => {
        return responce.json();
    }).then((data) => {
        console.log(data);
        const city = data['name'];
        const temp = data.main.temp;
        const description =  data.weather[0].description;
        const icon =  data.weather[0].icon;
        const humidity = data.main.humidity;
        const speed = data.wind.speed;

        document.querySelector('#city').innerText = city;
        document.querySelector('.temp').innerText = temp;
        document.querySelector('.icon').src = "http://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.humidity').innerText = "Humadity : "+humidity + "%";
        document.querySelector('.wind').innerText = "Wind : "+ speed + "km/h";
       
    })
    .catch(err => alert('data fetch error'+err))

}

const defaultWeather = (cityname) => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&units=metric&appid='+apikey)
    .then((responce) => {
        return responce.json();
    }).then((data) => {
        console.log(data);
        const city = data['name'];
        const temp = data.main.temp;
        const description =  data.weather[0].description;
        const icon =  data.weather[0].icon;
        const humidity = data.main.humidity;
        const speed = data.wind.speed;

        document.querySelector('#city').innerText = city;
        document.querySelector('.temp').innerText = temp;
        document.querySelector('.icon').src = "http://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.humidity').innerText = "Humadity : "+humidity + "%";
        document.querySelector('.wind').innerText = "Wind : "+ speed + "km/h";
       
    })
    .catch(err => alert('data fetch error'+err))

}


const printInfo = (info) => {
    console.log("inside printinfo");
    const weatherInfo = info;

    document.querySelector('#city').innerText = weatherInfo.city;
    document.querySelector('.temp').innerText = weatherInfo.temp;
    document.querySelector('.icon').src = "http://openweathermap.org/img/wn/"+weatherInfo.icon+".png";
    document.querySelector('.description').innerText = weatherInfo.description;
    document.querySelector('.humidity').innerText = "Humadity : "+weatherInfo.humidity + "%";
    document.querySelector('.wind').innerText = "Wind : "+ weatherInfo.speed + "km/h";
};