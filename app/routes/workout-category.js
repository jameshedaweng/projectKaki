import Ember from 'ember';
import ResetScrollMixin from 'ember-cli-reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  resetScroll: undefined,
  model(params){
    return {
      color: "red",
      title: "Running",
      icon: "bi_medicine-heart",
      workouts: [
        {
          image: "https://s3-us-west-2.amazonaws.com/codenamekaki/indoor-run.png",
          title: "Indoor Running",
          count: 27,
          id: 1
        },
        {
          image: "https://s3-us-west-2.amazonaws.com/codenamekaki/outdoor-run.jpg",
          title: "Outdoor Running",
          count: 12,
          id: 1
        }
      ]
    };
  }
});
