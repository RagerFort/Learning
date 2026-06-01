document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Activate clicked button
      this.classList.add('active');

      // Show matching content
      const selectedTab = this.getAttribute('data-tab');
      document.getElementById(`content-${selectedTab}`).classList.add('active');
    });
  });
});