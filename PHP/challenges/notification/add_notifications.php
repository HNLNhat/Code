<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>
    $(document).ready(function() {
        // Chọn input có id="date" và gắn datepicker cho nó
        $("#date").datepicker({
            dateFormat: "yy-mm-dd", // Định dạng ngày sau khi chọn
            changeMonth: true, // Cho phép chọn tháng
            changeYear: true, // Cho phép chọn năm
            yearRange: "1900:2050" // Phạm vi năm để hiển thị trong danh sách năm
        });
    });
</script>

<title>Add Notification</title>
<div class="container mt-3 table-responsive">
    <form action="api_get_notifications.php" method="post">
        <div class="mb-3 mt-3">
			<label for="title" class="form-label">Tiêu đề:</label>
			<input  type="text" id="title" name="title" class="form-control" placeholder="Enter title" required>
		</div>

        <div class="mb-3 mt-3">
			<label for="author" class="form-label">Người đăng:</label>
			<input  type="text" id="author" name="author" class="form-control" placeholder="Enter author" required>
		</div>

        <div class="mb-3 mt-3">
			<label for="date" class="form-label">Ngày đăng:</label>
			<input  type="date" id="date" name="date" class="form-control" placeholder="Enter date" required>
		</div>

        <div class="mb-3 mt-3">
			<label for="content" class="form-label">Nội dung:</label>
            <textarea id="content" name="content" rows="4" cols="50" class="form-control" placeholder="Enter content" required></textarea><br>
		</div>

        <input type="submit" class="btn btn-primary" value="Thêm thông báo">
    </form>
</div>