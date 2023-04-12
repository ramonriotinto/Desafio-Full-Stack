import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IContact, IContactRequest } from "../interfaces/contac.interfaces";
import {
    IDashboardContext,
    IDashboardContextProps,
} from "../interfaces/dashboard.interfaces";
import { IUserResponse, IUserUpdate } from "../interfaces/user.interfaces";
import { Api } from "../Services/api";

export const DashboardContext = createContext<IDashboardContext>(
    {} as IDashboardContext
);

export const DashboardProvider = ({ children }: IDashboardContextProps) => {
    const [modal, setModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [updateUserModal, setUpdateUserModal] = useState(false);
    const [contact, setContact] = useState<IContact | undefined>();
    const [pageUser, setPageUser] = useState<IUserResponse>(
        {} as IUserResponse
    );

    const token = localStorage.getItem("@userToken");
    const userId = localStorage.getItem("@userId");

    useEffect(() => {
        loggedUser(userId);
    }, []);

    async function loggedUser(userID: any) {
        if (token) {
            Api.defaults.headers.authorization = `Bearer ${token}`;
            Api.get(`/users/${userID}`)
                .then((res) => {
                    setPageUser(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    const backLogin = useNavigate();

    const btnLogout = () => {
        localStorage.clear();
        setPageUser({} as any);
        backLogin("/");
    };

    const openModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };

    const openUpdateModal = () => {
        setUpdateModal(true);
    };
    const closeUpdateModal = () => {
        setUpdateModal(false);
    };

    const openUpdateUserModal = () => {
        setUpdateUserModal(true);
    };
    const closeUpdateUserModal = () => {
        setUpdateUserModal(false);
    };

    async function createContact(objeto: IContactRequest) {
        Api.defaults.headers.authorization = `Bearer ${token}`;

        await Api.post(`/contacts/${userId}`, objeto)
            .then((res) => {
                toast.success("Contato Adicionado", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                loggedUser(userId);
                closeModal();
            })
            .catch((err) => {
                toast.error("Erro ao Adicionar Contato", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                console.log(err);
            });
    }

    async function deleteContact(id: string) {
        await Api.delete(`/contacts/${id}`)
            .then((res) => {
                toast.success("Contato Deletada", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                loggedUser(userId);
            })
            .catch((err) => {
                toast.error("Erro ao Deletar Contato", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                console.log(err);
            });
    }

    async function updateContact(objeto: any) {
        await Api.patch(`/contacts/${contact!.id}`, objeto)
            .then((res) => {
                toast.success("Contato Atualizado", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                loggedUser(userId);
                closeUpdateModal();
            })
            .catch((err) => {
                toast.error("Erro ao Atualizar Contato", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                console.log(err);
            });
    }

    async function updateUser(objeto: IUserUpdate) {
        await Api.patch(`/users/${pageUser.id}`, objeto)
            .then((res) => {
                toast.success("Usuário Atualizado", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                loggedUser(userId);
                closeUpdateUserModal();
            })
            .catch((err) => {
                toast.error("Erro ao Atualizar Usuário", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                console.log(err);
            });
    }

    return (
        <DashboardContext.Provider
            value={{
                updateUserModal,
                setUpdateUserModal,
                updateUser,
                closeUpdateUserModal,
                openUpdateUserModal,
                setContact,
                updateModal,
                setUpdateModal,
                openUpdateModal,
                closeUpdateModal,
                updateContact,
                pageUser,
                setPageUser,
                btnLogout,
                createContact,
                deleteContact,
                modal,
                setModal,
                closeModal,
                openModal,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};
