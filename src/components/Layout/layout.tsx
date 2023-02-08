import { PropsWithChildren } from "react";
import NavBar from "../NavBar/navbar";


export default function Layout({children}: PropsWithChildren<{}>) {
    return (
      <div>
        <NavBar />
        {children}
      </div>
    );
  }