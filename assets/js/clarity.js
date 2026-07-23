/* ClarityGraphic — "chaos → clarity" signature graphic.
   Deterministic procedural paths (no randomness) per the README spec.
   Generates the three thread paths, then drives the CSS draw-on animation.
   Falls back to the fully-drawn static state without JS or under
   prefers-reduced-motion. */
(function () {
  var cg = document.getElementById("cg");
  if (!cg) return;

  var W = 520, midY = 180, N = 1100;
  var specs = [
    { A: 118, f1: 71, f2: 129, f3: 97,  f4: 151, ph: 0.0, chaosEnd: 0.50, yoff: 0 },  // primary
    { A: 96,  f1: 83, f2: 112, f3: 132, f4: 167, ph: 1.9, chaosEnd: 0.46, yoff: -7 }, // faint
    { A: 104, f1: 64, f2: 143, f3: 88,  f4: 175, ph: 3.4, chaosEnd: 0.52, yoff: 9 },  // faint
  ];

  function threadPath(s) {
    var d = "";
    for (var i = 0; i <= N; i++) {
      var t = i / N;
      var env = Math.pow(Math.max(0, (s.chaosEnd - t) / s.chaosEnd), 1.4);
      var x = t * W + env * s.A * (Math.sin(t * s.f1 + s.ph) * 0.6 + Math.sin(t * s.f2 + s.ph * 1.7) * 0.45);
      var y = midY + s.yoff * env + env * s.A * (Math.cos(t * s.f3 + s.ph * 0.5) * 0.75 + Math.sin(t * s.f4 + s.ph) * 0.5);
      d += (i === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1) + " ";
    }
    return d.trim();
  }

  var paths = specs.map(threadPath);
  var set = function (id, d) { var el = document.getElementById(id); if (el) el.setAttribute("d", d); };
  set("cg-main", paths[0]);
  set("cg-f1", paths[1]);
  set("cg-f2", paths[2]);

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function play() {
    if (reduce) return;
    cg.classList.remove("cg--animate");
    void cg.offsetWidth; // force reflow so the animation restarts
    cg.classList.add("cg--animate");
  }

  var replay = document.getElementById("cg-replay");
  if (replay) replay.addEventListener("click", play);

  if (!reduce) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { play(); io.disconnect(); }
        });
      }, { threshold: 0.25 });
      io.observe(cg);
    } else {
      play();
    }
  }
})();
