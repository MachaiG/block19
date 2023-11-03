const pay = [30, 40, 50, 60, 999];
const names = ["Alice", "Bob", "Carol", "Edwin", "Liz", "Machai"];
const occupations = [
  "Writer",
  "Teacher",
  "Programmer",
  "Max-inista",
  "Coward",
  "Astrophysicist",
];
const maxFreelancers = 10;
const freelancers = [
  {
    name: "Alice",
    occ: "Writer",
    pay: 30,
  },
  {
    name: "Bob",
    occ: "Teacher",
    pay: 50,
  },
  {
    name: "Carol",
    occ: "Programmer",
    pay: 70,
  },
];
console.log(freelancers);
const addWorkIntervalId = setInterval(addFreelancer, 1000);

render();

function render() {
  const freelancer = document.querySelector("#people");
  const freelancerElements = freelancers.map((freelancer) => {
    const element = document.createElement("li");
    element.textContent = `Name: ${freelancer.name} Occupation: ${freelancer.occ} Starting Price: ${freelancer.pay} `;
    return element;
  });
  freelancer.replaceChildren(...freelancerElements);
}

function addFreelancer() {
  const randName = names[Math.floor(Math.random() * names.length)];
  const randOcc = occupations[Math.floor(Math.random() * occupations.length)];
  const randPay = pay[Math.floor(Math.random() * pay.length)];
  freelancers.push({ name: randName, occ: randOcc, pay: randPay });

  render();

  if (freelancers.length >= maxFreelancers) {
    clearInterval(addWorkIntervalId);
  }
}
