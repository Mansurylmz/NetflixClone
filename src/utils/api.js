import axios from "axios";

const api=axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2JmMWExZDY4YzI0Nzg1ZTEyZDRhNDY1ZjhiOTkyNCIsIm5iZiI6MTczOTgwMjA0Ny40OTMsInN1YiI6IjY3YjM0NWJmYWFhYzNiMTY3NGUwZTg2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rbp9zABbhb161JYivDfWEXeZw8AU7pjFdJ9R5uVwqPc"
      }
})
export default api