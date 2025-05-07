function tongSoKeo(n, c, m) {  
    // Số kẹo ban đầu mua được  
    let soKeo = Math.floor(n / c);  
    // Số giấy gói hiện tại  
    let giấyGoi = soKeo;  
  
    // Tiếp tục đổi kẹo khi đủ giấy gói  
    while (giấyGoi >= m) {  
      let keoMoi = Math.floor(giấyGoi / m); // số kẹo mới từ giấy gói  
      soKeo += keoMoi; // cộng vào tổng số kẹo  
      // Cập nhật giấy gói còn lại: giấy gói dùng để đổi + giấy gói từ kẹo mới  
      giấyGoi = (giấyGoi % m) + keoMoi;  
    }  
  
    return soKeo;  
  }  
  
  // Ví dụ:  
  console.log(tongSoKeo(10, 2, 5)); // 6  
  console.log(tongSoKeo(12, 4, 4)); // 3  
  console.log(tongSoKeo(6, 2, 2));  // 5