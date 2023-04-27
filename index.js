let TTSV = {
    // imageURL: "./img/TTM.png",
    // MSSV: "20204842",
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

let TTSV_initial = {
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

let current_Image_URL = document.querySelector(".ownImg").src;

function edit() {
    // show the button
    [...document.getElementsByClassName("info2_input")].forEach((element) => {
        element.removeAttribute("disabled");
    });
    document.getElementsByClassName("btnAppear")[0].removeAttribute("style");
}

function handleOK() {
    console.log("OK BUTTON");
    [...document.getElementsByClassName("info2_input")].forEach((element) => {
        element.setAttribute("disabled", "");
    });
    document
        .getElementsByClassName("btnAppear")[0]
        .setAttribute("style", "display: none");

    const label = document.querySelectorAll(".infomation .info2_label");
    const input = document.querySelectorAll(".infomation .info2_input");
    for (let i = 0; i < label.length; i++) {
        let x = label[i].textContent;
        TTSV[x.slice(0, x.indexOf(" "))] = input[i].value;
    }
    console.log("TTSV OK button");
    console.log(TTSV);
    current_Image_URL = document.querySelector(".ownImg").src; // reset image avatar
    
}

function handleCancel() {
    console.log("CANCEL BUTTON");
    [...document.getElementsByClassName("info2_input")].forEach((element) => {
        element.setAttribute("disabled", "");
    });
    document
        .getElementsByClassName("btnAppear")[0]
        .setAttribute("style", "display: none");

    const label = document.querySelectorAll(".infomation .info2_label");
    const input = document.querySelectorAll(".infomation .info2_input");
    for (let i = 0; i < label.length; i++) {
        let x = label[i].textContent;
        input[i].value = TTSV[x.slice(0, x.indexOf(" "))];
        // console.log(TTSV)
    }

    console.log("TTSV cancel button");
    console.log(TTSV);

    const imgBox = document.querySelector(".ownImg");
    // console.log(imgBox)
    imgBox.setAttribute("src", current_Image_URL);
}

function handleReset() {
    console.log("RESET BUTTON");
    console.log("TTSV reset button");

    const label = document.querySelectorAll(".infomation .info2_label");
    const input = document.querySelectorAll(".infomation .info2_input");
    for (let i = 0; i < label.length; i++) {
        let x = label[i].textContent;
        input[i].value = TTSV_initial[x.slice(0, x.indexOf(" "))];
        TTSV[x.slice(0, x.indexOf(" "))] =
            TTSV_initial[x.slice(0, x.indexOf(" "))];
    }
    console.log(TTSV);
}


async function loadImage(event) {
    const imgBox = document.querySelector(".ownImg");

    imgBox.setAttribute("src", URL.createObjectURL(event.target.files[0]));
}

const formInfo2 = document
    .getElementById("info2_infomation")
    .addEventListener("submit", (e) => e.preventDefault());

// let TTSV = {
//     imageURL: "./img/TTM.png",
//     MSSV: "20204842",
//     "Họ và tên": "Trần Tuấn Minh",
//     "Năm vào trường": "2020",
//     "Bậc đào tạo": "Đại học đại trà",
//     "Chương trình": "Kỹ thuật Máy tính 2020",
//     "Khoa/Viện quản lý": "Trường Công nghệ Thông tin và Truyền thông",
//     "Tình trạng học tập": "Học",
//     "Giới tính": "Nam",
//     Lớp: "Kỹ thuật máy tính 03-K65",
//     "Khóa học": "65",
//     Email: "minh.tt204842@sis.hust.edu.vn",
// };

// let TTSV_initial = {
//     imageURL: "./img/TTM.png",
//     MSSV: "20204842",
//     "Họ và tên": "Trần Tuấn Minh",
//     "Năm vào trường": "2020",
//     "Bậc đào tạo": "Đại học đại trà",
//     "Chương trình": "Kỹ thuật Máy tính 2020",
//     "Khoa/Viện quản lý": "Trường Công nghệ Thông tin và Truyền thông",
//     "Tình trạng học tập": "Học",
//     "Giới tính": "Nam",
//     Lớp: "Kỹ thuật máy tính 03-K65",
//     "Khóa học": "65",
//     Email: "minh.tt204842@sis.hust.edu.vn",
// };

// function edit() {
//     // show the button
//     [...document.getElementsByClassName("info2_input")].forEach((element) => {
//         element.removeAttribute("disabled");
//     });
//     document.getElementsByClassName("btnAppear")[0].removeAttribute("style");
// }

// function handleOK() {
//     console.log("handle ok");
//     [...document.getElementsByClassName("info2_input")].forEach((element) => {
//         element.setAttribute("disabled", "");
//     });
//     document
//         .getElementsByClassName("btnAppear")[0]
//         .setAttribute("style", "display: none");

//     // const val = document.querySelector("input").value;
//     const label = document.getElementsByClassName("info2_label");
//     const input = document.getElementsByClassName("info2_input");
//     for (let i = 0; i < label.length; i++) {
//         // console.log(label[i])
//         // TTSV[label[i].textContent] = input[i].value;
//         // console.log('check')
//         // console.log(label[i].textContent)
//         let x = label[i].textContent;
//         TTSV[x.slice(0, x.indexOf(" "))] = input[i].value;
//         // console.log(TTSV[x.slice(0,x.indexOf(" "))])
//     }
//     console.log("TTSV OK button");
//     console.log(TTSV);
//     // console.log(input);
//     // console.log(label);
// }

// function handleCancel() {
//     console.log("handle cancel");
//     [...document.getElementsByClassName("info2_input")].forEach((element) => {
//         element.setAttribute("disabled", "");
//     });
//     document
//         .getElementsByClassName("btnAppear")[0]
//         .setAttribute("style", "display: none");
//     const label = document.getElementsByClassName("info2_label");
//     const input = document.getElementsByClassName("info2_input");
//     for (let i = 0; i < label.length; i++) {
//         let x = label[i].textContent;
//         console.log(input[i])
//         input[i].value = TTSV[x.slice(0, x.indexOf(" "))];
//         // console.log(TTSV)
//     }
//     console.log("TTSV cancel button");
//     console.log(TTSV);
// }

// function handleReset() {
//     console.log("handle reset");
//     console.log("TTSV reset button");
//     // const label = document.getElementsByClassName("info2_label");
//     const label = document.getElementsByClassName("info2_label");
//     const input = document.getElementsByClassName("info2_input");
//     for (let i = 0; i < label.length; i++) {
//         let x = label[i].textContent;
//         input[i].value =  TTSV_initial[x.slice(0, x.indexOf(" "))];
//         TTSV[x.slice(0, x.indexOf(" "))] = TTSV_initial[x.slice(0, x.indexOf(" "))];
//     }
//     console.log(TTSV);
// }

// function loadImage(event) {
//     // const imgBox = document.getElementById
//     // const currentImg = document.querySelector(".avatarImage img");
//     // console.log(currentImg)
//     // currentImg.setAttribute("src", '')
//     const imgBox = document.getElementsByClassName("ownImg")[0];
//     // const imgBox = document.getElementsByClassName("avatarImage")[0];

//     imgBox.setAttribute("src", URL.createObjectURL(event.target.files[0]));
//     // imgBox.style.backgroundImage =
//     //     "url(" + URL.createObjectURL(event.target.files[0]) + ")";
//     //     console.log(event.target.files[0])

// }

// const formInfo2 = document
//     .getElementById("info2_infomation")
//     .addEventListener("submit", (e) => e.preventDefault());
