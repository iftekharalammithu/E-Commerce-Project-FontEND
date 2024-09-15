/* eslint-disable react/no-unescaped-entities */
import CommonForm from "@/components/Common/CommonForm";
import { loginFormControls } from "@/Config";
import { useToast } from "@/hooks/use-toast";
import { loginUser } from "@/Store/Auth_Slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { useToast } from "react-toastify";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  // const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        // console.log(data.payload);
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Login;
