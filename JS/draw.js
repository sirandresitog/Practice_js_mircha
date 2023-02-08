const d = document;
export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
    ramdom = Math.floor(Math.random() * $players.length),
    winner=$players[ramdom];
   // console.log($players,ramdom);
    return `The winner for: ${winner.textContent}`
  };
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}
// ejercio para filtrar prueba
const getWinnerComment = (selector) =>{
  const $players = d.querySelectorAllows(selector),
    ramdom = Math.floor(Math.random() * $players.length),
    winner = $players[ramdom];
    return `The winner for: ${winner.textContent}`;
}