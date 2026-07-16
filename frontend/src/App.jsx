import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admission from "./pages/Admission";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Notice from "./pages/Notice";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import Teachers from "./pages/admin/Teachers";
import Students from "./pages/admin/Students";
import Admissions from "./pages/admin/Admissions";
import GalleryAdmin from "./pages/admin/Gallery";
import EventsAdmin from "./pages/admin/Events";
import Notices from "./pages/admin/Notices";
import Profile from "./pages/admin/Profile";
import Settings from "./pages/admin/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= Public Website ================= */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
          <Route path="admission" element={<Admission />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="events" element={<Events />} />
          <Route path="notice" element={<Notice />} />
          <Route path="contact" element={<Contact />} />

          <Route path="login" element={<Login />} />
        </Route>

        {/* ================= Admin Panel ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />

          <Route path="teachers" element={<Teachers />} />
          <Route path="students" element={<Students />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="gallery" element={<GalleryAdmin />} />
          <Route path="events" element={<EventsAdmin />} />
          <Route path="notices" element={<Notices />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* ================= 404 ================= */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;