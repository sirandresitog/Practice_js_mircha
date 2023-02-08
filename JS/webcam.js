const d = document,
  w = window,
  n = navigator;

export default function webCam(id) {
  const $video = d.getElementById(id);
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML("afterend", `<p><mark>${err}</mark></p>`);
        console.log(`error el usuario no ha dado permisos a la camara: ${err}`);
      });
  }
}
