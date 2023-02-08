const d = document;
let x = 0,
  y = 0;
export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  // console.log(limitsStage);
  // console.log(limitsBall);

  switch (e.keyCode) {
    //arrowLeft
    case 37:
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
      }

      break;
    // arrowUp
    case 38:
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
     
      }
      break;
    //arrowRight
    case 39:
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    //arrowDown
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 9}px,${y * 9}px)`;
}

export function shortcuts(e) {
  // console.log(e.type);
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e);
  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el teclado");
  }
  if (e.key === "c" && e.altKey) {
    alert("Haz lanzado una alerta con el confirm");
  }
  if (e.key === "l" && e.altKey) {
    prompt("inserta un valor");
  }
}
