import styled from "styled-components";

export const AddAndEditDialogWrapper = styled.div`
  width: auto;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-content {
    width: 450px;
    height: 550px;
  }

  .header {
    width: auto;
    height: 4%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
  }

  .content-form {
    width: auto;
    height: auto;
    padding: 16px 24px;
  }

  .input {
    margin-top: 16px;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    padding: 16px 24px;
  }

  .btn-cancel {
    margin-right: 24px;
  }

  .cancel {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: #757575;
      .btn-cancel-icon {
        color: white;
      }
    }
  }

  .btn-cancel-icon {
    color: #1976d2;
  }
`;
