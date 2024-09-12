//Los Angeles
function updatetime() {
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");
        let losAngelesTime = moment().tz("America/Los_Angeles");
        losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
        losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss:SSS [<small>]A[<small>]");
    }

    //Paris

    let parisElement = document.querySelector("#paris");
    if (parisElement) {
        let parisDateElement = parisElement.querySelector(".date");
        let parisTimeElement = parisElement.querySelector(".time");
        let parisTime = moment().tz("Europe/Paris");
        parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
        parisTimeElement.innerHTML = parisTime.format("h:mm:ss:SSS [<small>]A[<small>]");
    }
}
function updateCity(event) {
    let cityTimeZone = event.target.value
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess()
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let citytime = moment.tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
      <div class="city">
                    <div>
                        <h2>${cityName}</h2>
                        <div class="date">${citytime.format("MMMM Do YYYY")}</div>
                    </div>
                    <div class="time">${citytime.format("h:mm:ss")}<small>${citytime.format("A")}</small></div>
                    </div>
                    <a href ="index.html>All cities</a>
    `;
    
}
updatetime();
setInterval(updatetime, 1)
let citiesSelectElement = document.querySelector("#city")
citiesSelectElement.addEventListener("change", updateCity)
    

