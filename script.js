// Wait until the DOM is fully loaded before running any code
document.addEventListener('DOMContentLoaded', function () {

  const video = document.getElementById('wildlifeVideo');
  const toggleBtn = document.getElementById('toggleBtn');

  toggleBtn.addEventListener('click', function () {

    // Case 1: video is currently visible -> hide it
    if (video.style.display !== 'none') {
      video.pause();
      video.style.display = 'none';
      toggleBtn.textContent = 'Show Video';
      toggleBtn.setAttribute('aria-pressed', 'true');

    // Case 2: video is hidden -> show it and play
    } else {
      video.style.display = 'block';
      video.play();
      toggleBtn.textContent = 'Hide Video';
      toggleBtn.setAttribute('aria-pressed', 'false');
    }
  });

});
