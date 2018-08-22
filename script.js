

$(document).ready( function() {
    $('#plan').on('change', function() {
        var priceText;

        switch(this.value) {
            case 'monthly':
                priceText = '$10.00 /month';
                break;
            case 'quarterly':
                priceText = '$9.00 /month';
                break;
            case 'yearly':
                priceText = '$7.00 /month';
                break;
        }

        $('#price').text(priceText)
    })
})
