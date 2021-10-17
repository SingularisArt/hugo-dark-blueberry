$(window).on('load', function() {
    $('.preloader').fadeOut(100)
}),
function(a) {
    'use strict';
    a('.navbar-toggler').on('click', function() {
        a('.sidenav').toggleClass('show'),
        a('.wrapper').toggleClass('hide')
    }),
    a('.tab-content').find('.tab-pane').each(function(d, e) {
        var b = a(this).closest('.code-tabs').find('.nav-tabs')
          , c = a(this).attr('title');
        b.append('<li class="nav-item"><a class="nav-link" href="#">' + c + '</a></li>')
    }),
    a('.code-tabs ul.nav-tabs').each(function() {
        a(this).find("li:first").addClass('active')
    }),
    a('.code-tabs .tab-content').each(function() {
        a(this).find("div:first").addClass('active')
    }),
    a('.nav-tabs a').click(function(d) {
        d.preventDefault();
        var b = a(this).parent()
          , e = b.index()
          , c = a(this).closest('.code-tabs')
          , f = c.find('.tab-pane').eq(e);
        c.find('.active').removeClass('active'),
        b.addClass('active'),
        f.addClass('active')
    }),
    a('.collapse').on('shown.bs.collapse', function() {
        a(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus')
    }).on('hidden.bs.collapse', function() {
        a(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus')
    })
}(jQuery)
