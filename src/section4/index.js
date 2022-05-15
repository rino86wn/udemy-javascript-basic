/**
 * const letの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数の再宣言
// var val1 = "var変数を際宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再言言不可
// let val2 = "let変数を再宣言"

// const val3 = "const変数";
// console.log(val3);

// // //const変数は上書き不可
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "RINO",
//   age: 24
// };

// val4.name = "りの";
// val4.address = "神奈川";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "梨乃";
// const age = 24;

// // //「私の名前は梨乃です。年齢は24歳です。」を表示する

// // //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // //テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// const func2 = function (str) {
//   return str;
// };
// console.log(func2("func２です"));

// //アロー関数
// const func3 = (str) => {
//   return str;
// };
// console.log(func3("func3です"));

// const func4 = (num1, num2) => num1 + num2;
// console.log(func4(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "りの",
//   age: 24
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["りの", 24];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは。${name}さん！`);
// sayHello("梨乃");

/**
 * スプレッド構文
 */
//
//配列の展開
//  const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1)

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// console.log(arr2);

//配列のコピーや結極
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);

// const arr7 = [...arr5];
// console.log(arr7);

// const arr8 = [...arr4, ...arr5];
// console.log(arr8);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["高瀬", "鈴木", "小西"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番めは${nameArr[i]}です。`)
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2)

// nameArr.map((name, index) => console.log(`${index + 1}番めは${nameArr[index]}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "高瀬")　{
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const val1 = 1 < 0 ? "treuです" : "falseです";
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を設定してください'
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100をこえています。' : '許容範囲内です';
// }
// console.log (checkSum(99, 1));

/**
 * 論理演算子の本当の意味
 */
//||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// //&&は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
