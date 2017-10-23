$(document).ready( function () {//when page is loaded
    // creates an object literal
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

        
        // Sync remove button UI
        // sync functions must be used to reflect the changes made
        // in the DOM by adding attendees
        syncRemoveButtons();
    }

    function syncRemoveButtons() {
        // If only one attendee, hide the first remove button
        // otherwise, show all remove buttons
        if (getAttendeeCount() === 1){
            $('.attendee-list .attendee .remove-attendee').first().hide();
        } else {
            $('.attendee-list .attendee .remove-attendee').show();
        }
    }

    function sycPurchaseButton(){
        /*total up the count for the checkout button total 
        If you wanted the same purchase total anywhere else in the template, 
        you would need to sync all instances in the DOM using a class selector, 
        but we are being specific in this case and targeting just one.*/
        $('#checkout-button span.amount').html(
            '$' + data.cost * getAttendeeCount()
        );
    }

    // Events
    $('.add-attendee').on('click', function (event) {
        event.preventDefault();
        addAttendee();
        $(this).trigger('attendee:add');//creates 'attendee:add' event,
    }).on('attendee:add', function () {//when 'attendee:add' is triggered, sync buttons
        syncPurchaseButton();
        syncRemoveButtons();
    }) //When the state is dependent on the DOM and not the other way around, 
       //DOM queries to keep track of state get complicated. 

     // Initialize the form

     //set up the unit cost of one ticket
     //adds a new ID, #unit-price, which is used in the html doc's data-template
     $('#unit-price').html('$' + data.cost + ' ea ');

     // add one attendee by default on init
     addAttendee();
     syncPurchaseButton();
})