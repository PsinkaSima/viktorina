let begin = document.getElementById('begin')
let result = document.getElementById('result')
let block = document.getElementById('block')
begin.addEventListener('click', start)
function start(){
    begin.classList.add('none')
    block.classList.remove('none')
    result.classList.add('none')
}