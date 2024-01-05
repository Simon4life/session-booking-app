import { type Sessions } from '../context/session_context'
import Button from './Button'
import { useSessionContext } from '../context/session_context'

type UpcomingSessionProps = Sessions

const UpcomingSession = ({sessions}: UpcomingSessionProps) => {
    const {removeSession} = useSessionContext()
    return (
        <div>
            <h3>Booked Sessions</h3>
            {
                sessions.map((session) => {
                    return (
                        <div className="upcoming-session" key={session.id}>
                            <div>
                                <h3>{session.title}</h3>
                                <p>{session.summary}</p>
                                <p>{session.duration}</p>
                            </div>  
                            <div>
                                <Button onClick={() => removeSession(session.id)}>Delete</Button>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default UpcomingSession