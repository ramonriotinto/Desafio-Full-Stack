import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    ILoginContext,
    ILoginContextProps,
    ISendLogin,
} from "../interfaces/login.interfaces";
import { IUserResponse } from "../interfaces/user.interfaces";
import { Api } from "../Services/api";
import { DashboardContext } from "./DashboardContext";

export const LoginContext = createContext<ILoginContext>({} as ILoginContext);

export const LoginProvider = ({ children }: ILoginContextProps) => {
    const { setPageUser } = useContext(DashboardContext);

    const [loading, setLoading] = useState<IUserResponse[]>([]);
    const [usuarios, setUsuarios] = useState<IUserResponse>(
        {} as IUserResponse
    );
    const loginNavigate = useNavigate();
    const dashboardNavigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("@userToken");
        const userId = localStorage.getItem("@userId");

        if (token) {
            Api.defaults.headers.authorization = `Bearer ${token}`;
            Api.get(`/users/${userId}`)
                .then((res) => {
                    setUsuarios(res.data);
                    setPageUser(res.data);
                    dashboardNavigate("/dashboard");
                })
                .catch((err) => {
                    console.log(err);
                    localStorage.clear();
                });
        } else {
            loginNavigate("/");
        }
    }, []);

    async function sendLogin(data: ISendLogin) {
        await Api.post("/login", data)
            .then((res) => {
                toast.success("Logado com Sucesso", {
                    position: "bottom-center",
                    autoClose: 2000,
                    theme: "colored",
                });
                setLoading(res.data.findUsers);
                setPageUser(res.data.findUsers);
                localStorage.setItem("@userToken", res.data.tokenUser);
                localStorage.setItem("@userId", res.data.findUsers.id);
                dashboardNavigate("/dashboard");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Login Inválido", {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "dark",
                });
            });
    }

    return (
        <LoginContext.Provider
            value={{ loading, setLoading, usuarios, setUsuarios, sendLogin }}
        >
            {children}
        </LoginContext.Provider>
    );
};
