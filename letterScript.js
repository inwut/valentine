const letter = document.getElementById("letter");
const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const letterPlace = document.getElementById("letter-wrapper");
const background1 = document.getElementById("background1");
const background2 = document.getElementById("background2");
letter.addEventListener('click', () => {
    letter.style.display = "none";
    arrow1.style.display = "none";
    arrow2.style.display = "none";
    letterPlace.style.display = "block";
    background1.style.display = "block";
    background2.style.display = "block";
});