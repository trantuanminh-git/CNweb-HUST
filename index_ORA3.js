const buttons_add_group = [...document.querySelectorAll(".button-add-group")];
const buttons_add_info = [...document.querySelectorAll(".button-add-info")];
const spans_group_name = document.querySelectorAll(".group-name");

// Add event listeners for double-click
spans_group_name.forEach((spanElement) => {
    // spanElement.innerHTML += '20204842';
    spanElement.addEventListener("dblclick", () => {
        handleEventSpanGroupName(spanElement);
    });
});

function handleEventSpanGroupName(spanElement) {
    const inputElement = document.createElement("input");
    inputElement.value = spanElement.innerHTML.replace("20204842", "");
    spanElement.replaceWith(inputElement);

    // Add event listener for keydown
    inputElement.addEventListener("keydown", (event) => {
        // Check if the Enter key was pressed
        if (event.key === "Enter") {
            // Replace the input element with a span element
            const newSpanElement = spanElement;
            newSpanElement.innerHTML = inputElement.value + "20204842";
            inputElement.replaceWith(newSpanElement);
        }
    });
}

function handleEventLabelItemName(lableEle) {
    // Replace the span element with an input element
    const inputElement = document.createElement("input");
    inputElement.value = lableEle.textContent;
    lableEle.replaceWith(inputElement);

    // Add event listener for keydown
    inputElement.addEventListener("keydown", (event) => {
        // Check if the Enter key was pressed
        if (event.key === "Enter") {
            // Replace the input element with a span element
            const newlableEle = lableEle;
            newlableEle.textContent = inputElement.value;
            newlableEle.style = "width: 30%;";
            inputElement.replaceWith(newlableEle);
        }
    });
}

function handleEventButtonsAddInfo(button) {
    console.log(buttons_add_info);
    const parentDiv = button.parentElement.parentElement;
    const nextDiv = parentDiv.nextElementSibling;
    const newLabel = document.createElement("label");
    const newDiv = document.createElement("div");
    newDiv.style = "display: flex; padding-left: 20px; padding-right: 20px";

    newLabel.textContent = "Item Info Name";
    newLabel.style = "width: 30%;";
    newLabel.addEventListener("dblclick", function () {
        handleEventLabelItemName(newLabel);
    });

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "new-input";
    newInput.id = "new-input";
    newInput.readOnly = true;
    newInput.style = "width: 50%";
    newInput.addEventListener("dblclick", function () {
        newInput.readOnly = false;
    });

    const img = document.createElement("img");
    img.className = "top-menu-item-icon";
    img.src = "./img/bin.png";
    img.style = "margin-left: 10px";

    const select = document.createElement("select");

    const textOption = document.createElement("option");
    textOption.value = "text";
    textOption.text = "Text";
    select.appendChild(textOption);

    const numberOption = document.createElement("option");
    numberOption.value = "number";
    numberOption.text = "Number";
    select.appendChild(numberOption);

    const checkBoxOption = document.createElement("option");
    checkBoxOption.value = "checkbox";
    checkBoxOption.text = "Checkbox";
    select.appendChild(checkBoxOption);
    select.style = "margin-left: 20px; width: 50%";

    newDiv.appendChild(newLabel);
    newDiv.appendChild(newInput);
    newDiv.appendChild(select);
    newDiv.appendChild(img);
    nextDiv.appendChild(newDiv);

    img.addEventListener("click", function () {
        let choice = confirm(
            "Bạn có muốn xóa thông tin " + newLabel.textContent + "?"
        );
        if (choice == true) {
            img.parentElement.remove();
        }
    });

    select.addEventListener("change", () => {
        newInput.type = select.value;
    });
}

function handleEventButtonsAddGroup(button) {
    const parent3Div = button.parentElement.parentElement.parentElement;
    const pageContainer = document.createElement("div");

    parent3Div.appendChild(pageContainer);

    pageContainer.classList.add("info");

    const pageHeader = document.createElement("div");
    pageHeader.classList.add("rowTitle__text");

    const pageHeaderLabel = document.createElement("div");
    pageHeaderLabel.classList.add("page_header_label", "page_main_label");

    const headerSpan = document.createElement("span");
    headerSpan.textContent = "Group Item_20204842";
    headerSpan.addEventListener("dblclick", () => {
        handleEventSpanGroupName(headerSpan);
    });
    pageHeaderLabel.appendChild(headerSpan);

    const img = document.createElement("img");
    img.className = "top-menu-item-icon";
    img.src = "./img/bin.png";
    img.style = "margin-left: 10px";
    pageHeaderLabel.appendChild(img);

    const addButton = document.createElement("button");
    addButton.setAttribute("type", "button");
    addButton.classList.add("button-add-info");
    addButton.textContent = "Add Info Item";
    addButton.addEventListener("click", function () {
        handleEventButtonsAddInfo(addButton);
    });

    const addGroupButton = document.createElement("button");
    addGroupButton.setAttribute("type", "button");
    addGroupButton.classList.add("button-add-group");
    addGroupButton.textContent = "Add Group Item";
    addGroupButton.addEventListener("click", function () {
        handleEventButtonsAddGroup(addButton);
    });

    pageHeaderLabel.appendChild(addButton);
    pageHeaderLabel.appendChild(addGroupButton);

    const hr = document.createElement("hr");
    hr.classList.add("page_header_seperate");

    const div = document.createElement("div");

    pageHeader.appendChild(pageHeaderLabel);
    pageHeader.appendChild(hr);

    pageContainer.appendChild(pageHeader);
    pageContainer.appendChild(div);

    img.addEventListener("click", function () {
        let choice = confirm(
            "Bạn có muốn xóa nhóm thông tin " + headerSpan.textContent + "?"
        );
        if (choice == true) {
            img.parentElement.parentElement.parentElement.remove();
        }
    });
}

function exportPDF() {
    const printedInfo = document.getElementById("bodyContent__mainContent");
    html2canvas(printedInfo, {
        foreignObjectRendering: false,
        allowTaint: true,
        useCORS: true,
    }).then((canvas) => {
        // Use pdfMake to create a new PDF document
        const dataUrl = canvas.toDataURL();
        // console.log(dataUrl);

        const docDefinition = {
            content: [
                {
                    image: dataUrl,
                    width: 500,
                },
            ],
        };
        pdfMake.createPdf(docDefinition).open(); //download('bodyContent__mainContent.pdf');
    });
}

buttons_add_info.forEach(function (button) {
    button.addEventListener("click", function () {
        handleEventButtonsAddInfo(button);
    });
});

buttons_add_group.forEach(function (button) {
    button.addEventListener("click", function () {
        handleEventButtonsAddGroup(button);
    });
});
