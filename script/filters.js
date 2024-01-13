function filtersButton() {
    const filters = document.querySelectorAll(".button-filter button");
    filters.forEach((filter) => {                       

        filter.addEventListener("click", (button) => {

            // Supprimez la classe "selected" de tous les boutons
            filters.forEach((f) => f.classList.remove("selected"));

            // Ajoutez la classe "selected" au bouton actuellement cliqué
            button.target.classList.add("selected");


                    switch(button.target.id){
                        case 'button_all': 
                            showDivs('.test');
                            showDivs('.dev');
                            break;
                        case 'button_dev': 
                            hideDivs('.test');
                            showDivs('.dev');
                            break;
                        case 'button_test': 
                            hideDivs('.dev');
                            showDivs('.test');
                            break;
                        default:break;
                    }
                    
                });
    });
}

function hideDivs(classToHide){
    var divs = document.querySelectorAll(classToHide);
    divs.forEach(function(div) {
        div.style.display = 'none';
    });
}

function showDivs(classToShow){
    var divs = document.querySelectorAll(classToShow);
    divs.forEach(function(div) {
        div.style.display = 'flex';
    });
}

