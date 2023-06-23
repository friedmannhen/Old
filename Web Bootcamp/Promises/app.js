const DelayedColorChange = (color, delay) => {
  if (!color || !delay) throw "Missing Credentials!";
  if (color == "blue") throw "Oh no it's blue";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// DelayedColorChange("red", 1000)
//   .then(() => DelayedColorChange("orange", 1000))
//   .then(() => DelayedColorChange("yellow", 1000))
//   .then(() => DelayedColorChange("green", 1000))
//   .then(() => DelayedColorChange("blue", 1000))
//   .then(() => DelayedColorChange("indigo", 1000))
//   .then(() => DelayedColorChange("violet", 1000));

async function rainbow() {
  await DelayedColorChange("red", 1000);
  await DelayedColorChange("orange", 1000);
  await DelayedColorChange("yellow", 1000);
  await DelayedColorChange("green", 1000);
  await DelayedColorChange("blue", 1000);
  await DelayedColorChange("indigo", 1000);
  await DelayedColorChange("violet", 1000);
}

rainbow().then(()=>console.log("rainbow is done!"))