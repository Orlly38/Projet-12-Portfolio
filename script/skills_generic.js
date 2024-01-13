function addSkills(skillsData,title){
    let container = document.querySelector("#skills .all-skills");
    let skill = document.createElement("div");
    let skillImgs = document.createElement("div");
    let titleHtml = document.createElement("h3");
    titleHtml.appendChild(document.createTextNode(title));
    skill.appendChild(titleHtml);
    skillsData.forEach(skillData => {
        let skillsDiv = document.createElement("div");   
        skillsDiv.innerHTML += '<img src="./images/'+skillData.image+'" />';
        skillsDiv.classList.add("skill-img");
        skillImgs.appendChild(skillsDiv);
    });
    skillImgs.classList.add('skill-imgs');
	skill.appendChild(skillImgs);
    container.appendChild(skill);
}