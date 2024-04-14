

$(function () {
    // Load Header & Footer files Start
    $("#header").load('header.html', function () {

        var url = window.location.pathname;
        var arr = url.split('/');
        var pagename = arr[arr.length - 1];

        // var hashUrl = window.location.href;
        // var hashArr = hashUrl.split('#');
        // var para = hashArr[hashArr.length - 1];

        if (pagename === "" | pagename === "index" || pagename === "index.html") {
            $('.mega-menu a.sp-w').click(function () {
                window.location = "index.html#womenininsurance";
                location.reload();
            });
            $('.mega-menu a.sp-l').click(function () {
                window.location = "index.html#lifeathdfclife";
                location.reload();
            });
            $('.mega-menu a.sp-s').click(function () {
                window.location = "index.html#shapingcareers";
                location.reload();
            });
        }

        if (pagename === "" || pagename === "index" || pagename === "index.html" || pagename === "graduates" || pagename === "graduates.html" || pagename === "engineering_graduates" || pagename === "engineering-graduates.html" || pagename === "smart_achievers" || pagename === "smart-achievers.html" || pagename === "pgpli" || pagename === "pgpli.html" || pagename === "jigyasa" || pagename === "jigyasa.html" || pagename === "sales" || pagename === "sales.html" || pagename === "support" || pagename === "support.html" || pagename === "operation" || pagename === "operation.html" || pagename === "executive_trainee_program" || pagename === "executive-trainee-program.html" || pagename === "technology" || pagename === "technology.html" || pagename === "ui_kit" || pagename === "ui_kit.html") {
            $('#header').addClass('inner-two-header');
        }
        activeScrollToTopBtn();
        // header-search
        $('.header-search').click(function () {
            $('.common-overlay').addClass('active');
            $(this).addClass('active');
        });

        $('#hdfcSearch').blur(function (e) {
            e.stopPropagation();
            $('.header-search').removeClass('active');
        });

        $('.search-ico').click(function (e) {
            e.stopPropagation();
            $('.common-overlay').toggleClass('active');
            $('.header-search').toggleClass('active');
        });
        $('.common-overlay').click(function () {
            $('.select-menu, .header-search, .common-overlay').removeClass('active');
        });

        $(window).scroll(function () {
            activeScrollToTopBtn();
        });

        $(".scroll-to-top").click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        });

        $('.ham-wrap').click(function () {
            $('.hamburger, .mega-menu').toggleClass('active');
            $('header').toggleClass('mega-menu-opened');
        });

        $(document).keyup(function (e) {
            if (e.key === "Escape") { // escape key maps to keycode `27`
                $('.hamburger, .mega-menu').removeClass('active');
            }
        });

        if (window.matchMedia("(min-width: 992px)").matches) {
            // Mega menu start
            $('.nav-list li').mouseover(function () {
                $(this).siblings().addClass('not-active');
            });
            $('.nav-list li').mouseleave(function () {
                $(this).siblings().removeClass('not-active');
            });
            // Mega menu end
        }
        if (window.matchMedia("(max-width: 991px)").matches) {
            // Mega menu start
            $('.nav-list li').click(function () {
                $(this).siblings().removeClass('active');
                $(this).toggleClass('active');
                if ($(this).hasClass('active')) {
                    $(this).siblings().addClass('not-active');
                }
                else {
                    $('.nav-list li').removeClass('not-active');
                }
            });
            // Mega menu end
        }
    });

    $("#innerheader").load('innerheader.html', function (e) {
        activeScrollToTopBtn();
        // header-search
        $('.header-search').click(function () {
            $('.common-overlay').addClass('active');
            $(this).addClass('active');
        });
        var url = window.location.pathname;
        var arr = url.split('/');
        var pagename = arr[arr.length - 1];
        if (pagename === "csr" || pagename === "csr.html") {
            $('.inner-banner figure img').attr('src', './img/csr/csr_banner.jpg');
        }
        if (pagename === "ourstory" || pagename === "our-story.html") {
            $('.inner-banner figure img').attr('src', './img/our_story_banner.jpg');
        }
        if (pagename === "values" || pagename === "values.html") {
            $('.inner-banner figure img').attr('src', './img/values_banner.jpg');
        }
        if (pagename === "awards" || pagename === "awards.html" || pagename === "ourstory" || pagename === "our-story.html" || pagename === "csr" || pagename === "csr.html" || pagename === "values" || pagename === "values.html") {
            // $('#innerheader').addClass('awards-inner-header');
            $('#innerheader').addClass('inner-two-header');
        }

        $('#hdfcSearch').blur(function (e) {
            e.stopPropagation();
            $('.header-search').removeClass('active');
        });

        $('.search-ico').click(function (e) {
            e.stopPropagation();
            $('.common-overlay').toggleClass('active');
            $('.header-search').toggleClass('active');
        });
        $('.common-overlay').click(function () {
            $('.select-menu, .header-search, .common-overlay').removeClass('active');
        });

        $(window).scroll(function () {
            activeScrollToTopBtn();
        });

        $(".scroll-to-top").click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        });

        $('.ham-wrap').click(function () {
            $('.hamburger, .mega-menu').toggleClass('active');
            $('header').toggleClass('mega-menu-opened');
        });

        $(document).keyup(function (e) {
            if (e.key === "Escape") { // escape key maps to keycode `27`
                $('.hamburger, .mega-menu').removeClass('active');
            }
        });
        if (window.matchMedia("(min-width: 992px)").matches) {
            // Mega menu start
            $('.nav-list li').mouseover(function () {
                $(this).siblings().addClass('not-active');
            });
            $('.nav-list li').mouseleave(function () {
                $(this).siblings().removeClass('not-active');
            });
            // Mega menu end
        }
        if (window.matchMedia("(max-width: 991px)").matches) {
            // Mega menu start
            $('.nav-list li').click(function () {
                $(this).siblings().removeClass('active');
                $(this).toggleClass('active');
                if ($(this).hasClass('active')) {
                    $(this).siblings().addClass('not-active');
                }
                else {
                    $('.nav-list li').removeClass('not-active');
                }
            });
            // Mega menu end
        }
    });

    $("#footer").load('footer.html', function () {
        var url = window.location.pathname;
        var arr = url.split('/');
        var pagename = arr[arr.length - 1];
        if (pagename === "values" || pagename === "values.html" || pagename === "awards" || pagename === "awards.html" || pagename === "csr" || pagename === "csr.html" || pagename === "jigyasa" || pagename === "jigyasa.html" || pagename === "smart_achievers" || pagename === "smart-achievers.html" || pagename === "smart_achievers_v2" || pagename === "smart_achievers_v2.html") {
            $('#footer').addClass('values-footer');
        }
        if (pagename === "pgpli" || pagename === "pgpli.html") {
            $('#footer').addClass('values-footer pgpli-footer');
            $('.footer-first-card-heading').addClass('text-center');
            $('.footer-first-card-sub-text').html('Whether you’re a student looking for an internship or recent graduate, we have many opportunities for you. Get in touch with us.');
            $('.footer-first-card-sub-text').addClass('text-center pgpli-footer-first-card-sub-text');
            $('.footer-first-card-btn a').text('ENROL NOW');
            $('.footer-second-card-sub-text').addClass('d-none');
            $('.footer-second-card-sub-text-pgpli').removeClass('d-none');
            $('.footer-second-card-sub-text-pgpli').addClass('show-display');
        }
        if (pagename === "engineering_graduates" || pagename === "engineering-graduates.html") {
            $('#footer').addClass('engg-grad-footer');
            $('.footer-first-card-heading').addClass('text-center');
            // $('.footer-first-card-heading').html('Jump-Start<br/> Your IT Career.');
            // $('.footer-first-card-btn a').text('ENROL NOW');
            $('.footer-second-card-btn a').text('UPLOAD');
            // $('.footer-first-card-sub-text').addClass('d-none');
            $('.footer-second-card-heading').addClass('inner-foot-sec-head');
            $('.footer-second-card-heading').html('Wish to upload your CV?');
            $('.footer-second-card-sub-text').html('Submit your CV here and we’ll get in touch<br/> with you for future jobs.');
            $('.footer-second-card-sub-text').addClass('sa-footer-second-card-sub-text');
            $('.footer-second-card-btn a').attr("href", "http://careers.hdfclife.com/submit-profile/");
        }
        if (pagename === "jigyasa" || pagename === "jigyasa.html") {
            $('.footer-first-card-heading').addClass('text-center jigyasa-footer-first-card-heading');
            // $('.footer-first-card-heading').html('Take the first step<br/> in your career.');
            $('.footer-first-card-btn a').text('APPLY NOW');
            $('.footer-second-card-sub-text').html('Get your answers for the most frequently <br/> asked questions.');
            $('.footer-second-card-sub-text').addClass('jigyasa-footer-second-card-sub-text');
            // $('.footer-first-card-sub-text').addClass('d-none');
            $('.footer-second-card-heading').addClass('inner-foot-sec-head');
        }

        if (pagename === "smart_achievers" || pagename === "smart-achievers.html" || pagename === "smart_achievers_v2" || pagename === "smart_achievers_v2.html") {
            $('.footer-first-card-btn a').text('ENROL NOW');
            $('.footer-first-card-sub-text').html('Whether you’re a student looking for an internship or recent graduate, we have many opportunities for you. Get in touch with us.');
            $('.footer-second-card-sub-text').html('Get your answers for the most frequently <br/> asked questions.');
            $('.footer-first-card-sub-text').addClass('text-center pgpli-footer-first-card-sub-text');
            $('.footer-second-card-sub-text').addClass('text-center sa-footer-second-card-sub-text');
            $('.footer-first-card-btn a').attr("target", "_blank");
        }

        // if (pagename === "financial_consultant" || pagename === "financial-consultant.html") {
        //     $('.footer-first-card-heading').addClass('text-center jigyasa-footer-first-card-heading');
        //     $('.footer-first-card-heading').html('Interested in<br/> partnering with us?');
        //     $('.footer-first-card-btn a').text('APPLY NOW');
        //     $('.footer-first-card-btn a').attr("href", "https://www.hdfclife.com/insurance-careers/become-a-financial-consultant");
        //     $('.footer-first-card-btn a').attr("target", "_blank");
        //     $('.footer-first-card-sub-text').addClass('d-none');
        //     $('.footer-second-card-heading').addClass('inner-foot-sec-head');
        // }
        if (pagename === "operation" || pagename === "operation.html" || pagename === "support" || pagename === "support.html") {
            $('.footer-second-card-heading').addClass('inner-foot-sec-head');
            $('.footer-first-card-btn a').attr("href", "http://careers.hdfclife.com/jobs/");
        }
        if (pagename === "sales" || pagename === "sales.html") {
            $('.footer-first-card-btn a').text('APPLY NOW');
            $('.footer-second-card-sub-text').addClass('d-none');
            $('.footer-second-card-sub-text-grad').removeClass('d-none');
            $('.footer-second-card-sub-text-grad').addClass('show-display');
            $('.footer-first-card-btn a').attr("href", "http://careers.hdfclife.com/jobs/");
            $('.footer-second-card-sub-text').addClass('dull-white');
            $('.footer-second-card-sub-text').html('Take a look at our frequently asked questions and how<br/> we manage your personal information');
        }
        if (pagename === "graduates" || pagename === "graduates.html") {
            $('.footer-first-card-btn a').text('APPLY NOW');
            $('.footer-first-card-sub-text').addClass('dull-white text-center grad-txt');
            $('.footer-second-card-sub-text').addClass('d-none');
            $('.footer-second-card-sub-text-grad').removeClass('d-none');
            $('.footer-second-card-sub-text-grad').addClass('show-display');
            $('.footer-first-card-btn a').attr("href", "http://careers.hdfclife.com/jobs/");
        }
        if (pagename === "values" || pagename === "values.html" || pagename === "ourstory" || pagename === "our-story.html" || pagename === "csr" || pagename === "csr.html" || pagename === "awards" || pagename === "awards.html") {
            $('.footer-first-card-btn a').text('APPLY NOW');
            $('.footer-first-card-sub-text').addClass('dull-white text-center');
            $('.footer-second-card-sub-text').addClass('d-none');
            $('.footer-second-card-sub-text-grad').removeClass('d-none');
            $('.footer-second-card-sub-text-grad').addClass('show-display');
        }
        if (pagename === "executive_trainee_program" || pagename === "executive-trainee-program.html") {
            $('.footer-first-card-btn a').text('APPLY NOW');
            $('.footer-second-card-btn a').text('UPLOAD');
            // $('.footer-first-card-heading').html('Jumpstart your career.');
            $('.footer-first-card-heading').addClass('text-center jigyasa-footer-first-card-heading');
            // $('.footer-first-card-sub-text').addClass('d-none');
            // $('.footer-first-card-sub-text').html('Explore all opportunities and find your fit.');
            $('.footer-second-card-heading').addClass('inner-foot-sec-head');
            $('.footer-second-card-heading').html('Wish to upload your CV?');
            $('.footer-second-card-sub-text').html('Submit your CV here and we’ll get in touch<br/> with you for future jobs.');
            $('.footer-second-card-sub-text').addClass('sa-footer-second-card-sub-text');
            $('.footer-second-card-btn a').attr("href", "http://careers.hdfclife.com/submit-profile/");
            $('.footer-second-card-btn a').attr("target", "_blank");
        }

        if (pagename === "ourstory" || pagename === "our-story.html" || pagename === "csr" || pagename === "csr.html" || pagename === "awards" || pagename === "awards.html" || pagename === "" || pagename === "index" || pagename === "index.html" || pagename === "professionals" || pagename === "professionals.html" || pagename === "graduates" || pagename === "graduates.html" || pagename === "sales" || pagename === "sales.html" || pagename === "support" || pagename === "support.html" || pagename === "operation" || pagename === "operation.html" || pagename === "technology" || pagename === "technology.html" || pagename === "values" || pagename === "values.html") {
            $('.footer-first-card-btn a').text('APPLY NOW');
            $('.footer-second-card-btn a').text('UPLOAD');
            $('.footer-second-card-heading').html('Wish to upload your CV?');
            $('.footer-second-card-sub-text').html('Submit your CV here and we’ll get in touch<br/> with you for future jobs.');
            $('.footer-first-card-sub-text, .footer-second-card-sub-text').addClass('sa-footer-second-card-sub-text');
            $('.footer-second-card-btn a').attr("href", "http://careers.hdfclife.com/submit-profile/");
            $('.footer-second-card-btn a').attr("target", "_blank");
        }

        if (pagename === "pgpli" || pagename === "pgpli.html" || pagename === "smart_achievers" || pagename === "smart-achievers.html" || pagename === "jigyasa" || pagename === "jigyasa.html" || pagename === "smart_achievers_v2" || pagename === "smart_achievers_v2.html") {
            $('.footer-second-card-btn').click(function () {
                $('html, body').animate({
                    scrollTop: $('#read-faq').offset().top
                }, 1000);
            });
        }
        // Apply now 
        if (pagename === "" || pagename === "index" || pagename === "index.html" || pagename === "values" || pagename === "values.html") {
            $('.footer-first-card-btn a').attr("href", "http://careers.hdfclife.com/jobs/");
        }

        if (pagename === "smart_achievers" || pagename === "smart-achievers.html" || pagename === "smart_achievers_v2" || pagename === "smart_achievers_v2.html") {
            $('.footer-first-card-btn a').attr("href", "https://www.hdfclife.com/insurance-careers/registration?source_of_lead=hdfc_life_career_website&program_name=Smart%20Achievers");
            $('.footer-first-card-btn a').attr("target", "_blank");
        }

        if (pagename === "pgpli" || pagename === "pgpli.html") {
            $('.footer-first-card-btn a').attr("href", "https://www.hdfclife.com/insurance-careers/registration?source_of_lead=hdfc_life_career_website&program_name=Post%20Graduate%20Program%20in%20Life%20Insurance");
            $('.footer-first-card-btn a').attr("target", "_blank");
        }

        if (pagename === "ourstory" || pagename === "our-story.html" || pagename === "awards" || pagename === "awards.html" || pagename === "csr" || pagename === "csr.html" || pagename === "sales" || pagename === "sales.html" || pagename === "support" || pagename === "support.html" || pagename === "operation" || pagename === "operation.html" || pagename === "technology" || pagename === "technology.html") {
            $('.footer-first-card-btn a').attr("href", "http://careers.hdfclife.com/jobs/");
        }


        // For now
        if (pagename === "engineering_graduates" || pagename === "engineering-graduates.html" || pagename === "jigyasa" || pagename === "jigyasa.html" || pagename === "executive_trainee_program" || pagename === "executive-trainee-program.html") {
            // $('.footer-first-card-btn').addClass('d-none');
            $('.footer-first-card-heading').html('Jump-start your career.');
            $('.footer-first-card-heading').addClass('text-center jigyasa-footer-first-card-heading');
            $('.footer-first-card-sub-text').html('Explore all opportunities and find your fit.');
            $('.footer-first-card-btn a').attr("href", "http://careers.hdfclife.com/jobs/");
            $('.footer-first-card-btn a').text('APPLY NOW');
            $('.footer-first-card-btn a').attr("target", "_blank");
        }

        $('.su-popup-click').click(function () {
            $('.signup-popup, .signup-popup-overlay').addClass('active');
            $('body').addClass('overflow-hidden');
        });

        $('.signup-popup-overlay').click(function () {
            $('.signup-popup, .signup-popup-overlay').removeClass('active');
            $('body').removeClass('overflow-hidden');
        });

        $('.signup-popup .closeVidBtn').click(function () {
            $('.signup-popup, .signup-popup-overlay').removeClass('active');
            $('body').removeClass('overflow-hidden');
        });

        $('.signup-popup select').click(function () {
            $(this).toggleClass('active');
        });

        $('.signup-popup select').blur(function () {
            $(this).removeClass('active');
        });
    });
    // Load Header & Footer files End

    // Animating Elements on Scroll Start
    var $animation_elements = $('.animation-element');
    var $window = $(window);
    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) && (element_top_position <= (window_bottom_position - 150))) {
                $element.addClass('in-view');
            }
        });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    // Animating Elements on Scroll End

    $('#sel, #mbl-home-job-sel').click(function () {
        $('.select-menu, .common-overlay').toggleClass('active');
        $('.view-list').toggleClass('z-1');
        $('.role-panel').removeClass('z-2');
    });

    $('.job-card, .job-card-row').click(function () {
        if (!$(this).hasClass('job-count')) {
            window.location = "http://careers.hdfclife.com/job-listings-Manager-Bancassurance-Business-Analysis-HDFC-LIFE-INSURANCE-COMPANY-LIMITED-Mumbai-Mumbai-Suburbs-Navi-Mumbai-3-to-8-years-030420005592?xp=1";
        }
    });

    $('.job-count').click(function (e) {
        $(".lst-explore-jobs").trigger('click');
    });



    $('.common-overlay,.select-menu li').click(function () {
        $('.select-menu, .header-search, .common-overlay').removeClass('active');
        $('.view-list').removeClass('z-1');
        $('.role-panel').addClass('z-2');
    });

    // function activeScrollToTopBtn() {
    //     if ($(window).scrollTop() > 100) {
    //         $('.scroll-to-top, .floating-btn').addClass('active');
    //     }
    //     else {
    //         $('.scroll-to-top, .floating-btn').removeClass('active');
    //     }
    // }

    function activeScrollToTopBtn() {
        if ($(window).scrollTop() > 100) {
            $('.scroll-to-top').addClass('active');
        }
        else {
            $('.scroll-to-top').removeClass('active');
        }

        if ($(window).scrollTop() > $('.inner-large-banner').height()) {
            $('.floating-btn').addClass('active');
        }
        else {
            $('.floating-btn').removeClass('active');
        }
    }

    // Tab Scroll Top
    $(window).scroll(function (e) {
        if ($(this).scrollTop() > 720) {
            $('.banner-tab').addClass('tab-top');
        }
        if ($(this).scrollTop() < 720) {
            $('.banner-tab').removeClass('tab-top');
        }
    });



    if (window.matchMedia("(min-width: 991px)").matches) {

        // $('.job-search-form').click(function () {
        //     $(this).addClass('active');
        //     $('.job-overlay').addClass('active');
        // });

        $('.job-overlay').click(function () {
            $('.job-search-form').removeClass('active');
            $('.job-overlay').removeClass('active');
        });

        $('.job-search-form .closeBtn').click(function (e) {
            e.stopPropagation();
            $('.job-overlay').removeClass('active');
            $('.job-search-form').toggleClass('active');
            $('.job-search-form .jobcol button').text('search');
        });

        $('.select-drop select').blur(function () {
            $(this).parent().removeClass('active');
        });
    }

    // Dropdown
    $('.select-drop select, .select-drop .drop-input').click(function () {
        $(this).parent().toggleClass('active');
        $(".select-drop .suggues").toggleClass('active');
        $(".common-overlay").addClass('active');
    });

    $('.select-drop select option, .select-drop .suggues li').click(function () {
        var sugList = $(this).text();
        $(this).parent().siblings('.drop-input').text(sugList).css("color", "#58595b");
        $(this).parent().removeClass('active');
        $(".select-drop").removeClass('active');
        $(".common-overlay").removeClass('active');
    });

    $('.common-overlay').click(function () {
        $(".select-drop .suggues").removeClass('active');
        $(".select-drop").removeClass('active');
        $(this).removeClass('active');
    });

    // JobFilter
    $(".filter-list a").click(function () {
        $(this).toggleClass('active');
    });

    // Video Play Script Start
    $('#vidBtn').click(function () {
        $('.video-overlay, #video-popup1').fadeIn(300);
        $('.hdfc-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', window.location.href);
    });

    $('#vidBtnHr1').click(function () {
        $('.video-overlay, #video-popup2').fadeIn(300);
        $('.welcome')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', window.location.href);
    });

    $('#vidBtnW1').click(function () {
        $('.video-overlay, #video-popup3').fadeIn(300);
        $('.women-insure')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', window.location.href);
    });

    $('.vidBtnsm1').click(function () {
        $('.video-overlay, #video-popsm1').fadeIn(300);
        $('.hdfc-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', window.location.href);
    });

    $('.vidBtnsm2').click(function () {
        $('.video-overlay, #video-popsm2').fadeIn(300);
        $('.welcome')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', window.location.href);
    });

    $('.vidBtnsm3').click(function () {
        $('.video-overlay, #video-popsm3').fadeIn(300);
        $('.women-insure')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', window.location.href);
    });

    $('.vidBtnpg1').click(function () {
        $('.video-overlay, #video-popupg1').fadeIn(300);
        $('.hdfc-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', window.location.href);
    });

    $('.vidBtnpg2').click(function () {
        $('.video-overlay, #video-popupg2').fadeIn(300);
        $('.welcome')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', window.location.href);
    });

    $('.vidBtnpg3').click(function () {
        $('.video-overlay, #video-popupg3').fadeIn(300);
        $('.women-insure')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', window.location.href);
    });


    $('.closeVidBtn').click(function () {
        $('.video-overlay,  #video-popup1, #video-popup2, #video-popup3, #video-popsm1, #video-popsm2, #video-popsm3, #video-popupg1, #video-popupg2, #video-popupg3, #video-popupfc1, #video-popupfc2, #video-popupfc3  ').fadeOut(300);
        if ($('.hdfc-video').length) {
            $('.hdfc-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', window.location.href);
        }
        if ($('.welcome').length) {
            $('.welcome')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', window.location.href);
        }
        if ($('.women-insure').length) {
            $('.women-insure')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', window.location.href);
        }
    });


    // Video Play Script End

    $('.closeBtn').click(function () {
        $('.innerpage-overlay, .innerpage-popup').removeClass('active');
        $('body').removeClass('overflow-hidden');
    });

    // Banner Tab script
    var url = window.location.pathname;
    var arr = url.split('/');
    var pagename = arr[arr.length - 1];
    $('.banner-tab .tab-panel').click(function (e) {
        $('.banner-tab .tab-panel').removeClass('active');
        $(this).addClass('active');
        if ($.trim($(this).text()).toLowerCase() !== "professionals") {
            if ($.trim($(this).text()).toLowerCase() === "grow with us") {
                if (pagename === "" || pagename === "index" || pagename === "index.html") {
                    $('html, body').animate({
                        scrollTop: $('.tab-wrap').offset().top
                    }, 200);
                }
                else {
                    var href = $(this).attr('data-href');
                    $('html, body').animate({
                        scrollTop: $('.banner-tab').offset().top
                    }, 500);
                    sessionStorage.setItem("page", "home");
                    setTimeout(function () {
                        $('#preloader').removeClass('loaded');
                        $('#preloader').removeClass('loading');
                        $('#preloader').addClass('faded');
                    }, 0);
                    setTimeout(function () {
                        $('#preloader').removeClass('faded');
                        $('#preloader').addClass('loading');
                    }, 20);
                    setTimeout(function () {
                        window.location.href = href;
                    }, 750);
                }
            }
            else {
                var href = $(this).attr('data-href');
                $('html, body').animate({
                    scrollTop: $('.banner-tab').offset().top
                }, 500);
                setTimeout(function () {
                    $('#preloader').removeClass('loaded');
                    $('#preloader').removeClass('loading');
                    $('#preloader').addClass('faded');
                }, 0);
                setTimeout(function () {
                    $('#preloader').removeClass('faded');
                    $('#preloader').addClass('loading');
                }, 20);
                setTimeout(function () {
                    window.location.href = href;
                }, 750);
            }
        }
        else {
            if (pagename === "" || pagename === "index" || pagename === "index.html") {
                $('.banner-tab .tab-panel').removeClass('active');
                $(this).addClass('active');
                $('html, body').animate({
                    scrollTop: $('#prof-home').offset().top - 50
                }, 500, function () {
                    var lastScrollTop = 0;
                    $(window).scroll(function (event) {
                        var st = $(this).scrollTop();
                        if (st > lastScrollTop) {
                            // downscroll code
                            if ($(window).scrollTop() > ($('#prof-home').offset().top + $('#prof-home').outerHeight(true))) {
                                $('.banner-tab .tab-panel').removeClass('active');
                                if (window.matchMedia("(max-width: 991px)").matches)
                                    $('.banner-tab .tab-panel:nth-child(2)').addClass('active');
                                else
                                    $('.banner-tab .tab-panel:nth-child(1)').addClass('active');
                            }
                        } else {
                            // upscroll code
                            if ($(window).scrollTop() < ($('#prof-home').offset().top - 100)) {
                                $('.banner-tab .tab-panel').removeClass('active');
                                if (window.matchMedia("(max-width: 991px)").matches)
                                    $('.banner-tab .tab-panel:nth-child(2)').addClass('active');
                                else
                                    $('.banner-tab .tab-panel:nth-child(1)').addClass('active');
                            }
                        }
                        lastScrollTop = st;
                    });
                });

            }
            else {
                var href = $(this).attr('data-href');
                $('html, body').animate({
                    scrollTop: $('.banner-tab').offset().top
                }, 500);
                sessionStorage.setItem("page", "prof");
                setTimeout(function () {
                    $('#preloader').removeClass('loaded');
                    $('#preloader').removeClass('loading');
                    $('#preloader').addClass('faded');
                }, 0);
                setTimeout(function () {
                    $('#preloader').removeClass('faded');
                    $('#preloader').addClass('loading');
                }, 20);
                setTimeout(function () {
                    window.location.href = "index.html";
                }, 750);
                setTimeout(function () {
                    $('html, body').animate({
                        scrollTop: $('#prof-home').offset().top - 50
                    }, 0);
                    sessionStorage.setItem("page", "");
                }, 850);
            }
        }
    });

    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $('.banner').addClass('safari-mobile');
        $('#mbl-home-job-sel').addClass('safari');
    }

    if (window.matchMedia("(max-width: 991px)").matches) {
        $('.job-card').click(function () {
            $('.job-card').removeClass('clicked');
            $(this).addClass('clicked');
        });
    }

    //View-grid
    $(".grd").click(function () {
        $(".view-list li").removeClass('active');
        $(this).addClass('active');
        $(".card-view").removeClass('d-none');
        $('.role li.active').trigger('click');
        $(".card-view").addClass('d-block');
        $(".job-pagination").hide();
    });
    $(".lst-explore-jobs").click(function () {
        $(".view-list li").removeClass('active');
        $(this).addClass('active');
        $(".card-view").addClass('d-none');
        $(".card-view").removeClass('d-block');
        $(".job-pagination").show();
    });
    // Data Attr
    $("table tr.job-card-row").addClass('selected');
    $('.jc-control .role-tab').click(function () {
        if ($(this).attr('id') === "all") {
            $("table tr.job-card-row").addClass('selected');
        }
        else {
            $("table tr.job-card-row").removeClass('selected');
            $("table").find("[data-row='" + $(this).attr('id') + "']").addClass('selected');
        }
    });
});

