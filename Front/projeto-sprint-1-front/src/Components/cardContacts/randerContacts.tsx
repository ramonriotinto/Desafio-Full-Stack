import React from "react";
import { useContext } from "react";
import { DashboardContext } from "../../Context/DashboardContext";
import { ListRenderContacts } from "./style";
import { GrDocumentUpdate } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import ReactModal from "react-modal";
import "../../Pages/Dashboard/styleModal.css";
import { FormContacts } from "../../Pages/Dashboard/dashboardStyle";
import { ButtonLoginPage } from "../buttons";
import { yupResolver } from "@hookform/resolvers/yup";
import { IContact, IContactUpdate } from "../../interfaces/contac.interfaces";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const contactUpdateSchema = yup.object({
    avatar: yup.string().notRequired(),
    username: yup.string().notRequired(),
    email: yup.string().notRequired(),
    telephone: yup.string().notRequired(),
});

export const RanderContacts = () => {
    const {
        pageUser,
        deleteContact,
        openUpdateModal,
        closeUpdateModal,
        updateModal,
        updateContact,
        setContact,
    } = useContext(DashboardContext);

    const updateContactID = (objeto: IContact) => {
        setContact(objeto);
        openUpdateModal();
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IContactUpdate>({ resolver: yupResolver(contactUpdateSchema) });

    const onSubmitUpdateContact = (data: IContactUpdate) => updateContact(data);

    return (
        <>
            <ListRenderContacts>
                {pageUser.contacts.map((contato) => (
                    <li key={contato.id}>
                        <img src={contato.avatar} alt="Imagem de perfil" />
                        <p className="names">
                            Nome: <p>{contato.username}</p>
                        </p>
                        <p className="names">
                            E-mail: <p>{contato.email}</p>
                        </p>
                        <p className="names">
                            Telefone: <p>{contato.telephone}</p>
                        </p>
                        <button onClick={() => updateContactID(contato)}>
                            <GrDocumentUpdate />
                        </button>
                        <button onClick={() => deleteContact(contato.id)}>
                            <AiOutlineDelete />
                        </button>
                    </li>
                ))}
            </ListRenderContacts>

            <ReactModal
                isOpen={updateModal}
                onRequestClose={() => closeUpdateModal()}
                className="modal"
                overlayClassName="exterior-modal"
            >
                <div className="div-modal">
                    <p>Atualizar Contato</p>
                    <button onClick={() => closeUpdateModal()}>X</button>
                </div>

                <FormContacts onSubmit={handleSubmit(onSubmitUpdateContact)}>
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
                        Atualizar Contato
                    </ButtonLoginPage>
                </FormContacts>
            </ReactModal>
        </>
    );
};
