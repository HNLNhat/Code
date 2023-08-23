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

// Kiểm tra xem có tham số truyền vào hay không
if (isset($_GET['notification_id'])) {
    // Lấy thông báo theo ID được truyền vào
    $notification_id = $_GET['notification_id'];

    // Chuẩn bị câu truy vấn SQL để lấy thông báo theo ID
    $sql = "SELECT * FROM notifications WHERE id = $notification_id";

    // Thực hiện truy vấn và lấy kết quả
    $result = $conn->query($sql);

    // Kiểm tra và xử lý kết quả
    if ($result->num_rows > 0) {
        $notification = $result->fetch_assoc();
        // Trả về dữ liệu dạng JSON
        echo json_encode($notification);
    } else {
        // Không tìm thấy thông báo với ID tương ứng
        echo "Không tìm thấy thông báo.";
    }
} else {
    // Không có thông số truyền vào
    echo "Vui lòng cung cấp id của thông báo cần lấy chi tiết.";
}

// Đóng kết nối
$conn->close();
?>