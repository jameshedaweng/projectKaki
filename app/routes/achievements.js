import Ember from 'ember';
import ResetScrollMixin from 'ember-cli-reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  resetScroll: undefined,
  model(){
    return {
      currentPage: "achievements",
      achievements: {
        thisWeek: [
          {
            id: 1,
            image: "https://s3-us-west-2.amazonaws.com/codenamekaki/badge-01-a.png",
            title: "5 Workouts"
          },
          {
            id: 2,
            image: "https://s3-us-west-2.amazonaws.com/codenamekaki/badge-02-b.png",
            title: "5 different Workouts"
          }
        ],
        thisMonth: [
          {
            id: 7,
            image: "https://s3-us-west-2.amazonaws.com/codenamekaki/badge-07-a.png",
            title: "1 Week working hard"
          },
          {
            id: 8,
            image: "https://s3-us-west-2.amazonaws.com/codenamekaki/badge-08-a.png",
            title: "2 Weeks working hard"
          },
          {
            id: 9,
            image: "https://s3-us-west-2.amazonaws.com/codenamekaki/badge-09-b.png",
            title: "3 Weeks working hard"
          },
          {
            id: 10,
            image: "https://s3-us-west-2.amazonaws.com/codenamekaki/badge-10-b.png",
            title: "5 Cycling workouts"
          },
          {
            id: 11,
            image: "https://s3-us-west-2.amazonaws.com/codenamekaki/badge-11-a.png",
            title: "5 Gym workouts"
          },
          {
            id: 12,
            image: "https://s3-us-west-2.amazonaws.com/codenamekaki/badge-12-a.png",
            title: "5 Walking workouts"
          }
        ],
        history: [
          {
            id: 3,
            image: "https://s3-us-west-2.amazonaws.com/codenamekaki/badge-03-a.png",
            title: "100 Workouts"
          },
          {
            id: 4,
            image: "https://s3-us-west-2.amazonaws.com/codenamekaki/badge-04-a.png",
            title: "200 Workouts"
          },
          {
            id: 5,
            image: "https://s3-us-west-2.amazonaws.com/codenamekaki/badge-05-b.png",
            title: "500 Workouts"
          },
          {
            id: 6,
            image: "https://s3-us-west-2.amazonaws.com/codenamekaki/badge-06-b.png",
            title: "1000 Workouts"
          }
        ]
      }
    };
  }
});
