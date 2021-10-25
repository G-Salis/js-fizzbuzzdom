const row = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  row.append(box);

  if (!(i % 5) && !(i % 3)){
    box.append("fizzbuzz");
    box.classList.add("boxred");

  }else if(!(i % 3)){
    box.append("fizz");
    box.classList.add("boxgreen");

  }else if(!(i % 5)){
    box.append("buzz");
    box.classList.add("boxorange");

  }else{
    box.append(i);
  }

}