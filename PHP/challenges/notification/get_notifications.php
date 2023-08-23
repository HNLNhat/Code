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

// Câu truy vấn SQL để lấy danh sách thông báo
$sql = "SELECT * FROM notifications ORDER BY id DESC";

// Thực hiện truy vấn và lấy kết quả
$result = $conn->query($sql);

// Kiểm tra và xử lý kết quả
if ($result->num_rows > 0) {
    $notis = array();
    while ($row = $result->fetch_assoc()) {
        // Thêm thông báo vào mảng notis
        $notis[] = $row;
    }
    // Trả về dữ liệu dạng JSON
    echo json_encode($notis);
} else {
    // Không có thông báo nào trong cơ sở dữ liệu
    echo "Không có thông báo.";
}

// Đóng kết nối
$conn->close();
?>