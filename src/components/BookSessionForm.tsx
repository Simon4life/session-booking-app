import { useRef, type FormEvent, useEffect } from 'react'
import Input from './Input';
import { useSessionContext, type Session } from '../context/session_context';
import Modal, { HandleModal } from './Modal';

type BookSessionFormProps = {
    onDone: () => void
    session: Session
}

const BookSessionForm = ({onDone, session}: BookSessionFormProps) => {
    const {addSession} = useSessionContext()
    const ref = useRef<HTMLFormElement>(null)
    const modal = useRef<HandleModal>(null);

    useEffect(() => {
        if(modal.current) {
            modal.current.open()
        }
    }, [])

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const formData = Object.fromEntries(form);
        addSession(session);
        onDone();
    }

    return (
        <Modal onClose={onDone}>
            <form ref={ref} onSubmit={handleFormSubmit}>
                <Input label='your name' type='text' placeholder='enter your name' id='user-name'/>
                <Input label='your type="email" placeholder="enter your email' id='user-email'/>
            </form>
        </Modal>
        
    )
}

export default BookSessionForm