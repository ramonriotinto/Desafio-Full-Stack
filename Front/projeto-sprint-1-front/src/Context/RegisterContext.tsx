import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    IRegisterContext,
    IRegisterContextProps,
} from "../interfaces/register.intercafaces";
import { IUserRequest } from "../interfaces/user.interfaces";
import { Api } from "../Services/api";

export const RegisterContext = createContext<IRegisterContext>(
    {} as IRegisterContext
);

export const RegisterProvider = ({ children }: IRegisterContextProps) => {
    const navigateLogin = useNavigate();

    async function sendRegister(data: IUserRequest) {
        await Api.post("/users", data)
            .then((res) => {
                toast.success("Registrado com Sucesso", {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "dark",
                });
                navigateLogin("/");
            })
            .catch(
                (err) => (
                    console.log(err),
                    toast.error("Cadastro Invalido", {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "dark",
                    })
                )
            );
    }

    return (
        <RegisterContext.Provider value={{ sendRegister }}>
            {children}
        </RegisterContext.Provider>
    );
};
