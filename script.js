//your JS code here. If required.
let changeBtn = document.querySelector("#change-button")
let resetBtn = document.querySelector("#reset")
let container = document.querySelector("#grid-container").children



changeBtn.addEventListener('click', ()=>{
	let blockId = document.querySelector("#block_id").value || 2;
	let colorId = document.querySelector("#colour_id").value;

	if(blockId < 1 || blockId > 9){
		alert("Invalid Block ID! Enter a number between 1 and 9.")
	    return
	}
	// let block = document.querySelector(`#${blockId}`)
	container[blockId-1].style.backgroundColor=colorId === '' ? 'red' : colorId	
})
 
resetBtn.addEventListener("click", () => {
	for (let box of container) {
		box.style.backgroundColor= "transparent"
	}
})

