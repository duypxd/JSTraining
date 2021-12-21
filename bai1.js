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

const newUser = { id: 6, name: "user 6", age: 22, };
// task 1: Add mới 1 user vào đầu mảng
[newUser,...arrays];
arrays.unshift(newUser);

// task 2: Add mới 1 user vào cuối mảng
[...arrays, newUser];
arrays.push(newUser);

// task 3: add nhiều user vào mảng
const users = [{ id: 7, name: "user 7", age: 20, }, { id: 6, name: "user 6", age: 22, }];
[...arrays, ...users];

// task 4: xoá 1 user ra khỏi mảng
arrays.filter(f => f.id !== 3);

// task 5: lọc ra các user có age >= 22;
arrays.filter(f => f.age >= 23);

// task 6: Biến đổi mảng hiện tại thành một mảng mới với field mới là "class" kiểu string
arrays.map((m) => ({...m, class: 'Pnv2021'}))

// task 7: Tìm ra 1 user có age = 23
arrays.find(f => f.age === 23);

// task 8: xử dụng vòng lặp for để lấy ra các user có age >= 23
let personas = [];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (element?.age >= 23) {
    personas.push(element);
  }
}

// task 9: Dựa vào mảng thông tin bên trên, và mảng ids bên dưới, lọc ra thông tin các user có id như mảng bên dưới.
const arrayIds = [1, 3];
arrays.filter(f => arrayIds.includes(f.id))

// task 10: sắp xếp các user trong mảng trên theo thứ tự tuổi tăng dần
arrays.sort((a, b) => a.age - b.age);

// task 11: cập nhật thông tin trong mảng trên với field "class" được biến đổi ở task 6 thành kiểu chữ in hoa (upCase)
arrays.map((m) => ({...m, class: m?.class?.toUpperCase()}))

// task 12: lấy ra phần tử cuối cùng của mảng trên
arrays.pop();
arrays[arrays.length - 1];

// task 13: lấy ra phần tử đầu tiên của mảng trên
arrays[0];

// task 14: cho 2 mảng bên dưới, hợp nhất 2 mảng lại thành một và xoá các phần tử trùng lặp, result mong đợi => ["Gà", "vịt", "Chó"]
const array1 = ["Gà", "vịt"];
const array2 = ["vịt", "Chó"];
const mergedArrays = [... new Set([...array1, ...array2])]

// -----------------------------------
const person = {
  firstName: "John",
  lastName: "Doe",
};

// task 15: từ object person trên lấy ra key của nó. result => ['firstName', 'lastName']
Object.keys(person);

// task 16: từ object person trên lấy ra value của nó. result => ['John', 'Doe']
Object.values(person);

// task 17: chuyển đổi object trên thành array. result mong đợi => [{firsName: 'John'}, {lastName: 'Doe'}]
Object.keys(person).map(key => {
  return {[key]: person[key]}
})

// task 18: từ object person trên add thêm 1 field "age" vao object. kết qua mong đợi => { firstName: "John", lastName: "Doe", age: 100 };
person = {...person, age: 100};

// task 19: cho array string bên dưới, convert array này sang object. Result mong đợi => {0:"a", 1:"b", 2:"c"}
const arrString = ["a", "b", "c"];
let newObject = {...arrString};
newObject = Object.assign({}, arrString);
newObject = arrString.reduce((a, v) => ({ ...a, [v]: v}), {});

// task 20: cho array boolean bên dưới, kiểm tra output của array này là true hoặc false
const arrBoolean = [true, true, false];
arrBoolean.every(s => s === true);

// task 21: viết 1 object sử dụng setter & getter để thêm mới value và lấy ra value. key word (Getter, setter)

// task 22:
const newFunction = (user) => {
  // xử lý function này khi truyền params user vào là thông tin của user
  // kết quả return mong đợi là một string => "Hello User - age: 21"
};

// task 23:
let numb = 1.4; // => làm tròn lên số bên.  result mong đợi = 2
Math.ceil(numb);
let numb = 1.4; // => làm tròn lên số bên.  result mong đợi = 1
Math.round(numb);

// task 24: Thực hiện nối chuỗi dữa vào các biến bên dưới. kết quả mong đợi. => 'name: user - age: 21 - class: classAbc'
let name = "user";
let age = 21;
let className = "classAbc";

// task 25: cho array number bên dưới, tính tổng array: result = 45;
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrNumber.reduce((a, b) => a + b);