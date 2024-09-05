import { memo } from "react";
import type { FC, ReactNode } from "react";

import { MenuFoldOutlined } from "@ant-design/icons";
import { Breadcrumb, Switch, Dropdown, Space, MenuProps } from "antd";

import styles from "./index.module.less";
type Props = {
    children?: ReactNode;
};
const Header: FC<Props> = () => {
    const BreadItems = [
        {
            title: "Home",
        },
        {
            title: "An Application",
        },
        {
            title: "An Application",
        },
        {
            title: "An Application",
        },
    ];
    const DropdownItems: MenuProps["items"] = [
        {
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                >
                    1st menu item
                </a>
            ),
            key: "0",
        },
        {
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                >
                    2nd menu item
                </a>
            ),
            key: "1",
        },
        {
            type: "divider",
        },
        {
            label: "3rd menu item（disabled）",
            key: "3",
            disabled: true,
        },
    ];
    return (
        <div className={styles.content}>
            <MenuFoldOutlined style={{ cursor: "pointer" }} />
            <Breadcrumb items={BreadItems} className={styles.breadcrumb} />
            <Switch
                checkedChildren="暗黑"
                unCheckedChildren="默认"
                onChange={(v) => console.log(v)}
            />
            <Dropdown
                menu={{ items: DropdownItems }}
                className={styles.nickname}
                trigger={["click"]}
            >
                <Space>Bichen24</Space>
            </Dropdown>
        </div>
    );
};
export default memo(Header);
