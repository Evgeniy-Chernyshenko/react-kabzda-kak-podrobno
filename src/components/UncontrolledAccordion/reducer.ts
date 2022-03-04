type StateType = { isCollapsed: boolean };

type ActionType = 'TOGGLE_IS_COLLAPSED';

type ReducerType = (state: StateType, action: ActionType) => StateType;

export const reducer: ReducerType = (state, action) => {
  console.log('collapsedReducer');

  switch (action) {
    case 'TOGGLE_IS_COLLAPSED':
      return { ...state, isCollapsed: !state.isCollapsed };
    default:
      throw new Error('action is invalid');
  }
};
