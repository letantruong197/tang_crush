let symbollove = "<3"
let disagreesymbol = ":(("
let agree = document.getElementsByClassName("Yes")[0]
let disagree = document.getElementsByClassName("No")[0]
let numbers = [10,230,150,80,300]
if (true){
    agree.innerHTML += symbollove
    disagree.innerHTML += disagreesymbol
}
function changePos(){
    min = Math.ceil(0);
    max = Math.floor(numbers.length-1);
    disagree.style.marginTop= `${numbers[Math.floor(Math.random() * (max - min + 1)) + min ]}px`
    // disagree.style.marginBottom =  `${numbers[Math.floor(Math.random() * (max - min + 1)) + min]}px`
    console.log(numbers[Math.floor(Math.random() * (max - min + 1)) + min]);
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// modal 2
let text1 = document.getElementById("modal-textcontent")
function changeText(){
    alert("Nếu thích em thì mình ib nhau đi UwU")
    window.open("https://www.facebook.com/tantruong197/");
}