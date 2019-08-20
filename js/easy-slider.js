$(function () {
    //Initial count value
    var i = 0;

    //Duration of the transitions between slides
    var sliderDuration = 0;

    //Effect when change slides
    var effectToUse = "";

    //Divs with class .slide
    var slides = 0;

    //CSS class to use when hidding or showing the slide
    var show = "";
    var hide = "";

    //variable to save the function that is going to be function executed by the interval functionality
    var intervalFn;


    function startAnimation() {
        sliderDuration = parseInt($('.container-slider').data('seconds') * 1000);
        effectToUse = $('.container-slider').data('effect');
        slides = $('.slide');

        createSliderIndicators();

        //Set some css classes to some elements depending on the data-attribute "effect"
        switch (effectToUse) {
            case 'fade':
                setFadeEffect();
                break;
            case 'slide':
                setSlideEffect();
            default:
                break;
        }

        changeSlide();
    }

    function setFadeEffect() {
        for (let j = 0; j < slides.length; j++) {
            $(slides[j]).addClass('slider-fade-effect');
        }
        show = "fade-in";
        hide = "fade-out";
    }

    function setSlideEffect() {
        for (let j = 0; j < slides.length; j++) {
            $(slides[j]).addClass('slider-slide-effect');
        }
        show = "slide-in";
        hide = "slide-out";
    }

    //Create the HTML Slider indicators
    function createSliderIndicators() {
        for (let i = 0; i < slides.length; i++) {
            $('.slider-indicator').append('<div></div>');
        }
    }

    //Function to update the i variable count
    function updateCount() {

        if (i < slides.length - 1) {
            i++;
            $('.slide').removeClass(hide);

            //Hide de previous slide
            $(slides[i - 1]).addClass(hide).removeClass(show);

            //Show the current slide
            $(slides[i]).addClass(show).removeClass(hide);

            //Update the slider indicator icon
            $($('.slider-indicator div')[i]).addClass('current-slide-indicator');
            $($('.slider-indicator div')[i - 1]).removeClass('current-slide-indicator');
        } else {
            //Reset the count var to start from scratch once again
            $('.slide').removeClass(hide);
            $(slides[i]).addClass(hide).removeClass(show);
            $($('.slider-indicator div')[i]).removeClass('current-slide-indicator');
            i = 0;
            $(slides[i]).addClass(show);
            $($('.slider-indicator div')[i]).addClass('current-slide-indicator');
        }

    }

    //Function to go to previous slide
    function goPrev() {
        if (i != 0) {
            $(slides[i]).removeClass(show);
            $($('.slider-indicator div')[i]).removeClass('current-slide-indicator');
            i -= 1;
            $(slides[i]).removeClass(hide);
            $(slides[i - 1]).addClass(hide);
            $($('.slider-indicator div')[i]).addClass('current-slide-indicator');

            //Reset the interval duration to start from 0
            clearInterval(intervalFn);

            changeSlide();
        }
    }

    //Function to go to the next slide
    function goNext() {
        //Reset the interval duration to start from 0
        clearInterval(intervalFn);

        updateCount();
        changeSlide();
    }

    $('.slider-controls .prev').on('click', function () {
        goPrev();
    });

    $('.slider-controls .next').on('click', function () {
        goNext();
    });


    //Function to change one slide to another
    function changeSlide() {

        //When start shows the slider number "i"
        $(slides[i]).addClass(show);
        $($('.slider-indicator div')[i]).addClass('current-slide-indicator');

        //Every X seconds the updateCount() function is executed
        intervalFn = setInterval(updateCount, sliderDuration);

    }

    window.onload = startAnimation();

});