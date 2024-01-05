import { type ReactNode, useRef, forwardRef, useImperativeHandle} from 'react';
import { createPortal } from 'react-dom';

type ModalPropType = {
    children: ReactNode,
    onClose: () => void
}
export type HandleModal = {
    open: () => void
}

const Modal = forwardRef<HandleModal, ModalPropType>(({children, onClose}, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);
    
    useImperativeHandle(ref, () => {
        
        return {
            open() {
                if(dialog.current) {

                    dialog.current.showModal();
                }
            },
        }
    })


    return createPortal(
        <dialog className='modal' ref={dialog} onClose={onClose}>
            {children}
        </dialog>
    , document.getElementById('modal-root')!)
})

export default Modal