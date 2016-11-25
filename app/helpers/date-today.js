import Ember from 'ember';

export function dateToday() {
  return moment().format("dddd, MMMM DD");
}

export default Ember.Helper.helper(dateToday);
