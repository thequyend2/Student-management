import styled from "styled-components";

export const StudentsPageWrapper = styled.div`
  max-width: 100wh;
  height: 100%;
  position: relative;
  z-index: 1;

  .add-edit-dialog {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .confirm-dialog {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0%;
    z-index: 3;
  }

  .snackbar {
  }
`;
