import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['top-bar', 'transparent'],
  didInsertElement(){
    var adjustTransparency = function(){
      if($(window).scrollTop() >= 50){
        currentElem.removeClass('transparent');
      }
      else{
        currentElem.addClass('transparent');
      }
    }
    var currentElem = this.$();
    adjustTransparency();
    $(window).scroll(function(){
      adjustTransparency();
    });
  }
});
