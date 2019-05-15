

// Adjust font size
var fontSize = parseInt($("body").css("font-size"));
$("#increaseFont").click(function() {
  fontSize = parseFloat(fontSize)+2;// multiplies the initial size by 1.1
  $("body").css({'font-size': fontSize});// changes the size in the CSS
});
$("#decreaseFont").click(function() {
  fontSize = parseFloat(fontSize)-2;// multiplies the initial size by 1.1
  $("body").css({'font-size': fontSize});// changes the size in the CSS
});

// Toggle menu bar
function showMenu() {
  var menu = document.querySelector("#menu");
  var bar = document.querySelector("#dateBar");
  var date = document.querySelector("#dateContainer");
  if (menu.classList.contains("flex")) {
    menu.classList.remove("flex");
    bar.style.top = "44%";
    date.style.top = "43%";
  } else {
    menu.classList.add("flex");
    bar.style.top = "73%";
    date.style.top = "72%";
  }
}

// Toggle light/dark mode
document.querySelector('[data-switch-contrast]').addEventListener('click', function() {
  document.body.classList.toggle('nightmode');
  if (document.querySelector('#nightmodebutton').classList.contains('fa-moon')) {
    document.querySelector('[data-switch-contrast]').innerHTML = "<i id='nightmodebutton' class='fas fa-sun'></i>";
  } else {
    document.querySelector('[data-switch-contrast]').innerHTML = "<i id='nightmodebutton' class='fas fa-moon'></i>";
  }
});

// Update news marquee
var news = document.getElementsByClassName("news");
for (var i = 0; i < news.length; i++) {
  news[i].innerHTML = '<span class="text-xl md:text-base"><a href="#" class="no-underline text-white pr-10">BREAKING NEWS:</a><a href="#" class="no-underline text-white pr-10 hover:font-bold">SWAMP THING ATTACKS RHK MEMORIAL BRIDGE</a> <a target="_blank" href="https://www.youtube.com/watch?v=u94nG9UEIpQ" class="no-underline text-white hover:font-bold pr-10">JOKER ESCAPES ARKHAM ASYLUM, EVADES CAPTURE</a><a href="#" class="no-underline text-white hover:font-bold pr-10">ANCIENT CAT STATUE STOLEN</a><a href="#" class="no-underline text-white hover:font-bold pr-10">EXPLOSION AT ACE CHEMICALS INJURES TEN</a></span><a target="_blank" href="https://www.youtube.com/watch?v=otqWxjGqBd8&t=21s" class="no-underline text-white hover:font-bold pr-10">WINGED BEAST ATTACKS PHOENIX PHARMACEUTICALS</a></span>';
}
