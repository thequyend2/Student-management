import { createSelector } from 'reselect';
const studentGlobalState = state => state.studentReducer;

export const getStudentListSelector = createSelector(
  studentGlobalState,
  state => state.studentList
);

export const getIsLoadingSelector = createSelector(
  studentGlobalState,
  state => state.isLoading
);

export const getIsShowSnackbarSelector = createSelector(
  studentGlobalState,
  state => state.isShowSnackbar
);

