(function loadPolyfills() {
  var needed = [];

  if (!window.Promise) {
    needed.push(
      "https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js",
    );
  }

  if (!window.fetch) {
    needed.push(
      "https://cdn.jsdelivr.net/npm/whatwg-fetch@3.6.20/dist/fetch.umd.min.js",
    );
  }

  if (!Array.from) {
    needed.push("https://polyfill.io/v3/polyfill.min.js?features=Array.from");
  }

  if (!Array.prototype.includes) {
    needed.push(
      "https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.includes",
    );
  }

  if (!Object.assign) {
    needed.push(
      "https://polyfill.io/v3/polyfill.min.js?features=Object.assign",
    );
  }

  if (window.NodeList && !NodeList.prototype.forEach) {
    needed.push(
      "https://polyfill.io/v3/polyfill.min.js?features=NodeList.prototype.forEach",
    );
  }

  if (
    !String.prototype.startsWith ||
    !String.prototype.endsWith ||
    !String.prototype.includes
  ) {
    needed.push(
      "https://polyfill.io/v3/polyfill.min.js?features=String.prototype.startsWith,String.prototype.endsWith,String.prototype.includes",
    );
  }

  if (!Element.prototype.matches || !Element.prototype.closest) {
    needed.push(
      "https://polyfill.io/v3/polyfill.min.js?features=Element.prototype.matches,Element.prototype.closest",
    );
  }

  if (typeof window.CustomEvent !== "function") {
    needed.push("https://polyfill.io/v3/polyfill.min.js?features=CustomEvent");
  }

  if (!("classList" in document.createElement("_"))) {
    needed.push(
      "https://polyfill.io/v3/polyfill.min.js?features=Element.prototype.classList",
    );
  }

  needed.forEach(function (src) {
    var script = document.createElement("script");
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
  });
})();
