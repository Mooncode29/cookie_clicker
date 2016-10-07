$(document).ready(function(){
	//votre code
	var counter = 0;

	$('.cake-is-a-lie').click(function(){
		counter++;
		$('.counter').text(counter);

		if (counter % 1 === 0) {
		alert("vous ferez mieux de courir!");
		var arr = ["vous ferez mieux de courir", "vous ferez mieux de lire", "vous ferez mieux developper", "blabalabla"]; 
		var aleatoire = arr[Math.floor(Math.random()*arr.length)];
		alert(aleatoire);
		}

	

	
	});

});