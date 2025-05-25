(function ($) {
  $(document).ready(function () {
    const $popup = $("#newsletter-popup");
    const $overlay = $("#popup-overlay");
    const $closeButton = $("#close-popup");
    const $subscribeButton = $("#subscribe-button");
    const $newsletterForm = $("#newsletter-form");

    $subscribeButton.on("click", function (e) {
      e.preventDefault();
      $popup.fadeIn(300);
      $overlay.fadeIn(300);
    });

    $closeButton.on("click", function () {
      $popup.fadeOut(300);
      $overlay.fadeOut(300);
    });

    $overlay.on("click", function () {
      $popup.fadeOut(300);
      $overlay.fadeOut(300);
    });

    $newsletterForm.on("submit", function (e) {
      e.preventDefault();

      const name = $newsletterForm.find('input[type="text"]').val();
      const email = $newsletterForm.find('input[type="email"]').val();

      const interests = [];
      $newsletterForm.find('input[type="checkbox"]:checked').each(function () {
        interests.push($(this).val());
      });

      $newsletterForm.html(
        "<h3>Thanks for subscribing!</h3><p>Welcome to the Griffin Comics community. Check your email for a special welcome discount!</p>"
      );
    });

    if (!localStorage.getItem("popupShown")) {
      setTimeout(function () {
        $popup.fadeIn(300);
        $overlay.fadeIn(300);
        localStorage.setItem("popupShown", "true");
      }, 5000);
    }
  });
})(jQuery);
