import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('for-you', { path: '' });
  this.route('achievements');
  this.route('calendar');
  this.route('settings');
});

export default Router;
