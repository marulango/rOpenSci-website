$(document).ready(function(){
    var sticky = new Waypoint.Sticky({
        element: $('.sidebar')[0],
        wrapper: false
    })

    var array = []
    var puchi = []
    var h3 = $('h3')
    var h4 = $('h4')

    var ul = document.createElement('ul')

    for (var i = 0; i < h3.length; i++) {
        array.push(h3[i].innerText);
        liH3 = h3[i].innerText
        var mainLi = document.createElement('li')
        mainLi.innerHTML = liH3
        console.log(mainLi)
    }

    if ( h3.next().is('h4') ){
        for ( var i = 0; i < h4.length; i++ ){
            liContent = h4[i].innerText
            var innerLi = document.createElement('li')
            innerLi.innerHTML = liContent
            console.log(innerLi)
        } 
    }


    var closingPanel = $('.sidebar > ul li')
    var subitem = $('.subitem').hide()

    closingPanel.click(function(){
        var $this = $(this);
        var $target = $this.find('.subitem')

        if ($target){
            subitem.removeClass('active').slideUp()
            $target.addClass('active').slideDown()
        } else {
            subitem.addClass('active').slideDown()
            $target.removeClass('active').slideUp()
        }
    })

    return false;
})