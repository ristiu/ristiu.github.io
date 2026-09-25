// Shared by the Playground canvas and the homepage's mobile preview.
(function () {
  const videos = new Set();

  function nearViewport(video) {
    const rect = video.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0 && rect.bottom > -240 &&
      rect.top < innerHeight + 240 && rect.right > -240 && rect.left < innerWidth + 240;
  }

  function play(video) {
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    if (!video.getAttribute('src')) {
      const mobile = window.matchMedia('(max-width: 1023px)').matches;
      const source = mobile && video.dataset.mobileSrc ? video.dataset.mobileSrc : video.dataset.src;
      if (!source) return;
      video.src = source;
    }
    const attempt = video.play();
    if (attempt) attempt.catch(error => {
      // Safari can deny autoplay in Low Power Mode. Keep the poster
      // available; retry on visibility changes rather than requiring a tap.
      if (error.name !== 'AbortError') console.debug('Autoplay handled:', error.name);
    });
  }

  function resumeVisible() {
    videos.forEach(video => {
      if (nearViewport(video)) play(video);
    });
  }

  function init() {
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) play(entry.target);
          });
        }, { rootMargin: '240px' })
      : null;

    document.querySelectorAll('video[data-src]').forEach(video => {
      videos.add(video);
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.addEventListener('canplay', () => {
        if (video.paused && nearViewport(video)) play(video);
      });
      if (observer) observer.observe(video);
    });
    // Run without a gesture; deferred sources are attached as their
    // cards approach the viewport, then loop with native autoplay.
    resumeVisible();
    if (!observer) {
      window.addEventListener('scroll', resumeVisible, { passive: true });
      window.addEventListener('resize', resumeVisible);
    }
    window.addEventListener('pageshow', resumeVisible);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) resumeVisible();
    });

    // Mobile uses the lightweight snippet, so don't load a hidden
    // desktop iframe and its entire second copy of the media collection.
    const iframe = document.getElementById('playground-iframe');
    if (iframe && iframe.dataset.src) {
      const desktop = window.matchMedia('(min-width: 1024px)');
      const loadCanvas = () => {
        if (desktop.matches && !iframe.getAttribute('src')) iframe.src = iframe.dataset.src;
      };
      loadCanvas();
      desktop.addEventListener('change', loadCanvas);
    }
  }

  window.PlaygroundMedia = { play };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
