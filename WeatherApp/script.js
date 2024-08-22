document.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById("search_button");
    let input = document.getElementById("city_name");
    let temperature = document.querySelector(".temperature");
    let city = document.querySelector(".location");
    let status = document.querySelector(".status");
    let failedMessage = document.querySelector(".error");
  

    input.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            value = input.value;
            getWeather(value);
        }
    });

    btn.addEventListener('click', () => {
        value = input.value;
        getWeather(value);
    });

    function getWeather(value) {

        // Clear previous content
        temperature.textContent = '';
        city.textContent = '';

        const key = "5305dd9eb69948648e6165117241508";
        const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${value}`;

        axios.get(url)
            .then(response => {

                status.textContent = '';
                const data = response.data;
                const temp = data.current.temp_c;
                const city_name = data.location.name;
                temperature.textContent = `${temp} °C`;
                city.textContent = city_name;
            })
            .catch(error => {
                status.textContent = '';
                failedMessage.textContent = "Enter your city name correctly!"
                
            });

        // Clear input field
        failedMessage.textContent = ' ';
        input.value = '';
    }
});
