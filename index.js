let TTSV = {
    imageURL: "./img/TTM.png",
    MSSV: "20204842",
    "Họ và tên": "Trần Tuấn Minh",
    "Năm vào trường": "2020",
    "Bậc đào tạo": "Đại học đại trà",
    "Chương trình": "Kỹ thuật Máy tính 2020",
    "Khoa/Viện quản lý": "Trường Công nghệ Thông tin và Truyền thông",
    "Tình trạng học tập": "Học",
    "Giới tính": "Nam",
    Lớp: "Kỹ thuật máy tính 03-K65",
    "Khóa học": "65",
    Email: "minh.tt204842@sis.hust.edu.vn",
};

function edit() {
    // show the button
    [...document.getElementsByClassName("info2_input")].forEach((element) => {
        element.removeAttribute("disabled");
    });
    document.getElementsByClassName("btnAppear")[0].removeAttribute("style");

    // console.log(currentValue)
    // console.log(document.getElementsByClassName("btnAppear"));
    // console.log(document.getElementsByClassName("info2_input"));
    // alert(TTSV["heml"]);
}

function handleOK() {
    console.log("handle ok");
    [...document.getElementsByClassName("info2_input")].forEach((element) => {
        element.setAttribute("disabled", "");
    });
    document
        .getElementsByClassName("btnAppear")[0]
        .setAttribute("style", "display: none");

    // const val = document.querySelector("input").value;
    const label = document.getElementsByClassName("info2_label");
    const input = document.getElementsByClassName("info2_input");
    for (let i = 0; i < label.length; i++) {
        // console.log(label[i])
        // TTSV[label[i].textContent] = input[i].value;
        // console.log('check')
        // console.log(label[i].textContent)
        let x = label[i].textContent;
        TTSV[x.slice(0, x.indexOf(" "))] = input[i].value;
        // console.log(TTSV[x.slice(0,x.indexOf(" "))])
    }
    console.log("TTSV OK button");
    console.log(TTSV);
    // console.log(input);
    // console.log(label);
}

function handleCancel() {
    console.log("handle cancel");
    [...document.getElementsByClassName("info2_input")].forEach((element) => {
        element.setAttribute("disabled", "");
    });
    document
        .getElementsByClassName("btnAppear")[0]
        .setAttribute("style", "display: none");
    const label = document.getElementsByClassName("info2_label");
    const input = document.getElementsByClassName("info2_input");
    for (let i = 0; i < label.length; i++) {
        let x = label[i].textContent;
        input[i].value = TTSV[x.slice(0, x.indexOf(" "))];
        // console.log(TTSV)
    }
    console.log("TTSV cancel button");
    console.log(TTSV);
}

function handleReset() {
    console.log("handle reset");
    console.log("TTSV reset button");
    console.log(TTSV);
}

function loadImage(event) {
    // const imgBox = document.getElementById
    const imgBox = document.getElementsByClassName("avatarImage")[0];
    // const currentImg = document.querySelector(".avatarImage img");
    // console.log(currentImg)
    // currentImg.setAttribute("src", '')
    
    
    // img.src = URL.createObjectURL(event.target.file[0]);
    imgBox.style.backgroundImage =
        "url(" + URL.createObjectURL(event.target.files[0]) + ")";
        console.log(event.target.files[0])
}

const formInfo2 = document
    .getElementById("info2_infomation")
    .addEventListener("submit", (e) => e.preventDefault());
