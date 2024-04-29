// Card section script start
var cards = document.querySelectorAll(".main-job-card-list");

function openCity(event, cityName) {

    var index = Array.from(event.target.parentNode.childNodes).indexOf(
        event.target
    );
    console.log("Clicked index:", index);
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var element = document.getElementById(cityName);
    element.style.display = "block";
}

cards.forEach(function (card, index) {
    card.addEventListener("click", function () {
        // Remove 'active' class from all elements
        cards.forEach(function (card) {
            card.classList.remove("activecard");
        });
        // Add 'active' class to the clicked element
        this.classList.add("activecard");
    });
});

document.querySelectorAll(".accordion-item").forEach((item) => {
    item
        .querySelector(".accordion-item-header")
        .addEventListener("click", () => {
            item.classList.toggle("open");
        });
});

function openCitymobile() {
    var selectlist = document.querySelector(".main-job-card");
    selectlist.style.display = "none";

    var jdetails = document.querySelector(".applyjd-discription-mobile")
    jdetails.style.display = "block";
}




    // card details api start
    $.ajax({
      url: '/src/test/new/json/component.json',
        method: 'GET',
        success: function (response) {

            // $(".job-card").append(`<div class="left-list-border"></div>`);
            var cardCount = 0;
            var groupCount = 1;
            var groupSize = 3;

            for (var index = 0; index < response.length; index++) {
                // Increment card count with each iteration
                cardCount++;

                if (index < 8) {
                    // Check if it's the start of a new group of three cards
                    if (cardCount % groupSize === 1) {
                        $(".job-card.home-card").append(`<div  class="left-list-border left-list-border-${groupCount}"></div>`);
                    }

                    // Append job card HTML
                    $(`.left-list-border-${groupCount}`).append(`<div data-id="${response[index].id}" class="main-job-card-list" onclick="openCity(event,'chennai')">
                            <div class="left-list-border-line" ></div>
                            <div class="main-job-card-list-sub">
                                <p class="job-card-title-list">Function ${response[index].id}</p>
                                <h3 class="job-card-sub-title">
                                    Associate Manager- Branch Audit
                                </h3>
                                <div class="sub-job-card">
                                    <div class="job-location">
                                        <div class="job-location-main">
                                            <img src="./img/career-home/location.png" alt="">
                                            <p>Mumbai</p>
                                        </div>
                                        <div class="job-location-main">
                                            <img src="./img/career-home/calendar.png" alt="">
                                            <p>10 - 15 Years</p>
                                        </div>
                                    </div>
                                    <div class="job-sal">
                                        <img src="./img/career-home/money.png" alt="">
                                        <p>₹ Not Disclosed</p>
                                    </div>
                                    <p class="job-posted">Posted 3 weeks ago</p>
                                </div>
                            </div>
                        </div>`);

                    // If the current card count equals the group size, reset card count and increment group count
                    if (cardCount === groupSize) {
                        cardCount = 0;
                        groupCount++;
                    }
                } else if (index === 8) {
                  $(".left-list-border-3").append(`<div class="main-job-card-list counted-wrap"><h1>+ 153<span>Jobs</span></h1><div><a href="#" class="exp-btn">Explore All Jobs<img src="/src/test/new/img/icon/scroll_to_top_arrow.svg" /></a></div></div>`);
                }
            }


            function detailresult(tarId) {
                response.map((ele, index) => {
                    if (tarId == response[index].id && window.innerWidth > 768 && index < 8) {
                        $(".job-discripattionaccordian").append(`<div class="w3-container"><h3 class="detail-head">${response[index].title}</h3>
                                        <div class="listof-cards">
                    <div class="jd-main-title">
                      <div class="list-titles">
                        <h4>
                          <b>Department: IT</b>
                        </h4>
                        <p>Technology Transformation</p>
                      </div>
                    </div>
                    <div class="jd-main-title">
                      <div class="list-titles">
                        <h4>
                          <b>Reporting to</b>
                        </h4>
                        <p>SVP- Technology Transformation</p>
                      </div>
                    </div>
                    <div class="jd-main-title">
                      <div class="list-titles">
                        <h4>
                          <b>Department: IT</b>
                        </h4>
                        <p>Technology Transformation</p>
                      </div>
                    </div>
                    <div class="jd-main-title">
                      <div class="list-titles">
                        <h4>
                          <b>Department: IT</b>
                        </h4>
                        <p>Technology Transformation</p>
                      </div>
                    </div>

                    <div class="jd-main-title">
                      <div class="list-titles">
                        <h4>
                          <b>Designation</b>
                        </h4>
                        <p>Technical Solution Architect</p>
                      </div>
                    </div>
                    <div class="jd-main-title">
                      <div class="list-titles">
                        <h4>
                          <b>Grade</b>
                        </h4>
                        <p>CM/AVP</p>
                      </div>
                    </div>
                    <div class="jd-main-title">
                      <div class="list-titles">
                        <h4>
                          <b>Location</b>
                        </h4>
                        <p>Mumbai</p>
                      </div>
                    </div>
                    <div class="jd-main-title">
                      <div class="list-titles">
                        <h4>
                          <b>IC/Team Manager role</b>
                        </h4>
                        <p>N/Z</p>
                      </div>
                    </div>
                    <div class="jd-main-title">
                      <div class="list-titles">
                        <h4>
                          <b>Education</b>
                        </h4>
                        <p>UG:&nbsp;Any Graduate PG:&nbsp;Any Postgraduate</p>
                      </div>
                    </div>
                    
                  </div>
                  <div class="question-jd">
                    <h3>What are we looking for part 3?</h3>
                    <p>
                      We are seeking an experienced hardcore Software Solution
                      Architect to join our Technology Transformation team at
                      a leading insurance company.
                    </p>
                    <p>
                      This role is crucial for technical solution,
                      architecting, design, developing large- scale digital
                      applications in the insurance domain.The ideal candidate
                      will have a strong technical solution implementation
                      background, hands on software development and a proven
                      track record in designing robust, scalable, cloud native
                      and efficient large size software solutions. They should
                      have architected and designed web, mobile application
                      and Microservice base solution for Indian life
                      Insurance.
                    </p>
                  </div>
                  <div class="jd-cta question-jd">
                    <button>Apply Now</button>
                  </div></div>`)
                    }
                    else if (tarId == response[index].id && window.innerWidth < 768) {
                        $(".applyjd-discription-mobile .job-card-sub-title").text(response[index].title)
                    }
                })

            }

            // Get the URLSearchParams object for the current URL
            let searchParams = new URLSearchParams(window.location.search);

            // Get the value of the 'id' parameter
            let id = searchParams.get('jobId');
            if (id) {
                $(".main-job-card-list").removeClass("activecard");
                $(".job-discripattionaccordian").remove();
                $(".home-card .main-job-card-list").map((index, ele) => {
                    if ($(ele).attr("data-id") == id) {
                        $(ele).addClass("activecard");
                        $(ele).parents(".left-list-border").after(`<div class="job-discripattionaccordian"></div>`);
                        detailresult(id)
                    }
                })
            }

            $(".fit-page-card .main-job-card-list").click(function () {
                $(".main-job-card-list").removeClass("activecard");
                $(".job-discripattionaccordian").remove();
                $(this).addClass("activecard");
                var tarId = $(this).attr("data-id");
                $(this).parents(".left-list-border").after(`<div class="job-discripattionaccordian"></div>`);

                detailresult(tarId)
                if (window.innerWidth < 767) {
                    $(".main-job-card").fadeOut(500);
                    $(".applyjd-discription-mobile").fadeIn(500);
                }
            })

            $(".home-card .main-job-card-list").click(function (e) {
                e.preventDefault();
                var tarId = $(this).attr("data-id");
                window.location.href = `/src/test/new/find-your-fit.html?jobId=${tarId}`
                if (window.innerWidth < 767) {
                    $(".main-job-card").fadeOut(500);
                    $(".applyjd-discription-mobile").fadeIn(500);
                }
            })

        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
    // card details api End


    // drop down select box 
    $(".js-select2").select2({
        closeOnSelect: false,
        placeholder: "Select",
        allowHtml: true,
        dropdownCssClass: "func-wrap",
        tags: true
    });

    $(".card-func-select").select2({
        closeOnSelect: false,
        placeholder: "Select",
        allowHtml: true,
        dropdownCssClass: "card-func-pop",
        tags: true
    });

    $(".js-select2").on("select2:open", function (e) {
        $(".select2-dropdown").addClass("func-wrap");
        if ($(".job-search-inner").css("display") == "block") {
            $(".banner-slider").removeClass("active");
            $(".job-search-inner").fadeOut(1000);
            $(".js-select2").select2('close');
            //  $(".select2-search__field").trigger("click");
            setTimeout(() => {
                $(".js-select2").select2('open');
            }, 1000)
        }
    });
    $('.js-select2').on('select2:select', function (e) {
        var selectedFunc = $(".js-select2").val();
        if (selectedFunc.length > 2) {
            $(".select2-search").append(`<div class="selected-count"><span>+1 More</span></div>`)
        }
    });
$('.locate-select').select2({
    placeholder: "Location",
    tags: true,
    closeOnSelect: true,
    dropdownCssClass: "locate-pop",
    allowHtml: true,
    // minimumResultsForSearch: Infinity
});

    $('.state-select').select2({
        placeholder: "Location",
        tags: true,
        closeOnSelect: true,
        allowHtml: true,
        dropdownCssClass: "card-state-pop",
        minimumResultsForSearch: Infinity
    });

    $('.job-card-locate').select2({
        placeholder: "Location",
        tags: true,
        closeOnSelect: true,
        allowHtml: true,
        minimumResultsForSearch: Infinity,
        dropdownCssClass: "card-locate-pop",
    });
    $('.job-role-select').select2({
        placeholder: "Location",
        tags: true,
        closeOnSelect: true,
        allowHtml: true,
        minimumResultsForSearch: Infinity,
        dropdownCssClass: "job-role-pop",
    });

    $('.job-role-select').on('select2:select', function (e) {
        var selectedData = e.params.data;
        if (selectedData.text == "Technology") {
            $(".tech-search").fadeIn(1000)
            $(".banner-slider").removeClass("active");
            $(".job-search-inner").fadeOut(1000);
        } else if (selectedData.text == "Field Sales") {
            if (window.innerWidth > 768) {
                $(".tech-search").fadeOut(1000)
                $(".banner-slider").addClass("active");
                $(".job-search-inner").fadeIn(1000);
            } else {
                $(".main-search").fadeOut(1000);
                $(".banner-slider").addClass("active");
                $(".job-search-inner").fadeIn(1000);
            }

        }
    });


    // function drop script start
    $(document).on("click", function (event) {
        if (!$(event.target).closest(".drop-check").length) {
            $(".drop-check").slideUp();
        }
    });

    $(".drop-btn, .js-select2").on("focus click", function (event) {
        event.stopPropagation(); // Prevent the click event from propagating
        $(this).siblings(".drop-check").slideDown();

    });


    $(".locate-wrapper .select2-container").click((e) => {
        e.preventDefault();
        if ($(".job-search-inner").css("display") == "block") {
            $(".banner-slider").removeClass("active");
            $(".job-search-inner").fadeOut(1000);
            $(".locate-select").select2('close');
            //  $(".select2-search__field").trigger("click");
            setTimeout(() => {
                $(".locate-select").select2('open');
            }, 1200)
        }


    })

    $(".drop-check li").click(function () {
        var curValue = $(this).text().trim();
        $("#locate").val(curValue);
        $(this).parents(".drop-check").slideUp();
    });

// drop list li function End
