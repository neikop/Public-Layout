export const ActionType = {
  IS_OPEN_COMING: 'IS_OPEN_COMING',
};

const coreui = (
  state = {
    isOpenComing: false,
  },
  { type, data },
) => {
  switch (type) {
    case ActionType.IS_OPEN_COMING:
      return { ...state, isOpenComing: data };
    default:
      return state;
  }
};

export default coreui;
