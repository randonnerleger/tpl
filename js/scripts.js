if (typeof (window.innerWidth) == 'number') {
	myWidth = window.innerWidth;
	myHeight = window.innerHeight;
} else {
	if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
	myWidth = document.documentElement.clientWidth;
	myHeight = document.documentElement.clientHeight;
	} else {
		if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
			myWidth = document.body.clientWidth;
			myHeight = document.body.clientHeight;
		}
	}
}
NavFixedOrNot(myWidth, myHeight);

function NavFixedOrNot(widthscreen, heightscreen)
{

	if(widthscreen>1024) {
		heightnav("nav", widthscreen, heightscreen, 155);
	} else {
		document.getElementById("nav").style.minHeight = heightscreen+"px";
	}

	window.onscroll = function() {
	var hasScrollY="scrollY"in window;
	var scroll=hasScrollY?window.scrollY:document.documentElement.scrollTop;

		if(scroll>120) {
			document.getElementById("top-page").className = 'visible';
		} else {
			document.getElementById("top-page").className = '';
		}

		if(scroll>120 && widthscreen>1024) {
			document.getElementById("nav").className = 'fixed';
			heightnav("nav", widthscreen, heightscreen, 40);
		} else {
			document.getElementById("nav").className = '';
		}

		if(scroll<120 && widthscreen>1024) {
			heightnav("nav", widthscreen, heightscreen, 155);
		}

	}
}

function heightnav(bloc, widthscreen, heightscreen, supHeight)
{
	var hauteur;
	if(widthscreen>1024)
	{
		hauteur = heightscreen-supHeight;
		document.getElementById(bloc).style.maxHeight = hauteur+"px";
	} else {
		document.getElementById(bloc).style.minheight = heightscreen;
	}
}

// Fonction exécutée au redimensionnement de l'écran pour pour caler la nav en fonction des hauteurs possibles
function redimensionnement() {
	var result = document.getElementById('result');

	if("matchMedia" in window) { // Détection

		if (typeof (window.innerWidth) == 'number') {
			myNewWidth = window.innerWidth;
			myNewHeight = window.innerHeight;
			} else {
			if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
			myNewWidth = document.documentElement.clientWidth;
			myNewHeight = document.documentElement.clientHeight;
			} else {
			if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
				myNewWidth = document.body.clientWidth;
				myNewHeight = document.body.clientHeight;
			}
			}
		}

		if(window.matchMedia("(min-width:1025px)").matches) {
		// écran supérieur à 1024px
		document.getElementById("nav").style.minHeight = "";
		NavFixedOrNot(myNewWidth,myNewHeight);
		} else {
		document.getElementById("nav").style.minHeight = myNewHeight+"px";
		}
	}
}
window.addEventListener('resize', redimensionnement, false);

if ( window.addEventListener ) {
var kkeys = [], konami = "38,38,40,40,37,39,37,39,82,76";
var myfolder_rl=(myrl_info.folder_rl);
//var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
window.addEventListener("keydown", function(e)
	{
	kkeys.push( e.keyCode );
		if ( kkeys.toString().indexOf( konami ) >= 0 ) 
		{
			if (confirm ("Attention, vous allez tout casser... \nSouhaitez-vous tout de même continuer ?")) {
				alert("On vous aura prévenu...\nVous risquez de perdre quelques minutes précieuses ;p");
				window.location = myfolder_rl+"/tetris.php";
				return false;
			}
		}
	}, 
	true);
}

function CloseOtherMenu(autre1,autre2,autre3) {
	document.getElementById("menu-"+autre1+"-checkbox").checked = false;
	document.getElementById("menu-"+autre2+"-checkbox").checked = false;
	document.getElementById("menu-"+autre3+"-checkbox").checked = false;
}
