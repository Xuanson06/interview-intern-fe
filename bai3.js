function viTriXoaTaoChuoiNhoNhat(str) {  
    let chuoiNhoNhat = null;  
    let viTriXoaNhoNhat = -1;  
  
    for (let i = 0; i < str.length; i++) {  
      // Tạo chuỗi sau khi xoá ký tự thứ i  
      let chuoiTam = str.slice(0, i) + str.slice(i + 1);  
      if (chuoiNhoNhat === null || chuoiTam < chuoiNhoNhat) {  
        chuoiNhoNhat = chuoiTam;  
        viTriXoaNhoNhat = i;  
      }  
    }  
  
    return {  
      viTri: viTriXoaNhoNhat,  
      chuoiLai: chuoiNhoNhat  
    };  
  }  
  
  // Ví dụ:  
  const chuoi = "231";  
  const ketQua = viTriXoaTaoChuoiNhoNhat(chuoi);  
  console.log(`Xoá kí tự tại vị trí: ${ketQua.viTri}`); // Kết quả: 2  
  console.log(`Chuỗi còn lại nhỏ nhất: ${ketQua.chuoiLai}`); // Kết quả: 21