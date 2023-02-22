import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Slide
} from "@material-ui/core";
import { ConfirmDialogWrapper } from "./style";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmDialog = ({
  isShowDialogDelete,
  onDeleteStudent,
  onCloseDialogDelete,
  idStudent
}) => {
  //#region handle
  const handleClose = () => onCloseDialogDelete();

  const handleDeleteStudent = (data) => {
    onDeleteStudent(data);
    onCloseDialogDelete();
  };
  //#endregion

  return (
    <ConfirmDialogWrapper>
      <Dialog
        open={isShowDialogDelete}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>Bạn có chắc muốn xóa sinh viên này?</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" size="small">
            Hủy
          </Button>
          <Button
            onClick={() => handleDeleteStudent(idStudent)}
            variant="contained"
            color="primary"
            size="small"
          >
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </ConfirmDialogWrapper>
  );
};

ConfirmDialog.propTypes = {
  isShowDialogDelete: PropTypes.bool,
  onDeleteStudent: PropTypes.func.isRequired,
  onCloseDialogDelete: PropTypes.func
};

export default ConfirmDialog;
