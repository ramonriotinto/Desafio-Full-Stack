import { IContact, IContactRequest, IContactUpdate } from "./contac.interfaces";
import { IUserResponse, IUserUpdate } from "./user.interfaces";

export interface IDashboardContext {
    pageUser: IUserResponse;
    setPageUser: React.Dispatch<React.SetStateAction<IUserResponse>>;
    createContact: (objeto: IContactRequest) => void;
    deleteContact: (id: string) => void;
    updateContact: (objeto: IContactUpdate) => void;
    updateUser: (objeto: IUserUpdate) => void;
    btnLogout: () => void;
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    openModal: () => void;
    closeModal: () => void;
    updateModal: boolean;
    setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
    openUpdateModal: () => void;
    closeUpdateModal: () => void;
    setContact: React.Dispatch<React.SetStateAction<IContact | undefined>>;
    openUpdateUserModal: () => void;
    closeUpdateUserModal: () => void;
    updateUserModal: boolean;
    setUpdateUserModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IDashboardContextProps {
    children: React.ReactNode;
}
