import React, { useContext } from "react";
import ReactModal from "react-modal";
import "../../Pages/Dashboard/styleModal.css";
import { FormContacts } from "../../Pages/Dashboard/dashboardStyle";
import { ButtonLoginPage } from "../buttons";
import { DashboardContext } from "../../Context/DashboardContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const UsertUpdateSchema = yup.object({
    avatar: yup.string().notRequired(),
    username: yup.string().notRequired(),
    email: yup.string().notRequired(),
    password: yup.string().notRequired(),
    telephone: yup.string().notRequired(),
});

export const ModalEditeUser = () => {
    const { updateUserModal, closeUpdateUserModal, updateUser } =
        useContext(DashboardContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(UsertUpdateSchema) });

    const onSubmitUpdateUser = (data) => updateUser(data);

    return (
        <ReactModal
            isOpen={updateUserModal}
            onRequestClose={() => closeUpdateUserModal()}
            className="modal"
            overlayClassName="exterior-modal"
        >
            <div className="div-modal">
                <p>Editar Usuário</p>
                <button onClick={() => closeUpdateUserModal()}>X</button>
            </div>
            <FormContacts onSubmit={handleSubmit(onSubmitUpdateUser)}>
                <input
                    type="text"
                    placeholder="Link para imagem do usuário"
                    {...register("avatar")}
                />
                <p>{errors.avatar?.message}</p>

                <input
                    type="text"
                    placeholder="Nome do usuário..."
                    {...register("username")}
                />
                <p>{errors.username?.message}</p>

                <input
                    type="text"
                    placeholder="Password do usuário..."
                    {...register("password")}
                />
                <p>{errors.password?.message}</p>

                <input
                    type="text"
                    placeholder="E-mail do usuário..."
                    {...register("email")}
                />
                <p>{errors.email?.message}</p>

                <input
                    type="text"
                    placeholder="Telefone do usuário..."
                    {...register("telephone")}
                />
                <p>{errors.telephone?.message}</p>

                <ButtonLoginPage type="submit">Editar Usuário</ButtonLoginPage>
            </FormContacts>
        </ReactModal>
    );
};
