import { makeVar } from "@apollo/client";

export interface LoginData {
    address?: string;
    tokens?: {
        accessToken: string;
        refreshToken: string;
    }
}

export const loginStoreReactiveVar = makeVar<LoginData>({} as LoginData);