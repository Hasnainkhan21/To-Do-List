function getOutput() {
    var x = document.getElementById("inputText");
    var y = document.getElementById("taskList");

    if (!x.value.trim()) {
        return alert("Todo can't be empty");
    }

    var li = document.createElement("li");
    li.style.display = 'block';
    li.textContent = x.value;
    y.style.display = "block";

    var remove = document.createElement('button');
    remove.textContent = 'remove';
    remove.className = 'remove-btn';
    remove.onclick = function () {
        y.removeChild(li);
        // y.style.display = 'none';
    };

    li.onclick = function () {
        li.classList.toggle('completed');
    };

    li.appendChild(remove);
    y.appendChild(li);

    x.value = '';
}


