// Có mảng bên dưới, các bạn làm theo từng task.
const arrays = [
  {
    id: 1,
    name: "user 1",
    age: 22,
  },
  {
    id: 2,
    name: "user 2",
    age: 21,
  },
  {
    id: 3,
    name: "user 3",
    age: 23,
  },
  {
    id: 4,
    name: "user 4",
    age: 24,
  },
];

// task 1: Add mới 1 user vào đầu mảng


// task 2: Add mới 1 user vào cuối mảng

// task 3: add nhiều user vào mảng

// task 4: xoá 1 user ra khỏi mảng

// task 5: lọc ra các user có age >= 22;

// task 6: Biến đổi mảng hiện tại thành một mảng mới với field mới là "class" kiểu string

// task 7: Tìm ra 1 user có age = 23

// task 8: xử dụng vòng lặp for để lấy ra các user có age >= 23

// task 9: Dựa vào mảng thông tin bên trên, và mảng ids bên dưới, lọc ra thông tin các user có id như mảng bên dưới.

// task 10: sắp xếp các user trong mảng trên theo thứ tự tuổi tăng dần

// task 11: cập nhật thông tin trong mảng trên với field "class" được biến đổi ở task 6 thành kiểu chữ in hoa (upCase)

// task 12: lấy ra phần tử cuối cùng của mảng trên

// task 13: lấy ra phần tử đầu tiên của mảng trên

// task 14: cho 2 mảng bên dưới, hợp nhất 2 mảng lại thành một và xoá các phần tử trùng lặp, result mong đợi => ["Gà", "vịt", "Chó"]
const array1 = ["Gà", "vịt"];
const array2 = ["vịt", "Chó"];

// -----------------------------------
const person = {
  firstName: "John",
  lastName: "Doe",
};

// task 15: từ object person trên lấy ra key của nó. result => ['firstName', 'lastName']

// task 16: từ object person trên lấy ra value của nó. result => ['John', 'Doe']

// task 17: chuyển đổi object trên thành array. result mong đợi => [{firsName: 'John'}, {lastName: 'Doe'}]

// task 18: từ object person trên add thêm 1 field "age" vao object. kết qua mong đợi => { firstName: "John", lastName: "Doe", age: 100 };
person = {...person, age: 100};

// task 19: cho array string bên dưới, convert array này sang object. Result mong đợi => {0:"a", 1:"b", 2:"c"}
const arrString = ["a", "b", "c"];

// task 20: cho array boolean bên dưới, kiểm tra output của array này là true hoặc false
const arrBoolean = [true, true, false];

// task 21: viết 1 object sử dụng setter & getter để thêm mới value và lấy ra value. key word (Getter, setter)

// task 22:
const newFunction = (user) => {
  // xử lý function này khi truyền params user vào là thông tin của user
  // kết quả return mong đợi là một string => "Hello User - age: 21"
};

// task 23:
let numb = 1.4; // => làm tròn lên số bên.  result mong đợi = 2
let numb = 1.4; // => làm tròn lên số bên.  result mong đợi = 1

// task 24: Thực hiện nối chuỗi dữa vào các biến bên dưới. kết quả mong đợi. => 'name: user - age: 21 - class: classAbc'
let name = "user";
let age = 21;
let className = "classAbc";

// task 25: cho array number bên dưới, tính tổng array: result = 45;
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
