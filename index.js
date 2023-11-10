const pay = [30, 40, 50, 60, 999];
const names = ["Alice", "Bob", "Carol", "Edwin", "Liz", "Machai"];
const occupations = [
  "Writer",
  "Teacher",
  "Programmer",
  "Max-inista",
  "Construction",
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

const averagePrice = document.querySelector("#averagePrice");
const freelancertbody = document.querySelector("tbody");

function render() {
  const freelancerRows = freelancers.map((freelancer) => {
    const freelancerRow = document.createElement("tr");
    freelancerRow.innerHTML = `
    <td>${freelancer.name}</td>
    <td>${freelancer.occ}</td>
    <td>$${freelancer.pay}</td>`;
    return freelancerRow;
  });
  freelancertbody.replaceChildren(...freelancerRows);
}

render();

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
