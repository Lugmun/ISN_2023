if (!self.define) {
  let e,
    i = {};
  const n = (n, r) => (
    (n = new URL(n + ".js", r).href),
    i[n] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = i), document.head.appendChild(e);
        } else (e = n), importScripts(n), i();
      }).then(() => {
        let e = i[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (r, o) => {
    const s =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[s]) return;
    let c = {};
    const a = (e) => n(e, s),
      t = { module: { uri: s }, exports: c, require: a };
    i[s] = Promise.all(r.map((e) => t[e] || a(e))).then((e) => (o(...e), c));
  };
}
define(["./workbox-56597c36"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "favicon.ico", revision: "1ba2ae710d927f13d483fd5d1e548c9b" },
        {
          url: "img/icon-192x192.png",
          revision: "d15ff70595a54c386af1c72a1b5a310b",
        },
        {
          url: "img/icon-256x256.png",
          revision: "14a4dba659f918c03828d0303b0454c7",
        },
        {
          url: "img/icon-384x384.png",
          revision: "5ea075dadafa8a99b4bd34c3bbe9255f",
        },
        {
          url: "img/icon-512x512.png",
          revision: "f518c529a2fb66d8b517203a2b4b73f1",
        },
        { url: "index.html", revision: "668adf1651dc44b806356740e40a6c59" },
        { url: "manifest.json", revision: "027a4a530b909a572bc7423af33d384a" },
        {
          url: "manifest.webmanifest",
          revision: "0f4b19d83011dda5c8d9367819e4a7b4",
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
