import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  TextField,
  Select,
  FormControl,
  InputLabel,
  makeStyles
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import { StudentListWrapper } from "./style";
import { STATUS, MAJORS } from "../../constants";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const SEARCH = {
  search: "",
  status: "",
  majors: ""
};

const HeaderActions = ({
  onShowAddStudentDialog,
  onSearchStudent,
  onFiterStatus
}) => {
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState(SEARCH);
  const { search, status, majors } = searchValue;
  //#region handle
  const handleShowAddStudentDialog = () => onShowAddStudentDialog();

  const handleChangeSearch = (event) => {
    const { name, value } = event.target;
    const newSearchValue = {
      ...searchValue,
      [name]: value
    };
    setSearchValue(newSearchValue);
  };

  const handleChangeStatus = ({ event, STATUS }) => {
    const { value } = event.target;
    onFiterStatus({ value, field: STATUS });
  };

  const handleChangeMajors = ({ event, MAJORS }) => {
    const { value } = event.target;
    onFiterStatus({ value, field: MAJORS });
  };

  const handleSearchStudent = () => onSearchStudent(searchValue);
  //#endregion

  return (
    <StudentListWrapper>
      <div className="add-student">
        <Button
          color="primary"
          variant="outlined"
          onClick={handleShowAddStudentDialog}
        >
          <AddIcon />
          Thêm sinh viên
        </Button>
      </div>
      <div className="group-action-header">
        <div className="search-action">
          <TextField
            required
            name="search"
            value={search}
            type="text"
            id="outlined-required"
            placeholder="Tìm kiếm sinh viên..."
            variant="outlined"
            size="small"
            style={{ marginRight: "8px" }}
            autoComplete="off"
            onChange={(event) => handleChangeSearch(event)}
          />
          <Button
            color="primary"
            variant="contained"
            className="btn-search"
            onClick={() => handleSearchStudent(searchValue)}
          >
            <SearchIcon />
            Tìm kiếm
          </Button>
        </div>
        <div>
          <FormControl
            size="small"
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel htmlFor="outlined-age-native-simple">
              Trạng thái
            </InputLabel>
            <Select
              native
              value={status}
              onChange={(event) => handleChangeStatus({ event, STATUS })}
              label="Trạng thái"
              name="status"
            >
              <option value=""></option>
              <option value={10}>Đang học</option>
              <option value={20}>Đã nghỉ</option>
              <option value={404}>Tất cả</option>
            </Select>
          </FormControl>
          <FormControl
            size="small"
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel htmlFor="outlined-age-native-simple">
              Chuyên ngành
            </InputLabel>
            <Select
              native
              value={majors}
              name="majors"
              onChange={(event) => handleChangeMajors({ event, MAJORS })}
              label="Chuyên ngành"
            >
              <option value=""></option>
              <option value={10}>Công nghệ thông tin</option>
              <option value={20}>Điện tử viễn thông</option>
              <option value={30}>Kế toán</option>
              <option value={40}>Truyền thông đa phương tiện</option>
              <option value={404}>Tất cả</option>
            </Select>
          </FormControl>
        </div>
      </div>
    </StudentListWrapper>
  );
};

HeaderActions.propTypes = {
  onShowAddStudentDialog: PropTypes.func,
  onSearchStudent: PropTypes.func,
  onFiterStatus: PropTypes.func
};

export default HeaderActions;
