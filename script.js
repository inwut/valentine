const no = document.getElementById("no");

function moveLink() {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    no.style.left = `${x}%`;
    no.style.top = `${y}%`;
}

no.addEventListener('mouseenter', moveLink);

const yes = document.getElementById("yes");

function getPlace() {
    no.style.top = "60%";
    let weight = no.offsetWidth * 100 / document.querySelector(".container").offsetWidth;
    no.style.left = `${65 - weight}%`;
}

yes.addEventListener('mouseenter', getPlace);