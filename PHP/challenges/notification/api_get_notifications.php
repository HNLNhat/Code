<?php
// Kết nối đến cơ sở dữ liệu MySQL
$servername = "localhost"; // Địa chỉ máy chủ MySQL
$username = "root"; // Tên đăng nhập MySQL
$password = ""; // Mật khẩu MySQL
$dbname = "challenges"; // Tên cơ sở dữ liệu bạn đã tạo

// Tạo kết nối đến MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

// Kiểm tra xem có dữ liệu được gửi từ biểu mẫu không
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy dữ liệu từ biểu mẫu
    $title = $_POST["title"];
    $author = $_POST["author"];
    $date = $_POST["date"];
    $content = $_POST["content"];

    // Chuẩn bị câu truy vấn SQL để thêm thông báo mới
    $sql = "INSERT INTO notifications (title, author, date, content) VALUES ('$title', '$author', '$date', '$content')";

    // Thực hiện truy vấn
    if ($conn->query($sql) === TRUE) {
        echo "Thêm thông báo thành công.";
    } else {
        echo "Lỗi: " . $sql . "<br>" . $conn->error;
    }
}

// Đóng kết nối
$conn->close();
?>