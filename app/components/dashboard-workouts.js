import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['dashboard', 'dashboard-orange'],
  didInsertElement(){
    var data = [
      {
        day: 1,
        workouts: 1
      },
      {
        day: 2,
        workouts: 2
      },
      {
        day: 3,
        workouts: 2
      },
      {
        day: 4,
        workouts: 4
      },
      {
        day: 5,
        workouts: 3
      },
      {
        day: 6,
        workouts: 2
      },
      {
        day: 7,
        workouts: 1
      },
      {
        day: 8,
        workouts: 1
      },
      {
        day: 9,
        workouts: 2
      },
      {
        day: 10,
        workouts: 1
      },
      {
        day: 11,
        workouts: 2
      },
      {
        day: 12,
        workouts: 2
      },
      {
        day: 13,
        workouts: 1
      },
      {
        day: 14,
        workouts: 0
      },
      {
        day: 15,
        workouts: 2
      },
      {
        day: 16,
        workouts: 0
      },
      {
        day: 17,
        workouts: 0
      },
      {
        day: 18,
        workouts: 2
      },
      {
        day: 19,
        workouts: 1
      },
      {
        day: 20,
        workouts: 3
      },
      {
        day: 21,
        workouts: 0
      },
      {
        day: 22,
        workouts: 3
      },
      {
        day: 23,
        workouts: 1
      },
      {
        day: 24,
        workouts: 2
      },
      {
        day: 25,
        workouts: 2
      },
      {
        day: 26,
        workouts: 3
      }
    ];
    var ndx = crossfilter(data);
    var dayDimension = ndx.dimension(function(record) {return record.day;});
    var workoutsGroup = dayDimension.group().reduceSum(function(d) {return d.workouts;});
    var barChartWorkouts = dc.barChart("#dashboard-workouts");
    barChartWorkouts
      .width(344)
      .height(150)
      .margins({top: 20, right: 0, bottom: 20, left: 0})
      .dimension(dayDimension)
      .group(workoutsGroup)
      .gap(5)
      .x(d3.scale.ordinal())
      .xUnits(dc.units.ordinal)
      .ordinalColors(['#FAD7A0'])
      .yAxis().tickValues([]);
    dc.renderAll();
  }
});
