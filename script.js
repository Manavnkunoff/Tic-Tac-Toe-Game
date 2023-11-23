let turn = 'X'
let gameOver = false;
let reset = document.getElementById("reset");
const changeTurn = () => {
      return turn === 'X'? '0':'X'
}

const checkWin = () => {
      let boxText = document.getElementsByClassName('boxtext')
      let wins = [
            [0,1,2,0,5,0],
            [3,4,5,0,15,0],
            [6,7,8,0,25,0],
            [0,3,6,-10,15,90],
            [1,4,7,0,15,90],
            [2,5,8,10,15,90],
            [0,4,8,0,15,45],
            [2,4,6,0,15,135]
      ]
      // console.log(e[0])
      wins.forEach(e => {
           if((boxText[e[0]].innerText === boxText[e[1]].
            innerText) && (boxText[e[2]].innerText === boxText[e[1]].
                  innerText) && (boxText[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = 
            `"${boxText[e[0]].innerText} Won!"`;
            gameOver=true;
            document.querySelector('.game .container .line').style.
            width = '30vw'
            document.querySelector('.game .container .line').style.
            transform = `translate(${e[3]}vw, ${e[4]}vw) 
            rotate(${e[5]}deg)`
           }
      })
}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(e => {
      let boxText = e.querySelector('.boxtext');
      e.addEventListener('click',()=>{
            if(boxText.innerText === ''){
                  boxText.innerText = turn;
                  turn = changeTurn();
                  checkWin()
                  if(!gameOver){
                        document.getElementsByClassName("info")[0].
                        innerHTML = `Turn for "${turn}"`;
                  }
            }
      })
})
reset.addEventListener('click',()=>{
      let boxText = document.querySelectorAll('.boxtext')
      Array.from(boxText).forEach((e)=>{
            e.innerText='';
      });
      turn = 'X';
      gameOver=false;
      document.getElementsByClassName("info")[0].innerHTML = 
      `Turn for "${turn}"`;
      document.querySelector('.game .container .line').style.width 
      = '0vw'

      }
)