$(window).on("orientationchange", function () {
    setTimeout(function () {
        // location.reload();
    }, 200);
});

if (window.matchMedia("(max-width: 991px)").matches) {
    $(window).on("orientationchange", function () {
        if (screen.orientation.angle === 0 || screen.orientation.angle === 180) {
            $("meta[name='viewport']").attr("content", "width=device-width, initial-scale=1, maximum-scale=1.0");
            // document.addEventListener('touchmove', function (event) {
            //     event = event.originalEvent || event;
            //     if (event.scale !== undefined && event.scale !== 1) {
            //         event.preventDefault();
            //     }
            // }, false);
        }
        if (screen.orientation.angle === 90 || screen.orientation.angle === 270) {
            $("meta[name='viewport']").attr("content", "width=device-width, initial-scale=1");
        }
    });
}

// Preloader Start
$(window).on('load', function () {
    $('#preloader').addClass('loaded');
    $('#preloader').removeClass('loading');
});
window.onbeforeunload = function () {
    $('#preloader').addClass('loading');
    $('#preloader').removeClass('loaded');
    // window.scrollTo(0, 0);
}
// Preloader End


$(window).on('load', function () {
    if((window.location.pathname == '/hdfc-careers/' || window.location.pathname == '/hdfc-careers/index.html') && localStorage && !localStorage.getItem('isdisclaimershown')){
        $(".custom-model-main").addClass('model-open'); 
        localStorage.setItem('isdisclaimershown', true);
    }
    $(".close-btn, .bg-overlay").on('click',function(){
        $(".custom-model-main").removeClass('model-open');
    });
})