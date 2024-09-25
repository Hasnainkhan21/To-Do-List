function textInput() {
    var x = document.getElementById("inputText").value;
    document.getElementById("text2").value = x;
    document.getElementById("text2").style.display = 'block';
    document.getElementById("inputText").value = "";
}