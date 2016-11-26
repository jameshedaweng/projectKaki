import Ember from 'ember';
import ResetScrollMixin from 'ember-cli-reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  resetScroll: undefined,
  model(){
    return {
      currentPage: "for-you",
      proactiveToday: {
        title: "Outdoor Walking",
        message: "Enjoy the nice weather and have a walk!",
        image: "https://s3-us-west-2.amazonaws.com/codenamekaki/outdoor-walk.jpg",
        id: 1
      },
      heavyRotation: [
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
        },
        {
          image: "https://s3-us-west-2.amazonaws.com/codenamekaki/elliptical.jpg",
          title: "Elliptical",
          count: 8,
          id: 1
        },
        {
          image: "https://s3-us-west-2.amazonaws.com/codenamekaki/indoor-walk.jpg",
          title: "Indoor Walking",
          count: 5,
          id: 1
        }
      ],
      categories: [
        {
          color: "red",
          title: "Running",
          icon: "bi_medicine-heart",
          category_id: 1
        },
        {
          color: "orange",
          title: "Cycling",
          icon: "bi_transport-bicycle",
          category_id: 1
        },
        {
          color: "green",
          title: "Walking",
          icon: "bi_interface-direction",
          category_id: 1
        },
        {
          color: "purple",
          title: "Gym",
          icon: "bi_sport-dumbell-a",
          category_id: 1
        }
      ]
    };
  }
});
