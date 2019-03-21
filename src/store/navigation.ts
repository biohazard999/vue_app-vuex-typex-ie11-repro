import { getStoreBuilder, BareActionContext } from 'vuex-typex';

const initialState: Types.NavigationState = { openState: false };

const b = getStoreBuilder<State.Root>().module('navigation', initialState);

const openStateGetter = b.read((state) => state.openState, 'openState');

function setOpenState(state: Types.NavigationState, payload: { isOpen: boolean }) {
  state.openState = payload.isOpen;
}

// tslint:disable: no-use-before-declare
async function toggleNavigation(context: BareActionContext<Types.NavigationState, State.Root>) {
  navigation.commitOpenState({ isOpen: !context.state.openState });
}
async function closeNavigation() {
  navigation.commitOpenState({ isOpen: false });
}
// tslint:enable: no-use-before-declare

// state
const stateGetter = b.state();

const navigation = {
  get state() {
    return stateGetter();
  },

  get openState() {
    return openStateGetter();
  },

  commitOpenState: b.commit(setOpenState),

  dispatchToggleNavigation: b.dispatch(toggleNavigation),
  dispatchCloseNavigation: b.dispatch(closeNavigation),
};

export default navigation;
