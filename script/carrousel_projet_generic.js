function findActiveIndex(projectName) {
	for (let i = 0; i < getDots(projectName).length; i++) {
	  if (getDots(projectName)[i].classList.contains("dot_selected")) {
		return i;
	  }
	}
  } 


function addGenericCarrousel(slides,projectName,title, urlGithub, type){



    let container = document.querySelector("#portfolio .container");
    let carrouselDiv = document.createElement("div");   
	if (urlGithub){
		carrouselDiv.innerHTML += ' <h1> '+title+' <a href="'+urlGithub+'" target="_blank" title="Lien vers GitHub" class="github-link"><i class="fa-brands fa-github"></i></a></h1>';        
	}
	else {
		carrouselDiv.innerHTML += ' <h1> '+title+'</h1>';        
	}
	carrouselDiv.innerHTML += '	<img class="img-'+projectName+'" src="./images/'+slides[0].image+'" alt="Image de '+projectName+'" />';
    carrouselDiv.innerHTML += '	<p class="text-'+projectName+'" > '+slides[0].text+'</p>';
    carrouselDiv.innerHTML += '<span class="arrow_left arrow">&lt;</span>';
    carrouselDiv.innerHTML += '<span class="arrow_right arrow">&gt;</span>';
    carrouselDiv.innerHTML += getDotsHtml();
    carrouselDiv.classList.add("carrousel-"+projectName);
    carrouselDiv.classList.add("carrousel");
    carrouselDiv.classList.add(type);
    container.appendChild(carrouselDiv);

     arrowRight = document.querySelector (".carrousel-"+projectName+" .arrow_right");
     arrowLeft = document.querySelector (".carrousel-"+projectName+" .arrow_left");
    
    arrowRight.addEventListener("click",function () {	
		let activeIndex=findActiveIndex(projectName);

        // Boucle pour slider à l'infini		
		if (activeIndex===2){
			getDots(projectName)[0] .classList.add ("dot_selected");
			getDots(projectName)[2] .classList.remove ("dot_selected");



			document.querySelector (".img-"+projectName).src='./images/'+slides[0].image;
            document.querySelector (".text-"+projectName).innerHTML=slides[0].text;
		}
// Comportement normal du slider
		else { getDots(projectName)[activeIndex+1] .classList.add ("dot_selected");	
			getDots(projectName)[activeIndex] .classList.remove ("dot_selected");	
			document.querySelector (".img-"+projectName).src='./images/'+slides[activeIndex+1].image;
            document.querySelector (".text-"+projectName).innerHTML=slides[activeIndex+1].text;
		}
	});

// FLECHE GAUCHE
	arrowLeft.addEventListener("click",function () {
		let activeIndex=findActiveIndex(projectName);
        // Boucle pour slider à l'infini
		if (activeIndex===0){
			getDots(projectName)[2] .classList.add ("dot_selected");
			getDots(projectName)[0] .classList.remove ("dot_selected");
			document.querySelector (".img-"+projectName).src='./images/'+slides[2].image;
            document.querySelector (".text-"+projectName).innerHTML=slides[2].text;
		}
        // Comportement normal du slider
		else { getDots(projectName)[activeIndex-1] .classList.add ("dot_selected");
		getDots(projectName)[activeIndex] .classList.remove ("dot_selected");	
		document.querySelector (".img-"+projectName).src='./images/'+slides[activeIndex-1].image;
        document.querySelector (".text-"+projectName).innerHTML=slides[activeIndex-1].text;

	}
});

// BULLETS POINTS
for (let i = 0; i < getDots(projectName).length; i++) {
	getDots(projectName)[i].addEventListener("click",function (informationClick) {	
	getDots(projectName)[findActiveIndex(projectName)] .classList.remove ("dot_selected");
	document.getElementById(informationClick.target.id) .classList.add ("dot_selected");
	document.querySelector (".img-"+projectName).src='./images/'+slides[findActiveIndex(projectName)].image;
    document.querySelector (".text-"+projectName).innerHTML=slides[findActiveIndex(projectName)].text;

	});
}

}

function getDots(projectName){
    return document.querySelectorAll(".carrousel-"+projectName+" .dot");
}

function getDotsHtml(){
    var dotsHtml = '<ul class="dots"> ';
    dotsHtml += '<li id="dot1" class="dot dot_selected" type="bullet"></li>';
    dotsHtml += '<li id="dot2" class="dot" type="bullet"></li>';
    dotsHtml += '<li id="dot3" class="dot" type="bullet"></li>';
    dotsHtml += '</ul>';
    return dotsHtml;    
}