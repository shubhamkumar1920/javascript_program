let str = "python";
let links = document.links;
// ye sara links nikal de deta hai
console.log(links);
let href;
Array.from(links).forEach(function (element) {
  href = element.href;
  // ye element ka href nikal rahe hai
	if (href.includes(str)) {
    // ye check kar raha hai ki ye href me str hai ki nhi 
		console.log(href);
	}
});
