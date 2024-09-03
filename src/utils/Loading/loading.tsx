import { Spin } from "antd";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import "./loading.less";
type Props = {
    children?: ReactNode;
};
const Loading: FC<Props> = () => {
    return (
        <Spin tip={"Loading..."} size="large" className="request-loading">
            <h2>{true}</h2>
        </Spin>
    );
};
export default memo(Loading);
