function addProjetKasa(){
    const slidesProjetKasa = [
        {
            "image":"Kasa.avif",
            "text":""
        },
        {
            "title":"Objectif",
            "image":"Kasa_txt.avif",
            "text": "Site de location immobilière : </br></br>Pour ce projet, j'ai reconstruit le site avec Create React App. J'ai rajouté des collapses mais aussi un carrousel pour plus de dynamisme et confort pour l'utilisateur."
        },
        {
            "title":"Compétences",
            "image":"Kasa_txt.avif",
            "text": "Compétences acquises : </br></br>-> HTML </br>-> CSS </br>-> JavaScript </br>-> React </br>-> GitHub"
        }
    ];
    
    addGenericCarrousel(slidesProjetKasa, 'Kasa', 'Kasa', "https://github.com/Orlly38/Projet-8-Kasa", "dev");
}