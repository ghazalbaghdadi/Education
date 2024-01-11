const formEl = document.querySelector("#form");
let ulList = document.querySelector("#info");
const subBtn = document.querySelector(".submit");
const resBtn = document.querySelector(".reset");

const colorOption = document.querySelector("#opt1");
const fontOption = document.querySelector("#opt2");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameUser = e.target.name.value;
  const emailUser = e.target.email.value;
  const ageUser = e.target.age.value;

  let liName = document.createElement("li");
  let liEmail = document.createElement("li");
  let liAge = document.createElement("li");

  if (!nameUser || !emailUser || !ageUser) {
    alert("Hoy Yaro !!!!!!");
  } else {
    liName.innerText = `${nameUser}`;
    liEmail.innerText = `${emailUser}`;
    liAge.innerText = `${ageUser}`;
    
    ulList.append(liName, liEmail, liAge);
  }

  colorOption.onchange = (event) => {
    liName.style.color = event.target.value;
    liEmail.style.color = event.target.value;
    liAge.style.color = event.target.value;

  };
  fontOption.onchange = (event) => {
    liName.style.fontStyle = event.target.value;
    liEmail.style.fontStyle = event.target.value;
    liAge.style.fontStyle = event.target.value;
  };
  resBtn.onclick = () => {
    nameUser.value = "";
    emailUser.value = "";
    ageUser.value = "";
    ulList.innerHTML = "";
  };
});
