import { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";

import { ConfigProvider, App as AntdApp } from "antd";
import AntdGlobal from "./utils/AntdGlobal";
import Layout from "./Layout";

type Props = {
    children?: ReactNode;
};
const App: FC<Props> = () => {
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#ed6c00",
                    },
                }}
            >
                <AntdApp>
                    <AntdGlobal></AntdGlobal>
                    <Layout/>
                </AntdApp>
            </ConfigProvider>
        </Suspense>
    );
};
export default memo(App);
