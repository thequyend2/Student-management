import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import {
  makeStyles,
  Paper,
  Typography,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { AddAndEditDialogWrapper } from "./style";

const STUDENT_INFO = {
  id: uuidv4(),
  fullName: "",
  email: "",
  address: "",
  yearOfBirth: "",
  sex: "",
  majors: "",
  status: true
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    marginTop: "16px"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const AddAndEditDialog = ({
  onCloseAddStudentDialog,
  addStudent,
  isEditStudent,
  onAddStudent,
  selectedStudent,
  onSaveStudentEdit
}) => {
  const classes = useStyles();

  //#region  state
  const [studentInfo, setStudentInfo] = useState(STUDENT_INFO);
  //#endregion

  const {
    fullName,
    email,
    address,
    yearOfBirth,
    sex,
    majors,
    status
  } = studentInfo;

  //#region handle
  const handleClose = () => onCloseAddStudentDialog();

  const handleAddStudent = (data) => {
    onAddStudent(data);
    onCloseAddStudentDialog();
  };

  const handleChangeStudentInfo = (event) => {
    const { name, value } = event.target;
    const newStudentInfo = {
      ...studentInfo,
      [name]: value
    };
    setStudentInfo(newStudentInfo);
  };

  const handleSaveStudentEdit = (data) => {
    onSaveStudentEdit(data);
    handleClose();
  };
  //#endregion
  useEffect(() => {
    if (isEditStudent) {
      setStudentInfo(selectedStudent);
    }
  }, []);

  return (
    <AddAndEditDialogWrapper>
      <Paper elevation={0} className="form-content">
        <div className="header">
          {addStudent ? (
            <Typography variant="h5">Thêm sinh viên</Typography>
          ) : isEditStudent ? (
            <Typography variant="h5">Sửa thông tin sinh viên</Typography>
          ) : null}
          <div className="cancel" onClick={handleClose}>
            <CancelIcon className="btn-cancel-icon" />
          </div>
        </div>
        <div className="content-form">
          <TextField
            value={fullName}
            name="fullName"
            type="text"
            className="input"
            required
            placeholder="Họ và tên"
            variant="outlined"
            size="small"
            fullWidth="true"
            autoComplete="off"
            onChange={(event) => handleChangeStudentInfo(event)}
          />
          <TextField
            value={email}
            name="email"
            required
            className="input"
            placeholder="Email"
            variant="outlined"
            size="small"
            fullWidth="true"
            autoComplete="off"
            onChange={(event) => handleChangeStudentInfo(event)}
          />
          <TextField
            value={address}
            name="address"
            required
            type="text"
            className="input"
            placeholder="Địa chỉ"
            variant="outlined"
            size="small"
            fullWidth="true"
            autoComplete="off"
            onChange={(event) => handleChangeStudentInfo(event)}
          />
          <TextField
            value={yearOfBirth}
            name="yearOfBirth"
            required
            className="input"
            type="date"
            placeholder="Tìm kiếm sinh viên..."
            variant="outlined"
            size="small"
            fullWidth="true"
            autoComplete="off"
            onChange={(event) => handleChangeStudentInfo(event)}
          />
          <FormControl
            variant="outlined"
            className={classes.formControl}
            size="small"
            fullWidth="true"
          >
            <InputLabel id="demo-simple-select-outlined-label">Nam</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={sex}
              name="sex"
              onChange={(event) => handleChangeStudentInfo(event)}
              label="Sex"
            >
              <MenuItem value={10}>Nam</MenuItem>
              <MenuItem value={20}>Nữ</MenuItem>
              <MenuItem value={30}>Khác</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="outlined"
            className={classes.formControl}
            size="small"
            fullWidth="true"
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Ngành học
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              value={majors}
              name="majors"
              onChange={(event) => handleChangeStudentInfo(event)}
            >
              <MenuItem value={10}>Công nghệ thông tin</MenuItem>
              <MenuItem value={20}>Điện tử viễn thông</MenuItem>
              <MenuItem value={30}>Kế toán</MenuItem>
              <MenuItem value={40}>Truyền thông đa phương tiện</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="outlined"
            className={classes.formControl}
            size="small"
            fullWidth="true"
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Trạng thái
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              value={status}
              name="status"
              onChange={(event) => handleChangeStudentInfo(event)}
            >
              <MenuItem value={10}>Đang học</MenuItem>
              <MenuItem value={20}>Đã nghỉ</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="footer">
          <Button
            variant="contained"
            className="btn-cancel"
            onClick={handleClose}
          >
            Hủy
          </Button>
          {addStudent ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAddStudent(studentInfo)}
            >
              Thêm
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSaveStudentEdit(studentInfo)}
            >
              Lưu
            </Button>
          )}
        </div>
      </Paper>
    </AddAndEditDialogWrapper>
  );
};

AddAndEditDialog.propTypes = {
  onCloseAddStudentDialog: PropTypes.func,
  addStudent: PropTypes.bool,
  onAddStudent: PropTypes.func.isRequired,
  selectedStudent: PropTypes.object.isRequired,
  onSaveStudentEdit: PropTypes.func.isRequired
};

export default AddAndEditDialog;
