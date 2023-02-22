import { FULL_NAME } from "../containers/studentManagementPage/constants";
import Request from "../ultils/RequestHelper";

export const getListStudentAPI = () => {
  return Request.get({
    url: "/students"
  });
};

export const postInfoStudentAPI = (data) => {
  return Request.post({
    url: "/students",
    data
  });
};

export const deleteStudentAPI = (data) => {
  return Request.delete({
    url: `/students/${data}`
  });
};

export const editStudentAPI = (data) => {
  return Request.put({
    url: `/students/${data.data.id}`,
    data: data.data
  });
};

export const searchStudentAPI = (data) => {
  return Request.get({
    url: `/students?${FULL_NAME}=${data}`
  });
};

export const paginationListStudentAPI = (data) => {
  return Request.get({
    url: `/students?page=${data.data.page}&limit=${data.data.limit}`
  });
};

export const sortStudentAPI = (data) => {
  return Request.get({
    url: `/students?sortBy=${data}&order=desc`
  });
};

export const filterStudentAPI = (data) => {
  return Request.get({
    url: `/students?${data.data.field}=${data.data.value}`
  });
};
