window.addEventListener('DOMContentLoaded', function() {
    var headings = document.querySelectorAll('.expansion-panel--heading');
  
    headings.forEach(function(heading) {
      heading.addEventListener('click', function() {
        var content = this.nextElementSibling;
        var isExpanded = this.getAttribute('aria-expanded') === 'true';
  
        this.setAttribute('aria-expanded', !isExpanded);
        content.style.height = isExpanded ? '0' : content.scrollHeight + 'px';
      });
    });
  });
  