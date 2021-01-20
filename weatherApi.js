let apikey ='aa2b60a3cff69b871acffa9552182f8d';




const checkWeather = () => {
    let city = document.querySelector('.inputcity').value;
    fetchApi(city);

}

const fetchApi = (city) => {

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+apikey)
        .then((responce) => {
            return responce.json();
        }).then((data) => {
            console.log(data);

            var info = {
                city:data['name'],
                temp : data.main.temp,
                description :  data.weather[0].description,
                icon :  data.weather[0].icon,
                humidity : data.main.humidity,
                speed : data.wind.speed
            };

            printInfo(info);
        })
        .catch(err => alert('Please check city name'))


}



const printInfo = (info) => {

    const weatherInfo = info;

    document.querySelector('#city').innerText = weatherInfo.city;
    document.querySelector('.temp').innerText = weatherInfo.temp;
    document.querySelector('.icon').src = "http://openweathermap.org/img/wn/"+weatherInfo.icon+".png";
    document.querySelector('.description').innerText = weatherInfo.description;
    document.querySelector('.humidity').innerText = "Humadity : "+weatherInfo.humidity + "%";
    document.querySelector('.wind').innerText = "Wind : "+ weatherInfo.speed + "km/h";
};