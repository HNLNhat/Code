<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>
    $(document).ready(function() {
        // Chọn input có id="ngay" và gắn datepicker cho nó
        $("#ngay").datepicker({
            dateFormat: "yy-mm-dd", // Định dạng ngày sau khi chọn
            changeMonth: true, // Cho phép chọn tháng
            changeYear: true, // Cho phép chọn năm
            yearRange: "1900:2050" // Phạm vi năm để hiển thị trong danh sách năm
        });
    });
</script>

<title>Thêm Thành Tích</title>
<div class="container mt-3 table-responsive">
    <form action="api_add_thanh_tich.php" method="post">
        <div>
            <label for="ten" class="form-label">Tên:</label>
            <input type="text" id="ten" name="ten" class="form-control" placeholder="Nhập Tên"required><br>
        </div>

        <div>
            <label for="lop" class="form-label">Lớp:</label>
            <input type="text" id="lop" name="lop" class="form-control" placeholder="Nhập Lớp"required><br>
        </div>
        
        <div>
            <label for="ma_mon" class="form-label">Mã môn:</label>
            <input type="text" id="ma_mon" name="ma_mon" class="form-control" placeholder="Nhập mã môn" required><br>
        </div>

        <div>
            <label for="ten_mon" class="form-label">Tên môn:</label>
            <input type="text" id="ten_mon" name="ten_mon" class="form-control" placeholder="Nhập tên môn" required><br>
        </div>

        <div>
            <label for="datloai" class="form-label">Đạt Loại</label>
            <select id="datloai" name="datloai" class="form-select" aria-label="Default select example" required>
                <option selected>Chọn Học Lực</option>
                <option value="Xuất Xắc">Xuất Sắc</option>
                <option value="Giỏi">Giỏi</option>
                <option value="Khá">Khá</option>
                <option value="Trung Bình">Trung Bình</option>
                <option value="Yếu">Yếu</option>
            </select>
        </div>

        <div class="mt-3">
            <label for="ngay" class="form-label">Ngày:</label>
            <input type="date" id="ngay" name="ngay" class="form-control" required><br>
            
        </div>
        <input type="submit" class="mt-3 btn btn-primary" value="Đồng Ý">
    </form>
</div>