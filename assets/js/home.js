let btnNewPost = () => {
	document.getElementsByClassName("timeNew__body")[0].scrollTo({
		top: 0,
		behavior: "smooth",
	});
	setTimeout(() => {
		document.getElementsByClassName("status__input")[0].focus();
	}, 700);
};

let openCmtField = (event) => {
	let cmtField = event.target.parentNode.lastElementChild;
	if (cmtField.style.opacity != "1" && cmtField.style.height != "350px") {
		cmtField.style.height = "350px";
		setTimeout(() => {
			cmtField.style.opacity = "1";
		}, 200);
	} else {
		cmtField.style.opacity = "0";
		setTimeout(() => {
			cmtField.style.height = "0";
		}, 200);
	}
};

let turnOnOptionPost = (event) => {
	let option = event.target.parentNode.lastElementChild;
	if (option.style.display != "block") {
		option.style.display = "block";
		setTimeout(() => {
			option.style.opacity = "1";
		}, 200);
	} else {
		option.style.opacity = "0";
		setTimeout(() => {
			option.style.display = "none";
		}, 200);
	}
};

let like = (event) => {
	let btnLike = event.target;
	let arrBtn = btnLike.parentNode.childNodes;
	if (btnLike.classList.contains("post__footer-btnLike")) {
		if (btnLike.style.color != "white") {
			btnLike.style.color = "white";
      if(arrBtn[3].style.color != "") {
        console.log('lal')
        event.target.parentNode.childNodes[3].childNodes[3].innerHTML --
      }
			arrBtn[3].style.color = "";
      // ++ num of like
      event.target.parentNode.childNodes[1].childNodes[3].innerHTML ++
		} else {
      btnLike.style.color = "";
      // -- num of like
      event.target.parentNode.childNodes[1].childNodes[3].innerHTML --
		}
	} else {
    if (btnLike.style.color != "white") {
      btnLike.style.color = "white";
      if(arrBtn[1].style.color != "") {
        console.log('lal')
        event.target.parentNode.childNodes[1].childNodes[3].innerHTML --
      }
			arrBtn[1].style.color = "";
      // ++ num of dislike
      event.target.parentNode.childNodes[3].childNodes[3].innerHTML ++
		} else {
      btnLike.style.color = "";
      // ++ num of dislike
      event.target.parentNode.childNodes[3].childNodes[3].innerHTML --
    } 
	}
};

function loadFile(event) {
	console.log(URL.createObjectURL(event.target.files[0]));
	let ouput = document.getElementById("output");
	output.src = URL.createObjectURL(event.target.files[0]);
	output.onload = function () {
		URL.revokeObjectURL(output.src);
	};
}

