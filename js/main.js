function scaleLoad() {
  var x = document.getElementById("orb");
  x.style.transform = "scale(1)";
}

function showDiv() { // Chnages opacity of white fade
  var x = document.getElementById("whiteFade");
  if (x.style.opacity === "1") {
    x.style.opacity = "0";
  } else {
    x.style.opacity = "1";
  }
}

function shakeAnimation() {
  document.getElementById('orb').className = 'shakeAnimation';
}

function showAnswer() { // Display Answer
  var x = document.getElementById("main");
  if (x.style.opacity === "1") {
    x.style.opacity = "0";
    x.style.transitionDelay = "0s";
  } else {
    x.style.opacity = "1";
  }
}

function hideText() {
  var x = document.getElementById("text-box");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var flag = true;
function changeTextTwo() { // This section causes changes and reverts those changes on another click
  let el = document.getElementById("button-text-two");
  el.innerHTML = flag ? "Show Text" : "Hide Text"; // changes text to "Show Text" and back to "Hide Text"
  flag = !flag; 
}

//---------------------------------------------------------------------------------

function numberShow() {
  var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            var text = [
              "It is certain",
              "It is decidedly so",
              "Without a doubt",
              "You may rely on it",
              "As I see it, yes",
              "Most likely",
              "Outlook good",
              "Yes",
              "Signs point to yes",
              "Don't count on it",
              "My reply is no",
              "My sources say no",
              "Outlook not so good",
              "Very doubtful",
              "Reply hazy, try again",
              "Ask again later"
            ];

            let value = text[Math.floor(Math.random() * text.length)];

              document.getElementById("result").innerHTML = value

              console.log(value)
        }
    };
  })();

  something(); // "do something" happens
  something(); // nothing happens
}

//---------------------------------------------------------------------------------

var flag = true;
function changeText() { // This section causes changes and reverts those changes on another click
  let el = document.getElementById("button-text");
  el.innerHTML = flag ? "Ask Again" : "Question Anomaly"; // changes text to "Ask Again" and back to "Question Anomaly"
  flag = !flag; 
}

function timeout_init_two() {
  setTimeout('changeText()', 3000); // Delay to change text of button
}

//---------------------------------------------------------------------------------

var state = false;

function clearField() {
    if (state == false) {
        // skips the first button click

        state = true;
        return;
    }

    if (state == true) {
        // document.getElementById("text-box").value="" // cleares text field after second click of button
        document.getElementById('orb').className = 'smaller';
        x.style.transform = "scale(0.0001)";

        state = false;
        return;
    }
}

//---------------------------------------------------------------------------------

// Disables button to prevent overlapping animation
const btn = document.getElementById("myBtn")
function disableBtn() {
  btn.disabled = true;
  setTimeout(()=>{
    btn.disabled = false; }, 3000)
}

//---------------------------------------------------------------------------------

var first_click = true;
function timeout_trigger() {
  if (first_click) {
    // Doesn't reload page on first clcik, only second
      first_click = false;
  } else {
    window.location.reload(); // Reloads the page
  }
}

function timeout_init() {
  setTimeout('timeout_trigger()', 2000); // Delay to relaod page
}

//---------------------------------------------------------------------------------