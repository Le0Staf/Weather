const express = require("express");
const app = express();
const port = 3000;
const request = require("request");

app.use(express.static("public"));
app.set("view engine", "pug");


const apiKey = "5791ba23c43367f77aced40f3cd406c1";
let city = "Ostersund";
let lat = "63.104512";
let lon = "15.38838";
let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
let url2 = `http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=5&appid=${apiKey}`;

let weather
let temperatureList = []
let timeList = []

let counts = {};

let day1 = [];
let day2 = [];
let day3 = [];
let day4 = [];  
let day5 = [];
let day6 = [];

let day1Time = [];
let day2Time = [];
let day3Time = [];
let day4Time = [];  
let day5Time = [];
let day6Time = [];

request(url, function (err, response, body) {
  if (err) {
    console.log("error:", err);
  } else {
    //console.log("body:", body);
    let weather = JSON.parse(body);
    //console.log(weather["list"][0]["main"]["temp"]);

    let days = [];

    for (i = 0; i < weather["list"].length; i++) {
      let temporary = [];
      temporary.push(Math.round((weather["list"][i]["main"]["temp"] - 273.15) * 10) / 10);
      temporary.push(weather["list"][i]["dt_txt"]);
      temperatureList.push(temporary);

      if (weather["list"][i]["dt_txt"].slice(8,10) < 10) {
        days.push(weather["list"][i]["dt_txt"].slice(9,10));
      }
      else {
        days.push(weather["list"][i]["dt_txt"].slice(8,10));
      }
    }

    for (i = 0; i < weather["list"].length; i++) {
      let day = weather["list"][i]["dt_txt"].slice(8, 10);
      counts[day] = (counts[day] || 0) + 1;
    }
    console.log(counts);

    for (i = 0; i < counts[Object.keys(counts)[0]]; i++) {
      day1.push(Math.round((weather["list"][i]["main"]["temp"] - 273.15) * 10) / 10);
      day1Time.push(weather["list"][i]["dt_txt"]);
    }
    for (i = counts[Object.keys(counts)[0]]; i < counts[Object.keys(counts)[1]] + counts[Object.keys(counts)[0]]; i++) {
      day2.push(Math.round((weather["list"][i]["main"]["temp"] - 273.15) * 10) / 10);
      day2Time.push(weather["list"][i]["dt_txt"]);
    }
    for (i = counts[Object.keys(counts)[1]] + counts[Object.keys(counts)[0]]; i < counts[Object.keys(counts)[2]] + counts[Object.keys(counts)[1]] + counts[Object.keys(counts)[0]]; i++) {
      day3.push(Math.round((weather["list"][i]["main"]["temp"] - 273.15) * 10) / 10);
      day3Time.push(weather["list"][i]["dt_txt"]);
    }
    for (i = counts[Object.keys(counts)[2]] + counts[Object.keys(counts)[1]] + counts[Object.keys(counts)[0]]; i < counts[Object.keys(counts)[3]] + counts[Object.keys(counts)[2]] + counts[Object.keys(counts)[1]] + counts[Object.keys(counts)[0]]; i++) {
      day4.push(Math.round((weather["list"][i]["main"]["temp"] - 273.15) * 10) / 10);
      day4Time.push(weather["list"][i]["dt_txt"]);
    }
    for (i = counts[Object.keys(counts)[3]] + counts[Object.keys(counts)[2]] + counts[Object.keys(counts)[1]] + counts[Object.keys(counts)[0]]; i < counts[Object.keys(counts)[4]] + counts[Object.keys(counts)[3]] + counts[Object.keys(counts)[2]] + counts[Object.keys(counts)[1]] + counts[Object.keys(counts)[0]]; i++) {
      day5.push(Math.round((weather["list"][i]["main"]["temp"] - 273.15) * 10) / 10);
      day5Time.push(weather["list"][i]["dt_txt"]);
    }
    for (i = counts[Object.keys(counts)[4]] + counts[Object.keys(counts)[3]] + counts[Object.keys(counts)[2]] + counts[Object.keys(counts)[1]] + counts[Object.keys(counts)[0]]; i < counts[Object.keys(counts)[5]] + counts[Object.keys(counts)[4]] + counts[Object.keys(counts)[3]] + counts[Object.keys(counts)[2]] + counts[Object.keys(counts)[1]] + counts[Object.keys(counts)[0]]; i++) {
      day6.push(Math.round((weather["list"][i]["main"]["temp"] - 273.15) * 10) / 10);
      day6Time.push(weather["list"][i]["dt_txt"]);
    }
  }
});


app.get("/", (req, res) => {
  res.render("index", { "day1": day1, "day2": day2, "day3": day3, "day4": day4, "day5": day5, "day6": day6, "counts": counts, "day1Time": day1Time, "day2Time": day2Time, "day3Time": day3Time, "day4Time": day4Time, "day5Time": day5Time, "day6Time": day6Time });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = {
  temperatureList,
};