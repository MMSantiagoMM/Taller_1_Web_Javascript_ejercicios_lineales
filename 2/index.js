function send(){
    console.log("Hello")
    let Base = document.getElementById("base").value;
    let Alt = document.getElementById("altura").value;
    let Text = document.getElementById("text");
    let Resp = Base * Alt / 2;
    Text.textContent = Resp;
}