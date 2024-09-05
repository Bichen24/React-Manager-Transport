import { RouterProvider } from "react-router-dom";
import React from "react";

import { Layout, Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

import router from "../router";

import Header from "./Header";
import styles from "./index.module.less";

const { Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
    {
        key: "sub1",
        label: "Navigation One",
        icon: <MailOutlined />,
        children: [
            {
                key: "g1",
                label: "Item 1",
                children: [
                    { key: "1", label: "Option 1" },
                    { key: "2", label: "Option 2" },
                ],
            },
            {
                key: "g2",
                label: "Item 2",
                children: [
                    { key: "3", label: "Option 3" },
                    { key: "4", label: "Option 4" },
                ],
            },
        ],
    },
];

const AppLayout: React.FC = () => {
    return (
        <Layout>
            <Sider breakpoint="lg" collapsedWidth="0">
                <p className={styles.logo}>
                    <img
                        className={styles.img}
                        src="../../public/imgs/logo.png"
                    />
                    <i className={styles.title}>BC货运</i>
                </p>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header />
                <Content className={styles.content}>
                    <div className={styles.wrapper}>
                        <RouterProvider router={router} />
                    </div>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant
                        UED
                    </Footer>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
