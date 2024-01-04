import { SESSIONS } from '../dummy-sessions.ts'; // normally, we would probably load that from a server
import Button from '../components/Button.tsx';
export default function SessionsPage() {
  return (
    <main id="sessions-page">
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a
          deep dive into state mechanics - we got just the right session for
          you!
        </p>
      </header>
      <div id='sessions-list'>
      {
        SESSIONS.map((session) => {
            return <div className="session-item">
              <img src={session.image} alt="An image of a session" />
              <div className="session-data">
                <h3>{session.title}</h3>
                <p>{session.summary}</p>
                <div className="action">
                  <Button  to={`/sessions/${session.id}`}>Learn More</Button>
                </div>

              </div>
            </div>
          
        })
      }
      </div>
    </main>
  );
}
