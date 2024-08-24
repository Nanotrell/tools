




document.getElementsByClassName("second-background-block")[0].style.background = "radial-gradient(at left , #9DA1D5, transparent)"; 
document.getElementsByClassName("background-block")[0].style.background = "radial-gradient(at bottom right , #B92977, transparent)";
document.getElementsByClassName("background-block")[0].style.opacity = "1";
document.getElementsByClassName("second-background-block")[0].style.opacity = "1";
// генерация градиента
setInterval(function () {

	let gradient = (function generateGradient(min, max) {
		let num = (function getRandomNumber(min, max) {
			return Math.floor(Math.random() * (max - min) + min)
		} )(min, max)
	
		// let gradientDirection;
		
		if (localStorage.getItem("bodyColor")=="rgb(244, 166, 161)" || localStorage.getItem("bodyColor")=="rgb(221, 190, 168)") {
			if (num == 1){return "radial-gradient(at bottom, #9DA1D5, transparent)"};
			if (num == 2){return "radial-gradient(at top , #9DA1D5, transparent)"};
			if (num == 3){return "radial-gradient(at left , #9DA1D5, transparent)"};
			if (num == 4){return "radial-gradient(at right , #9DA1D5, transparent)"};
			if (num == 5){return "radial-gradient(at top left , #9DA1D5, transparent)"};
			if (num == 6){return "radial-gradient(at top right, #9DA1D5, transparent)"};
			if (num == 7){return "radial-gradient(at bottom left , #9DA1D5, transparent)"};
			if (num == 8){return "radial-gradient(at bottom right , #9DA1D5, transparent)"};
		
		}
		if (num == 1){return "radial-gradient(at bottom, #C7D98C, transparent)"};
		if (num == 2){return "radial-gradient(at top , #C7D98C, transparent)"};
		if (num == 3){return "radial-gradient(at left , #C7D98C, transparent)"};
		if (num == 4){return "radial-gradient(at right , #C7D98C, transparent)"};
		if (num == 5){return "radial-gradient(at top left , #C7D98C, transparent)"};
		if (num == 6){return "radial-gradient(at top right, #C7D98C, transparent)"};
		if (num == 7){return "radial-gradient(at bottom left , #C7D98C, transparent)"};
		if (num == 8){return "radial-gradient(at bottom right , #C7D98C, transparent)"};
	
		
		
	  })(1, 9);


	  let gradient11 = (function generateGradient(min, max) {
		let num = (function getRandomNumber(min, max) {
			return Math.floor(Math.random() * (max - min) + min)
		} )(min, max)
	
		// let gradientDirection;
		
		if (localStorage.getItem("bodyColor")=="rgb(244, 166, 161)" || localStorage.getItem("bodyColor")=="rgb(221, 190, 168)") {
			if (num == 8){return "radial-gradient(at bottom, #9DA1D5, transparent)"};
			if (num == 7){return "radial-gradient(at top , #9DA1D5, transparent)"};
			if (num == 6){return "radial-gradient(at left , #9DA1D5, transparent)"};
			if (num == 5){return "radial-gradient(at right , #9DA1D5, transparent)"};
			if (num == 4){return "radial-gradient(at top left , #9DA1D5, transparent)"};
			if (num == 3){return "radial-gradient(at top right, #9DA1D5, transparent)"};
			if (num == 2){return "radial-gradient(at bottom left , #9DA1D5, transparent)"};
			if (num == 1){return "radial-gradient(at bottom right , #9DA1D5, transparent)"};
		
		}
		if (num == 8){return "radial-gradient(at bottom, #C7D98C, transparent)"};
		if (num == 7){return "radial-gradient(at top , #C7D98C, transparent)"};
		if (num == 6){return "radial-gradient(at left , #C7D98C, transparent)"};
		if (num == 5){return "radial-gradient(at right , #C7D98C, transparent)"};
		if (num == 4){return "radial-gradient(at top left , #C7D98C, transparent)"};
		if (num == 3){return "radial-gradient(at top right, #C7D98C, transparent)"};
		if (num == 2){return "radial-gradient(at bottom left , #C7D98C, transparent)"};
		if (num == 1){return "radial-gradient(at bottom right , #C7D98C, transparent)"};
	
		
		
	  })(1, 9);
	
	  
	let gradient2 = (function generateGradient(min, max) {
		let num = (function getRandomNumber(min, max) {
			return Math.floor(Math.random() * (max - min) + min)
		} )(min, max)

		
		if (num == 8){return "radial-gradient(at bottom, #B92977, transparent)"};
		if (num == 4){return "radial-gradient(at top , #B92977, transparent)"};
		if (num == 7){return "radial-gradient(at left , #B92977, transparent)"};
		if (num == 3){return "radial-gradient(at right , #B92977, transparent)"};
		if (num == 6){return "radial-gradient(at top left , #B92977, transparent)"};
		if (num == 2){return "radial-gradient(at top right, #B92977, transparent)"};
		if (num == 5){return "radial-gradient(at bottom left , #B92977, transparent)"};
		if (num == 1){return "radial-gradient(at bottom right , #B92977, transparent)"};
	
		
		
	  })(1, 9);

	  let gradient22 = (function generateGradient(min, max) {
		let num = (function getRandomNumber(min, max) {
			return Math.floor(Math.random() * (max - min) + min)
		} )(min, max)

		
		if (num == 3){return "radial-gradient(at bottom, #B92977, transparent)"};
		if (num == 6){return "radial-gradient(at top , #B92977, transparent)"};
		if (num == 8){return "radial-gradient(at left , #B92977, transparent)"};
		if (num == 1){return "radial-gradient(at right , #B92977, transparent)"};
		if (num == 4){return "radial-gradient(at top left , #B92977, transparent)"};
		if (num == 7){return "radial-gradient(at top right, #B92977, transparent)"};
		if (num == 5){return "radial-gradient(at bottom left , #B92977, transparent)"};
		if (num == 2){return "radial-gradient(at bottom right , #B92977, transparent)"};
	
		
		
	  })(1, 9);
	
	  document.getElementsByClassName("background-block")[0].style.background = gradient;
	  document.getElementsByClassName("second-background-block")[0].style.background = gradient2; 
	  document.getElementsByClassName("background-block2")[0].style.background = gradient11;
	  document.getElementsByClassName("second-background-block2")[0].style.background = gradient22;
	
	  
	//   if (document.getElementsByClassName("background-block")[0].style.opacity == "0") {
	// 	document.getElementsByClassName("background-block")[0].style.opacity = "1";
	// 	document.getElementsByClassName("background-block2")[0].style.opacity = "0";
	// } else {
	// 	document.getElementsByClassName("background-block")[0].style.opacity = "0";
	// 	document.getElementsByClassName("background-block2")[0].style.opacity = "1";
	// }
	
	// if (document.getElementsByClassName("second-background-block")[0].style.opacity == "0") {
	// 	document.getElementsByClassName("second-background-block")[0].style.opacity = "1";
	// 	document.getElementsByClassName("second-background-block2")[0].style.opacity = "0";
	// } else {
	// 	document.getElementsByClassName("second-background-block")[0].style.opacity = "0";
	// 	document.getElementsByClassName("second-background-block2")[0].style.opacity = "1";
	// }
	
	}, 4000);


	document.getElementById("goals").onclick = sectionGoalsOpen;
	document.getElementById("notes").onclick = sectionNotesOpen;
	document.getElementById("tasks").onclick = sectionTasksOpen;
	
	document.getElementsByClassName("goals")[0].style.opacity = "1";
	document.getElementsByClassName("notes")[0].style.opacity = "0";
	document.getElementsByClassName("tasks")[0].style.opacity = "0";
	
	document.getElementsByClassName("element-one")[0].style.opacity = "1";
	document.getElementsByClassName("element-two")[0].style.opacity = "0";
	document.getElementsByClassName("element-three")[0].style.opacity = "0";
	
	
	function sectionGoalsOpen() {
		if (document.getElementsByClassName("goals")[0].style.opacity = "0") {
			document.getElementsByClassName("goals")[0].style.opacity = "1";
			document.getElementsByClassName("element-one")[0].style.opacity = "1";

			document.getElementsByClassName("goals")[0].style.zIndex = "1";
			document.getElementsByClassName("notes")[0].style.zIndex = "0";
			document.getElementsByClassName("tasks")[0].style.zIndex = "0";
	
			document.getElementsByClassName("notes")[0].style.opacity = "0";
			document.getElementsByClassName("tasks")[0].style.opacity = "0";
	
			document.getElementsByClassName("element-two")[0].style.opacity = "0";
			document.getElementsByClassName("element-three")[0].style.opacity = "0";
		} else {
			document.getElementsByClassName("goals")[0].style.opacity = "0";
			document.getElementsByClassName("element-one")[0].style.opacity = "0";
		}
	}
	
	function sectionNotesOpen() {
		if (document.getElementsByClassName("notes")[0].style.opacity = "0") {
			document.getElementsByClassName("notes")[0].style.opacity = "1";
			document.getElementsByClassName("element-two")[0].style.opacity = "1";

			document.getElementsByClassName("goals")[0].style.zIndex = "0";
			document.getElementsByClassName("notes")[0].style.zIndex = "1";
			document.getElementsByClassName("tasks")[0].style.zIndex = "0";
	
			document.getElementsByClassName("tasks")[0].style.opacity = "0";
			document.getElementsByClassName("goals")[0].style.opacity = "0";
	
			document.getElementsByClassName("element-three")[0].style.opacity = "0";
			document.getElementsByClassName("element-one")[0].style.opacity = "0";
		} else {
			document.getElementsByClassName("notes")[0].style.opacity = "0";
			document.getElementsByClassName("element-two")[0].style.opacity = "0";
		}
	}
	
	function sectionTasksOpen() {
		if (document.getElementsByClassName("tasks")[0].style.opacity = "0") {
			document.getElementsByClassName("tasks")[0].style.opacity = "1";
			document.getElementsByClassName("element-three")[0].style.opacity = "1";

			document.getElementsByClassName("goals")[0].style.zIndex = "0";
			document.getElementsByClassName("notes")[0].style.zIndex = "0";
			document.getElementsByClassName("tasks")[0].style.zIndex = "1";
	
			document.getElementsByClassName("notes")[0].style.opacity = "0";
			document.getElementsByClassName("goals")[0].style.opacity = "0";
	
			document.getElementsByClassName("element-one")[0].style.opacity = "0";
			document.getElementsByClassName("element-two")[0].style.opacity = "0";
		} else {
			document.getElementsByClassName("tasks")[0].style.opacity = "0";
			document.getElementsByClassName("element-three")[0].style.opacity = "0";
		}
	}
	
	


