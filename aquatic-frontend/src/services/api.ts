// import axios from "axios";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
// });

// export const detectMedia = (file: File) => {
//   const formData = new FormData();
//   formData.append("file", file);

//   return api.post("/detect-video/", formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });
// };


import axios from "axios";

const api = axios.create({
  baseURL:import.meta.env.VITE_API_URL || "http://127.0.0.1:8000",
});

export const detectMedia = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await api.post("/detect", formData);
  return res.data;
};
