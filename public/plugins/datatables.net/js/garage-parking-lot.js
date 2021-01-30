$(document).ready(function() {

    var table = $('.data-table').DataTable({// * IMPORTANT: I'm using a class instead of an ID so I don't need to repeat the code bellow to each table
        responsive: true,
        select: true,
        'aoColumnDefs': [{
            'bSortable': false,
            'aTargets': ['nosort']
        }]
    });
    });