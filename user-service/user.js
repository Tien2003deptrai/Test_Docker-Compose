// implement code

// Hàm tính tổng các phần tử trong mảng
function tinhTong(arr) {
  let tong = 0
  for (let i = 0; i < arr.length; i++) {
    tong += arr[i]
  }
  return tong
}

// Ví dụ sử dụng
const mangSo = [2, 4, 6, 8, 10]
console.log('Tổng các số trong mảng là:', tinhTong(mangSo))
