<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lấy dữ liệu từ form gửi lên
    $lop = $_POST['lop'];
    $phong = $_POST['phong'];
    $ma_mon = $_POST['ma_mon'];
    $ten_mon = $_POST['ten_mon'];
    $ca_thi = $_POST['ca_thi'];
    $ngay = $_POST['ngay'];
    $dot_thi = $_POST['dot_thi'];
    $gv1 = $_POST['gv1'];

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
    $query = "INSERT INTO lich_thi (lop, phong, ma_mon, ten_mon, ca_thi, ngay, dot_thi, gv1)
              VALUES ('$lop', '$phong', '$ma_mon', '$ten_mon', '$ca_thi', '$ngay', '$dot_thi', '$gv1')";

    if ($conn->query($query) === TRUE) {
        echo 'Thêm dữ liệu thành công!';
    } else {
        echo 'Thêm dữ liệu không thành công: ' . $conn->error;
    }

    // Đóng kết nối cơ sở dữ liệu
    $conn->close();
}
?>