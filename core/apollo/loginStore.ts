import { makeVar } from "@apollo/client";

export interface LoginData {
    address?: string | undefined
    tokens?: {
        accessToken: string | undefined;
        refreshToken: string | undefined;
    }
}

export const loginStoreReactiveVar = makeVar<LoginData>({} as LoginData);