document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    showGreeting(name);
});

function showGreeting(name) {
    alert("Hello, " + name + "! Greetings from Team Vibhav!");
}
