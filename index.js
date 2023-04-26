const TTSV = {
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
    // alert(TTSV["imageURL"]);
    document.getElementsByClassName("ora2")[0].removeAttribute("disabled");
    console.log(document.getElementsByClassName("ora2"))
    // alert(TTSV["heml"]);
}
