// Introduction of AJAX:-
// AJAX is a technique for creating faster, and more interactive web applications with the help of XML, HTML, CSS, and JavaScript. It is a web browser technology which is independent of web server software.

// AJAX use of the built-in browser XMLHttpRequest (XHR) objects to send and receive information to and from a web server asynchronously, in the background, without blocking the page or interfering with the user's experience.

// Ajax uses XHTML for the content, CSS for designing, along with Document Object Model and JavaScript for dynamic content display. Before AJAX technology, the web applications transmit information to and from the server using synchronous requests. It this we fill out a form, hit submit, and get directed to a new page with new information from the server. But with AJAX, when we hit submit, JavaScript will make a request to the server, interpret the results, and update the current screen.

// We can guess the popularity of AJAX, such that we hardly find an application that doesn't use Ajax to some extent. The example of Ajax-driven online applications are Gmail, Google Maps, YouTube, Facebook, and so many other applications.

// How Does AJAX Work?
// JavaScript and XML combine to make asynchronous updating happen through the use of something called an XMLHttpRequest (XHR) object. When the user visits a web page which is designed using AJAX technology, and a prescribed event occurs (a button, or fills out a form) the JavaScript creates an XMLHttpRequest (XHR) object, which then transfers data in an XML format between a web browser and a web. The XMLHttpRequest(XHR) object sends a request for updated page data to the web server, the server process the request, a response is created at server-side and sent back to the browser, which then uses JavaScript to process the response and display it on the screen as updated content.

// Summary:-
// The JavaScript automates the updating process, the request for updated content is formatted in XML to make it understandable, and JavaScript again refreshes the relevant content for the user viewing the page. Whereas the AJAX technique ignores extraneous page data and only handles requests for updated information and the updated information itself. This shows the AJAX's effectiveness, as it makes the websites and applications that use AJAX faster and more responsive to users.

 
// Code ajax.js as described/written in the video
console.log("Ajax tutorial in one video");


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open tin argument mangata hai get/post phir kaha se aayega phir blocking ya non blocking hoga
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    // data bhej raha hu means me url me hi bhej raha hu aapna form ka data
    xhr.getResponseHeader('Content-type', 'application/json');


    // What to do on progress (optional)
    // jab progress ho rahha hai tab kya dikhana hai
    xhr.onprogress = function(){
        console.log('On progress');
    }

// xhr are ready state value hai ki progress ko value me dikha hai gaya hai
    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);
        
    // }

    // What to do when response is ready
    // jab request return ho to ye dikhan hai means output
    xhr.onload = function () {
        // onload me data nhi mile to status code se dekh ke error bata de 
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    // ye send karte hai information
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("We are done!");

}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}