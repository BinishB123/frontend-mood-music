import { useReducer } from "react";
import signupReducer from "../reducer/signUpReducer";
import { toast } from "sonner";
import { signUpUser } from "../redux/thunk/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function Signup() {
  const signUpDispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpData, dispatch] = useReducer(signupReducer, {
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const submitfunction = () => {
    if (!/^[A-Za-z]+$/.test(signUpData.name.trim())) {
      return toast.warning("please provide a proper name");
    }
    if (
      !/^[0-9]+$/.test(signUpData.mobile.trim()) ||
      signUpData.mobile.length !== 10
    ) {
      return toast.warning("please provide a valid mobile number");
    }
    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(signUpData.email)
    ) {
      return toast.warning("please provide valid emailId ");
    }
    if (signUpData.password.trim().length < 8) {
      return toast.warning("password must contain atleast 8 characters ");
    }

    signUpDispatch(signUpUser(signUpData));
  };

  return (
    <>
      <div className="w-[80%] md:w-[60%] h-[450px] md:h-[470px]  rounded-md shadow-lg flex flex-col space-y-3 items-center border-2 border-violet-200 ">
        <div className="w-[80%] h-[50px]  mt-5">
          <h1 className="text-2xl text-center text-violet-900 font-bold ">
            SIGNUP
          </h1>
        </div>
        <div className="w-[80%] h-[60px] ">
          <h2 className="text-sm text-violet-700">Name</h2>
          <input
            value={signUpData.name}
            onChange={(e) => dispatch({ type: "name", name: e.target.value })}
            type="text"
            className="w-full  pl-4 h-[40px] border-2 rounded-sm border-violet-400 outline-none"
            name=""
            id=""
          />
        </div>
        <div className="w-[80%] h-[60px] ">
          <h2 className="text-sm text-violet-700">Mobile</h2>
          <input
            value={signUpData.mobile}
            onChange={(e) =>
              dispatch({ type: "mobile", mobile: e.target.value })
            }
            type="text"
            className="w-full  pl-4 h-[40px] border-2 rounded-sm border-violet-400 outline-none"
            name=""
            id=""
          />
        </div>
        <div className="w-[80%] h-[60px] ">
          <h2 className="text-sm text-violet-700">Email</h2>
          <input
            value={signUpData.email}
            onChange={(e) => dispatch({ type: "email", email: e.target.value })}
            type="text"
            className="w-full h-[40px]  pl-4 border-2 rounded-sm border-violet-400 outline-none"
            name=""
            id=""
          />
        </div>
        <div className="w-[80%] h-[60px] ">
          <h2 className="text-sm text-violet-700">Password</h2>
          <input
            value={signUpData.password}
            onChange={(e) =>
              dispatch({ type: "password", password: e.target.value })
            }
            type="password"
            className="w-full h-[40px]  pl-4 border-2 rounded-sm border-violet-400 outline-none"
            name=""
            id=""
          />
        </div>
        <div className="w-[80%] h-[100px]  flex flex-col justify-center">
          <button
            className=" hover:bg-violet-700  w-[100%] h-[50px] bg-violet-500 text-xl cursor-pointer text-white rounded-md font-semibold"
            onClick={submitfunction}
          >
            SIGN UP
          </button>
          <h1
            className="text-sm text-grey-500 text-center font-semibold cursor-pointer "
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign-In if you have an account ?
          </h1>
        </div>
      </div>
    </>
  );
}

export default Signup;
