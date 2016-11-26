import Ember from 'ember';
import ResetScrollMixin from 'ember-cli-reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  resetScroll: undefined,
  model(params) {
    return {
      title: "Outdoor Walking",
      image: "/images/outdoor-walk.jpg",
      count: 18
    };
  }
});
