import request from "./request";
interface ILogin {
    userName: string;
    userPwd: string;
}
// interface ILoginRes {
//     userName: string;
//     userPwd: string;
// }
export const postUserLogin = (data: ILogin) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //1111
    return request.post<any>("/users/login", data);
};
