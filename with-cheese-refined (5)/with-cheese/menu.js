// Menu filter: builds one button per category on the page, plus "All".
(function () {
    var groups = [].slice.call(document.querySelectorAll('.menu-group'));
    var bar = document.getElementById('menu-chips');
    if (!bar || groups.length < 2) return;       // nothing to filter with a single category

    var names = ['All'].concat(groups.map(function (g) { return g.dataset.cat; }));
    names.forEach(function (name, i) {
        var b = document.createElement('button');
        b.type = 'button';
        b.textContent = name;
        b.setAttribute('aria-pressed', i === 0);
        b.addEventListener('click', function () { show(name); });
        bar.appendChild(b);
    });

    function show(name) {
        [].forEach.call(bar.children, function (b) { b.setAttribute('aria-pressed', b.textContent === name); });
        groups.forEach(function (g) { g.hidden = !(name === 'All' || g.dataset.cat === name); });
    }
})();
