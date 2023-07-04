let preview = document.querySelector("form .value");
let chekboxes = document.querySelectorAll("input[type='checkbox']");

let capitalLetter = "ABCDEFGHIJKLMNOBQRSTUVWXYX";
let smallLetter = "abcdefghhijklmnopqrstuvwxyz";
let number = "0123456789";
let specialChar = "!@#&$_!@#&$_";


document.getElementById("btn").addEventListener('click', e => {
    
    e.preventDefault();
    preview.textContent = "";
    let randomKey = "";
    let target = "";
    let numCount = document.querySelector("input[type='number']").value;

    numCount <= 6 ? numCount = 6 : "";
    numCount >= 22 ? numCount = 22 : "";
    
    chekboxes.forEach(chekbox => {
        if (chekbox.checked) {
            chekbox.name === 'capital' ? target += capitalLetter : "";
            chekbox.name === 'small' ? target += smallLetter : "";
            chekbox.name === 'number' ? target += number : "";
            chekbox.name === 'special' ? target += specialChar : "";
        }
    });
    
    target == "" ? target = capitalLetter : "";

    for (let i = 0; i < numCount; i++) {
        randomKey += target[Math.floor(Math.random() * target.length)];
    }

    preview.textContent = randomKey;
});

document.querySelector("form .value").onclick = () => {
    navigator.clipboard.writeText(document.querySelector("form .value").textContent);
    document.querySelector(".copy").textContent = "Key copied to clipboard";
    document.querySelector(".copy").classList.add("green");
    setTimeout(() => {
        document.querySelector(".copy").textContent = "click up to copy Password"
        document.querySelector(".copy").classList.remove("green");
    },2000)
}