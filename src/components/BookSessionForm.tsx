import { useRef, type FormEvent, useEffect } from 'react'
import Input from './Input';
import { useSessionContext, type Session } from '../context/session_context';
import Modal, { HandleModal } from './Modal';
import Button from './Button';

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
        // console.log(form)
        addSession(session);
        onDone();
    }

    return (
        <Modal onClose={onDone} ref={modal} >
            <form ref={ref} onSubmit={handleFormSubmit} className='control'>
                <Input label='your name' type='text' placeholder='enter your name' id='user-name'/>
                <Input label='email' type="email" placeholder="enter your email" id='user-email'/>
                <div className='actions'>
                    <Button type="button" onClick={onDone}>cancel</Button>
                    <Button type='submit'>Submit</Button>
                </div>
            </form>
        </Modal>
        
    )
}

export default BookSessionForm