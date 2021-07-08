  
// slick

$('.slicky').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 5,
    // centerPadding: '20%',
    // centerMode: true,
    adaptiveHeight: false,
    responsive: [
        {
            breakpoint: 1416,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                // dots: false,
                infinite: true,
                
            }
        }, 
    {
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                // dots: false,
                infinite: true,
                
            }
        }, 
    ]
});

// slick end



$('.extra-fields-customer').click(function() {
    $('.customer_records').clone().appendTo('.customer_records_dynamic');
    $('.customer_records_dynamic .customer_records').addClass('single remove');
    $('.single .extra-fields-customer').remove();
    $('.single').append('<a href="#" class="remove-field btn-remove-customer">Remove Fields</a>');
    $('.customer_records_dynamic > .single').attr("class", "remove");
  
    $('.customer_records_dynamic input').each(function() {
      var count = 0;
      var fieldname = $(this).attr("name");
      $(this).attr('name', fieldname + count);
      count++;
    });
  
  });
  
  $(document).on('click', '.remove-field', function(e) {
    $(this).parent('.remove').remove();
    e.preventDefault();
  });




$(document).on('click','.userFollow2.userFollow22 li a',function(){
	$('.userFollow2.userFollow22 li a').removeClass('active');
	$(this).addClass('active');
});
$(document).on('click','.userFollow2.userFollow23 li a',function(){
	$('.userFollow2.userFollow23 li a').removeClass('active');
	$(this).addClass('active');
});
$(document).on('click','.userFollow2.userFollow21 li a',function(){
	$('.userFollow2.userFollow21 li a').removeClass('active');
	$(this).addClass('active');
});
$(document).on('click','.nav-link',function(){
	$('.nav-link').removeClass('active');
	$(this).addClass('active');
});
$(document).on('click','.chefDropdownUItext',function(){
    $('.check_box_btn').slideToggle();
    $(this).find('img').toggleClass('rotateIcon')
	
});

// fixed header

$(window).scroll(function () {
    if ($(window).scrollTop() >= 45) {
        $('.header').addClass('fixed_header');
    } else {
        $('.header').removeClass('fixed_header');
    }
});

// fixed header end

// hamburger 

var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++)
            o.call(r, t[e], e, t)
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}

$('.hamburger').click(function () {

    if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('left', '0px');
    } else {
        $('#mySidenav').css('left', '-250px');
    }
});


// hamburger end

// accordian
$(document).ready(function () {
    $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".content")
                .slideUp(200);
            $(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        } else {
            $(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
            $(this)
                .find("i")
                .removeClass("fa-plus")
                .addClass("fa-minus");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
                .siblings(".content")
                .slideDown(200);
        }
    });
});

// accordian end
/*Dropdown start*/
$('.select').click(function () {
    $(this).find('.dropdown-menu').slideToggle(300);

});
$('.select').focusout(function () {
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.select .dropdown-menu li').click(function () {
    $(this).parents('.select').find('span').text($(this).text());
});

$(document).on("click", '.select', function (event) {
    var $trigger = $(".dropdown");
    $(".dropdown-menu").hide();
    $(this).children(".dropdown-menu").toggle();
    $(this).removeClass('active');
});


/*Dropdown end*/

// otp verification 
function getCodeBoxElement(index) {
    return document.getElementById('codeBox' + index);
}
function onKeyUpEvent(index, event) {
    const eventCode = event.which || event.keyCode;
    if (getCodeBoxElement(index).value.length === 1) {
        if (index !== 6) {
            getCodeBoxElement(index + 1).focus();
        } else {
            getCodeBoxElement(index).blur();
            // Submit code
            console.log('submit code ');
        }
    }
    if (eventCode === 8 && index !== 1) {
        getCodeBoxElement(index - 1).focus();
    }
}
function onFocusEvent(index) {
    for (item = 1; item < index; item++) {
        const currentElement = getCodeBoxElement(item);
        if (!currentElement.value) {
            currentElement.focus();
            break;
        }
    }
}
//   otp verification end 

// profile dropdown start
$(document).ready(function () {

    $('.clickme').click(function (event) {
        event.stopPropagation();
        $('.sign_drop').slideToggle();
    });

    $(document).click(function () {
        $('.sign_drop').slideUp();
    });
});
// profile dropdown end

// edit dropdown
$(document).ready(function () {

    $('.EditMe').click(function (event) {
        event.stopPropagation();
        $('.EditMe').next('.sign_drop_ellipsis').slideUp();
       $(this).next('.sign_drop_ellipsis').slideToggle();
    });
});
// edit dropdown end 

// img upload 
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var img = $(input).parent("div").siblings('.avatar-preview').children('div');
            //            alert((img).attr("id"))
            $(img).css('background-image', 'url(' + e.target.result + ')');
            $(img).hide();
            $(img).fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$(document).on('change', "#imageUpload2, #imageUpload, #imageUpload3 ,#imageUpload4 ,#imageUpload5 ,#imageUpload6 ,#imageUpload8, #imageUpload9", function () {
    readURL(this);
});
// img upload end 

// chef dropdown
$(document).on('click', '.chefDropdownUItext', function () {
    $('.chefDropdownUItext-menu').slideToggle();
});

$(document).on('click', '.chefDropdownUItext-menu li', function () {
    var x = $(this).text();
    $('.chefDropdownUItext .form-control').attr('value', x);
    $('.chefDropdownUItext-menu').slideUp();
    var p = $(this).parent('.chefDropdownUItext-menu').prev('.chefDropdownUItext').find('img').toggleClass('rotateIcon');
});
// chef dropdown end 


// time slider start
$('.slider-range').slider({
    range: 'min',
    min: 450,
    max: 1170,
    step: 15,
    value: 810,
    animate: 'fast',
    // slide: function (e, ui) {
      
    //     var hours1 = Math.floor(ui.value / 60);
    //     var minutes1 = ui.value - (hours1 * 60);

    //     if (hours1.length == 1) hours1 = '0' + hours1;
    //     if (minutes1.length == 1) minutes1 = '0' + minutes1;
    //     if (minutes1 == 0) minutes1 = '00';
    //     if (hours1 >= 12) {
    //         if (hours1 == 12) {
    //             hours1 = hours1;
    //             minutes1 = minutes1 + ' PM';
    //         } else {
    //             hours1 = hours1 - 12;
    //             minutes1 = minutes1 + ' PM';
    //         }
    //     } else {
    //         hours1 = hours1;
    //         minutes1 = minutes1 + ' AM';
    //     }
    //     if (hours1 == 0) {
    //         hours1 = 12;
    //         minutes1 = minutes1;
    //     }
      
    //     $('.slider-time').html(hours1 + ':' + minutes1);
    // }
        
}); 
// time slider end

// multiple selection  
$(".js-select2").select2({
    closeOnSelect : false,
    placeholder : "Onion",
    allowHtml: true,
    allowClear: true,
    tags: true // creates new options on the fly
});

// $('.otpInputs').keup(function() {
//     alert('done');
// })

