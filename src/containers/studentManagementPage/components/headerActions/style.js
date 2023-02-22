import styled from "styled-components";

export const StudentListWrapper = styled.div`
  width: auto;
  height: 100%;
  padding: 16px;

  .add-student {
    display: flex;
    justify-content: flex-end;
    padding: 8px;
  };

  .group-action-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  };

  .search-action {
    margin-left: 4px;
    align-items: center;
  };

  .btn-search {
    margin-left: 8px;
    margin-top: 2px;
  };
`;
