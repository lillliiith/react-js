"use strict";
//const arr=['i', 'an', 'working']

//const deleted=arr.splice(1,1,"realy","realy")
//console.log(arr)
//console.log(deleted)
//console.log(arr.slice(0,2))
//const arr=[1,2]
//const arr2=[3,4]
//const arr3=[5,6]
//console.log(arr.concat(arr2,arr3))
//arr.forEach(function(item,index,arr){
//  console.log(item)
// console.log(index)
// console.log(arr)
//})
//console.log(arr.indexOf("an"))
//console.log(arr.lastIndexOf("an"))
//console.log(arr.includes("am"))
// let cars=[
//{id:1, mark:"bmw"},
//{id:2, mark:"mersedes"},
//{id:3, mark:"kawai"}
// ]

//const index=cars.findIndex((car,index,arr)=>car.id===3)
//console.log(index)
//let cars=[
//{id:1, mark:"bmw", motor:2.5},
//{id:2, mark:"mers" , motor:2},
//{id:3, mark:"lol" , motor:5},
//{id:4, mark:"lada" , motor:4},
//{id:5, mark:"opel" , motor:1}

//]
//const filteredarr= cars.filter(function(car){
//return car.motor <=4;
//})
//console.log(filteredarr)
//let arr=[5,4,8,22,55,1,5,9]
//console.log(arr.sort())
//const numberequals = (a,b)=>{
//  if(a>b) return 1;
//if(a==b)return 0;
//if(a<b) return -1
//}
//console.log(arr.sort(numberequals))
//let names ="armen, artur , hraqchuik"
//let arr=names.split("", 3)
//let arr=["armen", "artak", "samo"]
//console.log(arr.join("-"))
//let arr=[1,2,3,4,5]
//const result = arr.reduce((acc,item)=> acc + item,0);
//console.log(result)
//let arr=[]
//console.log(typeof arr)
//console.log(Array.isArray(arr))

//const student ={
//fistname : "hayk",
//lastname: "haykazyan",
//age: 120,
//fistname:"lolo",
//fistname:"lolothrth"
//}
//student.study=function(){
//console.log("es sovorum em vtcum")
//}
//student .study()
//function sayname(){
// console.log(`im anuny ${this.fistname}`)
//}
//student.sayname=sayname
//student.sayname()

//const numbers=[0,1,2,3,4,5,6,7,8,9]
//const [zero,one, ...tail]=numbers

//console.log(tail)

//let student ={
//fistname : "hayk",
//lastname: "haykazyan",
//age: 120,
//fistname:"lolo",
//fistname:"lolothrth"
//}
//let {fistname, lastname, age}=student
//console.log(student)



// const qsort=(array)=>{
//if(array.length<2){
// return array
//}
//const pivot=array[0];
//const less=array.slice(1).filter(el=>el<=pivot);
//const greater=array.slice(1).filter(el=> el>=pivot);
//return qsort(less).concat(pivot, qsort(greater))
//}
//console.log(qsort([3,4,2,1,7,34,9,7]))



//let array=[1,4,21,76,4,8,3,9,3,6]
//function qsort(arr){
//if(arr.length<2){
//return arr
//}
//let pivot=arr[0]
//const left=[]
//const right=[]
//for(let i=1;i<arr.length;i++){
// if(pivot>arr[i]){
//   left.push(arr[i])
//}else{
//  right.push(arr[i])
//}

//}
//return qsort(left).concat(pivot,qsort(right))
//}
//console.log( qsort(array))


//let obj={
// a:200,
// b:100/
//}
//let func=function(c){
// return this.a+this.b+c/
//}
//let result=func.call(obj,300)
//console.log(result)


//let map=new Map()
//map.set("1", "str1")
//map.set(1,"num1")
//map.set(true,"bool") 

//console.log(map.get(true))
//console.log(map.size)


//let arman= {name:"arman"}
//map.set(arman, 5000)

