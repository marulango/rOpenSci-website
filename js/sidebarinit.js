$(document).ready(function(){
    var sticky = new Waypoint.Sticky({
        element: $('.sidebar')[0],
        wrapper: false
    })

    var closingPanel = $('.sidebar > ul li')
    var subitem = $('.subitem').hide()

    closingPanel.click(function(){
        $this = $(this);
        $target = $this.find('.subitem')

        if ($target){
            subitem.removeClass('active').slideUp()
            $target.addClass('active').slideDown()
        }
    })

    return false;
})