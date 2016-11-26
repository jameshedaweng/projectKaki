import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('proactive-today', 'Integration | Component | proactive today', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{proactive-today}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#proactive-today}}
      template block text
    {{/proactive-today}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
