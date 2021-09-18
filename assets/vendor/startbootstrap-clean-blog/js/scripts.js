/*!
 * Start Bootstrap - Clean Blog v5.1.0 (https://startbootstrap.com/theme/clean-blog)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
 */
(function ($) {
    "use strict"; // Start of use strict

    // Floating label headings for the contact form
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });

    // Show the navbar when the page is scrolled up
    var MQL = 992;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('#mainNav').height(),
            bannerHeight = $('.masthead .container').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function () {
                var currentTop = $(window).scrollTop(),
                    $catalog = $('.side-catalog');

                // Check if user is scrolling up
                if (currentTop < this.previousTop) {
                    // If scrolling up...
                    if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
                        $('#mainNav').addClass('is-visible');
                    } else {
                        $('#mainNav').removeClass('is-visible is-fixed');
                    }
                } else if (currentTop > this.previousTop) {
                    // If scrolling down...
                    $('#mainNav').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
                }
                this.previousTop = currentTop;

                // Adjust the appearance of side-catalog
                if ($(window).width() >= 1024) {
                    $catalog.show()
                    if (currentTop > (bannerHeight + 41)) {
                        $catalog.addClass('fixed')
                    } else {
                        $catalog.removeClass('fixed')
                    }
                }
            });
    }

})(jQuery); // End of use strict