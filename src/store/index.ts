import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getStoreBuilder } from 'vuex-typex';
import './navigation';

Vue.use(Vuex);

const store: Store<State.Root> = getStoreBuilder<State.Root>().vuexStore();

export default store;
