import Ember from 'ember';
import ResetScrollMixin from 'ember-cli-reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  resetScroll: undefined,
  model(params) {
    return {
      title: "Outdoor Walking",
      image: "https://s3-us-west-2.amazonaws.com/codenamekaki/outdoor-walk.jpg",
      count: 18
    };
  }
});
