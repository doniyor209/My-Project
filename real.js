

  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.card123321');

  searchInput.addEventListener('input', function() {
    const filter = this.value.toLowerCase();

    cards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();

      if (title.includes(filter)) {
        card.style.display = ''; // показываем карточку
      } else {
        card.style.display = 'none'; // скрываем карточку
      }
    });
  });