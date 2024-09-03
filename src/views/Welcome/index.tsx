import { memo } from "react";
import type { FC, ReactNode } from "react";
type Props = {
    children?: ReactNode;
};
const Welcome: FC<Props> = () => {
    return (
        <div>
            <h2>Welcome</h2>
        </div>
    );
};
export default memo(Welcome);
