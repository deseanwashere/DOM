const freelancers = [
  { name: " Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
  { name: "Carol", price: 70 ,occupation: "programmer"}
]

console.log(freelancers)

// alert ("A visitor enters the website and finds a list of available freelancers. Each freelancer has a name, an occupation, and a starting price for their services. They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.")

function findAverage(arr) {
  // let total 
  for (let i = 0; i < arr.length; i++)
 // {total += arr[i]}

  return  arr.length;

}

const arr = [30,50,70];
console.log(findAverage(arr));

// A few seconds later, a new listing appears for a freelancer named Carol,
//  who is a programmer and has a starting price of $70. 
const delayMessage = setInterval(freelancers, 1000)





// render items onto page 

function listItems(arg)  { 
  let items = "";
  for (let i = 0; i < arg.length; i++) {
    items += `<li>${arg[i]}</li>`;
  }
 return items;
}


 document.querySelector("MAIN") =
 ` ${listItems(freelancers)} `;






