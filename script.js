const cities = [
        { name: "Haifa", id: "294801" },
        { name: "Tel Aviv", id: "293397" },
        { name: "Qiryat Shomna", id: "293308" },
        { name: "Eilat", id: "295277" },
        { name: "Jerusalem", id: "281184" }
    ];

    cities.forEach(city => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=YOUR_API_KEY&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const conditionNumber = data.weather[0].id;
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

            const cityElement = document.querySelector(`.city:contains(${city.name})`);
            const temperatureElement = cityElement.querySelector('.temperature');
            const conditionElement = cityElement.querySelector('.weather-condition');
            const iconElement = cityElement.querySelector('.weather-icon');

            temperatureElement.textContent = `${temperature}°C`;
            conditionElement.textContent = `Weather condition: ${conditionNumber}`;
            iconElement.src = iconUrl;
        })
        .catch(error => console.error('Error fetching weather data:', error));
    });
 function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }