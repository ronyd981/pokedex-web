import { Outlet } from "react-router-dom";

// Components
import { Banner } from "@/components";

export default function PublicLayout() {
  return (
    <>
      <Banner />
      <Outlet />
    </>
  );
}
