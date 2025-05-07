function tinhGiaiThua(n) {  
    if (n === 0 || n === 1) {  
      return 1; // Giai thừa của 0 hoặc 1 đều bằng 1  
    }  
    let giaiThua = 1;  
    for (let i = 2; i <= n; i++) {  
      giaiThua *= i;  
    }  
    return giaiThua;  
  }  
  
  // Ví dụ sử dụng:  
  console.log(tinhGiaiThua(5)); // Kết quả: 120