const express = require("express");
const app = express();
const port = 3000;
const request = require("request");

app.use(express.static("public"));

const apiKey = "5791ba23c43367f77aced40f3cd406c1";
let city = "Ostersund";
let lat = "63.104512";
let lon = "15.38838";
let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
let url2 = `http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=5&appid=${apiKey}`;

let weather
let temperatureList = []
let timeList = []

request(url, function (err, response, body) {
  if (err) {
    console.log("error:", err);
  } else {
    //console.log("body:", body);
    let weather = JSON.parse(body);
    //console.log(weather["list"][0]["main"]["temp"]);

    for (i = 0; i < weather["list"].length; i++) {
      let temporary = [];
      temporary.push(Math.round((weather["list"][i]["main"]["temp"] - 273.15) * 10) / 10);
      temporary.push(weather["list"][i]["dt_txt"]);
      temperatureList.push(temporary);
    }
  }
});

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { "temperatureList": temperatureList});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = {
  temperatureList,
};