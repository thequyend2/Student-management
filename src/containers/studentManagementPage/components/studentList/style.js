import styled from "styled-components";

export const StudentListWrapper = styled.div`
  width: auto;
  height: 100%;
  padding: 24px;

  .pagination {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
  }

  .icon-sort {
    cursor: pointer;
    &:hover {
      color: #1976d2;
    }
  }
`;
