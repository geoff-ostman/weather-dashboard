const getLocation = async() => {
    const response = await fetch()
  
    if (response.status === 200) {
      const data = await response.json()
      return data.city
    } else {
      throw new Error('Unable to get the current location')
    }
  }
  
  
  const getWeather = async(currentCity) => {
    const response = await
    fetch("http://api.openweathermap.org/data/2.5/weather?id={city id}&appid={7ac6704f97ab9101ae66ec2d6fc627d8}");
  
    if (response.status === 200) {
      const data = await response.json()
      return data
    } else {
      throw new Error("Unable to get weather")
    }
  }
  
  getLocation().then((city) => {
    currentCity = city;
    document.write(currentCity);
    return city;
  }).then((city) => {
    return getWeather(city);
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
  })

const r_text = new Array ();
    r_text[0] = "meatballs";
    r_text[1] = "raining cats and dogs";
    r_text[2] = "raining men";
    r_text[3] = "silver linings";
    r_text[4] = "fair weather friends";
    r_text[5] = "throwing caution to the wind";
    r_text[6] = "chasing rainbows";
    r_text[7] = "Stacy's mom got it going on";

    const i = Math.floor(8 * Math.random())

    document.write(r_text[i]);

document.getElementById.searchBtn = addEventListener('click',function(weatherAPI) {

});