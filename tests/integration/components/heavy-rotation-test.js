import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('heavy-rotation', 'Integration | Component | heavy rotation', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{heavy-rotation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#heavy-rotation}}
      template block text
    {{/heavy-rotation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
