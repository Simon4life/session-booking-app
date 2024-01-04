import { useParams } from 'react-router-dom';
import BookSessionForm from '../components/BookSessionForm.tsx';
import Button from '../components/Button.tsx';
import { SESSIONS } from '../dummy-sessions.ts';
import { useState } from 'react';

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const [isBooking, setIsBooking] = useState<boolean>(false);

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  const startBooking = () => {
    setIsBooking(true);
  }
  const stopBooking = () => {
    setIsBooking(false)
  }

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }


  return (
    <main id="session-page">
      {
        isBooking && <BookSessionForm session={loadedSession} onDone={stopBooking}/>
      }
      <article>
        <header>
          <img
            src={loadedSession.image}
            alt={loadedSession.title}
          />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <div>
              <Button onClick={startBooking}>Book Session</Button>
            </div>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
