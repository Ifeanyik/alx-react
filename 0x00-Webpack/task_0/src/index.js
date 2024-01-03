import $ from "jquery";

$(document).ready(() => {
    const paragraphs = ["Holberton Dashboard", "Dashboard data for the students", "Copyright - Holberton School"];
    for (let i of paragraphs) {
        $("body").append(`<p>${i}</p>`);
    }
});