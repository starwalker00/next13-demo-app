import { useState } from "react";
import { useSignMessage } from "wagmi";
import { useChallenge, useAuthenticate } from "@memester-xyz/lens-use";
import { loginStoreReactiveVar, LoginData } from "../core/apollo/loginStore";

export default function useLogin(address: `0x${string}` | undefined) {
    const { data: challengeData } = useChallenge(address);
    const { data: signedChallengeData, signMessageAsync } = useSignMessage({
        message: challengeData?.challenge?.text
    });
    const [authenticate, { data: authenticateData }] = useAuthenticate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    async function login() {
        try {
            let signedMessage = await signMessageAsync();
            // alert(JSON.stringify(signedMessage));
            let { data: dataAuthenticate } = await authenticate({
                variables: {
                    request:
                    {
                        address: address,
                        signature: signedMessage,
                    }
                }
            });
            // alert(JSON.stringify(dataAuthenticate));
            let loginStoreData: LoginData = {
                address: address,
                tokens: {
                    accessToken: dataAuthenticate?.authenticate.accessToken,
                    refreshToken: dataAuthenticate?.authenticate.refreshToken
                }
            };
            loginStoreReactiveVar(loginStoreData);
            setIsLoggedIn(true);
        }
        catch (error) {
            alert("JSON.stringify(error)");
            alert(JSON.stringify(error));
        }
    }

    async function disconnect() {
        try {
            loginStoreReactiveVar({} as LoginData);
            alert(JSON.stringify(loginStoreReactiveVar()));
            setIsLoggedIn(false);
        }
        catch (error) {
            alert("JSON.stringify(error)");
            alert(JSON.stringify(error));
        }
    }

    return { login, disconnect, isLoggedIn };
};