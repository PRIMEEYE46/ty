const section = document.querySelector(".social-feed");
const cards = Array.from(document.querySelectorAll(".card-stack .cards"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function animateCards() {
    if (!section || !cards.length) return;

    const rect = section.getBoundingClientRect();
    const progress = prefersReducedMotion
        ? 1
        : Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
    const stack = cards[0].parentElement;
    const cardWidth = cards[0].offsetWidth;
    const maxRotation = Math.PI / 30;
    const rotatedWidth = cardWidth * Math.cos(maxRotation)
        + cards[0].offsetHeight * Math.sin(maxRotation);
    const maxSpread = Math.min(
        cardWidth * 0.72,
        (stack.clientWidth - rotatedWidth) / (cards.length - 1)
    );
    const center = (cards.length - 1) / 2;

    cards.forEach((card, index) => {
        const distanceFromCenter = index - center;
        const spread = distanceFromCenter * maxSpread * progress;
        const rotation = distanceFromCenter * (5 - 3 * progress);

        card.style.setProperty("--spread", `${spread}px`);
        card.style.setProperty("--rotation", `${rotation}deg`);
    });
}

if (!prefersReducedMotion) {
    window.addEventListener("scroll", animateCards, { passive: true });
    window.addEventListener("resize", animateCards);
}

animateCards();