import { memo } from "react";
import type { FC, ReactNode } from "react";

import styles from "./index.module.less";
type Props = {
    children?: ReactNode;
};
const Welcome: FC<Props> = () => {
    return (
        <div className={styles.welcome}>
            <h2>React18</h2>
        </div>
    );
};
export default memo(Welcome);
