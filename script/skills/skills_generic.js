function addSkills(skillsData,title){
    //Récupération container compétences
    let container = document.querySelector("#skills .all-skills");
    //Création div pour la compétence donnée, son titre et la div des images
    let skill = document.createElement("div");
    let skillImgs = document.createElement("div");
    let titleHtml = document.createElement("h3");
    titleHtml.appendChild(document.createTextNode(title));
    skill.appendChild(titleHtml);
    skillsData.forEach(skillData => {
        //Pour chaque image du tableau skillsData on crée une div avec l'image dedans et on ajoute
        let skillsDiv = document.createElement("div");   
        skillsDiv.innerHTML += '<img src="./images/logos/'+skillData.image+'" title="'+skillData.text+'"/>';
        skillsDiv.classList.add("skill-img");
        skillImgs.appendChild(skillsDiv);
    });
    skillImgs.classList.add('skill-imgs');
	skill.appendChild(skillImgs);
    container.appendChild(skill);
}