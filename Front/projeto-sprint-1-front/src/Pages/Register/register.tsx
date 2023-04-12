import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { IUserRequest } from "../../interfaces/user.interfaces";
import { RegisterContext } from "../../Context/RegisterContext";
import {
    DivContainerLogin,
    DivFlexLogin,
    DivInfo,
    FormLogin,
} from "../Login/loginStyle";
import { ButtonLoginPage } from "../../Components/buttons";
import { Link } from "react-router-dom";

const schemaRegister = yup.object({
    avatar: yup.string().required("Link para imagem perfil Obrigatório"),
    username: yup
        .string()
        .required("Nome Obrigatório")
        .matches(/.{4,}/, "Deve conter no mínimo 4 letras"),
    email: yup.string().required("E-mail Obrigatório").email("E-mail inválido"),
    password: yup
        .string()
        .required("Senha Obrigatoria")
        .matches(/[A-Z]/, "Deve conter no mínimo uma letra maiúscula")
        .matches(/[a-z]/, "Deve conter no mínimo uma letra minúscula")
        .matches(/(\d)/, "Deve conter no mínimo um número")
        .matches(/(\W)|_/, "Deve conter no mínimo um caracter especial")
        .matches(/.{8,}/, "Deve conter no mínimo 8 dígitos"),
    telephone: yup.string().min(8).required("Telefone Obrigatório"),
});

export const RegisterPage = () => {
    const { sendRegister } = useContext(RegisterContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserRequest>({
        resolver: yupResolver(schemaRegister),
    });

    const onSubmitRegister = (data: IUserRequest) => sendRegister(data);

    return (
        <DivContainerLogin>
            <DivFlexLogin>
                <DivInfo>
                    <h1>Cavicchioli Schedule</h1>
                </DivInfo>
                <FormLogin onSubmit={handleSubmit(onSubmitRegister)}>
                    <div>
                        <h1 className="LoginTitle">Cadastro</h1>
                    </div>

                    <input
                        type="text"
                        id="avatar"
                        placeholder="Link da imagem para perfil..."
                        {...register("avatar")}
                    />
                    <p>{errors.avatar?.message}</p>

                    <input
                        type="text"
                        id="username"
                        placeholder="Digite o nome do usuário..."
                        {...register("username")}
                    />
                    <p>{errors.username?.message}</p>

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

                    <input
                        type="text"
                        id="telephone"
                        placeholder="Digite seu telefone..."
                        {...register("telephone")}
                    />
                    <p>{errors.telephone?.message}</p>

                    <ButtonLoginPage type="submit">Cadastrar</ButtonLoginPage>
                    <ButtonLoginPage>
                        <Link className="linkResgt" to="/">
                            Voltar para login
                        </Link>
                    </ButtonLoginPage>
                </FormLogin>
            </DivFlexLogin>
        </DivContainerLogin>
    );
};
