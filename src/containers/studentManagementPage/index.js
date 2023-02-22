import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { StudentsPageWrapper } from "./style";
import {
  getStudentListSelector,
  getIsLoadingSelector,
  getIsShowSnackbarSelector
} from "./selector";
import {
  getListStudent,
  addStudent,
  deleteStudent,
  sortYearOfBirthIncrement,
  sortNameIncrement,
  sortNameDecrement,
  sortYearOfBirthDecrement,
  searchStudent,
  editStudent,
  filterStatus
} from "./actions";
import HeaderActions from "./components/headerActions";
import StudentList from "./components/studentList";
import AddAndEditDialog from "./components/addAndEditDialog";
import ConfirmDialog from "./components/confirmDialog";
import * as requestStatus from "../../reducer/RequestStatus";
// import SnackbarNotify from "../../components/common/snackbarNotify";

const StudentManagementPage = ({
  handleGetListStudent,
  handleDispatAddStudent,
  handleDispatchDeleteStudent,
  handleDispatchSortYearOfBirthIncrement,
  handleDispatchSortYearOfBirthDecrement,
  handleDispatchSortNameIncrement,
  handleDispatchSortNameDecrement,
  handleDispatchSearchStudent,
  handleDispatchSaveStudentEdit,
  handleDispatchFilterStatus,
  studentList,
  isLoading,
  isShowSnackbar
}) => {
  //#region state
  const [isShowDialogDelete, setIsShowDialogDelete] = useState(false);
  const [isShowAddStudentDialog, setIsShowAddStudentDialog] = useState(false);
  const [addStudent, setAddStudent] = useState(false);
  const [isEditStudent, setIsEditStudent] = useState(false);
  const [idStudent, setIdStudent] = useState();
  const [selectedStudent, setSelectedStudent] = useState();
  //#endregion

  //#region handle
  const handleShowDialogDelete = (data) => {
    setIsShowDialogDelete(true);
    setIdStudent(data);
  };

  const handleCloseDialogDelete = () => setIsShowDialogDelete(false);

  const handleShowAddStudentDialog = () => {
    setIsShowAddStudentDialog(true);
    setAddStudent(true);
  };

  const handleCloseAddStudentDialog = () => {
    setIsShowAddStudentDialog(false);
    setAddStudent(false);
    setIsEditStudent(false);
  };

  const handleShowEditStudentDialog = (data) => {
    setIsShowAddStudentDialog(true);
    setIsEditStudent(true);
    setSelectedStudent(data);
  };

  const handleAddStudent = (data) => handleDispatAddStudent(data);

  const handleDeleteStudent = (data) => handleDispatchDeleteStudent(data);

  const handleSortYearOfBirthIncrement = () =>
    handleDispatchSortYearOfBirthIncrement();

  const handleSortYearOfBirthDecrement = (data) =>
    handleDispatchSortYearOfBirthDecrement(data);

  const handleSortNameIncrement = (data) =>
    handleDispatchSortNameIncrement(data);

  const handleSortNameDecrement = (data) =>
    handleDispatchSortNameDecrement(data);

  const handleSearchStudent = (data) => handleDispatchSearchStudent(data);

  const handleSaveStudentEdit = (data) => handleDispatchSaveStudentEdit(data);

  const handleFiterStatus = (data) => handleDispatchFilterStatus(data);

  //#endregion

  //#region useEffect
  useEffect(() => {
    handleGetListStudent();
  }, []);

  // useEffect(() => {
  //   if (requestStatus.handleRequestStatusFailed(isLoading)) {
  //     console.log("get list failed");
  //   }
  // }, [isLoading]);
  //#endregion

  return (
    <StudentsPageWrapper>
      {isShowAddStudentDialog ? (
        <div className="add-edit-dialog">
          <AddAndEditDialog
            onCloseAddStudentDialog={handleCloseAddStudentDialog}
            onAddStudent={handleAddStudent}
            addStudent={addStudent}
            isEditStudent={isEditStudent}
            selectedStudent={selectedStudent}
            onSaveStudentEdit={handleSaveStudentEdit}
          />
        </div>
      ) : null}
      {isShowDialogDelete ? (
        <div className="confirm-dialog">
          <ConfirmDialog
            isShowDialogDelete={isShowDialogDelete}
            onDeleteStudent={handleDeleteStudent}
            onCloseDialogDelete={handleCloseDialogDelete}
            idStudent={idStudent}
          />
        </div>
      ) : null}
      {/* {isShowSnackbar ? (
        <div className="snackbar">
          <SnackbarNotify 
            contentNotify="Thành công"
            isShowSnackbar={isShowSnackbar}
          />
        </div>
      ) : null} */}
      <Typography variant="h4" component="h2" style={{ paddingTop: "16px" }}>
        Quản lý sinh viên
      </Typography>
      <HeaderActions
        onShowAddStudentDialog={handleShowAddStudentDialog}
        onSearchStudent={handleSearchStudent}
        onFiterStatus={handleFiterStatus}
      />
      <StudentList
        onShowDialogDelete={handleShowDialogDelete}
        onShowEditStudentDialog={handleShowEditStudentDialog}
        onSortYearOfBirthIncrement={handleSortYearOfBirthIncrement}
        onSortYearOfBirthDecrement={handleSortYearOfBirthDecrement}
        onSortNameIncrement={handleSortNameIncrement}
        onSortNameDecrement={handleSortNameDecrement}
        studentList={studentList}
        isLoading={isLoading}
      />
    </StudentsPageWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    studentList: getStudentListSelector(state),
    isLoading: getIsLoadingSelector(state),
    isShowSnackbar: getIsShowSnackbarSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetListStudent: () => dispatch(getListStudent()),
    handleDispatAddStudent: (data) => dispatch(addStudent(data)),
    handleDispatchDeleteStudent: (data) => dispatch(deleteStudent(data)),
    handleDispatchSortYearOfBirthIncrement: () =>
      dispatch(sortYearOfBirthIncrement()),
    handleDispatchSortYearOfBirthDecrement: (data) =>
      dispatch(sortYearOfBirthDecrement(data)),
    handleDispatchSortNameIncrement: () => dispatch(sortNameIncrement()),
    handleDispatchSortNameDecrement: (data) =>
      dispatch(sortNameDecrement(data)),
    handleDispatchSearchStudent: (data) => dispatch(searchStudent(data)),
    handleDispatchSaveStudentEdit: (data) => dispatch(editStudent(data)),
    handleDispatchFilterStatus: (data) => dispatch(filterStatus(data))
  };
};

StudentManagementPage.propTypes = {
  studentList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isShowSnackbar: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentManagementPage);
