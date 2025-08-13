import { Outlet } from "react-router-dom";
import Header from "@/components/blocks/Header";
import Footer from "@/components/blocks/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
