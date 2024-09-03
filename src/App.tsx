import { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
type Props = {
    children?: ReactNode;
};
const App: FC<Props> = () => {
    return (
        <div>
            <Suspense fallback={<h2>Loading...</h2>}>
                <RouterProvider router={router} />
            </Suspense>
        </div>
    );
};
export default memo(App);
