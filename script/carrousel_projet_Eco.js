function addProjetEco(){
    const slidesProjetEco = [
        {
            "image":"Ecoblissbath.jpg",
            "text":""
        },
        {
            "title":"Objectif",
            "image":"Ecoblissbath_txt.jpg",
            "text": "A partir de la maquette Figma, j'ai conçu ce site en utilisant Flexbox, ce qui nous permets d'avoir une mise en page flexible. J'ai également géré la partie responsive pour le confort de l'utilisateur. En ce qui concerne la qualité, ce site est validé par W3C."
        },
        {
            "title":"Compétences",
            "image":"Ecoblissbath_txt.jpg",
            "text": "Compétences acquises : </br></br>-> Figma </br>-> HTML </br>-> CSS </br>-> Flexbox </br>-> Responsive design </br>-> W3C"
        }
    ];
    
    addGenericCarrousel(slidesProjetEco, 'EcoBlissBath', 'EcoBlissBath', null, "test");
}