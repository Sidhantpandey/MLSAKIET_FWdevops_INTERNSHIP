const inputbox = document.getElementById('inputb');
const listcontainer = document.getElementById('lists');
function tasks() {
    if (inputbox.value === '') {
        alert("Please enter the required field");
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10005";
        li.appendChild(span)
    }
    inputbox.value = "";
    savedata();
}


listcontainer.addEventListener('click', function (e) {

   if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
});


function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML);
}


function showdata() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showdata();