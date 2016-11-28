import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['dashboard'],
  didInsertElement(){
    var data = [
      {
        day: 1,
        cal: 125
      },
      {
        day: 2,
        cal: 134.2
      },
      {
        day: 3,
        cal: 257.6
      },
      {
        day: 4,
        cal: 243.9
      },
      {
        day: 5,
        cal: 368
      },
      {
        day: 6,
        cal: 224
      },
      {
        day: 7,
        cal: 89
      },
      {
        day: 8,
        cal: 187.6
      },
      {
        day: 9,
        cal: 429.8
      },
      {
        day: 10,
        cal: 30
      },
      {
        day: 11,
        cal: 143.8
      },
      {
        day: 12,
        cal: 125
      },
      {
        day: 13,
        cal: 65.4
      },
      {
        day: 14,
        cal: 18
      },
      {
        day: 15,
        cal: 136.7
      },
      {
        day: 16,
        cal: 32
      },
      {
        day: 17,
        cal: 22.8
      },
      {
        day: 18,
        cal: 245.3
      },
      {
        day: 19,
        cal: 143
      },
      {
        day: 20,
        cal: 382.6
      },
      {
        day: 21,
        cal: 34
      },
      {
        day: 22,
        cal: 262.7
      },
      {
        day: 23,
        cal: 42
      },
      {
        day: 24,
        cal: 235.7
      },
      {
        day: 25,
        cal: 102
      },
      {
        day: 26,
        cal: 325.2
      }
    ];
    var ndx = crossfilter(data);
    var dayDimension = ndx.dimension(function(record) {return record.day;});
    var calGroup = dayDimension.group().reduceSum(function(d) {return d.cal;});
    var barChartCal = dc.barChart("#dashboard-cal");
    barChartCal
      .width(344)
      .height(150)
      .margins({top: 20, right: 0, bottom: 20, left: 0})
      .dimension(dayDimension)
      .group(calGroup)
      .gap(5)
      .x(d3.scale.ordinal())
      .xUnits(dc.units.ordinal)
      .ordinalColors(['#ABEBC6'])
      .yAxis().tickValues([]);
    dc.renderAll();
  }
});
