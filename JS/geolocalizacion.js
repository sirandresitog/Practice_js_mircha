const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $idGeolocation = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    },
    success = (position) => {
     // console.log(position);
      let coords = position.coords;
      $idGeolocation.innerHTML = `
      <p>Your coordinates is:</p>
      <ul>
      <li>Latitud:<b>${coords.latitude}<b></li>
      <li>Longitude:<b>${coords.longitude}<b></li>
      <li>Latitud:<b>${coords.latitude}<b></li>
      </ul>
      <a href="http://www.google.com/maps/@${coords.latitude},${coords.longitude},21z" target ="_blank" rel="noopener">see you googlemaps</a>
      `;
    },
    error = (err) => {
      $idGeolocation.innerHTML = `<p></p><mark>eror:${err.message}</mark>`;
      console.log(`<p></p><mark>eror:${err.message}</mark>`);
    };
  n.geolocation.getCurrentPosition(success, error, options);
}
