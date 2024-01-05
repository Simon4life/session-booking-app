import React, {useRef, useEffect} from 'react'
import { HandleModal } from "./Modal";
import { useSessionContext } from "../context/session_context";
import UpcomingSession from './UpcomingSession';
import Modal from './Modal';
import Button from './Button';

type UpcomingSessionProps = {
    onClose: () => void
}
const UpcomingSessions = ({onClose}: UpcomingSessionProps) => {
    const modal = useRef<HandleModal>(null);
    const {sessions} = useSessionContext();

    useEffect(()=> {
        if(modal.current) {
            modal.current.open();
        }
    }, [])

  return (
    <Modal onClose={onClose} ref={modal}>
        <UpcomingSession sessions={sessions}/>
        <div className="actions">
            <Button onClick={() => onClose()}>cancel</Button>
        </div>
        
    </Modal>
  )
}

export default UpcomingSessions