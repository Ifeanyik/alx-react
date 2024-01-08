import $ from "jquery";
import "./header.css";

$(document).ready(() => {
    //$("body").append("<img src='../assets/holberton-logo.jpg'>");
    //$("body").append("<h1>Holberton Dashboard</h1>");
    let stress = "<header><img src='../assets/holberton-logo.jpg'><h1>Holberton Dashboard</h1></header>";
    $("body").append(stress);
    console.log("Init header");
})