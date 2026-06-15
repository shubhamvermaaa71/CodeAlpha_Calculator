let expression = "";
const text = document.getElementById("text");

function render() {
  text.innerHTML = "";
  [...expression].forEach((ch, i) => {
    const span = document.createElement("span");
    span.className = "char";
    span.style.animationDelay = (i * 0.015) + "s";
    span.textContent = ch;
    text.appendChild(span);
  });
}

function append(v) {
  expression += v;
  render();
}

function clearDisplay() {
  expression = "";
  render();
}

function backspace() {
  expression = expression.slice(0, -1);
  render();
}

function calculate() {
  try {
    expression = String(eval(expression));
    render();
  } catch {
    expression = "Error";
    render();
  }
}

document.addEventListener("keydown", (e) => {
  const k = e.key;
  if (/[0-9]/.test(k) || ['+', '-', '*', '/', '.', '(', ')'].includes(k)) {
    append(k);
  } else if (k === "Backspace") {
    backspace();
  } else if (k === "Enter") {
    calculate();
  } else if (k === "Escape") {
    clearDisplay();
  }
});