document.getElementsByTagName("body")[0].style.backgroundColor = localStorage.getItem("bodyColor");
for (let index = 0; index < document.getElementsByClassName("text").length; index++) {
	document.getElementsByClassName("text")[index].style.color = localStorage.getItem("textColor");
}
for (let index = 0; index < document.getElementsByTagName("button").length; index++) {
	document.getElementsByTagName("button")[index].style.border = localStorage.getItem("border");
}
for (let index = 0; index < document.getElementsByTagName("button").length; index++) {
	document.getElementsByTagName("button")[index].style.boxShadow = localStorage.getItem("boxShadow");
}
document.getElementsByClassName("themes-choose")[0].style.opacity = "0";

for (let index = 0; index < document.getElementsByClassName("element").length; index++) {
	document.getElementsByClassName("element")[index].style.backgroundColor = localStorage.getItem("bodyColor");
}




for (let index = 0; index < document.getElementsByClassName("color").length; index++) {
	document.getElementsByClassName("color")[index].onclick = colorChangeFunction;
	function colorChangeFunction() {
		localStorage.setItem("bodyColor", document.getElementsByClassName("color")[index].style.backgroundColor)
		document.getElementsByTagName("body")[0].style.backgroundColor = localStorage.getItem("bodyColor");
		
		for (let index = 0; index < document.getElementsByClassName("element").length; index++) {
			document.getElementsByClassName("element")[index].style.backgroundColor = localStorage.getItem("bodyColor");
		}
		
		if (document.getElementsByTagName("body")[0].style.backgroundColor == "rgb(52, 68, 13)" || document.getElementsByTagName("body")[0].style.backgroundColor == "rgb(56, 4, 14)" || document.getElementsByTagName("body")[0].style.backgroundColor == "rgb(39, 35, 58)" || document.getElementsByTagName("body")[0].style.backgroundColor == "rgb(61, 52, 139)") {
			localStorage.setItem("textColor", "#EBE7E7");
			localStorage.setItem("border", "2px solid #9F9A9A");
			localStorage.setItem("boxShadow", "5px 4px 67px 0px #FAF4F4");
			for (let index = 0; index < document.getElementsByClassName("text").length; index++) {
				document.getElementsByClassName("text")[index].style.color = localStorage.getItem("textColor");
			}

			for (let index = 0; index < document.getElementsByTagName("button").length; index++) {
				document.getElementsByTagName("button")[index].style.border = localStorage.getItem("border");
				
			}
			for (let index = 0; index < document.getElementsByTagName("button").length; index++) {
				document.getElementsByTagName("button")[index].style.boxShadow = localStorage.getItem("boxShadow");
			}
			// document.getElementsByClassName("themes-choose")[0].style.boxShadow = localStorage.getItem("boxShadow");

			for (let index = 0; index < document.getElementsByClassName("color").length; index++) {
				document.getElementsByClassName("color")[index].style.boxShadow = localStorage.getItem("boxShadow");
			}
		};
		if (document.getElementsByTagName("body")[0].style.backgroundColor != "rgb(52, 68, 13)" && document.getElementsByTagName("body")[0].style.backgroundColor != "rgb(56, 4, 14)" && document.getElementsByTagName("body")[0].style.backgroundColor != "rgb(39, 35, 58)" && document.getElementsByTagName("body")[0].style.backgroundColor != "rgb(61, 52, 139)"){
			localStorage.setItem("textColor", "rgb(0, 0, 0, 0.5)");
			localStorage.setItem("border", "none");
			localStorage.setItem("boxShadow", "5px 4px 67px 0px rgba(0, 0, 0, 0.4)");
			for (let index = 0; index < document.getElementsByClassName("text").length; index++) {
				document.getElementsByClassName("text")[index].style.color = localStorage.getItem("textColor");
				
			}
			for (let index = 0; index < document.getElementsByTagName("button").length; index++) {
				document.getElementsByTagName("button")[index].style.border = localStorage.getItem("border");
				
			}
			for (let index = 0; index < document.getElementsByTagName("button").length; index++) {
				document.getElementsByTagName("button")[index].style.boxShadow = localStorage.getItem("boxShadow");
			}
			document.getElementsByClassName("themes-choose")[0].style.boxShadow = localStorage.getItem("boxShadow");

			for (let index = 0; index < document.getElementsByClassName("color").length; index++) {
				document.getElementsByClassName("color")[index].style.boxShadow = localStorage.getItem("boxShadow");
			}

			document.getElementsByClassName("themes-choose")[0].style.boxShadow = localStorage.getItem("boxShadow");
		}
};


}

