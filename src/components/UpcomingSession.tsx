import { type Sessions } from '../context/session_context'
import Button from './Button'
type UpcomingSessionProps = Sessions

const UpcomingSession = ({sessions}: UpcomingSessionProps) => {
  return (
    <div>
        <h3>Booked Sessions</h3>
        {
            sessions.map((session) => {
                return (
                    <div className="upcoming-session">
                        <div>
                            <h3>{session.title}</h3>
                            <p>{session.summary}</p>
                            <p>{session.duration}</p>
                        </div>  
                        <div>
                            <Button>Delete</Button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UpcomingSession