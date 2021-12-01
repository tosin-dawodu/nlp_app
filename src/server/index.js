const dotenv = require("dotenv");
const https = require("https");
dotenv.config();
const API_KEY = process.env.API_KEY;
var path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

app.post("/test", async function (req, res) {
  const response = await meaningCloud(req.body.text);
  try {
    // console.log(response);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
const meaningCloud = (text) => {
  return new Promise((resolve, reject) => {
    https
      .get(
        `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&lang=en&model=general&txt=${text}`,
        (res) => {
          res.on("data", (d) => {
            const cloudResponse = JSON.parse(d);
            const responseObject = {
              agreement: cloudResponse.agreement,
              subjectivity: cloudResponse.subjectivity,
              confidence: cloudResponse.confidence,
              irony: cloudResponse.irony,
              form:
                cloudResponse.sentimented_concept_list.length > 0
                  ? cloudResponse.sentimented_concept_list[0].form
                  : "Not listed",
            };
            resolve(responseObject);
          });
          res.on("error", (error) => {
            console.log(error);
            reject(error);
          });
        }
      )
      .on("error", (e) => {
        console.error(e);
      });
  });
};
