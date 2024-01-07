function findActiveIndex() {
	for (let i = 0; i < getDots().length; i++) {
	  if (getDots()[i].classList.contains("dot_selected")) {
		return i;
	  }
	}
  }


function addKasaCarrousel(){

    const slides = [
        {
         
            "image":"kasa.png"
        },
        {
            "title":"Objectif",
            "image":"image1.png",
            "text": "blababla bblabal <ul><li>dededew</li></ul>"
        },
        {
            "title":"Compétences",
            "image":"image1.png",
            "text": "blababla bblabal <ul><li>dededew</li></ul>"
        }
    ];
    let container = document.querySelector("#portfolio .container");
    let carrouselDiv = document.createElement("div");            
    carrouselDiv.innerHTML += '	<img class="banner-img" src="./images/'+slides[0].image+'" alt="Project Banner">';
    carrouselDiv.innerHTML += '<img class="arrow_left arrow" src="./images/arrow_left.png" alt="arrow_left banner">';
    carrouselDiv.innerHTML += '<img class="arrow_right arrow" src="./images/arrow_right.png" alt="arrow_right banner">';
    carrouselDiv.innerHTML += '<ul class="getDots()">';
    carrouselDiv.innerHTML += '<li id="dot1" class="dot dot_selected" type="bullet"></li>';
    carrouselDiv.innerHTML += '<li id="dot2" class="dot" type="bullet"></li>';
    carrouselDiv.innerHTML += '<li id="dot3" class="dot" type="bullet"></li>';
    carrouselDiv.innerHTML += '</ul>';
    carrouselDiv.classList.add("carrousel-kasa");
    container.appendChild(carrouselDiv);

     arrowRight = document.querySelector (".arrow_right");
     arrowLeft = document.querySelector (".arrow_left");
    
    arrowRight.addEventListener("click",function () {	
		let activeIndex=findActiveIndex();
// Boucle pour slider à l'infini		
		if (activeIndex===2){
			getDots()[0] .classList.add ("dot_selected");
			getDots()[2] .classList.remove ("dot_selected");
			document.querySelector (".banner-img").src='./images/'+slides[0].image;
		}
// Comportement normal du slider
		else { getDots()[activeIndex+1] .classList.add ("dot_selected");	
			getDots()[activeIndex] .classList.remove ("dot_selected");	
			document.querySelector (".banner-img").src='./images/'+slides[activeIndex+1].image;
		}
	});

// FLECHE GAUCHE
	arrowLeft.addEventListener("click",function () {
		let activeIndex=findActiveIndex();
        // Boucle pour slider à l'infini
		if (activeIndex===0){
			getDots()[2] .classList.add ("dot_selected");
			getDots()[0] .classList.remove ("dot_selected");
			document.querySelector (".banner-img").src='./images/'+slides[2].image;
		}
        // Comportement normal du slider
		else { getDots()[activeIndex-1] .classList.add ("dot_selected");
		getDots()[activeIndex] .classList.remove ("dot_selected");	
		document.querySelector (".banner-img").src='./images/'+slides[activeIndex-1].image;
	}
});

// BULLETS POINTS
for (let i = 0; i < getDots().length; i++) {
	getDots()[i].addEventListener("click",function (informationClick) {	
	getDots()[findActiveIndex()] .classList.remove ("dot_selected");
	document.getElementById(informationClick.target.id) .classList.add ("dot_selected");
	document.querySelector (".banner-img").src='./images/'+slides[findActiveIndex()].image;
	});
}

}

function getDots(){
    return document.querySelectorAll(".dot");
}