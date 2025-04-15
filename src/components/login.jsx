import { useReducer } from "react";
import loginReducer from "../reducer/loginReducer";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/thunk/auth";
import { useNavigate } from "react-router";

function Login() {
  const loginDipatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, dispatch] = useReducer(loginReducer, {
    email: "",
    password: "",
  });

  

  const login = () => {
    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(loginData.email)
    ) {
      return toast.warning("please provide valid emailId ");
    }
    loginDipatch(loginUser(loginData));
  };

  return (
    <>
      <div className="w-[80%] md:w-[60%] h-[370px] md:h-[350px]  rounded-md shadow-lg flex flex-col space-y-3 items-center border-2 border-violet-200 ">
        <div className="w-[80%] h-[50px]  mt-5">
          <h1 className="text-2xl text-center text-violet-700 font-bold ">
            LOGIN
          </h1>
        </div>

        <div className="w-[80%] h-[60px] ">
          <h2 className="text-sm text-violet-700">Email</h2>
          <input
            type="text"
            className="w-full h-[40px] pl-4 border-2 rounded-sm border-violet-400 outline-none"
            value={loginData.email}
            onChange={(e) => dispatch({ type: "email", email: e.target.value })}
          />
        </div>
        <div className="w-[80%] h-[60px] ">
          <h2 className="text-sm text-violet-700">Password</h2>
          <input
            type="password"
            value={loginData.password}
            className="w-full h-[40px] border-2  pl-4 rounded-sm border-violet-400 outline-none"
            onChange={(e) =>
              dispatch({ type: "password", password: e.target.value })
            }
          />
        </div>
        <div className="w-[80%] h-[100px]  flex flex-col space-y-2 justify-center">
          <button
            className="w-[100%] cursor-pointer h-[50px] bg-violet-700 text-xl text-white rounded-md font-semibold"
            onClick={login}
          >
            SIGN IN
          </button>
          <h1
            className="text-sm text-grey-500 text-center font-semibold cursor-pointer "
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign-Up if you don't have an account ?
          </h1>
        </div>
      </div>
    </>
  );
}

export default Login;
