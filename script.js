const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBox);

checkBox(); //if you remove this on load nothing will show only vissible works on scroll

function checkBox() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
}