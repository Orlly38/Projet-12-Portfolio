function addProjetBluel(){
    const slidesProjetBluel = [
        {
            "image":"Bluel.avif",
            "text":""
        },
        {
            "title":"Objectif",
            "image":"Bluel_txt.avif",
            "text": "Site portfolio d’une architecte d’intérieur : </br></br> Création d'une page d'accueil afin de présenter tous les travaux de l'architecte. Des filtres ont été mis en place pour trier ses projets par catégorie. J'ai également créé des modales pour la gestion de son contenu, le tout en se connectant de manière sécurisée. Pour rendre le tout dynamique, ce site a été développé en grande majorité avec JavaScript, et en faisant appels à des API. "
        },
        {
            "title":"Compétences",
            "image":"Bluel_txt.avif",
            "text": "Compétences acquises : </br></br>-> HTML </br>-> CSS </br>-> JavaScript </br>-> Fetch </br>-> GitHub"
        }
    ];
    
    addGenericCarrousel(slidesProjetBluel, 'Bluel', 'Sophie Bluel', "https://github.com/Orlly38/Projet-7-Sophie-Bluel", "dev");
}