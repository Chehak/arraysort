const courses = [
{
    name: "Basic Html And CSS",
    price: 2.7,
},
{
    name: "DBMS",
    price: 2.9,
},
{
    name: "Complete javascript course",
    price: 2.2,
},
{
    name: "Angular developer Bootcamp",
    price: 2.4,
},
];
function generateList(){
const ul = document.querySelector(".list-group");
ul.innerHTML="";
courses.forEach((course)=>{
const li = document.createElement("li");
li.classList.add("list-group-item");

const name = document.createTextNode(course.name);
li.appendChild(name);


const span = document.createElement("span");
span.classList.add("float-right");

const price = document.createTextNode("$" + course.price);
span.appendChild(price);

li.appendChild(span);
ul.appendChild(li);
});
}
generateList();


window.addEventListener("load",generateList);
const button = document.querySelector(".sort-btn");

button.addEventListener("click", ()=>{
    courses.sort((a,b)=> a.price - b.price);
    generateList();
});

window.addEventListener("load",generateList);
const desbutton= document.querySelector(".sort-btn-des");

desbutton.addEventListener("click",()=>{
    courses.sort((a,b) =>(b.price - a.price));
    generateList();
});

