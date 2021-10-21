$(document).ready(function(){
    var weapons = [
        {"name": "44_Pistol",
        "damage": 48,
        "range": 119,
        "fireRate": 6,
        "accuracy":66,
        "weight": 4.2,
        "value": 99},
        {"name": "10mm_Pistol",
        "damage": 18,
        "range": 119,
        "fireRate": 46,
        "accuracy":61,
        "weight": 1.2,
        "value": 53},
        {"name": "assault_Rifle",
        "damage": 30,
        "range": 119,
        "fireRate": 40,
        "accuracy":72,
        "weight": 13.1,
        "value": 144}
    ];

    $('.item-list a').hover(function(e){
        var currentItem = $(e.currentTarget).attr('id');
        console.log(currentItem);

        var container = $('.item-values');
        weapons.forEach(element => {
            if(element.name == currentItem){
                container.find('.damage-value').html(element.damage);
                container.find('.range-value').html(element.range);
                container.find('.firerate-value').html(element.fireRate);
                container.find('.accuracy-value').html(element.accuracy);
                container.find('.weight-value').html(element.weight);
                container.find('.value-value').html(element.value);
            }
        });
    });

    $('.item-list a').click(function(e){
        $('.item-list a').removeClass('selected-item');
        $(e.currentTarget).addClass('selected-item');
    })
});