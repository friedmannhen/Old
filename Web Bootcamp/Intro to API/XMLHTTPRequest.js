const req = new XMLHttpRequest();
var fact = document.getElementById("fact");
req.onload = function () {
  console.log("IT LOADED!!!");
  const data = JSON.parse(this.responseText);
  fact.innerText = data.fact;
};
req.onerror = function () {
  fact.innerText = "ERROR!!!"
  console.log(this);
};

req.open("GET", "https://catfact.ninja/fact");
req.send();