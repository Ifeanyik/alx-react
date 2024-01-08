import $ from "jquery";
import _ from "lodash";
import "../css/main.css"

$(document).ready(() => {
    let elementArray = ["<img src='../assets/holberton-logo.jpg' id='logo' height='200px' width='200px'>",
                    "<p>Holberton Dashboard</p>",
                    "<p>Dashboard data for the students</p>",
                    "<div><button>Click here to get started</button><p id='count'></p></div>",
                    //"<p id='count'></p>",
                    "<p>Copyright - Holberton School</p>"];
    for (let element of elementArray)
        $("body").append(element);
    let count = 0;
    function updateCounter() {
        count += 1;
        $("#count").text(`${count} clicks on the button`);
    }
    $("button").on('click', _.debounce(updateCounter, 0));
})