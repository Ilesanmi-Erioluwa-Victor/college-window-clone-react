const urlPathRegisterTutor = "https://k9lixr.deta.dev/tutor_signup/";
const urlPathTutorLogin = "https://k9lixr.deta.dev/tutor_signin/";
const createClass = "https://k9lixr.deta.dev/create_class/";
const getTutorsDetails = "https://k9lixr.deta.dev/authenticate/";
const getClasses = "https://k9lixr.deta.dev/get_classes/";
const startClassurl = "https://k9lixr.deta.dev/start_class/";
const endClassUrl = "https://k9lixr.deta.dev/end_class/";

export const Signup_Tutor = async ({
  password,
  email,
  profileImage,
  dateOfBirth,
  name,
}) => {
  try {
    const rawResponse = await fetch(urlPathRegisterTutor, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        dateOfBirth,
        profileImage,
      }),
    });
    const response = await rawResponse.json();
    return response;
  } catch (error) {
    if (error) {
      return error;
    }
  }
};

export const LoginTutor = async ({ password, email }) => {
  try {
    const rawResponse = await fetch(urlPathTutorLogin, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const response = await rawResponse.json();
    return response;
  } catch (error) {
    if (error) {
      return error;
    }
  }
};

export const creatClass = async (
  courseTitle,
  CourseDescription,
  StartTime,
  token
) => {
  try {
    const rawResponse = await fetch(createClass, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseTitle,
        CourseDescription,
        StartTime,
        token,
      }),
    });
    const response = await rawResponse.json();
    return response;
  } catch (error) {
    if (error) {
      return error;
    }
  }
};

export const authenticateTutors = async (token) => {
  try {
    const tutorsDetails = await fetch(getTutorsDetails, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
      }),
    });
    return await tutorsDetails.json();
  } catch (error) {
    return error;
  }
};

export const getTutorsClasses = async () => {
  try {
    const get_classes = await fetch(getClasses, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await get_classes.json();
  } catch (error) {
    return error;
  }
};

export const startClass = async (id) => {
  try {
    const rawResponse = await fetch(startClassurl + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const response = await rawResponse.json();
    return response;
  } catch (error) {
    if (error) {
      return error;
    }
  }
};

export const endClass = async (id) => {
  try {
    const rawResponse = await fetch(endClassUrl + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const response = await rawResponse.json();
    return response;
  } catch (error) {
    if (error) {
      return error;
    }
  }
};
