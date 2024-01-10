function findActiveIndex() {
	for (let i = 0; i < getDots().length; i++) {
	  if (getDots()[i].classList.contains("dot_selected")) {
		return i;
	  }
	}
  }


function add724EventsCarrousel(){

    const slides = [
        {
            "image":"724events.png",
            "text":""
        },
        {
            "title":"Objectif",
            "image":"724events-text.png",
            "text": "Voici le site de 724a"
        },
        {
            "title":"Compétences",
            "image":"724events-text.png",
            "text": "blababla bblabal"
        }
    ];
    let container = document.querySelector("#portfolio .container");
    let carrouselDiv = document.createElement("div");            
    carrouselDiv.innerHTML += '	<img class="img-724" src="./images/'+slides[0].image+'" alt="Image de Kasa" />';
    carrouselDiv.innerHTML += '	<p class="text-724" > '+slides[0].text+'</p>';
    carrouselDiv.innerHTML += '<span class="arrow_left arrow">&lt;</span>';
    carrouselDiv.innerHTML += '<span class="arrow_right arrow">&gt;</span>';
    carrouselDiv.innerHTML += getDotsHtml();
    carrouselDiv.classList.add("carrousel-724");
    carrouselDiv.classList.add("carrousel");
    carrouselDiv.classList.add("test");
    container.appendChild(carrouselDiv);

     arrowRight = document.querySelector (".carrousel-724 .arrow_right");
     arrowLeft = document.querySelector (".carrousel-724 .arrow_left");
    
    arrowRight.addEventListener("click",function () {	
		let activeIndex=findActiveIndex();

        // Boucle pour slider à l'infini		
		if (activeIndex===2){
			getDots()[0] .classList.add ("dot_selected");
			getDots()[2] .classList.remove ("dot_selected");



			document.querySelector (".img-724").src='./images/'+slides[0].image;
            document.querySelector (".text-724").innerHTML=slides[0].text;
		}
// Comportement normal du slider
		else { getDots()[activeIndex+1] .classList.add ("dot_selected");	
			getDots()[activeIndex] .classList.remove ("dot_selected");	
			document.querySelector (".img-724").src='./images/'+slides[activeIndex+1].image;
            document.querySelector (".text-724").innerHTML=slides[activeIndex+1].text;
		}
	});

// FLECHE GAUCHE
	arrowLeft.addEventListener("click",function () {
		let activeIndex=findActiveIndex();
        // Boucle pour slider à l'infini
		if (activeIndex===0){
			getDots()[2] .classList.add ("dot_selected");
			getDots()[0] .classList.remove ("dot_selected");
			document.querySelector (".img-724").src='./images/'+slides[2].image;
            document.querySelector (".text-724").innerHTML=slides[2].text;
		}
        // Comportement normal du slider
		else { getDots()[activeIndex-1] .classList.add ("dot_selected");
		getDots()[activeIndex] .classList.remove ("dot_selected");	
		document.querySelector (".img-724").src='./images/'+slides[activeIndex-1].image;
        document.querySelector (".text-724").innerHTML=slides[activeIndex-1].text;

	}
});

// BULLETS POINTS
for (let i = 0; i < getDots().length; i++) {
	getDots()[i].addEventListener("click",function (informationClick) {	
	getDots()[findActiveIndex()] .classList.remove ("dot_selected");
	document.getElementById(informationClick.target.id) .classList.add ("dot_selected");
	document.querySelector (".img-724").src='./images/'+slides[findActiveIndex()].image;
    document.querySelector (".text-724").innerHTML=slides[findActiveIndex()].text;

	});
}

}

function getDots(){
    return document.querySelectorAll(".dot");
}

function getDotsHtml(){
    var dotsHtml = '<ul class="dots"> ';
    dotsHtml += '<li id="dot1" class="dot dot_selected" type="bullet"></li>';
    dotsHtml += '<li id="dot2" class="dot" type="bullet"></li>';
    dotsHtml += '<li id="dot3" class="dot" type="bullet"></li>';
    dotsHtml += '</ul>';
    return dotsHtml;    
}