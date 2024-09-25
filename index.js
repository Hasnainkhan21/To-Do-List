function getOutput() {
    var x = document.getElementById("inputText");
    var y = document.getElementById("taskList");

    //handeling empty
    if(!x.value.trim()){
        return alert("todo can't be empty");
    }

    var li = document.createElement("li");
    li.textContent = inputText.value;


}