<?php
// Kết nối đến cơ sở dữ liệu MySQL
$servername = "localhost"; // Địa chỉ máy chủ MySQL (hoặc IP)
$username = "root"; // Tên đăng nhập MySQL
$password = ""; // Mật khẩu MySQL
$dbname = "challenges"; // Tên cơ sở dữ liệu

// Tạo kết nối
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối không thành công: " . $conn->connect_error);
}

// Truy vấn dữ liệu lịch học từ bảng thanh_tich
$query = "SELECT * FROM thanh_tich ORDER BY id DESC";
$result = $conn->query($query);

// Kiểm tra và xử lý kết quả
if ($result->num_rows > 0) {
    $lichThiArray = array();
    while ($row = $result->fetch_assoc()) {
        // Thêm thông báo vào mảng lichThiArray
        $lichThiArray[] = $row;
    }
    // Trả về dữ liệu dạng JSON
    echo json_encode($lichThiArray);
} else {
    // Không có thông báo nào trong cơ sở dữ liệu
    echo "Không có thông báo.";
}

// Đóng kết nối
$conn->close();
?>