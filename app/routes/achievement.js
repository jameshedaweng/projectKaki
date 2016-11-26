import Ember from 'ember';
import ResetScrollMixin from 'ember-cli-reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  resetScroll: undefined,
  model(params){
    var achievements = [
      {
        id: 1,
        image: "/images/badges/badge-01-a.png",
        title: "5 Workouts",
        message: "Doing at least 5 workouts in a week. This achievement renews every week.",
        earned: true,
        last_earned: "25/11/2016",
        count: 24
      },
      {
        id: 2,
        image: "/images/badges/badge-02-a.png",
        title: "5 different Workouts",
        message: "Doing at least 5 workouts of different kinds in a week. This achievement renews every week.",
        earned: false,
        last_earned: "26/11/2016",
        count: 3
      },
      {
        id: 3,
        image: "/images/badges/badge-03-a.png",
        title: "100 Workouts",
        message: "Finish 100 workouts.",
        earned: true,
        last_earned: "18/09/2016"
      },
      {
        id: 4,
        image: "/images/badges/badge-04-a.png",
        title: "200 Workouts",
        message: "Finish 200 workouts.",
        earned: true,
        last_earned: "23/11/2016"
      },
      {
        id: 5,
        image: "/images/badges/badge-05-a.png",
        title: "500 Workouts",
        message: "Finish 500 workouts.",
        earned: false
      },
      {
        id: 6,
        image: "/images/badges/badge-06-a.png",
        title: "1000 Workouts",
        message: "Finish 1000 workouts.",
        earned: false
      },
      {
        id: 7,
        image: "/images/badges/badge-07-a.png",
        title: "1 Week working hard",
        message: "In 1 week of this month, you have finished 5 workouts. This achievement renews every month.",
        earned: true,
        last_earned: "11/11/2016",
        count: 15
      },
      {
        id: 8,
        image: "/images/badges/badge-08-a.png",
        title: "2 Weeks working hard",
        message: "In 2 weeks of this month, you have finished 5 workouts. This achievement renews every month.",
        earned: true,
        last_earned: "25/11/2016",
        count: 4
      },
      {
        id: 9,
        image: "/images/badges/badge-09-a.png",
        title: "3 Weeks working hard",
        message: "In at least 3 weeks of this month, you have finished 5 workouts. This achievement renews every month.",
        earned: false,
        last_earned: "24/10/2016",
        count: 2
      },
      {
        id: 10,
        image: "/images/badges/badge-10-a.png",
        title: "5 Cycling workouts",
        message: "Finish at least 5 cycling workouts this month. This achievement renews every month.",
        earned: false,
        last_earned: "13/09/2016",
        count: 2
      },
      {
        id: 11,
        image: "/images/badges/badge-11-a.png",
        title: "5 Gym workouts",
        message: "Finish at least 5 gym workouts this month. This achievement renews every month.",
        earned: true,
        last_earned: "23/11/2016",
        count: 10
      },
      {
        id: 12,
        image: "/images/badges/badge-12-a.png",
        title: "5 Walking workouts",
        message: "Finish at least 5 walking workouts this month. This achievement renews every month.",
        earned: true,
        last_earned: "08/11/2016",
        count: 13
      }
    ];
    return achievements[parseInt(params.id) - 1];
  }
});
