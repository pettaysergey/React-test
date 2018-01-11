import axios from "axios";

const instance = axios.create({
  baseURL: "https://swapi.co/api/",
  timeout: 15000
});

export default function getData(data) {                                                                                                         
  return instance({ ...data });
}

// let test = [
//   {
//     name: "www",
//     pk: 11123
//   },
//   {
//     name: "aaa",
//     pk: 222323
//   },
//   {
//     name: "zzz",
//     pk: 312
//   }
// ];

// const newTest = test.reduce(
//   (sum, curent) => ({
//     ...sum,
//     [curent.pk]: curent
//   }),
//   {}
// );

// console.log(newTest);
