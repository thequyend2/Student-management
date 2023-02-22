import { takeLatest, fork, all, call, put } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";
import {
  getListStudentAPI,
  postInfoStudentAPI,
  deleteStudentAPI,
  searchStudentAPI,
  sortStudentAPI,
  editStudentAPI,
  filterStudentAPI
} from "../../services";

function* getListStudentProcess(params) {
  try {
    const response = yield call(getListStudentAPI, params);
    const { status, data } = response;
    if (status === 200) {
      yield put(actions.getListStudentSuccess(data));
    }
  } catch (err) {
    yield put(actions.getListStudentFailed(err));
  }
}

function* watchGetListStudent() {
  yield takeLatest(constants.HANDLE_GET_LIST_STUDENT, getListStudentProcess);
}

function* addStudentProcess(params) {
  try {
    const response = yield call(postInfoStudentAPI, params.data);
    const { status } = response;
    if (status === 201) {
      yield put(actions.addStudentSuccess());
      yield put(actions.getListStudent());
    }
  } catch (err) {
    yield put(actions.addStudentFailed(err.message));
  }
}

function* watchAddStudent() {
  yield takeLatest(constants.HANDLE_ADD_STUDENT, addStudentProcess);
}

function* deleteStudentProcess(params) {
  try {
    const response = yield call(deleteStudentAPI, params.data);
    const { status } = response;
    if (status === 200) {
      yield put(actions.deleteStudentSuccess());
      yield put(actions.getListStudent());
    }
  } catch (err) {
    yield put(actions.deleteStudentFailed(err.message));
  }
}

function* watchDeleteStudent() {
  yield takeLatest(constants.HANDLE_DELETE_STUDENT, deleteStudentProcess);
}

function* searchStudentProcess(params) {
  try {
    const response = yield call(searchStudentAPI, params.data.search);
    const { status } = response;
    if (status === 200) {
      yield put(actions.searchStudentSuccess(response.data));
    }
  } catch (err) {
    yield put(actions.searchStudentFailed(err.message));
  }
}

function* watchSearchStudent() {
  yield takeLatest(constants.HANDLE_SEARCH_STUDENT, searchStudentProcess);
}

function* sortNameDecrementProcess(params) {
  try {
    const response = yield call(sortStudentAPI, params.data);
    const { status } = response;
    if (status === 200) {
      yield put(actions.sortNameDecrementSuccess(response.data));
    }
  } catch (err) {
    yield put(actions.sortNameDecrementFailed(err.message));
  }
}

function* watchSortNameDecrement() {
  yield takeLatest(
    constants.HANDLE_SORT_NAME_DECREMENT,
    sortNameDecrementProcess
  );
}

function* sortYearOfBirthDecrementProcess(params) {
  try {
    const response = yield call(sortStudentAPI, params.data);
    const { status } = response;
    if (status === 200) {
      yield put(actions.sortYearOfBirthDecrementSuccess(response.data));
    }
  } catch (err) {
    yield put(actions.sortYearOfBirthDecrementFailed(err.message));
  }
}

function* watchSortYearOfBirthDecrement() {
  yield takeLatest(
    constants.HANDLE_SORT_YEAROFBIRTH_DECREMENT,
    sortYearOfBirthDecrementProcess
  );
}

function* editStudentProcess(params) {
  try {
    const response = yield call(editStudentAPI, {
      id: params.data.id,
      data: params.data
    });
    const { status } = response;
    if (status === 200) {
      yield put(actions.editStudentSuccess(response.data));
      yield put(actions.getListStudent());
    }
  } catch (err) {
    yield put(actions.editStudentFailed(err.message));
  }
}

function* watchEditStudent() {
  yield takeLatest(constants.HANDLE_EDIT_STUDENT, editStudentProcess);
}

function* filterStudentProcess(params) {
  try {
    const response = yield call(filterStudentAPI, params);
    const { status } = response;
    if (status === 200) {
      yield put(actions.filterStatusSucces(response.data));
      if (params.data.value === "404") {
        yield put(actions.getListStudent());
      }
    }
  } catch (err) {
    yield put(actions.filterStatusFailed(err.message));
  }
}

function* watchFilterStudent() {
  yield takeLatest(constants.HANDLE_FILTER_STATUS, filterStudentProcess);
}

export default function* watchsaga() {
  yield all([fork(watchGetListStudent)]);
  yield all([fork(watchAddStudent)]);
  yield all([fork(watchDeleteStudent)]);
  yield all([fork(watchSearchStudent)]);
  yield all([fork(watchSortNameDecrement)]);
  yield all([fork(watchSortYearOfBirthDecrement)]);
  yield all([fork(watchEditStudent)]);
  yield all([fork(watchFilterStudent)]);
}
