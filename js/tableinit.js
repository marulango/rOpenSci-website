$(document).ready( function () {
    var radio = $('input[type=radio]')
    var checkbox = $('input[type=checkbox]')

    var oTable = $('#packagestable').DataTable({
        "info": false, // won't display showed entries of total
        "pagingType": "simple_numbers",
        "pageLength": 18,
        "lengthChange": false, // Disables ability to change results number per page
        "columnDefs": [{ 
            "searchable": false, 
            "targets": 2 
        }],
        "language": {
            "search": ' ', // Changes 'Search' label value
            "searchPlaceholder": "Type to search…", // adds placeholder text to search field
            "paginate": {
                "previous": "Prev", //changes 'Previous' label value
            } 
        }
    });

    $(radio).change(function() {
        oTable.draw();
    });

    $(checkbox).change(function() {
        oTable.draw();
    });

} );


/* Custom filtering function which will filter data in column four between two values */
$.fn.dataTableExt.afnFiltering.push(
    function (oSettings, aData, iDataIndex) {
        var radio = $('input[type=radio]') //defines radio as variable to be able to get class
        var cran = $('input[type=checkbox]')
        var selected = $('input[type=radio]:checked')
        var $class = selected.attr('class')

        if (cran.is(':checked')) {
            var available = $('a .cran')
            var parent = available.parent().parent().parent() //…Yeah, I know. 
            parent.addClass('available')

            var element = $(oSettings.aoData[iDataIndex].nTr).hasClass('available');
            if ( $class === 'all'){
                return element
            }
            else {
                return element.is('.' + $class) || ! $class
            }
        } else {
            var element = $(oSettings.aoData[iDataIndex].nTr)
            if ( $class === 'all'){
                return element
            }
            else {
                return element.is('.' + $class) || ! $class
            }
        }


});

