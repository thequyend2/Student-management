import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
  TableHead,
  Button
} from "@material-ui/core";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { FULL_NAME, YEAR_OF_BIRTH } from "../../constants";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500
  },

  iconSort: {
    cursor: "pointer"
  },

  btnEdit: {
    margin: 8
  }
});

const StudentList = ({
  onShowDialogDelete,
  onShowEditStudentDialog,
  onSortYearOfBirthIncrement,
  onSortYearOfBirthDecrement,
  onSortNameIncrement,
  onSortNameDecrement,
  studentList
}) => {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, studentList.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleShowDialogDelete = (data) => onShowDialogDelete(data);

  const handleShowEditStudentDialog = (data) => onShowEditStudentDialog(data);

  const handleSortYearOfBirthIncrement = () => onSortYearOfBirthIncrement();

  const handleSortYearOfBirthDecrement = (data) =>
    onSortYearOfBirthDecrement(data);

  const handleSortNameIncrement = () => onSortNameIncrement();

  const handleSortNameDecrement = (data) => onSortNameDecrement(data);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">
              <ArrowDownwardIcon
                onClick={() => handleSortNameDecrement(FULL_NAME)}
                className={classes.iconSort}
              />
              H??? v?? t??n
              <ArrowUpwardIcon
                onClick={handleSortNameIncrement}
                className={classes.iconSort}
              />
            </TableCell>
            <TableCell align="center">Gi???i t??nh</TableCell>
            <TableCell align="center">
              <ArrowDownwardIcon
                onClick={() => handleSortYearOfBirthDecrement(YEAR_OF_BIRTH)}
                className={classes.iconSort}
              />
              N??m sinh
              <ArrowUpwardIcon
                onClick={handleSortYearOfBirthIncrement}
                className={classes.iconSort}
              />
            </TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">?????a ch???</TableCell>
            <TableCell align="center">Chuy??n ng??nh</TableCell>
            <TableCell align="center">Tr???ng th??i</TableCell>
            <TableCell align="center">T??c v???</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? studentList.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : studentList
          ).map((student) => (
            <TableRow key={student.id}>
              <TableCell align="center">{student.id}</TableCell>
              <TableCell align="center">{student.fullName}</TableCell>
              <TableCell align="center">
                {student.sex === 10
                  ? "Nam"
                  : student.sex === 20
                  ? "N???"
                  : "Kh??c"}
              </TableCell>
              <TableCell align="center">{student.yearOfBirth}</TableCell>
              <TableCell align="center">{student.email}</TableCell>
              <TableCell align="center">{student.address}</TableCell>
              <TableCell align="center">
                {student.majors === 10
                  ? "C??ng ngh??? th??ng tin"
                  : student.majors === 20
                  ? "??i???n t??? vi???n th??ng"
                  : student.majors === 30
                  ? "K??? to??n"
                  : "Truy???n th??ng ??a ph????ng ti???n"}
              </TableCell>
              <TableCell align="center">
                {student.status === 10 ? "??ang h???c" : "???? ngh???"}
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.btnEdit}
                  onClick={() => handleShowEditStudentDialog(student)}
                >
                  S???a
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => handleShowDialogDelete(student.id)}
                >
                  X??a
                </Button>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
              colSpan={3}
              count={studentList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

StudentList.propTypes = {
  onShowDialogDelete: PropTypes.func,
  onShowEditStudentDialog: PropTypes.func,
  studentList: PropTypes.array.isRequired,
  onSortYearOfBirthIncrement: PropTypes.func.isRequired,
  onSortYearOfBirthDecrement: PropTypes.func.isRequired,
  onSortNameIncrement: PropTypes.func.isRequired,
  onSortNameDecrement: PropTypes.func.isRequired
};

export default StudentList;
