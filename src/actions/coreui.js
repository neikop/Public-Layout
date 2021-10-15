import { ActionType } from 'reducers/coreui';
import { store } from 'reducers';

const openComingSoon = (data) => {
  store.dispatch({
    type: ActionType.IS_OPEN_COMING,
    data,
  });
};

export const coreuiActions = {
  openComingSoon,
};
