Cau 1: Inline CSS có độ ưu tiên cao nhất trong CSS

Cau 2: Selector #main thắng vì ID Selector có độ ưu tiên cao nhất

Cau 3: CSS color property hiện tại của phần tử đó sẽ bị ghi đè thành pink

Cau 4: theme.css có thể override style từ base.css vì:
Khi tham chiếu CSS External thì link của theme.css nằm sau và bên trong có các selector có độ ưu tiên bằng nhau nên cái nào xuất hiện sau sẽ ghi đè cái trước

Cau 5: Hai phần tử dùng class title

<h1 class="title" id="main">HOME PAGE</h1>
<h2 class="title">Gioi thieu he thong</h2>

H1 khác màu khác H2 vì H1 có thêm id là main mà selector id lại có độ ưu tiên cao hơn nó sẽ lấy theo màu của id main selector

Cau 6:
Phần tử trong project có độ phức tạp cao nhất là:

<h2 class="title" id="special" style="color: red">Danh sach don hang</h2>
  Phan tu nay co: tag(h2) + class(.title) + id(#special) + style inline color
  Thắng sau cùng là style inline color vì nó có độ ưu tiên cao nhất
