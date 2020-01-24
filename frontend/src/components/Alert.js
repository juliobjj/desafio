
import Swal from 'sweetalert2';

function Alert(position, timer, confirmBtn, icon, text) {
    const Toast = Swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: confirmBtn,
        timer: timer,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: icon,
        title: text
    })
}

export default Alert;