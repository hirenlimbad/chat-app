const chatHistory = document.querySelector('.chat-history');
const messageInput = document.querySelector('.chat-input input');
const sendButton = document.querySelector('.chat-input button');
const name3 = document.getElementById('mainName');
const prflimg = document.getElementById('ProfileImg');







// setting name
const firstNames = ["Ella", "Max", "Avery", "Seth", "Maya"];
const surnames = ["Jones", "Miller", "Williams", "Davis", "Garcia"];
const prflPhoto = ["ProfilePhotos\\Profile_Photo.png","ProfilePhotos\\Profile_Photo2.png","ProfilePhotos\\Profile_Photo3.png","ProfilePhotos\\Profile_Photo4.jpeg","ProfilePhotos\\Profile_Photo5.png"]
const randomIndex = Math.floor(Math.random() * 5);
const randomIndex1 = Math.floor(Math.random() * 5);
const fullName = firstNames[randomIndex] + " " + surnames[randomIndex1];
name3.textContent = fullName;
prflimg.src =  prflPhoto[randomIndex];



chatHistory.innerHTML = " <center> <h4> Inspired by your &#9829; </h4> <center>";

function receiveMSG(msgstr){

	const message23 = `
				<div class="message received">
					<p> ${msgstr}</p>
				</div>
			`;

	return message23;

}



sendButton.addEventListener('click', () => {
	if (messageInput.value) {
		const message = `
			<div class="message sent">
				<p>${messageInput.value}</p>
			</div>
		`;
		chatHistory.innerHTML += message;
		
		var inputS = messageInput.value.toLowerCase();
		if (inputS == ('clear')){

			chatHistory.innerHTML = "";
			messageInput.value = "";
		}


	}

});





// enter button clicker....
var input = document.getElementById("myInput");
var body1 = document.getElementById("body");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("EnterBtn").click();
  }
}); 

body1.addEventListener("keypress", function(event1) {
	if (event1.key === "/"){
		event1.preventDefault();

		document.getElementById("myInput").focus();
		console.log("Hello world working");
	  }
});






// automatic scroll when chat are growing....
// Get the chat history container element
var chatContainer = document.getElementById("chat-history");

// Automatically scroll to the bottom of the container when it's modified
chatContainer.addEventListener("DOMSubtreeModified", function() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
});



// clearing the chat on click btnclear.

var btnclr = document.getElementById("btnclear");

btnclr.addEventListener('click', () => {


		chatHistory.innerHTML = "";});






// Node.js code for connect 2 or more device.

























// Get references to the HTML elements we need
const sendBTN = document.getElementById("EnterBtn");
const messages = document.getElementById("chat-history");
const messagebox = document.getElementById("myInput");

let ws; // Declare a variable to hold the WebSocket connection

// Function to add a message to the chat history
function showMessage() {

  const message1 = `
        <div class="message sent">
          <p>${messageInput.value}</p>
        </div>
      `;

		messageInput.value = '';
}

// Function to initialize the WebSocket connection
function initWebSocket() {
  // If the WebSocket is already open, close it first
  if (ws) {
    ws.onerror = ws.onopen = ws.onclose = null;
    ws.close();
  }

  // Create a new WebSocket object and set up event handlers
  ws = new WebSocket('ws://localhost:6969');
  ws.onopen = () => {
    console.log('WebSocket connection opened');
  };
  ws.onmessage = ({ data }) => {
    // When a message is received, add it to the chat history
    chatHistory.innerHTML += receiveMSG(data);
  };
  ws.onclose = () => {
    console.log('WebSocket connection closed');
    ws = null;
  };
}

// Set up a click event handler for the "Enter" button
sendBTN.addEventListener('click', () => {
  // If the WebSocket is not open, show an error message
  if (!ws ) {
    showMessage('No WebSocket connection :(');
    

    return;
  }

  if (!messagebox.value){
    return;
  }

  const chatString = `<div class="chat1" style="display: flex;">
                      <div class="prflimag">
                        <img src="${prflPhoto[randomIndex]}"> 
                      </div> 
                      <p style="padding: 12px 0px;">${name3.textContent + ' : ' + messagebox.value}</p>
                    </div>`;

  ws.send(chatString);
  showMessage(messagebox.value);
  // Send some hardcoded messages to the server
  // ws.send(receiveMSG(messagebox.value));
});

// Call the WebSocket initialization function to start the connection
initWebSocket();






















