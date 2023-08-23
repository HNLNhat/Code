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

<title>Thêm lịch thi</title>
<div class="container mt-3 table-responsive">
    <form action="api_add_lich_thi.php" method="post">
        <div>
            <label for="lop" class="form-label">Lớp:</label>
            <input type="text" id="lop" name="lop" class="form-control" placeholder="Nhập mã lớp"required><br>
        </div>

        <div>
            <label for="phong" class="form-label">Phòng:</label>
            <input type="text" id="phong" name="phong" class="form-control" placeholder="Nhập phòng"required><br>
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
            <label for="ca_thi" class="form-label">Ca thi:</label>
            <select id="ca_thi" name="ca_thi" class="form-select" aria-label="Default select example" required>
                <option selected>Chọn ca học</option>
                <option value="Ca 1">Ca 1: 07:30-09:30</option>
                <option value="Ca 2">Ca 2: 09:45-11:45</option>
                <option value="Ca 3">Ca 3: 13:00-15:00</option>
                <option value="Ca 4">Ca 4: 15:15-17:15</option>
                <option value="Ca 5">Ca 5: 17:30-19:30</option>
                <option value="Ca 6">Ca 6: 19:30-21:30</option>
            </select>
        </div>

        <div class="mt-3">
            <label for="ngay" class="form-label">Ngày:</label>
            <input type="date" id="ngay" name="ngay" class="form-control" required><br>
            
        </div>
        
        <div>
            <label for="dot_thi" class="form-label">Đợt thi:</label>
            <select id="dot_thi" name="dot_thi" class="form-select" aria-label="Default select example" required>
                <option selected>Chọn ca thi</option>
                <option value="Đợt 1">Đợt 1</option>
                <option value="Đợt 2">Đợt 2</option>
                <option value="Đợt 3">Đợt 3</option>
            </select>
        </div>

        <div class="mt-3">
            <label for="gv1" class="form-label">Giảng viên 1:</label>
            <input type="text" id="gv1" name="gv1" class="form-control" placeholder="Nhập tên giảng viên 1"required><br>
        </div>
        
        <input type="submit" class="mt-3 btn btn-primary" value="Thêm lịch thi">
    </form>
</div>
    