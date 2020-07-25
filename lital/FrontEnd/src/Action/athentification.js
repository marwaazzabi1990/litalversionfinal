import Axios from "axios";
import decode from "jwt-decode";

export function Athentificate(userdata) {
  return () =>
    Axios.post("http://localhost:2000/api/auth/login", userdata, {
      withCredentials: true,
    }).then((res) => {
      const decoded = decode(res.data);
      console.log(decoded);
      localStorage.setItem("Post", decoded.post);
      localStorage.setItem("user_id", decoded.user_id);
      window.location.pathname = "/product";
    });
}
