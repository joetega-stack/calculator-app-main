const myArr = document.querySelectorAll(".num button");
const outPut = document.querySelector(".outPut");
const toggle = document.getElementById("toggleState")


myArr.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent == "RESET") {
      outPut.textContent = 0;
    } else if (btn.textContent == "=") {
      outPut.textContent = eval(outPut.textContent);
    } else if (btn.textContent === "Del") {
        outPut.textContent = outPut.textContent.slice(0, -1);
        if (outPut.textContent == "") {
            outPut.textContent = "0"
        }
        
    } else {
        if (outPut.textContent == "0") {
            outPut.textContent = btn.value
        } else {
            outPut.textContent += btn.value;
        }
    }
  });
});

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
})