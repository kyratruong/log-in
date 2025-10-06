import { createAlert } from "../lib/utility.js";

function initListeners() {
  $("form button").on("click", (e) => {
    e.preventDefault();
    // console.log("Button clicked");
    const un = $("#username").val().trim();

    let unl = un.length;
    if (un == "") {
      alert("Username cannot be empty");
      return;
    } else if (unl < 8) {
      alert("Username must be at least 8 characters long");
    } else if (unl > 10) {
      alert("Username must be no more than 10 characters long");
    } else if (un.includes(" ")) {
      alert("Username cannot contain spaces");
    } else {
      createAlert({
        message: `ALERT: You have signed in, ${un}!`,
      });
    }
  });
}

$(document).ready(function () {
  initListeners();
});
