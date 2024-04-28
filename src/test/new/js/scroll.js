!(function ($) {

  'use strict';

  var $communitySlides = $('.community-scroll-slide'),
    $communitySliderWrapper = $('.community-scroll-wrapper'),
    $communityFirstSlide = $communitySlides.first(),
    $womenSlides = $('.women-scroll-slide'),
    $womenSliderWrapper = $('.women-scroll-wrapper'),
    $womenFirstSlide = $womenSlides.first();

  var communitySettings = {},
    communityResizing = false,
    communityScrollController = null,
    communityScrollTimeline = null,
    communityProgress = 0,
    communityScrollScene = null,
    womenSettings = {},
    womenResizing = false,
    womenScrollController = null,
    womenScrollTimeline = null,
    womenProgress = 0,
    womenScrollScene = null;

  function scrollSlider(options) {

    // Default
    communitySettings = $.extend({
      slider: '.community-scroll-slider',
      sliderWrapper: '.community-scroll-wrapper',
      slides: '.community-scroll-slide',
      slideWidth: null,
      slideHeight: null,
    }, options);

    womenSettings = $.extend({
      slider: '.women-scroll-slider',
      sliderWrapper: '.women-scroll-wrapper',
      slides: '.women-scroll-slide',
      slideWidth: null,
      slideHeight: null,
    }, options);

    // Set dimensions
    setCommunityDimensions();
    setwomenDimensions();

    // On resize        
    $(window).on('resize', function () {
      clearTimeout(communityResizing);
      communityResizing = setTimeout(function () {
        setCommunityDimensions();
      }, 250);
      clearTimeout(womenResizing);
      womenResizing = setTimeout(function () {
        setwomenDimensions();
      }, 250);
    });

  }

  function setCommunityDimensions() {

    communitySettings.slideWidth = $communityFirstSlide.width();
    communitySettings.slideHeight = $communityFirstSlide.height();

    // Calculate slider width and height
    communitySettings.sliderWidth = Math.ceil(((communitySettings.slideWidth + 160) * $communitySlides.length));

    communitySettings.sliderHeight = $communityFirstSlide.outerHeight(true);

    // Set slider width and height
    $communitySliderWrapper.width(communitySettings.sliderWidth);
    //$communitySliderWrapper.height(communitySettings.sliderHeight);

    // Set scene
    setCommunityScene();

    //communityResizing = false;
  }

  function setwomenDimensions() {

    womenSettings.slideWidth = $womenFirstSlide.width();
    womenSettings.slideHeight = $womenFirstSlide.height();

    // Calculate slider width and height
    womenSettings.sliderWidth = Math.ceil((womenSettings.slideWidth * $womenSlides.length));
    womenSettings.sliderHeight = $womenFirstSlide.outerHeight(true);

    // Set slider width and height
    $womenSliderWrapper.width(womenSettings.sliderWidth);
    //$womenSliderWrapper.height(womenSettings.sliderHeight);

    // Set scene
    setwomenScene();

    //womenResizing = false;
  }

  function setCommunityScene() {
    var communityXDist = ($communitySliderWrapper.outerWidth(true) - $(window).width()) + $('#comm-left-fixed-card').outerWidth(true) + $('.community-scroll-wrapper .community-scroll-slide').outerWidth(true),
      communityTLParams = { x: -communityXDist, ease: Power2.easeInOut };

    if (communityScrollScene != null && communityScrollTimeline != null) {

      communityProgress = 0;
      communityScrollScene.progress(communityProgress);

      communityScrollTimeline = new TimelineMax();
      communityScrollTimeline.to($communitySliderWrapper, 2, communityTLParams);

      communityScrollScene.setTween(communityScrollTimeline);

      communityScrollScene.refresh();

    } else {
      // Init ScrollMagic controller
      communityScrollController = new ScrollMagic.Controller();

      //Create Tween
      communityScrollTimeline = new TimelineMax();
      communityScrollTimeline.to($communitySliderWrapper, 2, communityTLParams);
      communityScrollTimeline.progress(communityProgress);

      // Create scene to pin and link animation
      communityScrollScene = new ScrollMagic.Scene({
        triggerElement: communitySettings.slider,
        triggerHook: "onLeave",
        duration: communitySettings.sliderWidth
      })
        .setPin(communitySettings.slider)
        .setTween(communityScrollTimeline)
        .addTo(communityScrollController)
        .on('start', function (event) {
          communityScrollTimeline.time(0);
        });
    }
  }

  function setwomenScene() {
    if ($womenSliderWrapper.outerWidth(true) > $(window).width()) {
      var womenXDist = ($womenSliderWrapper.outerWidth(true) - $(window).width()),
        womenTLParams = { x: -womenXDist, ease: Power2.easeInOut };

      if (womenScrollScene != null && womenScrollTimeline != null) {

        womenProgress = 0;
        womenScrollScene.progress(womenProgress);

        womenScrollTimeline = new TimelineMax();
        womenScrollTimeline.to($womenSliderWrapper, 2, womenTLParams);

        womenScrollScene.setTween(womenScrollTimeline);

        womenScrollScene.refresh();

      } else {
        // Init ScrollMagic controller
        womenScrollController = new ScrollMagic.Controller();

        //Create Tween
        womenScrollTimeline = new TimelineMax();
        womenScrollTimeline.to($womenSliderWrapper, 2, womenTLParams);
        womenScrollTimeline.progress(womenProgress);

        // Create scene to pin and link animation
        womenScrollScene = new ScrollMagic.Scene({
          triggerElement: womenSettings.slider,
          triggerHook: "onLeave",
          duration: womenSettings.sliderWidth
        })
          .setPin(womenSettings.slider)
          .setTween(womenScrollTimeline)
          .addTo(womenScrollController)
          .on('start', function (event) {
            womenScrollTimeline.time(0);
          });
      }
    }
  }

  $(document).ready(function () {
    scrollSlider();
  });

})(jQuery);

