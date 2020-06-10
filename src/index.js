import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./script/component/app-bar.js";
import "./script/component/jumbo-tron.js";
import main from "./script/view/main.js";
import img from "./images/bgs.jpg";


document.addEventListener("DOMContentLoaded", main);
document.querySelector('#jumbotron').src = img;
