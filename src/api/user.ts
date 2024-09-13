import request from "./request";
export interface UserItem {
    userId: number;
    stateName?: string;
    deptName?: string;
    createTime?: number | string;
    lastLoginTime?: number | string;
}
export const getUserInfo = () => {
    return request.get<UserItem>("/users/getUserInfo");
};
