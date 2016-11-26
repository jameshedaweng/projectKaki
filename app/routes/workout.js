import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      title: "Outdoor Walking",
      image: "/images/outdoor-walk.jpg",
      count: 18
    };
  }
});
