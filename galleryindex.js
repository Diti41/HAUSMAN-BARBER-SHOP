document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('mouseover', () => {
    const video = item.querySelector('video');
    if (video) {
      video.play();
    }
  });

  item.addEventListener('mouseout', () => {
    const video = item.querySelector('video');
    if (video) {
      video.pause();
    }
  });
});
