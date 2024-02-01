
            const apiKey = "ee32108203a2fce780f984a46162cd6f";
            const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&q=";

            const searchBox = document.querySelector(".search input");
            const searchBtn = document.querySelector(".search button");
            const WeatherIcon = document.querySelector(".weatherIcon");

            async function checkWeather(city){
                const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
                var data = await response.json();
                console.log(data);

                            document.querySelector(".city").innerHTML = data.name;
                            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)/10+"°c";
                            /* document.querySelector(".temp").innerHTML = data.main.temp.toFixed(2)/10+"°c"; */
                            document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
                            document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";

                            if (data.weather[0].main =="Clouds"){
                                WeatherIcon.src = "images/clouds.png";
                            }
                            else if (data.weather[0].main =="Clear"){
                                WeatherIcon.src = "images/clear.png";
                            }
                            else if (data.weather[0].main =="Rain"){
                                WeatherIcon.src = "images/rain.png";
                            }
                            else if (data.weather[0].main =="Mist"){
                                WeatherIcon.src = "images/mist.png";
                            }
                            else if (data.weather[0].main =="Drizzle"){
                                WeatherIcon.src = "images/drizzle.png";
                            }
            
                        }
            
                searchBtn.addEventListener("click",()=>{
                    checkWeather(searchBox.value);
                })
                

