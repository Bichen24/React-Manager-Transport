import { memo } from "react";
import type { FC, ReactNode } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
type Props = {
    children?: ReactNode;
};
const Error403: FC<Props> = () => {
    const navigate = useNavigate();
    return (
        <Result
            status={403}
            title="403"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary" onClick={() => navigate("/welcome")}>
                    返回首页
                </Button>
            }
        />
    );
};
export default memo(Error403);
