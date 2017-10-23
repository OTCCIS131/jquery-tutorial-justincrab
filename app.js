$(document).ready( function () {//when page is loaded
    var data = {
        cost: 9.99
    };

    //Get attendee count
    function getAttendeeCount() {
        return $('.attendee-list .row.attendee').length;
    }

    function addAttendee() {
        $('.attendee-list').append(
            $('script[data-template="attendee"]').text()
        );
    }

    function sycPurchaseButton(){
        //total up the count for the checkout button total
        $('#checkout-button span.amount').html(
            '$' + data.cost * getAttendeeCount()
        );
    }

     // Initialize the form

     //set up the unit cost of one ticket
     //adds a new ID, #unit-price, which is used in the html doc's data-template
     $('#unit-price').html('$' + data.cost + ' ea ');

     // add one attendee by default on init
     addAttendee();
     syncPurchaseButton();
})