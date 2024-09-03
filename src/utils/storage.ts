/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
    get(key: string) {
        const value = localStorage.getItem(key);
        if (!value) return "";
        try {
            return JSON.parse(value);
        } catch {
            return value;
        }
    },
    set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    clear() {
        localStorage.clear();
    },
    remove(key: string) {
        localStorage.removeItem(key);
    },
};
