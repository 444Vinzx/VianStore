function beli(item) {
  const pesan = `Halo King Arfian, saya ingin membeli ${item} di VianStore Premium.`;
  window.open(`https://wa.me/628885988556?text=${encodeURIComponent(pesan)}`);
}

// Animasi muncul saat scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => observer.observe(card));
