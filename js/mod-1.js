let num = 1;
function main() {
	console.log("eu aqui", num++)
	document.querySelector("p").innerHTML = num;
}

export { main }