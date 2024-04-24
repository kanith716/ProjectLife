
$(document).ready(function () {

    // otp mobile/email validation start
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function isValidMobile(mobile) {
        return /^\d{10}$/.test(mobile);
    }

    function toggleButtonState() {
        var inputVal = $('#email-mobile').val();
        var button = $('.submit-otp');

        if (inputVal && (isValidEmail(inputVal.trim()) || isValidMobile(inputVal.trim()))) {
            button.removeClass('disabled');
        } else {
            button.addClass('disabled');
        }
    }

    $('#email-mobile').on('input', function () {
        toggleButtonState();
    });

    $('.submit-otp').on('click', function () {
        var inputVal = $('#email-mobile').val().trim();
        if (isValidEmail(inputVal) || isValidMobile(inputVal)) {
            alert('OTP sent to ' + inputVal);
        }
    });

    toggleButtonState();
    // otp mobile/email validation end





    // otp field enter

    const $input = $(".inputotpfield input");
    const $inputOtpField = $(".inputotpfield");
    const $submitButton = $("#otpSubmit");
    let inputCount = 0;
    let finalInput = "";

    // Function to update input configuration
    const updateInputConfig = (element, disabledStatus) => {
        element.prop("disabled", disabledStatus);
        if (!disabledStatus) {
            element.focus();
        } else {
            element.blur();
        }
    };

    // Event listener for keyup on input fields
    $input.on("keyup", function (e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
        let value = $(this).val();

        if (value.length == 1) {
            updateInputConfig($(this), true);
            if (inputCount <= 3 && e.key != "Backspace") {
                finalInput += value;
                if (inputCount < 3) {
                    $(this).next().prop("disabled", false).focus();
                }
            }
            inputCount += 1;
        } else if (value.length == 0 && e.key == "Backspace") {
            finalInput = finalInput.substring(0, finalInput.length - 1);
            if (inputCount == 0) {
                updateInputConfig($(this), false);
                return false;
            }
            updateInputConfig($(this), true);
            $(this).prev().val("");
            updateInputConfig($(this).prev(), false);
            inputCount -= 1;
        } else if (value.length > 1) {
            $(this).val(value.split("")[0]);
        }


    });


    // Event listener for keyup on window
    $(window).on("keyup", function (e) {
        if (inputCount > 3) {
            $submitButton.removeClass("disabled").addClass("enabled");
            if (e.key == "Backspace") {
                finalInput = finalInput.substring(0, finalInput.length - 1);
                updateInputConfig($inputOtpField.children().last(), false);
                $inputOtpField.children().last().val("");
                inputCount -= 1;
                $submitButton.addClass("disabled");
            }
        }
    });

    // Function to start input
    const startInput = () => {
        inputCount = 0;
        finalInput = "";
        $input.val("");
        updateInputConfig($inputOtpField.children().first(), false);
    };

    // Start input on page load
    startInput();

});