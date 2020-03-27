# easy-slider

Slider based on jQuery, ready to use in all of your websites

## Getting Started


### Prerequisites

You need to have JQuery latest version on your website/project.
Don't forget to add the easy-slider.css as well.

```
    <link rel="stylesheet" href="./css/easy-slider.css">

    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="./js/easy-slider.js"></script>
```

### How to use it

HTML Slider

```
    <div class="container-slider" data-seconds="3" data-effect="slide">
        <div class="slider-controls">
            <div class="prev"></div>
            <div class="next"></div>
        </div>
        <div class="slider-indicator">
        </div>
        <div class="slide">
            <img src="https://via.placeholder.com/1200x400" alt="">
        </div>
        <div class="slide">
            <img src="https://via.placeholder.com/1200x400" alt="">
        </div>
        <div class="slide">
            <img src="https://via.placeholder.com/1200x400" alt="">
        </div>
        <div class="slide">
            <img src="https://via.placeholder.com/1200x400" alt="">
        </div>
        <div class="slide">
            <img src="https://via.placeholder.com/1200x400" alt="">
        </div>
    </div>
```

#### data-seconds
Here you have to write how long the slide is going to change to next one.

#### data-effect
Here you have to write what effect would you like when the slide changes.
There are only 2 effects right now
 
 ```
 fade
 ```
 
 ```
 slide
 ```



