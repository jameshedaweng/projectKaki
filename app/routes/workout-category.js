import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return {
      color: "red",
      title: "Running",
      icon: "bi_medicine-heart",
      workouts: [
        {
          image: "/images/indoor-run.png",
          title: "Indoor Running",
          count: 27,
          id: 1
        },
        {
          image: "/images/outdoor-run.jpg",
          title: "Outdoor Running",
          count: 12,
          id: 1
        }
      ]
    };
  }
});
