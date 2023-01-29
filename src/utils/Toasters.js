import { toast } from "react-toastify";  

export const toastError = (message) => {
    toast.error( message, {
        style: { width: '100%'},
        toastId: 0,
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        draggable: false,
        theme: "light",
    });
}


export const toastInfo = (message) => {
    toast.info( message, {
        style: { width: '100%'},
        toastId: 0,
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        draggable: false,
        theme: "light",
    });
}

export const toastSuccess = (message) => {
    toast.success( message, {
        style: { width: '100%'},
        toastId: 0,
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        draggable: false,
        theme: "light",
    });
}