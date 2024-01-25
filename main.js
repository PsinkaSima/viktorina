let begin = document.getElementById("begin");
let result = document.getElementById("result");
let block = document.getElementById("block");
begin.addEventListener("click", start);
let corentQue = 0;
let success = 0;
let allQue = [
  {
    question: "2 + 2 =",
    correct: 4,
    answers: [2, 5, 6, 10, 4],
  },
  {
    question: "6 + 5 =",
    correct: 11,
    answers: [7, 12, 9, 11, 5],
  },
];

function start() {
  begin.classList.add("none");
  block.classList.remove("none");
  result.classList.add("none");
  generateQue();
}
function generateQue() {
  let quest = allQue[corentQue].question;
  block.innerHTML = `<h2 class = 'title'>${quest}</h2>`;
  let answers = allQue[corentQue].answers;
  let btnBlock = "";
  for (let a of answers) {
    btnBlock += `<button class = 'btn' onclick="check(${a})">${a}</button>`;
  }
  block.innerHTML += `  <nav class="block_btn">
    ${btnBlock}
</nav>`;
}

function check(n) {
  let correct = allQue[corentQue].correct;
  if (correct == n) {
    success++;
  }
  corentQue++;
  if (allQue.length > corentQue) {

      generateQue();
  }
  else {
    stopQues()
  }
}
function stopQues() {
    begin.classList.remove("none");
    block.classList.add("none");
    result.innerHTML = `Решено ${success} из ${allQue.length}`
    result.classList.remove("none");
    success = 0;
    corentQue = 0;
}