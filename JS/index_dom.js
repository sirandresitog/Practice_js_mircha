import hamburgerMenu from "./menu_hamburger.js";
import { digitalClock, alarm } from "./clock.js";
import { shortcuts } from "./keyboard.js";
import { moveBall } from "./keyboard.js";
import countdown from "./countdown.js";
import scrollTopBtn from "./button_scroll.js";
import darktheme from "./dark_theme.js";
import responsiveMedia from "./objet_responsive.js";
import { responsiveTester } from "./responsive_tester.js";
import userDeviceInfo from "./detection_device.js";
import networkStatus from "./network_status.js";
import webCam from "./webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./shearch_filter.js";
import draw from "./draw.js";
import slider from "./carrusel.js";
import scrollspy from "./scroll_spy.js";
import smartVideo from "./smart_video.js";
import contactFormvalidations from "./contact_form_validation.js";
import speechReader from "./narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#clock", "#active-clock", "#deactivate-clock");
  alarm(
    "/menu-hamburguer/assets/alarm.mp3",
    "#active-alarm",
    "#deactivate-alarm"
  );
  //countDown
  countdown();
  scrollTopBtn(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=VDFSb-NHC7E">Watch Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/VDFSb-NHC7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://www.google.com/maps/place/Cancha+Sint%C3%A9tica+-+La+Garra+del+F%C3%BAtbol/@-0.2037699,-78.4652379,15z/data=!4m8!1m2!2m1!1shome!3m4!1s0x91d5916970de9ef7:0xdc5cd503fc68c7c0!8m2!3d-0.1961537!4d-78.4488691">Watch Map</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.172351989659!2d-78.46523794161367!3d-0.20376993757161116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5916970de9ef7%3A0xdc5cd503fc68c7c0!2sCancha%20Sint%C3%A9tica%20-%20La%20Garra%20del%20F%C3%BAtbol!5e0!3m2!1ses-419!2sec!4v1671066685747!5m2!1ses-419!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  responsiveTester("responsive-tester");
  //userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollspy();
  smartVideo();
  contactFormvalidations();
});

//events keyboard
d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

//dark-theme
darktheme(".dark-theme-btn", "dark-mode");

//network-status
networkStatus();
speechReader();
