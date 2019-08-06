function afficheMenu(obj){

	var idMenu     = obj.id;
	var idSousMenu = 'sous' + idMenu;
	var sousMenu   = document.getElementById(idSousMenu);

	/*****************************************************/
	/**	on cache tous les sous-menus pour n'afficher    **/
	/** que celui dont le menu correspondant est cliqu� **/
	/** o� 4 correspond au nombre de sous-menus         **/
	/*****************************************************/
	for(var i = 1; i <= 3; i++){
		if(document.getElementById('sousMenu' + i) && document.getElementById('sousMenu' + i) != sousMenu){
			document.getElementById('sousMenu' + i).style.display = "none";
		}
	}

	if(sousMenu){
		//alert(sousMenu.style.display);
		if(sousMenu.style.display == "block"){
			sousMenu.style.display = "none";
		}
		else{
			sousMenu.style.display = "block";
		}
	}

}
