import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const delayRef = document.querySelector("[name='delay']");
const fulfilledRef = document.querySelector("[value='fulfilled']");
const rejectedRef = document.querySelector("[value='rejected']");
const submitBtnRef = document.querySelector("button");

submitBtnRef.addEventListener("click", onBtnClick);

function onBtnClick(event) {
    event.preventDefault();
        if (delayRef.value>=0 && (fulfilledRef.checked || rejectedRef.checked)) {
        const delay = delayRef.value;
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (fulfilledRef.checked) {
                    resolve();
                    console.log(`✅ Fulfilled promise in ${delay}ms`);
                };
                if (rejectedRef.checked) {
                    reject();
                    console.log(`❌ Rejected promise in ${delay}ms`);
                }
            },delay);
        });
        promise.then(onPromiseFulfilled).catch(onPromiseRejected);
        function onPromiseFulfilled() {
            iziToast.success({
                message: `✅ Fulfilled promise in ${delay}ms`,
            });
        };
        function onPromiseRejected() {
            iziToast.error({
                message: `❌ Rejected promise in ${delay}ms`,
            });
        }
    } else {
        iziToast.warning({
            message: "Enter valid delay time and choose state",
        });
    }
}