//let set= new Set()
//let arman={name:"arman"};
//let armanchik={name:"armanchik"};
//let armanuhi={name:"armanuhi"};
//set.add(arman)
//set.add(armanchik)
//set.add(armanuhi)
//set.add(armanuhi)
//for(let user of set){
// console.log(user.name)/
//}
//console.log(["artak", "artak", "artak"])





//class animal{
//constructor(name,age,old){
//  this.name=name
// this.age=age
  
// }
//  sayHi(){
//   console.log( `hi ${this.name}`)
// }/
//}
//class Cat extends animal{}
//let cat=new Cat("murzik", 72383)
//cat.sayHi()
//let fonald=new people("piso", 5, "dontknow")
//let donald=new people("azaizik", 20, "dontreallyknow")
//console.log(fonald, donald)
//function animal(name){
//return {
// name : name

//  }
//}
//const cat=animal("murzik")
//console.log(cat)
//console.log(typeof animal)


//let object={
// a: 'a',
// b: "b",
//age: 8989
//}



//localStorage.setItem("name", 'aren')
//localStorage.setItem("name2", 'aren2')
//localStorage.setItem("object", JSON.stringify(object))

//console.log(object)
//console.log(JSON.stringify(object))
//localStorage.removeItem("age")
//const object1=localStorage.getItem("object")
//const realobject=JSON.parse(object1)
//console.log(realobject);
//class animal {
//constructor(name,age){
//  this.name=name
//  this.age=age//
//}/
//}
//class catt extends animal{
//constructor(name,age,color){
//super(name)
//this.age=age
//this.color=color
//}
//}
//let cat =new catt("murzik", 88, "red")
//let rngexjyur=new animal("aiziaiz",88, "jdghj")
//let shun=new animal("shunp", 9989, "hjdhd")
//console.log(cat)
//console.log(rngexjyur)
//console.log(shun)


//setTimeout(() => {
//console.log("usinchron")
//}, 2000);
//setInterval(()=>{
// console.log("aetinterval")
//},3000)
//console.log("synchron")
//setTimeout(() => {
//  console.log("set1")
//  setTimeout(() => {
//   console.log("set12");
// }, 5000);
//}, 2000);
//const promise=new Promise((resolve, reject)=>{
//const serverdata={
// status: "ok",
//data:{
// name:"armen"
// }
// }
//setTimeout(() => {
// console.log("promisw")
//}, 2000);
//resolve(serverdata)
//})
//promise.then((lolik)=>{
// setTimeout(() => {
//  return  new Promise((resolve)=> {
//resolve("okok")
//   })
// }, 2000);
// console.log("data", lolik)
//}).then((data)=> {
//  console.log(data)
//})



//const promise =new Promise((resolve, reject)=>{
//const serverdata={
//  status: "opk",
//data:{
//  name:"armen"
//}
//}
//setTimeout(() => {
//  console.log(serverdata, "serverdata")
// reject("password is wrong")
//},2000);

//}).then((data)=>{
// console.log(data,"data")
//},
//(error)=>{
//  console.error("err0",error)
//}
//)
//document.body.style.backgroundColor="red"
//setTimeout(() => (document.body.style.background ="blue"),
// 2000)
//const html=document.documentElement
//console.log(html.firstChild.firstChild)
//const html=document.documentElement
//const body=document.body
//console.log(Array.from(body.childNodes))
//console.log(body.childNodes)
//for(let node in html.childnodes){
// console.log(node)
//}




//console.log(document.body.children);
//console.log(document.body.previousElementSibling)
//console.log(document.body.firstChild)
//console.log(document.body.parentElement)
//const h1=document.querySelectorAll(".header")
//const querrys=document.querySelector(".header")
//console.log(h1);
//console.log(querrys);
//const elem =document.getElementsByTagName("h1")
//console.log(elem)
///let div =document.createElement("div")
//div.className="div"
//div.innerHTML="hello dear"
//document.body.children[0].firstElementChild.before(div)
//let h1=document.getElementById("header1")
//let h2=document.getElementById("header2")
//document.body.replaceWit































































































































































































































































































































































































































































































































































































































































































































































































































































































                 

                                                                                                                                                                                                                                                                                              