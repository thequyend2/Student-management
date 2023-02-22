import * as constants from "./constants";

//#region get list
export const getListStudent = () => {
  return {
    type: constants.HANDLE_GET_LIST_STUDENT
  };
};

export const getListStudentSuccess = (data) => {
  return {
    type: constants.HANDLE_GET_LIST_STUDENT_SUCCESS,
    data
  };
};

export const getListStudentFailed = (data) => {
  return {
    type: constants.HANDLE_GET_LIST_STUDENT_FAILED,
    data
  };
};
//#endregion
//#region add student
export const addStudent = (data) => {
  return {
    type: constants.HANDLE_ADD_STUDENT,
    data
  };
};

export const addStudentSuccess = (data) => {
  return {
    type: constants.HANDLE_ADD_STUDENT_SUCCESS,
    data
  };
};

export const addStudentFailed = (data) => {
  return {
    type: constants.HANDLE_ADD_STUDENT_FAILED,
    data
  };
};
//#endregion
//#region  delete
export const deleteStudent = (data) => {
  return {
    type: constants.HANDLE_DELETE_STUDENT,
    data
  };
};

export const deleteStudentSuccess = (data) => {
  return {
    type: constants.HANDLE_DELETE_STUDENT_SUCCESS,
    data
  };
};

export const deleteStudentFailed = (data) => {
  return {
    type: constants.HANDLE_DELETE_STUDENT_FAILED,
    data
  };
};
//#endregion

export const sortYearOfBirthIncrement = () => {
  return {
    type: constants.HANDLE_SORT_YEAROFBIRTH_INCREMENT
  };
};

export const sortYearOfBirthDecrement = (data) => {
  return {
    type: constants.HANDLE_SORT_YEAROFBIRTH_DECREMENT,
    data
  };
};

export const sortYearOfBirthDecrementSuccess = (data) => {
  return {
    type: constants.HANDLE_SORT_YEAROFBIRTH_DECREMENT_SUCCESS,
    data
  };
};

export const sortYearOfBirthDecrementFailed = (data) => {
  return {
    type: constants.HANDLE_SORT_YEAROFBIRTH_DECREMENT_FAILED,
    data
  };
};

export const sortNameIncrement = () => {
  return {
    type: constants.HANDLE_SORT_NAME_INCREMENT
  };
};

export const sortNameDecrement = (data) => {
  return {
    type: constants.HANDLE_SORT_NAME_DECREMENT,
    data
  };
};

export const sortNameDecrementSuccess = (data) => {
  return {
    type: constants.HANDLE_SORT_NAME_DECREMENT_SUCCESS,
    data
  };
};

export const sortNameDecrementFailed = (data) => {
  return {
    type: constants.HANDLE_SORT_NAME_DECREMENT_FAILED,
    data
  };
};
//#region search student
export const searchStudent = (data) => {
  return {
    type: constants.HANDLE_SEARCH_STUDENT,
    data
  };
};

export const searchStudentSuccess = (data) => {
  return {
    type: constants.HANDLE_SEARCH_STUDENT_SUCCESS,
    data
  };
};

export const searchStudentFailed = (data) => {
  return {
    type: constants.HANDLE_SEARCH_STUDENT_FAILED,
    data
  };
};
//#endregion
//#region edit student
export const editStudent = (data) => {
  return {
    type: constants.HANDLE_EDIT_STUDENT,
    data
  };
};

export const editStudentSuccess = (data) => {
  return {
    type: constants.HANDLE_EDIT_STUDENT_SUCCESS,
    data
  };
};

export const editStudentFailed = (data) => {
  return {
    type: constants.HANDLE_EDIT_STUDENT_FAILED,
    data
  };
};
//#endregion
//#region
export const filterStatus = (data) => {
  return {
    type: constants.HANDLE_FILTER_STATUS,
    data
  };
};

export const filterStatusSucces = (data) => {
  return {
    type: constants.HANDLE_FILTER_STATUS_SUCCESS,
    data
  };
};

export const filterStatusFailed = (data) => {
  return {
    type: constants.HANDLE_FILTER_STATUS_FAILED,
    data
  };
};
//#endregion
