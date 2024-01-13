// Function to add the "navbarDark" class to the navbar on scroll
function handleNavbarScroll() {
    const header = document.querySelector(".navbar");
    window.onscroll = function () {
        const top = window.scrollY;
        if (top >= 100) {
            header.classList.add("navbarDark");
        } else {
            header.classList.remove("navbarDark");
        }
    };
}

// Function to handle navbar collapse on small devices after a click
function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            new bootstrap.Collapse(menuToggle).toggle();
        });
    });
}

// Call the functions to execute the code
handleNavbarScroll();
handleNavbarCollapse();

function enableDarkMode(){
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }else{
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    }
}

addProjetBooki();
addProjet724();
addProjetBluel();
addProjetKasa();
addProjetEco();
addProjetTomsen();
filtersButton();
addSkillsTest();
addSkillsOrga();
addSkillsDev();