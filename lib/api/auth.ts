import axios from "./index"

interface SignUpApiBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  birthday: string;
}

export const signupAPI = (body: SignUpApiBody) => axios.post("/api/auth/signup", body);
