
$('.tabs__header-item').click(function(){
    //TODO: clear all active mod

    if($(this).hasClass('tabs__header-item_active') ){
        return;
    }
    $('.tabs__header-item').removeClass('tabs__header-item_active');
    $('.tabs__content-item').removeClass('tabs__content-item_active');
    //TODO: this add mod and content add mod

    $(this).addClass('tabs__header-item_active');
    var index = $('.tabs__header-item').index(this);

  $( $('.tabs__content-item')[index])
              .addClass('tabs__content-item_active');




})