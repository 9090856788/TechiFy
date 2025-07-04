import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import BlogLandingPage from "./pages/Blog/components/BlogLandingPage";
import BlogPostView from "./pages/Blog/components/BlogPostView";
import PostByTags from "./pages/Blog/components/PostByTags";
import SearchPosts from "./pages/Blog/components/SearchPosts";
import Dashboard from "./pages/Admin/components/Dashboard";
import BlogPosts from "./pages/Admin/components/BlogPosts";
import BlogPostEditor from "./pages/Admin/components/BlogPostEditor";
import Comments from "./pages/Admin/components/Comments";
import AdminLogin from "./pages/Admin/components/AdminLogin";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Default Routes */}
          <Route path="/" element={<BlogLandingPage />} />
          <Route path="/:slug" element={<BlogPostView />} />
          <Route path="/tag/:tagName" element={<PostByTags />} />
          <Route path="/search" element={<SearchPosts />} />

          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/posts" element={<BlogPosts />} />
            <Route path="/admin/create" element={<BlogPostEditor />} />
            <Route
              path="/admin/edit/:postSlug"
              element={<BlogPostEditor isEdit={true} />}
            />
            <Route path="/admin/comments" element={<Comments />} />
            <Route path="/admin-login" element={<AdminLogin />} />
          </Route>
        </Routes>
      </Router>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </>
  );
};

export default App;
