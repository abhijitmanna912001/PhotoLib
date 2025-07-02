import image1 from "@/assets/images/image1.jpg";
import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";
import image4 from "@/assets/images/image4.jpg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserAuth } from "@/context/useUserAuth";
import type { UserLogIn } from "@/types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialValue: UserLogIn = {
  email: "",
  password: "",
};

export default function Login() {
  const { googleSignIn, logIn } = useUserAuth();
  const navigate = useNavigate();
  const [userLoginInfo, setUserLoginInfo] = useState<UserLogIn>(initialValue);

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.error("Google Sign In Error:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log("User info:", userLoginInfo);
      await logIn(userLoginInfo.email, userLoginInfo.password);
    } catch (error) {
      console.error("Sign Up Error:", error);
    }
  };

  return (
    <div className="bg-slate-800 w-screen h-screen flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row w-full lg:max-w-6xl bg-card rounded-xl overflow-hidden shadow-lg h-full max-h-[95vh] lg:h-auto">
        {/* Left side images only on large screens */}
        <div className="hidden lg:block w-2/3 overflow-hidden">
          <div className="grid grid-cols-2 gap-2 h-full">
            <div className="aspect-[5/3]">
              <img
                src={image2}
                alt="Gallery"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="aspect-[5/3]">
              <img
                src={image1}
                alt="Gallery"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="aspect-[5/3]">
              <img
                src={image4}
                alt="Gallery"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="aspect-[5/3]">
              <img
                src={image3}
                alt="Gallery"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Right side form */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-6 overflow-y-auto">
          <div className="w-full max-w-md min-w-0">
            <Card
              className="border-0 shadow-none !bg-transparent"
              style={{ backgroundColor: "transparent" }}
            >
              <form onSubmit={handleSubmit}>
                <CardHeader className="space-y-2 px-2 sm:px-0 pt-2 sm:pt-0">
                  <CardTitle className="text-xl sm:text-2xl text-center mb-2">
                    PhotoLib
                  </CardTitle>
                  <CardDescription className="text-center text-sm sm:text-base">
                    Enter your email below to login your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3 sm:gap-4 px-2 sm:px-0">
                  <Button
                    onClick={handleGoogleSignIn}
                    className="w-full h-10 sm:h-auto"
                  >
                    <Icons.Google className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">
                        Or
                      </span>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-sm">
                      Email address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="dipesh@example.com"
                      value={userLoginInfo.email}
                      onChange={(e) =>
                        setUserLoginInfo({
                          ...userLoginInfo,
                          email: e.target.value,
                        })
                      }
                      className="h-10 sm:h-auto"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password" className="text-sm">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={userLoginInfo.password}
                      onChange={(e) =>
                        setUserLoginInfo({
                          ...userLoginInfo,
                          password: e.target.value,
                        })
                      }
                      className="h-10 sm:h-auto"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col px-2 sm:px-0 pb-2 sm:pb-0">
                  <Button className="w-full h-10 sm:h-auto" type="submit">
                    Log In
                  </Button>
                  <p className="mt-3 text-xs sm:text-sm text-center">
                    Don't have an account ? <Link to="/signup">Sign Up</Link>
                  </p>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
