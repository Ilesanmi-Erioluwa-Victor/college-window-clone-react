import { CollegeBaseUri } from "../../Utils/BaseUri";

export const registerUser = async ({ name, password, email }) => {
  try {
    const Response = await fetch(`${CollegeBaseUri}/student_signup/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password, name }),
    });

    const feedBack = await Response.json();

    console.log(feedBack)
  } catch (error) {
    console.log(error)
  }
};
