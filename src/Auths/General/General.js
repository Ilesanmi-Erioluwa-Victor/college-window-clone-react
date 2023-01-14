// export const verifyCode = async (code, email) => {
//   try {
//     const rawResponse = await fetch(verifyCodeUrl, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ code, email }),
//     });
//     const response = await rawResponse.json();
//     return response;
//   } catch (error) {
//     if (error) {
//       return error;
//     }
//   }
// };