# F8_K19-HomeWork - BaiTapBuoi2
- Repo dùng để thực hành Git theo nhóm (4 nhánh: nguoi_a, nguoi_b, nguoi_c, nguoi_d) và thực hành merge / conflict.

## 1. Khởi tạo
- Tạo repo F8_K19-HomeWork

## 2. Lấy project về máy
- Clone repo:
git clone https://github.com/vietphubdp/F8_K19-HomeWork.git
cd F8_K19-HomeWork

## 3. Tạo 4 nhánh làm việc riêng cho 4 người
git branch nguoi_b
git branch nguoi_b
git branch nguoi_c
git branch nguoi_d
Chuyển vào từng nhánh chỉnh sửa index.html, commit và push
git checkout nguoi_a 
git commit -m "Code nguoi A push"
git push origin -u nguoi_a

git checkout nguoi_b 
git commit -m "Code nguoi B push"
git push origin -u nguoi_b

git checkout nguoi_c
git commit -m "Code nguoi C push"
git push origin -u nguoi_c

git checkout nguoi_d 
git commit -m "Code nguoi D push"
git push origin -u nguoi_d

## 5. Mẻge các nhánh vào main
- Checkout về main và cập nhật code
git checkout main
git pull

- Merge từng nhánh vào main
git merge nguoi_a
git merge nguoi_b
git merge nguoi_c
git merge nguoi_d

## 6. Conflict
Khi mẻge từ nhánh thứ 2 trở đi thì bị conflict nên chỉnh sửa lại code và commit
commit -m "Merge A"
git push
