$(document).ready( function () {
    var radio = $('input[type=radio]')

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

} );



/* Custom filtering function which will filter data in column four between two values */
$.fn.dataTableExt.afnFiltering.push(
  function (oSettings, aData, iDataIndex) {
    var dataPub = $('input[type=radio].dataPub')
    var access = $('input[type=radio].access')
    var literature = $('input[type=radio].literature')
    var tools = $('input[type=radio].datatools')
    var geospat = $('input[type=radio].geospatial')
    var db = $('input[type=radio].db')
    var dataviz = $('input[type=radio].dataviz')
    var altmet = $('input[type=radio].altmetrics')
    var scaleprod = $('input[type=radio].scaleprod')
    var cran = $('a span.cran')

    var element = $(oSettings.aoData[iDataIndex].nTr); //defines table row as element
    // TODO: checked class should be filtered and append cran or early dev

    //Also TODO: Refactor because this is nasty. Replace for loop and array
    if ( (dataPub).is(':checked') ){
        return element.is('.dataPub') || ! dataPub;
    } else if ( (access).is(':checked') ){
        return element.is('.access') || ! access;
    } else if ( (literature).is(':checked') ){
        return element.is('.literature') || ! literature;
    } else if ( (tools).is(':checked') ){
        return element.is('.datatools') || ! tools;
    } else if ( (geospat).is(':checked') ){
        return element.is('.geospatial') || ! geospat;
    } else if ( (db).is(':checked') ){
        return element.is('.db') || ! db;
    } else if ( (dataviz).is(':checked') ){
        return element.is('.dataviz') || ! dataviz;
    } else if ( (altmet).is(':checked') ){
        return element.is('.altmet') || ! altmet;
    } else if ( (scaleprod).is(':checked') ){
        return element.is('.scaleprod') || ! scaleprod;
    } else {
        return element
    }
});

