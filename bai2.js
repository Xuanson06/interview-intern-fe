function ktSoHoanHao(n) {  
    let tong = 0;  
    for (let i = 1; i < n; i++) {  
      if (n % i === 0) {  
        tong += i;  
      }  
    }  
    if (tong === n) {  
      return true; // Là số hoàn hảo  
    } else {  
      return false; // Không phải số hoàn hảo  
    }  
  }  
  
  // Ví dụ:  
  console.log(ktSoHoanHao(6));  // true  
  console.log(ktSoHoanHao(28));  // true  
  console.log(ktSoHoanHao(12));  // false