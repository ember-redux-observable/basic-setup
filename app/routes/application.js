import Ember from 'ember';

export default Ember.Route.extend({
  redux: Ember.inject.service(),

  init() {
    const store = this.get('redux.store');
    store.subscribe(() => {
      console.log(store.getState());
    });
    store.dispatch({ type: 'HELLO' });
  }
});
