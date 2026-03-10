/* ============================================================
   RBMF Main JS
   ============================================================ */

// ── NAV: scroll border + mobile toggle ──
(function () {
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.site-nav__links');

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.borderBottomColor = window.scrollY > 40
        ? 'rgba(237,228,210,0.14)'
        : 'rgba(237,228,210,0.08)';
    });
  }

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const open = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Mark active nav link
  const current = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.site-nav__links a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === current) a.classList.add('active');
  });
})();

// ── COUNTDOWN ──
(function () {
  const el = document.getElementById('countdown');
  if (!el) return;

  const isoDate = el.dataset.date;
  if (!isoDate) return;

  const FEST = new Date(isoDate);

  function pad(n, len) { return String(n).padStart(len || 2, '0'); }

  function tick() {
    const diff = FEST - new Date();
    if (diff <= 0) {
      el.innerHTML = '<p class="countdown__over">The Festival Is Happening Now! 🎶</p>';
      return;
    }
    const days  = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins  = Math.floor((diff % 3600000) / 60000);
    const secs  = Math.floor((diff % 60000) / 1000);

    [['cd-days', days, 3], ['cd-hours', hours], ['cd-mins', mins], ['cd-secs', secs]]
      .forEach(([id, val, len]) => {
        const node = document.getElementById(id);
        if (!node) return;
        const str = pad(val, len);
        if (node.textContent !== str) {
          node.textContent = str;
          node.classList.add('tick');
          setTimeout(() => node.classList.remove('tick'), 300);
        }
      });
  }

  tick();
  setInterval(tick, 1000);
})();
