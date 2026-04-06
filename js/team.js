const slider = document.getElementById('teamSlider');

function scrollTeam(btn, direction) {
  const slider = btn.parentElement.querySelector('.team_slider');
  const card = slider.querySelector('.team_card');

  const gap = 30;
  const cardWidth = card.offsetWidth + gap;

  let visible = window.innerWidth <= 600 ? 1 :
                window.innerWidth <= 992 ? 2 : 3;

  slider.scrollLeft += direction * cardWidth * visible;
}

// FILTER FIX
function filterTeam(dept, el) {
  const cards = document.querySelectorAll('.team_card');
  const links = document.querySelectorAll('.team_filters a');

  links.forEach(link => link.classList.remove('active'));
  el.classList.add('active');

  cards.forEach(card => {
    if (dept === 'all' || card.dataset.dept === dept) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });

  slider.scrollLeft = 0;
}