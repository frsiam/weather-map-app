const API_KEY = `3abf5392e23f8113ded794fc8a56d7c5`

const searchTemp = () =>{
    const cityName = document.getElementById('city-name').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data))
}
const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemp = temp => {
    console.log(temp)
    setInnerText('city',temp.name)
    setInnerText('temparature',temp.main.temp)
    setInnerText('cloud',temp.weather[0].main)
    //set weather icon
    const iconUrl = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('icon')
    imgIcon.setAttribute('src', iconUrl)
}