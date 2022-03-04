import { reducer } from './reducer';

test('isCollapsed should be true', () => {
  const state = {
    isCollapsed: false,
  };

  const newState = reducer(state, 'TOGGLE_IS_COLLAPSED');

  expect(newState.isCollapsed).toBe(true);
});

test('isCollapsed should be false', () => {
  const state = {
    isCollapsed: true,
  };

  const newState = reducer(state, 'TOGGLE_IS_COLLAPSED');

  expect(newState.isCollapsed).toBe(false);
});

test('reducer should be throw error because action is invalid', () => {
  const state = {
    isCollapsed: true,
  };

  // @ts-ignore
  const callReducer = () => reducer(state, 'FAKE_ACTION');

  expect(callReducer).toThrowError();
});
