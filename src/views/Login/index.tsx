import { memo } from "react";
import type { FC, ReactNode } from "react";
import style from "./style.module.less";
import { App, Button, Form, Input } from "antd";
import { postUserLogin } from "../../api/login";
import storage from "../../utils/storage";
const { Item } = Form;
type Props = {
    children?: ReactNode;
};
const Login: FC<Props> = () => {
    const { message } = App.useApp();
    const onFinish = async (values: any) => {
        try {
            const res = await postUserLogin(values);
            storage.set("token", res);
            message.success("登陆成功");
            const params = new URLSearchParams(location.search);
            location.href = params.get("callback") || "/welcome";
        } catch (err: any) {
            return err.data;
        }
    };
    return (
        <div className={style.bg}>
            <Form className={style.form} onFinish={onFinish}>
                <h1 className={style.h2}>系统登陆</h1>
                <Item
                    className={style.item}
                    name="userName"
                    initialValue={"JackMa"}
                    rules={[{ required: true, message: "请输入用户名" }]}
                >
                    <Input type="text" placeholder="请输入用户名"></Input>
                </Item>
                <Item
                    className={style.item}
                    name="userPwd"
                    initialValue={123456}
                    rules={[{ required: true, message: "请输入密码" }]}
                >
                    <Input type="password" placeholder="请输入密码"></Input>
                </Item>
                <Item className={style.item}>
                    <Button
                        className={style.btn}
                        type="primary"
                        size="large"
                        htmlType="submit"
                    >
                        登陆
                    </Button>
                </Item>
            </Form>
        </div>
    );
};
export default memo(Login);
