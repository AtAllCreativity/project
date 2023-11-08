document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("inputField");
    const addButton = document.getElementById("addBtn");
    const itemList = document.getElementById("items");

    addButton.addEventListener("click", function (event) {
        event.preventDefault();

        const inputValue = inputField.value.trim();

        if (inputValue !== "") {
            const newItem = document.createElement("li");
            newItem.textContent = inputValue;
            itemList.appendChild(newItem);
            inputField.value = "";
        }
    });
});