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
NavFixedOrNot(myWidth);

function NavFixedOrNot(widthscreen)
{

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
		} else {
			document.getElementById("nav").className = '';
		}

	}
}

function CloseOtherMenu(autre1,autre2,autre3,focus) {
	var searchcheckbox = document.getElementById("menu-search-checkbox");
	if (!searchcheckbox.checked && focus) {
		document.getElementById("q").focus();
	} else {
		document.getElementById("q").blur();
	}

	var el_html = document.getElementsByTagName( 'html' )[0];
	var el_body = document.getElementsByTagName( 'body' )[0];
	el_html.className = el_html.className.replace( 'nav-is-stuck', '' );
	el_body.style.paddingTop = '0px';
	document.getElementById("menu-"+autre1+"-checkbox").checked = false;
	document.getElementById("menu-"+autre2+"-checkbox").checked = false;

	var contextuel = document.getElementById("menu-"+autre3+"-checkbox");
		if(contextuel){
			contextuel.checked = false;
		}

}

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

/*
	RequestAnimationFrame Polyfill

	http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	by Erik Möller, fixes from Paul Irish and Tino Zijdel

	MIT license
 */

(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	}

	if ( ! window.requestAnimationFrame ) {
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); },
			timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}

	if ( ! window.cancelAnimationFrame ) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}
}());


/*
	Sticky menu script
 */

(function(w,d,undefined){
	var el_html = d.documentElement,
		el_body = d.getElementsByTagName('body')[0],
		header = d.getElementById('header'),
		lastScroll = w.pageYOffset || el_body.scrollTop,

		menuIsStuck = function(triggerElement, wScrollTop, lastScroll) {
			var regexp		= /(nav\-is\-stuck)/i,
				classFound	= el_html.className.match( regexp ),
				navHeight	= header.offsetHeight,
				bodyRect	= el_body.getBoundingClientRect(),
				scrollValue	= triggerElement ? triggerElement.getBoundingClientRect().top - bodyRect.top - navHeight  : 800,
				scrollValFix = classFound ? scrollValue : scrollValue + navHeight;

			// if scroll down is 700 or more AND nav-is-stuck class doesn't exist AND we are going up
			if ( wScrollTop > scrollValFix && !classFound && wScrollTop < lastScroll && window.innerWidth < 1024 ) {
				el_html.className = el_html.className + ' nav-is-stuck';
				el_body.style.paddingTop = navHeight + 'px';
			}

			// if we are to high in the page AND nav-is-stuck class exists
			if ( classFound && wScrollTop > lastScroll ) {
				el_html.className = el_html.className.replace( regexp, '' );
				el_body.style.paddingTop = '0px';
			}
		},

		onScrolling = function() {
			var wScrollTop = w.pageYOffset || el_body.scrollTop;

			// use scroll datas as parameters…
			menuIsStuck( d.getElementById('brdwelcome'), wScrollTop, lastScroll );

			// save current scroll as last scroll position
			lastScroll = wScrollTop;

		};

	el_html.className = el_html.className + ' js';

	// when you scroll, fire onScrolling() function
	w.addEventListener('scroll', function(){
		w.requestAnimationFrame( onScrolling );
	});


}(window, document));

// RGPD Video Consent
function setCookie(cookieName, cookieValue, nDays) {
	var today = new Date();
	var expire = new Date();
	if (nDays==null || nDays==0) nDays=1;
	expire.setTime(today.getTime() + 3600000*24*nDays);
	document.cookie = cookieName+"="+escape(cookieValue)+ ";expires="+expire.toGMTString()+"; path=/";
}
function getCookie(cookieName) {
	var theCookie=" "+document.cookie;
	var ind=theCookie.indexOf(" "+cookieName+"=");
	if (ind==-1) ind=theCookie.indexOf(";"+cookieName+"=");
	if (ind==-1 || cookieName=="") return "";
	var ind1=theCookie.indexOf(";",ind+1);
	if (ind1==-1) ind1=theCookie.length;
	return unescape(theCookie.substring(ind+cookieName.length+2,ind1));
}
function deleteCookie(cookieName) {
	var today = new Date();
	var expire = new Date() - 30;
	expire.setTime(today.getTime() - 3600000*24*90);
	document.cookie = cookieName+"="+escape(cookieValue)+ ";expires="+expire.toGMTString();
}

