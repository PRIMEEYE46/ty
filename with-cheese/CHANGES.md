# What changed (and why)

## Bugs fixed
- `Images/` (capital I) in 3 places pointed at the `images/` folder. Works on Windows, breaks on most hosting. Now all lowercase.
- Nested, unclosed `<h1>` around WITH/CHEESE: now one `<h1>` with two spans.
- `<a hreff>` typo on the logo link, an unclosed `.parent` div, and a stray `</div>` after the favourites section.
- `border-radius: px;` (invalid) and a dead `.section` rule removed.
- Duplicate `id="footer-icon"` x5 -> class. `<img>` directly inside `<ul>` fixed.
- Nav and buttons now go somewhere (`#about`, `#menu`, `#contact`); `href="#menu"` pointed at nothing.
- Typos: MANU, Waterring, Satisfation, SIGNITURES, loeaded, Fies, Favoratires.
- Missing `margin:0` on body (the white border around the page), Poppins was named but never loaded.
- Footer social icons: Gmail was in "Follow Us". Now Instagram + TikTok.

## Design
- Doodles: the 1600px JPG was stretched over the whole page (that's the blur). Now two sharp, transparent, tinted pieces anchored to the hero's corners and fading inward, plus red versions in Favourites. Change `--doodle-opacity` in `style.css` to make them louder or quieter.
- Hero: bigger headline with a dark outline on CHEESE, solid ORDER NOW button, burger photo with soft shadow.
- Favourites: dark text on orange (white failed contrast), title no longer runs into the cards, hover lift on cards.
- Cards: photos now match the dish names (burger on Double Meat, fries on Loaded Fries). Fire Stack has a placeholder until there is a photo.
- Mobile layout for hero, favourites, story and footer.

## Still needs real assets / content
- Photos are small (burger 247px, fries 306px, storefront 246px wide) so they blur when scaled up. Send 1000px+ originals.
- Menu descriptions and the story text are still placeholder text.
- Phone, email, address, socials and the ORDER NOW link are placeholders.

## Hero v2
- Hero is white again, with the doodle art (the dark and gradient versions were dropped).
- Kept: tilted burger sticker with the price badge, the scrolling ticker strip (pauses on hover), and the cheese drip hanging into Favourites (`.drip`, an inline SVG tile in `style.css`).
- A real cut-out burger PNG (transparent background) would be the next upgrade: replace the image and remove the border and radius on `.burger-sticker img`.
- Entrance animation plays once; `main.js` adds a small pointer drift to the doodles and burger. Both are switched off for reduced-motion users.

## Scrollbars
- Page scrollbar and the Favourites card slider now match the brand (dark rail, orange-to-red thumb, no arrow buttons). Firefox gets the same colors through `scrollbar-color`.

## Menu page
- New `menu.html` with the same nav and footer, grouped by category (Kotae, Fries) with filter buttons built by `menu.js`. Doodles sit fixed behind the page and the dark cards sit in front, like the blossoms on the flower site.
- Nav "Menu", the hero "VIEW MENU" button, "VIEW FULL MENU" in Favourites, and the footer Kotae and Fries links now go to the menu page (the Favourites section id is now `favourites`).
- The menu is plain HTML, so it works without JavaScript and search engines can read it. How to add an item or a category is in a comment at the top of `menu.html`.
- Seeded with the three dishes from Favourites. Fire Stack was put under Kotae as a guess; descriptions say "[Add a short description]".
