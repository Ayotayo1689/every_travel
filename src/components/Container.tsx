import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  Bg?: boolean
}

export default function Container({ children, Bg }: ContainerProps) {
    return (
        <div className={`w-full  pt-10 pb-6 ${Bg ? "bg-none" : "bg-white"} py-2`}>
        <div className="container py-2  px-[6%] mx-auto flex items-center justify-between">
          {children}
        </div>
      </div>
    );
  }

