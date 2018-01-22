/*global var1,var2,var3,var4,var5*/
/*jslint browser: true*/
/*global $, jQuery, alert*/


$(document).ready(function () {
    
    /* Sticky Navigation */
    $('.project').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('nav__bar');
        } else {
            $('nav').removeClass('nav__bar');
        }
    }, {
        // offset: '5%'
    });

});