function VideoConsentDisplay(vidid, source, width, height) {
	var CookieConsent = getCookie('VideoConsentAcc');

	document.getElementById('embedhover').style.display = 'none';

	switch(CookieConsent) {
		case 'true':
			VideoConsentAccepted(vidid, source, width, height);
			break;
		case 'false':
			VideoConsentRefused(vidid, source, width, height);
			break;
		default:
			var parent = document.getElementById(vidid);
			var container = document.getElementById(vidid + 'THUMB');
			var conn = document.createElement('div');

			// conn.style.position = 'absolute';
			// conn.style.float = 'left';
			// conn.style.width = '100%';
			// conn.style.height = '98%';
			conn.id = 'youtube-consent';

			parent.insertBefore(conn, container);
			conn.innerHTML= '<div class="inner"><strong>Information relative à vos données personnelles</strong><p>Randonner-Leger.org n\'héberge pas cette vidéo et n\'est responsable ni de son contenu, ni des données personnelles susceptibles d\'être exploitées par son hébergeur lors de son affichage en fonction de ses propres politiques de confidentialité (adresse IP, cookies...).</p><div class="consent"><input type="checkbox" name="memorise" id="memorise" value="true">&nbsp;<label for="memorise">Mémoriser mon choix et ne plus afficher ce message.</label></div><input class="" type="submit" onclick="VideoConsentAcceptCookies(\''+vidid+'\', \''+source+'\', \''+width+'\', \''+height+'\');" value="Voir la vidéo" />&nbsp;&nbsp;<input class="" type="submit" id="a_175" id="euCookieAcceptWP" onclick="VideoConsentRefuseCookies(\''+vidid+'\', \''+source+'\');" value="Regarder sur '+source+'" /></div>';
	}

}

function VideoConsentAcceptCookies(vidid, source, width, height) {
	if (document.getElementById('memorise').checked) {
		setCookie('VideoConsentAcc', true, 365);
	}
	document.getElementById('youtube-consent').style.display = 'none';
	VideoConsentAccepted(vidid, source, width, height);
}

function VideoConsentRefuseCookies(vidid, source) {
	if (document.getElementById('memorise').checked) {
		setCookie('VideoConsentAcc', false, 365);
	}
	document.getElementById('youtube-consent').style.display = 'none';
	VideoConsentRefused(vidid, source);
}

function VideoConsentAccepted(vidid, source, width, height) {
	switch(source) {
		case 'youtube':
			document.getElementById(vidid).innerHTML= '<div class="innervideo"><iframe src="https://www.youtube.com/embed/' + vidid + '" style="max-width:' + width + 'px;max-height:' + height + 'px;" allowfullscreen ></iframe></div>';
			break;
		case 'dailymotion':
			document.getElementById(vidid).innerHTML= '<div class="innervideo"><iframe src="https://www.dailymotion.com/embed/video/' + vidid + '" style="max-width:480px;max-height:360px;" allowfullscreen ></iframe></div>';
			break;
		case 'vimeo':
			document.getElementById(vidid).innerHTML= '<div class="innervideo"><iframe src="https://player.vimeo.com/video/' + vidid + '" style="max-width:480px;max-height:360px;" allowfullscreen ></iframe></div>';
			break;
	}
}

function VideoConsentRefused(vidid, source) {
	switch(source) {
		case 'youtube':
			window.open('https://youtube.com/watch?v=' + vidid, '_blank');
			break;
		case 'dailymotion':
			window.open('https://www.dailymotion.com/video/' + vidid, '_blank');
			break;
		case 'vimeo':
			window.open('https://youtube.com/watch?v=' + vidid, '_blank');
			break;
	}
}
