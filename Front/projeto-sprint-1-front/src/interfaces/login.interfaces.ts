import { IUserResponse } from "./user.interfaces";

export interface ISendLogin {
    email: string;
    password: string;
}

export interface ILoginContext {
    loading: IUserResponse[];
    setLoading: React.Dispatch<React.SetStateAction<IUserResponse[]>>;
    usuarios: IUserResponse;
    setUsuarios: React.Dispatch<React.SetStateAction<IUserResponse>>;
    sendLogin: (data: ISendLogin) => void;
}

export interface ILoginContextProps {
    children: React.ReactNode;
}
