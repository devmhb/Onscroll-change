const navItem = document.querySelectorAll(".item");
const sections = document.querySelectorAll(".section");
console.log( sections);

window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight; 
        if(pageYOffset > sectionTop - (sectionHeight)/3) {
            current = section.getAttribute("id");
            console.log(current);
        } 
    })
    navItem.forEach(item => {
        item.classList.remove("active");
        if(item.classList.contains(current)) {
            item.classList.add("active")
        }
    })
})