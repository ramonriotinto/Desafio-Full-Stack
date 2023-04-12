import React, { useContext } from "react";
import {
    DivContainerLogin,
    DivFlexLogin,
    DivInfo,
    FormLogin,
} from "./loginStyle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ISendLogin } from "../../interfaces/login.interfaces";
import { LoginContext } from "../../Context/LoginContext";
import { ButtonLoginPage } from "../../Components/buttons";
import { Link } from "react-router-dom";

const schemaLogin = yup.object({
    email: yup.string().email("E-mail Inválido").required("E-mail Obrigatório"),
    password: yup.string().required("Senha Obrigatória"),
});

export const LoginPage = () => {
    const { sendLogin } = useContext(LoginContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ISendLogin>({
        resolver: yupResolver(schemaLogin),
    });

    const onSubmitLogin = (data: ISendLogin) => sendLogin(data);

    return (
        <DivContainerLogin>
            <DivFlexLogin>
                <DivInfo>
                    <h1>Cavicchioli Schedule</h1>
                    <p>A melhor provedora "Salvadora" de contatos.</p>
                </DivInfo>
                <FormLogin onSubmit={handleSubmit(onSubmitLogin)}>
                    <div>
                        <h1 className="LoginTitle">Login</h1>
                    </div>

                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu e-mail..."
                        {...register("email")}
                    />
                    <p>{errors.email?.message}</p>

                    <input
                        type="password"
                        id="password"
                        placeholder="Digite sua senha..."
                        {...register("password")}
                    />
                    <p>{errors.password?.message}</p>
                    <ButtonLoginPage type="submit">Fazer Login</ButtonLoginPage>
                    <span>Ainda não possui uma cadastro?</span>
                    <ButtonLoginPage>
                        <Link className="linkResgt" to="/register">
                            Cadastro
                        </Link>
                    </ButtonLoginPage>
                </FormLogin>
            </DivFlexLogin>
        </DivContainerLogin>
    );
};
