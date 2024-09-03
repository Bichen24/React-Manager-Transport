import { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import request from "../../utils/request";
type Props = {
    children?: ReactNode;
};
const Login: FC<Props> = () => {
    useEffect(() => {
        request.post("/users/login", { id: 1123223 });
    }, []);
    return (
        <div>
            <h2>Login</h2>
        </div>
    );
};
export default memo(Login);
