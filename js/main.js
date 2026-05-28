(function () {
  // ── Dynamic article date (2 days ago) ──
  var dateEl = document.getElementById('article-date');
  if (dateEl) {
    var d = new Date();
    d.setDate(d.getDate() - 2);
    var months = [
      'January','February','March','April','May','June',
      'July','August','September','October','November','December'
    ];
    var h = d.getHours() % 12 || 12;
    var ampm = d.getHours() < 12 ? 'am' : 'pm';
    var min = String(d.getMinutes()).padStart(2, '0');
    dateEl.textContent =
      months[d.getMonth()] + ' ' +
      String(d.getDate()).padStart(2, '0') + ', ' +
      d.getFullYear() + ' at ' +
      h + ':' + min + ' ' + ampm + ' EDT';
  }

  // ── Sticky bottom masthead: show after scrolling 30% ──
  var masthead = document.getElementById('masthead');
  if (masthead) {
    function onScroll() {
      var scrolled = window.scrollY;
      var pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (pageHeight > 0 && scrolled / pageHeight > 0.3) {
        masthead.classList.add('visible');
      } else {
        masthead.classList.remove('visible');
      }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
