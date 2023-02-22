import { produce } from "immer";
import _reverse from "lodash/reverse";
import * as constants from "./constants";

const initialState = {
  studentList: [],
  isLoading: false,
  error: "",
  isShowSnackbar: false
};

const studentReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case constants.HANDLE_GET_LIST_STUDENT:
        draft.isLoading = true;
        break;
      case constants.HANDLE_GET_LIST_STUDENT_SUCCESS:
        draft.studentList = action.data;
        draft.isLoading = false;
        break;
      case constants.HANDLE_GET_LIST_STUDENT_FAILED:
        draft.error = action.data;
        draft.isLoading = false;
        break;
      case constants.HANDLE_ADD_STUDENT_SUCCESS:
        draft.isShowSnackbar = true;
        break;
      case constants.HANDLE_ADD_STUDENT_FAILED:
        draft.isShowSnackbar = false;
        break;
      case constants.HANDLE_SORT_YEAROFBIRTH_INCREMENT:
        draft.studentList = _reverse(draft.studentList, "yearOfBirth");
        break;
      case constants.HANDLE_SORT_YEAROFBIRTH_DECREMENT_SUCCESS:
        draft.studentList = action.data;
        break;
      case constants.HANDLE_SORT_NAME_INCREMENT:
        draft.studentList = draft.studentList.sort((a, b) => {
          if (a.fullName.toLowerCase() < b.fullName.toLowerCase()) {
            return -1;
          }
          if (a.fullName.toLowerCase() > b.fullName.toLowerCase()) {
            return 1;
          }
          return 0;
        });
        break;
      case constants.HANDLE_SORT_NAME_DECREMENT_SUCCESS:
        draft.studentList = action.data;
        break;
      case constants.HANDLE_SEARCH_STUDENT_SUCCESS:
        draft.studentList = action.data;
        break;
      case constants.HANDLE_FILTER_STATUS_SUCCESS:
        draft.studentList = action.data;
        break;
      default:
        return state;
    }
  });
};

export default studentReducer;
