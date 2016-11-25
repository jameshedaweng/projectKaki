import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      currentPage: "for-you"
    };
  }
});
