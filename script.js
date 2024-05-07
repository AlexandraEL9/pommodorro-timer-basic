// Required variables
var session_seconds = "00"; // Initial seconds value
var session_minutes = 25;   // Initial minutes value

// Audio files
var click_sound = new Audio("click.mp3"); // Sound for click
var bell = new Audio("bell.mp3");         // Sound for bell ringing

// Starting template for the timer
function template() {
  // Set initial minutes and seconds values on the page
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;
}

// Function to start the timer
function start_timer() {
  click_sound.play(); // Play a click sound to indicate the timer has started

  // Change the minutes and seconds to starting time
  session_minutes = 24;   // Adjusting initial minutes value
  session_seconds = 59;   // Adjusting initial seconds value

  // Update the displayed minutes and seconds on the page
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

  // Start the countdown
  var minutes_interval = setInterval(minutesTimer, 60000); // Update minutes every minute
  var seconds_interval = setInterval(secondsTimer, 1000); // Update seconds every second

  // Function for minute counter
  function minutesTimer() {
    session_minutes = session_minutes - 1; // Decrement minutes
    document.getElementById("minutes").innerHTML = session_minutes; // Update displayed minutes
  }

  // Function for second counter
  function secondsTimer() {
    session_seconds = session_seconds - 1; // Decrement seconds
    document.getElementById("seconds").innerHTML = session_seconds; // Update displayed seconds

    // Check if both seconds and minutes reach zero, if so, end the session
    if (session_seconds <= 0) {
      if (session_minutes <= 0) {
        // Clears the interval i.e. stops the counter
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        // Add a message to the HTML indicating session completion
        document.getElementById("done").innerHTML =
          "Session Completed!! Take a Break";

        // Make the message div visible
        document.getElementById("done").classList.add("show_message");

        // Play the bell sound to signal the end of the session
        bell.play();
      }

      // Reset the session seconds to 60
      session_seconds = 60;
    }
  }
}
