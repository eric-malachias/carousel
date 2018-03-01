import { createSelector } from 'reselect';

const homeDataSelector = state => state.home;

const resultSelector = createSelector(
  homeDataSelector,
  payload => null //payload.get('result')
);

export const homeSelector = state => ({
  result: resultSelector(state),
});
