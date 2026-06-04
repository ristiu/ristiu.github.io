function initCustomCursorEngine() {
  // skip on touch devices
  if (window.matchMedia('(hover: none)').matches) return;

  const cursorNode = document.querySelector('.js-terminal-cursor');
  if (!cursorNode) return;

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function renderCursorFrame() {
    currentX += (mouseX - currentX) * 0.25;
    currentY += (mouseY - currentY) * 0.25;
    cursorNode.style.transform =
      `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursorFrame);
  }
  requestAnimationFrame(renderCursorFrame);

  const clickables = document.querySelectorAll('a, button, .timeline-item');
  clickables.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-state-hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-state-hovering'));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCustomCursorEngine);
} else {
  initCustomCursorEngine();
}
