const d = document,
  w = window,
  n = navigator,
  ua = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/Android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows.phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/Linux/i),
      mac: () => ua.match(/Mac os/i),
      windows: () => ua.match(/Windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safary: () => ua.match(/safari|mozilla/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safary() ||
          this.firefox() ||
          this.opera() ||
          this.ie() ||
          this.edge()
        );
      },
    };
  // console.log(ua);
  // console.log(isDesktop.any());
  // console.log(isBrowser.any());
  $id.innerHTML = `
  <ul>
  <li>User Agent <b>${ua}</b></li>
  <li>Platform :<b>${
    isBrowser.any() ? isBrowser.any() : isBrowser.any()
  }</b></li>
  </ul>
  `;
  function userDeviceInfo(id) {
    const $id = d.getElementById(id),
      isMobile = {
        //android: () => ua.match(/Android/i),
        // ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows.phone/i),
        any: function () {
          return this.android() || this.ios() || this.windows();
        },
      },
      isDesktop = {
        linux: () => ua.match(/Linux/i),
        mac: () => ua.match(/Mac os/i),
        windows: () => ua.match(/Windows nt/i),
        any: function () {
          return this.linux() || this.mac() || this.windows();
        },
      },
      isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safary: () => ua.match(/safari|mozilla/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge/i),
        any: function () {
          return (
            this.chrome() ||
            this.safary() ||
            this.firefox() ||
            this.opera() ||
            this.ie() ||
            this.edge()
          );
        },
      };
    console.log(ua);
    console.log(isDesktop.any());
    console.log(isBrowser.any());
    $id.innerHTML = `
  <ul>
  <li>User Agent <b>${ua}</b></li>
  <li>Platform :<b>${
    isBrowser.any() ? isBrowser.any() : isBrowser.any()
  }</b></li>
  </ul>
  `;
    if (isBrowser.chrome()) {
      $id.innerHTML += `<p><mark>This content only view navigator Chrome</mark></p>`;
    }
  }
  //exclusive content
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>This content only view navigator ${
      isBrowser.any() ? isBrowser.any() : isBrowser.any()
    }</mark></p>`;
  }
  if (isBrowser.firefox()) {
    $id.innerHTML += `<p><mark>This content only view navigator ${
      isBrowser.any() ? isBrowser.any() : isBrowser.any()
    }</mark></p>`;
  }
  //redireccion
  // if (isMobile.android()) {
  //   w.location.href = "https://sirandresitog.com";
  // }
}
