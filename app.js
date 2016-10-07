$(document).ready(function(){
	//votre code
	var counter = 0;
	var arrMessages = [
		"vous ferez mieux de courir",
		"vous ferez mieux de lire",
		"vous ferez mieux developper",
		"blabalabla"
	]; 

	$('.cake-is-a-lie').click(function(){
		counter++;
		$('.counter').text(counter);

		if (counter % 20 === 0) {
			var msgAleatoire = arrMessages[Math.floor(Math.random()*arr.length)];
			alert(msgAleatoire);
		}

	

	
	});

});