document.getElementById("themes").onclick = colorChangeOpen;

function colorChangeOpen() {
	if (document.getElementsByClassName("themes-choose")[0].style.opacity == "0") {
		document.getElementsByClassName("themes-choose")[0].style.height = "calc(30px + 21vh)";
		document.getElementsByClassName("themes-choose")[0].style.opacity = "1";
	} else {
		document.getElementsByClassName("themes-choose")[0].style.height = "calc(7vh + 2px)";
		document.getElementsByClassName("themes-choose")[0].style.opacity = "0";
	}
}




console.clear();

const wordContainerEl = document.querySelector("[data-word]");
const word = wordContainerEl.getAttribute("data-word");
const wordRepeatTimes = wordContainerEl.getAttribute("data-word-repeat");
const textColorsArray = wordContainerEl.getAttribute("data-text-colors").split(",");

for (let i = 0; i < wordRepeatTimes; i++) {
	const wordEl = document.createElement("span");
	wordEl.className = "word";
	wordEl.style.setProperty("--word-index", i);
	wordEl.style.setProperty("--color", textColorsArray[i]);
	for (let j = 0; j < word.length; j++) {
		const charEl = document.createElement("span");
		charEl.className = "char";
		charEl.style.setProperty("--char-index", j);
		charEl.innerHTML = word[j];
		wordEl.appendChild(charEl);
	}
	wordContainerEl.appendChild(wordEl);
}




document.getElementById("goal-create").onclick = CreateGoal;
document.getElementById("note-create").onclick = CreateNote;
document.getElementById("task-create").onclick = CreateTask;


