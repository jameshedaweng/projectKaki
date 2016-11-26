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
            image: "/images/badges/badge-01-a.png",
            title: "5 Workouts"
          },
          {
            id: 2,
            image: "/images/badges/badge-02-b.png",
            title: "5 different Workouts"
          }
        ],
        thisMonth: [
          {
            id: 7,
            image: "/images/badges/badge-07-a.png",
            title: "1 Week working hard"
          },
          {
            id: 8,
            image: "/images/badges/badge-08-a.png",
            title: "2 Weeks working hard"
          },
          {
            id: 9,
            image: "/images/badges/badge-09-b.png",
            title: "3 Weeks working hard"
          },
          {
            id: 10,
            image: "/images/badges/badge-10-b.png",
            title: "5 Cycling workouts"
          },
          {
            id: 11,
            image: "/images/badges/badge-11-a.png",
            title: "5 Gym workouts"
          },
          {
            id: 12,
            image: "/images/badges/badge-12-a.png",
            title: "5 Walking workouts"
          }
        ],
        history: [
          {
            id: 3,
            image: "/images/badges/badge-03-a.png",
            title: "100 Workouts"
          },
          {
            id: 4,
            image: "/images/badges/badge-04-a.png",
            title: "200 Workouts"
          },
          {
            id: 5,
            image: "/images/badges/badge-05-b.png",
            title: "500 Workouts"
          },
          {
            id: 6,
            image: "/images/badges/badge-06-b.png",
            title: "1000 Workouts"
          }
        ]
      }
    };
  }
});
