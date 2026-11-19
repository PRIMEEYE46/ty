// Hero depth: doodles and the burger drift a little with the pointer, at different speeds.
(function () {
    var fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    var calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var hero = document.querySelector('.hero');
    if (!hero || !fine || calm) return;

    // [element, x travel, y travel] in px
    var layers = [
        [hero.querySelector('.doodle-left'), -26, -18],
        [hero.querySelector('.doodle-right'), 22, 16],
        [hero.querySelector('.div2'), -14, -10]
    ];
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;

    hero.addEventListener('pointermove', function (e) {
        var r = hero.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - .5;
        ty = (e.clientY - r.top) / r.height - .5;
        go();
    });
    hero.addEventListener('pointerleave', function () { tx = ty = 0; go(); });

    function go() { if (!raf) raf = requestAnimationFrame(step); }
    function step() {
        cx += (tx - cx) * .08;      // ease toward the pointer, and back to rest when it leaves
        cy += (ty - cy) * .08;
        layers.forEach(function (l) {
            l[0].style.transform = 'translate3d(' + (cx * l[1]).toFixed(1) + 'px,' + (cy * l[2]).toFixed(1) + 'px,0)';
        });
        raf = (Math.abs(tx - cx) > .001 || Math.abs(ty - cy) > .001) ? requestAnimationFrame(step) : 0;
    }
})();
