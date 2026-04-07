function scrollTeam(btn, direction) {
  const container = btn.closest('.team_container');
  const slider = container.querySelector('.team_slider');
  const card = slider.querySelector('.team_card');

  if (!card) return;

  const gap = 30;
  const cardWidth = card.offsetWidth + gap;

  let visible = 3;
  if (window.innerWidth <= 992) visible = 2;
  if (window.innerWidth <= 600) visible = 1;

  slider.scrollLeft += direction * cardWidth * visible;
}