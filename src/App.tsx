import { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";
import { RouterProvider } from "react-router-dom";

import { ConfigProvider, App as AntdApp } from "antd";
import AntdGlobal from "./utils/AntdGlobal";
import router from "./router";

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
                    <RouterProvider router={router} />
                </AntdApp>
            </ConfigProvider>
        </Suspense>
    );
};
export default memo(App);
