window.onload = switchHomeComponent;
let currentUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
let homeComponentToggle = "home";


function toggleComponents(toggle) {
	// console.log(window.location.href.substring(window.location.href.lastIndexOf('/') + 1)); 
	homeComponentToggle = toggle;

	switchHomeComponent();

	// if (currentUrl !== "index.html") {
	// 	window.location.href = "../index.html";
	// } else {
	// 	switchHomeComponent();
	// }
}

//Refreshes page after clicking logo 
function switchHomeComponent() {
	let aboutComponent = document.getElementById("about-component");
	let homeComponent = document.getElementById("home-component");
	if (homeComponentToggle === "home") {
		// console.log("home")
		homeComponent.style.display = "block";
		aboutComponent.style.display = "none";
	} else {
		// console.log("about")
		aboutComponent.style.display = "flex";
		homeComponent.style.display = "none";

	}
}

//Images for dark and light mode
const blackSource = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTg4IiBoZWlnaHQ9IjQwOCIgdmlld0JveD0iMCAwIDU4OCA0MDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjIwNCIgY3k9IjIwNCIgcj0iMTgxLjUiIGZpbGw9IndoaXRlIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjQ1Ii8+CjxjaXJjbGUgY3g9IjM4NCIgY3k9IjIwNCIgcj0iMjA0IiBmaWxsPSIjMTYxNjE4Ii8+Cjwvc3ZnPgo="
const whiteSource = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTg4IiBoZWlnaHQ9IjQwOCIgdmlld0JveD0iMCAwIDU4OCA0MDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjIwNCIgY3k9IjIwNCIgcj0iMTgxLjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNDUiLz4KPGNpcmNsZSBjeD0iMzg0IiBjeT0iMjA0IiByPSIyMDQiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="

//Dark/Light mode toggle button
//source: https://jemmakwak.me/
function colorToggle() {
	let pTags = document.getElementsByTagName("p");
	let h1Tags = document.getElementsByTagName("h1");
	let aTags = document.getElementsByTagName("a");
	let buttonTags = document.getElementsByTagName("button");
	let toggleButton = document.getElementById("toggle-image");
	let navBar = document.getElementById("nav-bar")

	console.log(toggleButton)
	//changes light (white background, black font) to dark (black background, white font)
	if (document.body.style.backgroundColor === "" || document.body.style.backgroundColor === "white") {
		document.body.style.backgroundColor = "black";
		navBar.style.backgroundColor = "black";
		navBar.style.borderBottomColor = "white";
		
		toggleButton.src = whiteSource;

		for (let i = 0; i < pTags.length; i++) {
			pTags[i].style.color = "white";
		}

		for (let i = 0; i < h1Tags.length; i++) {
			h1Tags[i].style.color = "white";
		}

		for (let i = 0; i < aTags.length; i++) {
			aTags[i].style.color = "white";
			aTags[i].onmouseover = function() {
				this.style.color = "purple";				


			}
			aTags[i].onmouseout = function() {
				this.style.color = "white";
			}
		}

		for (let i = 0; i < buttonTags.length; i++) {
			buttonTags[i].style.color = "white";
			buttonTags[i].onmouseover = function() {
				this.style.color = "purple";
			}
			buttonTags[i].onmouseout = function() {
				this.style.color = "white";
			}
		}
    //changes dark (black background, white font) to light (white background, black font)

	} else {
		document.body.style.backgroundColor = "white";
		navBar.style.backgroundColor = "white";
		navBar.style.backgroundColor = "white";
		navBar.style.borderBottomColor = "black";
		toggleButton.src = blackSource;

		for (let i = 0; i < pTags.length; i++) {
			pTags[i].style.color = "black";
		}

		for (let i = 0; i < h1Tags.length; i++) {
			h1Tags[i].style.color = "black";
		}


		for (let i = 0; i < aTags.length; i++) {
			aTags[i].style.color = "black";
			aTags[i].onmouseover = function() {
				this.style.color = "purple";
			}
			aTags[i].onmouseout = function() {
				this.style.color = "black";
			}
		}

		for (let i = 0; i < buttonTags.length; i++) {
			buttonTags[i].style.color = "black";
			buttonTags[i].onmouseover = function() {
				this.style.color = "purple";
			}
			buttonTags[i].onmouseout = function() {
				this.style.color = "black";
			}
		}
	}

}
//Arrow and scroll down
//source: https://www.w3schools.com/jsref/met_win_scrollby.asp
function arrowDown() {
	window.scrollBy(0, 500);
}
//Arrow and scroll up
function arrowUp() {
	window.scrollBy(0, -500);
}