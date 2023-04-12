import React from "react";
import { GlobalStyle } from "./Styles/global";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginProvider } from "./Context/LoginContext";
import { RegisterProvider } from "./Context/RegisterContext";
import { Rotas } from "./Routes/routes";
import { DashboardProvider } from "./Context/DashboardContext";

function App() {
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <GlobalStyle />
            <DashboardProvider>
                <LoginProvider>
                    <RegisterProvider>
                        <Rotas />
                    </RegisterProvider>
                </LoginProvider>
            </DashboardProvider>
        </div>
    );
}

export default App;
