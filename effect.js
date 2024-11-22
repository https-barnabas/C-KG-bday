$(window).load(function() {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function() {
    var vw;
    $('#viewMemories').hide(); // Hide on page load

    $(window).resize(function() {
        vw = $(window).width() / 2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b11').animate({ top: 240, left: vw - 350 }, 500);
        $('#b22').animate({ top: 240, left: vw - 250 }, 500);
        $('#b33').animate({ top: 240, left: vw - 150 }, 500);
        $('#b44').animate({ top: 240, left: vw - 50 }, 500);
        $('#b55').animate({ top: 240, left: vw + 50 }, 500);
        $('#b66').animate({ top: 240, left: vw + 150 }, 500);
        $('#b77').animate({ top: 240, left: vw + 250 }, 500);
    });

    $('#turn_on').click(function() {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function() {
            $('#play').fadeIn('slow');
        });
    });

    $('#play').click(function() {
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('background-color', '#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function() {
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function() {
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function() {
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function loopOne() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b1').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopOne();
        });
    }

    function loopTwo() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b2').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopTwo();
        });
    }

    function loopThree() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b3').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopThree();
        });
    }

    function loopFour() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b4').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopFour();
        });
    }

    function loopFive() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b5').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopFive();
        });
    }

    function loopSix() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b6').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopSix();
        });
    }

    function loopSeven() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b7').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopSeven();
        });
    }

    $('#balloons_flying').click(function() {
        $('.balloon-border').animate({ top: -500 }, 8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();

        $(this).fadeOut('slow').delay(5000).promise().done(function() {
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function() {
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function() {
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function() {
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function() {
            $('#wish_message').fadeIn('slow');
        });
    });

    $('#wish_message').click(function() {
        let vw = $(window).width() / 2;
        let offset = 50; // Adjusted offset for spacing
    
        if ($(window).width() <= 768) { // For mobile screens
            offset = 25; // Reduce spacing for smaller screens
        }
    
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b1').attr('id', 'b11');
        $('#b2').attr('id', 'b22');
        $('#b3').attr('id', 'b33');
        $('#b4').attr('id', 'b44');
        $('#b5').attr('id', 'b55');
        $('#b6').attr('id', 'b66');
        $('#b7').attr('id', 'b77');
    
        // Position balloons with adjusted offset
        $('#b11').animate({ top: 240, left: vw - offset * 7 }, 500);
        $('#b22').animate({ top: 240, left: vw - offset * 5.2 }, 500);
        $('#b33').animate({ top: 240, left: vw - offset * 3.6 }, 500);
        $('#b44').animate({ top: 240, left: vw - offset * 0.5 }, 500);
        $('#b55').animate({ top: 240, left: vw + offset * 1.5}, 500);
        $('#b66').animate({ top: 240, left: vw + offset * 3 }, 500);
        $('#b77').animate({ top: 240, left: vw + offset * 4.5 }, 500);
    
        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(3000);
        $(this).fadeOut('slow').delay(3000).promise().done(function() {
            $('#viewMemories').fadeIn('slow');
        });
    });
    

    $('#viewMemories').click(function() {
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done();
        $('.btn-primary').hide(); // Hide other buttons
        $('.slideshow-container').show(); // Show the slideshow container
    
        const images = [
            "birthday/photo1.jpg",
            "birthday/photo2.jpg",
            "birthday/photo3.jpg",
            "birthday/photo4.jpg",
            "birthday/photo5.jpg",
            "birthday/photo6.jpg",
            "birthday/photo7.jpg",
            "birthday/photo8.jpg",
        ];
    
        let slideIndex = 0;
        showSlides();
    
        function showSlides() {
            const slides = document.getElementsByClassName("mySlides");
    
            // Hide all slides
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
    
            slideIndex++;
            if (slideIndex > images.length) { 
                // When the last slide is reached, fade out and show view message
                $('.slideshow-container').fadeOut('slow', function() {
                    $('#viewMemories').fadeIn('slow'); // Show view message after fade out
                    $('#story').fadeIn('slow'); // Fade in the story button here
                });
                return; // Exit the function after fading out
            }
    
            // Show the current slide
            slides[slideIndex - 1].style.display = "block";  
            
            setTimeout(showSlides, 2500); // Change image every 3 seconds
        }
    });
    

    $('#story').click(function() {
        $(this).fadeOut('slow');
        $('.viewMemories').fadeOut('fast').promise().done(function() {
            $('.message').fadeIn('slow'); // Show the message container
        });
        $('.btn-primary').hide();
    
        function msgLoop(i) {
            const paragraphs = $('.message p'); // Get all paragraphs
            const totalParagraphs = paragraphs.length; // Count the total paragraphs
    
            if (i <= totalParagraphs) {
                // Fade out the current paragraph
                paragraphs.eq(i - 1).fadeOut(200, function() {
                    // After fading out, delay and then fade in the next paragraph
                    $(this).delay(500).promise().done(function() {
                        paragraphs.eq(i).fadeIn(200).css('animation', 'fadeInSlide 0.5s ease forwards').delay(7000).promise().done(function() {
                            msgLoop(i + 1); // Call msgLoop recursively for the next paragraph
                        });
                    });
                });
            } else {
                // After the last paragraph, show the cake
                $('.cake').fadeIn('fast');
            }
        }
        
        msgLoop(1); // Start the loop with the first paragraph
    });
});