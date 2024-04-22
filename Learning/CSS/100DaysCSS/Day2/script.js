const burger = document.querySelector(".center");
const mainBar = document.querySelector(".mainBar");


burger.addEventListener("click", () => {
	if(burger.classList.contains("closed")) {
		  burger.classList.remove("closed")
		  burger.classList.add("open")
		}else{
			burger.classList.add("closed")
		  burger.classList.remove("open")
		}
})