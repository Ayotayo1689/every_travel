import { openModal } from "@/store/features/modalSlice";
import { useDispatch } from "react-redux";

const LoginPrompt = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#E6F0F1]  w-full p-3 rounded-md mb-6">
      <div className="flex flex-wrap gap-1">
        <span
          onClick={() => dispatch(openModal({ type: "login" }))}
          className="text-[#076476] underline font-medium"
        >
          Log in
        </span>
        <span>to book using your saved details or</span>
        <span
          onClick={() => dispatch(openModal({ type: "signup" }))}
          className="text-[#076476] underline font-medium"
        >
          create an account
        </span>
        <span>to easily manage your bookings anytime, anywhere</span>
      </div>
    </div>
  );
};

export default LoginPrompt;
