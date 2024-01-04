
import { createContext, useContext, useReducer, type ReactNode } from "react";

export type Session = {
    id: string,
    title: string,
    summary: string,
    duration: number,
}

type Sessions = {
    sessions: Session[]
}
type SessionContextValue = Sessions & {
    addSession: (sessionObj: Session) => void,
    removeSession: () => void
}

const SessionContext = createContext<SessionContextValue | null>(null)

export function useSessionContext() {
    const sessionContext =  useContext(SessionContext);
    if(sessionContext === null) {
        throw new Error("SessionContext is null")
    } 
    return sessionContext
}

type SessionContextProp = {
    children: ReactNode
}

type BookSessionAction = {
    type: "BOOK_SESSION",
    payload: Session
}
type RemoveSessionAction = {
    type: "REMOVE_SESSION"
}

type Action = BookSessionAction | RemoveSessionAction;

const initialState: Sessions = {
    sessions: []
}

const sessionReducer = (state: Sessions, action: Action): Sessions => {
    if(action.type === "BOOK_SESSION") {
        console.log(action.payload)
        return {
            ...state,
            sessions: [
                ...state.sessions,
                {
                    title: action.payload.title,
                    id: action.payload.id,
                    duration: action.payload.duration,
                    summary: action.payload.summary
                }
            ]
        }
    }
    return {...state}
}

const SessionContextProvider = ({children}: SessionContextProp) => {
    const [sessionState, dispatch] = useReducer(sessionReducer, initialState);

   const context: SessionContextValue = {
    sessions: sessionState.sessions,
    addSession(sessionObj) {
        dispatch({type: "BOOK_SESSION", payload: sessionObj})
    },
    removeSession() {
        
    },

   }
   return <SessionContext.Provider value={context}>{children}</SessionContext.Provider>
}

export default SessionContextProvider