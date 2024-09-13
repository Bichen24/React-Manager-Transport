import { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";

import styles from "./index.module.less";
import { getUserInfo } from "../../api/user";
type Props = {
    children?: ReactNode;
};
const Welcome: FC<Props> = () => {
    useEffect(() => {
        getUserInfo().then((res) => console.log(res));
    }, []);
    return (
        <div className={styles.welcome}>
            <h2>React18</h2>
        </div>
    );
};
export default memo(Welcome);
