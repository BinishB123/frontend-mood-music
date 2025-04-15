import { GiMusicalNotes } from "react-icons/gi";
import Signup from "../components/signUp";
import Login from "../components/login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { urgentreset } from "../redux/slice";

function LoginOrSignUp({ value }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo, success, message, error, errormessage } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    if (userInfo?.id) {
      navigate("/");
      return;
    }
    if (success && message) {
      toast.success(message);
    }
    if (error && errormessage) {
      toast.error(errormessage);
    }
    dispatch(urgentreset());
  }, [value, success, error]);

  return (
    <>
      <div className=" w-min-screen h-auto flex md:flex-row flex-col">
        <div className="w-[100%] md:w-[40%] h-[200px] md:h-screen bg-violet-950 flex flex-col ">
          <div className="w-[100%] mt-3 h-[50px]  flex  ml-4 space-x-1 ">
            <GiMusicalNotes className="text-3xl  md:text-4xl text-yellow-300" />
            <h1 className="pt-2 text-yellow-300 font-bold text-sm  letter-spacing-2 tracking-wider">
              MOOD-MUSIC
            </h1>
          </div>
          <div className="w-[100%] h-[200px]  flex justify-center text-center  items-end mb-5">
            <h1 className=" text-white text-md md:text-3xl  ">
              {value === "signup"
                ? "Create Your Account and Get Started!"
                : "WELCOME BACK !"}
            </h1>
          </div>
          <div className="w-[100%]  h-[400px] flex justify-center ">
            <h1 className="text-sm md:text-md w-[90%] text-white text-center font-semibold ">
            {value === "signup"
  ? "Sign up for MusicMood and discover playlists that vibe with your emotions—your perfect soundtrack is just a tap away!"
  : "Log in to MusicMood and dive back into your personalized music universe—feel every beat, match every mood!"}

            </h1>
          </div>
        </div>
        <div className="w-[100%] md:w-[60%] h-[470px]  md:h-[740px]  flex flex-col justify-center items-center   ">
          {value === "signup" ? <Signup value={value} /> : <Login />}
        </div>
      </div>
    </>
  );
}

export default LoginOrSignUp;
