// Bài 1

// const student = {
//   name: "hoang",
//   parent: {
//     name: "bo hoang",
//   },
// };

// const mentor = { ...student };

// mentor.name = "bang";
// mentor.parent.name = "bo bang";

// console.log(student);
// console.log(mentor);
/*
Câu hỏi:

1.student.name có bị đổi không?
    Không bị đổi.

2.student.parent.name có bị đổi không?
    Có bị đổi.

3.Giải thích vì sao?
    Vì { ...student } chỉ tạo shallow copy.

    - Những thuộc tính ở lớp ngoài cùng sẽ được sao chép thành giá trị riêng
      nên khi đổi mentor.name thì student.name không bị ảnh hưởng.

    - Nhưng với object nằm bên trong thì JavaScript chỉ copy tham chiếu.
      mentor.parent và student.parent đang cùng trỏ tới một object
      nên khi sửa mentor.parent.name thì student.parent.name cũng đổi theo.
*/

// Bài 2

// const student = {
//   name: 'hoang',
//   parent: {
//     name: 'bo hoang'
//   }
// }

// const mentor = JSON.parse(JSON.stringify(student))

// mentor.parent.name = 'bo bang'

// console.log(student)
// console.log(mentor)
// JSON.stringify()
// JSON.parse()

/*
Câu hỏi:

1. student.parent.name có bị ảnh hưởng không?
    Không bị ảnh hưởng.

2. Vì sao cách này khác spread (const mentor = { ...student })
    Vì cách này tạo deep copy.

    Tất cả dữ liệu sẽ được clone thành object mới hoàn toàn.

    Cách hoạt động:
        - JSON.stringify() biến object thành chuỗi JSON.
          lúc này các tham chiếu bộ nhớ cũ sẽ không còn.

        - JSON.parse() chuyển chuỗi JSON đó thành object mới.
          object mới này hoàn toàn độc lập với object ban đầu.
*/

// Bài 3

// const students = [{ name: "a" }, { name: "b" }];

// const newStudents = [...students];

// newStudents[0].name = "z";

// console.log(students);
// console.log(newStudents);

/*
Câu hỏi:

1.Mảng có bị thay đổi không?
    - Về cấu trúc mảng thì không thay đổi
    - Nhưng dữ liệu bên trong có bị thay đổi

2.Phần tử bên trong có bị thay đổi không?
    Có bị thay đổi

3.Giải thích:
    - [...students] chỉ copy lớp ngoài của mảng
    - Các object bên trong vẫn dùng chung tham chiếu.
    nên khi sửa newStudents[0].name
    thì students[0].name cũng thay đổi theo
*/

// Bài 4:

const user = {
  name: "hoang",
  address: {
    city: "HN",
    location: {
      lat: 123,
    },
  },
};

const newUser = { ...user };

newUser.address.location.lat = 999;

console.log(user.address.location.lat);

/*
Câu hỏi: Kết quả là bao nhiêu? Vì sao?

    Kết quả là 999.
    Vì { ...user } chỉ là shallow copy.
    Các object lồng bên trong như address và location
    vẫn đang dùng chung tham chiếu giữa user và newUser
    nên khi đổi newUser.address.location.lat
    thì user.address.location.lat cũng bị đổi theo.
*/

