import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLayout from "./components/Admin/AdminLayout";
import Admin_Deshboard from "./pages/Admin/Admin_Deshboard";
import Admin_features from "./pages/Admin/Admin_features";
import Admin_Products from "./pages/Admin/Admin_Products";
import Admin_Order from "./pages/Admin/Admin_Order";
import Shopping_Layout from "./components/Shopping/Shopping_Layout";
import Not_found_page from "./pages/Not Found Page/Not_found_page";
import Shopping_Home from "./pages/Shopping/Shopping_Home";
import Shopping_Listing from "./pages/Shopping/Shopping_Listing";
import Shopping_Checkout from "./pages/Shopping/Shopping_Checkout";
import Shopping_account from "./pages/Shopping/Shopping_account";
import Checkauth from "./components/Common/Checkauth";
import Unauth_page from "./pages/Unauth_page/Unauth_page";

const App = () => {
  const isAuthenticaion = true;
  const user = {
    name: "John Doe",
    role: "user",
  };
  return (
    <div className="flex flex-col  overflow-hidden bg-white">
      <Routes>
        {/* /auth is the parent route. inside this route all are child route */}
        {/* and all the child route are render by outlet COmponent */}
        {/* Auth Layout */}
        <Route
          path="/auth"
          element={
            <Checkauth isAuthenticaion={isAuthenticaion} user={user}>
              <AuthLayout></AuthLayout>
            </Checkauth>
          }
        >
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
        </Route>
        {/* Admin Layout */}
        <Route
          path="/admin"
          element={
            <Checkauth isAuthenticaion={isAuthenticaion} user={user}>
              <AdminLayout></AdminLayout>
            </Checkauth>
          }
        >
          <Route
            path="admin_dashboard"
            element={<Admin_Deshboard></Admin_Deshboard>}
          ></Route>
          <Route
            path="admin_features"
            element={<Admin_features></Admin_features>}
          ></Route>
          <Route
            path="admin_products"
            element={<Admin_Products></Admin_Products>}
          ></Route>
          <Route
            path="admin_order"
            element={<Admin_Order></Admin_Order>}
          ></Route>
        </Route>
        {/* User Layout */}
        <Route
          path="/shop"
          element={
            <Checkauth isAuthenticaion={isAuthenticaion} user={user}>
              <Shopping_Layout></Shopping_Layout>
            </Checkauth>
          }
        >
          <Route
            path="shopping_home"
            element={<Shopping_Home></Shopping_Home>}
          ></Route>
          <Route
            path="shopping_account"
            element={<Shopping_account></Shopping_account>}
          ></Route>
          <Route
            path="shopping_checkout"
            element={<Shopping_Checkout></Shopping_Checkout>}
          ></Route>
          <Route
            path="shopping_listing"
            element={<Shopping_Listing></Shopping_Listing>}
          ></Route>
        </Route>
        <Route
          path="/unauth-page"
          element={<Unauth_page></Unauth_page>}
        ></Route>
        <Route path="*" element={<Not_found_page></Not_found_page>}></Route>
      </Routes>
    </div>
  );
};

export default App;
