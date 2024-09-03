let count = 0;
export function showLoading() {
    if (count == 0) {
        const loading = document.getElementById("loading")!;
        loading.style.display = "flex";
    }
    count++;
}
export function hideLoading() {
    if (count <= 0) return;
    count--;
    if (count === 0) {
        const loading = document.getElementById("loading")!;
        loading.style.display = "none";
    }
}
