import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import "./styleModal.css";
import { ButtonLoginPage } from "../../Components/buttons";
import { RanderContacts } from "../../Components/cardContacts/randerContacts";
import { DashboardContext } from "../../Context/DashboardContext";
import { DivContainerLogin } from "../Login/loginStyle";
import {
    DivMainDashboard,
    FormContacts,
    HeaderDashboard,
} from "./dashboardStyle";
import { IContactRequest } from "../../interfaces/contac.interfaces";
import { GrUpdate } from "react-icons/gr";
import { ModalEditeUser } from "../../Components/ModalEditUser/modalEditeUser";

ReactModal.setAppElement("#root");

const contactSchema = yup.object({
    username: yup
        .string()
        .min(4, "Mínimo 4 letras")
        .required("Nome Obrigatório"),
    email: yup.string().required("E-mail Obrigatório"),
    telephone: yup
        .string()
        .min(8, "No mínimo 8 digitos")
        .required("Telefone Obrigatório"),
});

export const DashboardPage = () => {
    const {
        openUpdateUserModal,
        modal,
        closeModal,
        openModal,
        btnLogout,
        createContact,
        pageUser,
    } = useContext(DashboardContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IContactRequest>({ resolver: yupResolver(contactSchema) });

    const onSubmitContact = (data: IContactRequest) => createContact(data);

    return (
        <DivContainerLogin>
            <HeaderDashboard>
                <h2>Cavicchioli Schedule</h2>

                <h3>Olá, {pageUser.username}</h3>

                <img src={pageUser.avatar} alt="" />

                <button onClick={() => openUpdateUserModal()}>
                    <GrUpdate />
                </button>

                <ButtonLoginPage onClick={() => btnLogout()}>
                    Sair
                </ButtonLoginPage>
            </HeaderDashboard>

            <DivMainDashboard>
                <div className="div_opcions">
                    <h2>Meus contatos</h2>
                    <ButtonLoginPage onClick={() => openModal()}>
                        Adicionar Contatos
                    </ButtonLoginPage>
                </div>

                <div className="div_contatos">
                    {pageUser.contacts?.length > 0 ? (
                        <RanderContacts></RanderContacts>
                    ) : (
                        <h4>Adicione Contatos</h4>
                    )}
                </div>
            </DivMainDashboard>

            <ReactModal
                isOpen={modal}
                onRequestClose={() => closeModal()}
                className="modal"
                overlayClassName="exterior-modal"
            >
                <div className="div-modal">
                    <p>Cadastrar Contatos</p>
                    <button onClick={() => closeModal()}>X</button>
                </div>
                <FormContacts onSubmit={handleSubmit(onSubmitContact)}>
                    <input
                        type="text"
                        placeholder="Link para imagem do contato"
                        {...register("avatar")}
                    />
                    <p>{errors.avatar?.message}</p>

                    <input
                        type="text"
                        placeholder="Nome do contato..."
                        {...register("username")}
                    />
                    <p>{errors.username?.message}</p>

                    <input
                        type="text"
                        placeholder="E-mail do contato..."
                        {...register("email")}
                    />
                    <p>{errors.email?.message}</p>

                    <input
                        type="text"
                        placeholder="Telefone do contato..."
                        {...register("telephone")}
                    />
                    <p>{errors.telephone?.message}</p>

                    <ButtonLoginPage type="submit">
                        Cadastrar Contato
                    </ButtonLoginPage>
                </FormContacts>
            </ReactModal>
            <ModalEditeUser />
        </DivContainerLogin>
    );
};
