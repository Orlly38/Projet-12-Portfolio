function addProjetTomsen(){
    const slidesProjetTomsen = [
        {
            "image":"Tomsen.jpg",
            "text":""
        },
        {
            "title":"Objectif",
            "image":"Tomsen_txt.jpg",
            "text": "A partir de la maquette Figma, j'ai conçu ce site en utilisant Flexbox, ce qui nous permets d'avoir une mise en page flexible. J'ai également géré la partie responsive pour le confort de l'utilisateur. En ce qui concerne la qualité, ce site est validé par W3C."
        },
        {
            "title":"Compétences",
            "image":"Tomsen_txt.jpg",
            "text": "Compétences acquises : </br></br>-> Stratégie de test </br>-> Rédaction d'un cahier de recette </br>-> Rédaction d'une revue d'exigences </br>-> Création de scénarios de test"
        }
    ];
    
    addGenericCarrousel(slidesProjetTomsen, 'Tomsen', 'Tomsen', null, "test");
}