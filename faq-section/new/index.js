document.addEventListener('DOMContentLoaded', function() {
  var headings = document.querySelectorAll('.expansion-panel--heading');

  headings.forEach(function(heading) {
    heading.addEventListener('click', function(event) {
      event.preventDefault();

      var content = this.nextElementSibling;
      var isExpanded = this.getAttribute('aria-expanded') === 'true';
      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      if (isExpanded) {
        content.style.maxHeight = '0';
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }

      setTimeout(function() {
        window.scrollTo(0, scrollPosition);
      }, 300);

      this.setAttribute('aria-expanded', !isExpanded);
    });
  });
});
