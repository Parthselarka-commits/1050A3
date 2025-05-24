(function ($) {
  // Newsletter popup functionality using jQuery
  $(document).ready(function () {
    const $popup = $("#newsletter-popup");
    const $overlay = $("#popup-overlay");
    const $closeButton = $("#close-popup");
    const $subscribeButton = $("#subscribe-button");
    const $newsletterForm = $("#newsletter-form");

    // Show popup when subscribe button is clicked
    $subscribeButton.on("click", function (e) {
      e.preventDefault();
      $popup.fadeIn(300);
      $overlay.fadeIn(300);
    });

    // Close popup when close button is clicked
    $closeButton.on("click", function () {
      $popup.fadeOut(300);
      $overlay.fadeOut(300);
    });

    // Close popup when clicking outside
    $overlay.on("click", function () {
      $popup.fadeOut(300);
      $overlay.fadeOut(300);
    });

    // Form submission handler
    $newsletterForm.on("submit", function (e) {
      e.preventDefault();

      // Get form data
      const name = $newsletterForm.find('input[type="text"]').val();
      const email = $newsletterForm.find('input[type="email"]').val();

      // Check which interests were selected
      const interests = [];
      $newsletterForm.find('input[type="checkbox"]:checked').each(function () {
        interests.push($(this).val());
      });

      // Replace form with thank you message
      $newsletterForm.html(
        "<h3>Thanks for subscribing!</h3><p>Welcome to the Comic Universe community. Check your email for a special welcome discount!</p>"
      );
    });

    // Show popup on page load for first-time visitors
    if (!localStorage.getItem("popupShown")) {
      setTimeout(function () {
        $popup.fadeIn(300);
        $overlay.fadeIn(300);
        localStorage.setItem("popupShown", "true");
      }, 5000);
    }
  });
})(jQuery);
