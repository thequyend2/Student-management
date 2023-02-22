import React, { useState, } from 'react';
import { Snackbar, Button } from '@material-ui/core';
import PropTypes from "prop-types";

const SnackbarNotify = ({ contentNotify, isShowSnackbar }) => {
  const { vertical, horizontal } = state;
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  //#region 
  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button 
        onClick={handleClick({ 
          vertical: 'bottom', 
          horizontal: 'left' })}
        >
          Bottom-Left
        </Button>
    </React.Fragment>
  );
  //#endregion

  return (
    <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={isShowSnackbar}
        onClose={handleClose}
        message={contentNotify}
        key={vertical + horizontal}
        // disableWindowBlurListener="true"
      />
    </div>
  );
};

SnackbarNotify.propTypes = {
  contentNotify: PropTypes.string.isRequired,
  isShowSnackbar: PropTypes.bool.isRequired,
};

export default SnackbarNotify;
