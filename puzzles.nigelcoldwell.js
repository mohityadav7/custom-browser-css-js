function toggleHelper(num) {
	if (localStorage.getItem(num) === null) {
		localStorage.setItem(num, true);
		console.log("Marked " + num + " as done.");
		return true;
	}
	else {
		localStorage.removeItem(num);
		console.log("Marked " + num + " as NOT done.");
		return false;
	}
}

function toggleMarkAsDone() {
	console.log("toggling...");
	let status = toggleHelper(parseInt(this.parentElement.parentElement.innerText.substr(0, 4)));
	if (status === true) {
		console.log("Done");
		this.innerText = "Done";
	}
	else {
		console.log("Not Done");
		this.innerText = "Mark As Done";
	}
}

buttons = document.getElementsByClassName("iqbuttons");

for (let i = 0; i < 87; ++i) {
	var a = document.createElement('a');
	a.classList.add("buttonlink");
	a.onclick = toggleMarkAsDone;
	if (localStorage.getItem(87 - i) === null) {
		a.innerText = "Mark As Done";
	} else {
		console.log((87 - i) + ": done");
		a.innerText = "Done";
	}
	buttons[i].appendChild(a);
}
