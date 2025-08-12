import { Outlet } from "react-router-dom";
import Navbar from "@/components/blocks/Navbar";
import Footer from "@/components/blocks/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-dvh flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
