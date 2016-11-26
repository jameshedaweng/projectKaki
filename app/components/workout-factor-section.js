import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  didInsertElement(){
    $("#workout-factor-select").change(function(){
      $(".workout-factor.current").removeClass("current");
      $("#workout-factor-" + $(this).val()).addClass("current");
    });
    $(".slider-minus").click(function(){
      var mainElem = $(this).parent().find(".main");
      mainElem.html(parseInt(mainElem.html()) - 5);
    });
    $(".slider-plus").click(function(){
      var mainElem = $(this).parent().find(".main");
      mainElem.html(parseInt(mainElem.html()) + 5);
    });
  }
});
