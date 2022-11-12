export const returnZegoCloudAccesToken = () => {
  return localStorage.getItem("sdk_token");
};

export const setStudentToken = (token) => {
  window.localStorage.setItem("college_student_token", token);
};


export const getStudentToken = () => {
  return window.localStorage.getItem("college_student_token");
};

export const removeStudentToken = () => {
  return window.localStorage.removeItem("college_student_token");
};

export const setTutorToken = (token) => {
  window.localStorage.setItem("college_tutor_token", token);
};

// Tutor Tokens...

export const getTutorToken = () => {
  return window.localStorage.getItem("college_tutor_token");
};

export const removeTutorToken = () => {
  return window.localStorage.removeItem("college_tutor_token");
};