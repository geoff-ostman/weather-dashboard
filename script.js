const weatherAPI = "http://api.openweathermap.org/data/2.5/weather?id={city id}&appid={7ac6704f97ab9101ae66ec2d6fc627d8}"

    fetch (weatherAPI)
        .then (function(resp) {
            if (resp.ok) {
                console.log (resp);
            } else {
                alert("Error: " + resp.statusText);
            }});

const r_text = new Array ();
    r_text[0] = "meatballs";
    r_text[1] = "raining cats and dogs";
    r_text[2] = "raining men";
    r_text[3] = "silver linings";
    r_text[4] = "fair weather friends";
    r_text[5] = "throwing caution to the wind";
    r_text[6] = "chasing rainbows";

    const i = Math.floor(7 * Math.random())

    document.write(r_text[i]);

document.getElementById.searchBtn = addEventListener('click',function(weatherAPI) {

});