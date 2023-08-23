<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lấy dữ liệu từ form gửi lên
    $ten = $_POST['ten'];
    $lop = $_POST['lop'];
    $ma_mon = $_POST['ma_mon'];
    $ten_mon = $_POST['ten_mon'];
    $datloai = $_POST['datloai'];
    $ngay = $_POST['ngay'];
   

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

    // Câu truy vấn để thêm dữ liệu vào bảng "lich_thi"
    $query = "INSERT INTO thanh_tich (ten,lop, ma_mon, ten_mon, datloai, ngay)
              VALUES ('$ten','$lop', '$ma_mon', '$ten_mon', '$datloai', '$ngay')";

    if ($conn->query($query) === TRUE) {
        echo 'Thêm dữ liệu thành công!';
    } else {
        echo 'Thêm dữ liệu không thành công: ' . $conn->error;
    }

    // Đóng kết nối cơ sở dữ liệu
    $conn->close();
}
?>