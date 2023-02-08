const d = document;

export function responsiveTester(form) {
  const $form = d.getElementById(form);
  let tester;
 // console.log($form);

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      tester = window.open(
        $form.address.value,
        "tester",
        `innerWidth=${$form.width.value},innerHeight=${$form.height.value}`
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $form.close) {
      tester.close();
    }
  });
}
