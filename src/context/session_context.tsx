
import { createContext, useContext, useReducer, type ReactNode } from "react";

export type Session = {
    id: string,
    title: string,
    summary: string,
    duration: number,
}

export type Sessions = {
    sessions: Session[]
}
type SessionContextValue = Sessions & {
    addSession: (sessionObj: Session) => void,
    removeSession: (id: string) => void
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
    payload: string
}

type Action = BookSessionAction | RemoveSessionAction;

const initialState: Sessions = {
    sessions: []
}

const sessionReducer = (state: Sessions, action: Action): Sessions => {
    if(action.type === "BOOK_SESSION") {
        const sessionAlreadyExists = state.sessions.find(session => session.id === action.payload.id);
        if(sessionAlreadyExists) {
            return {
                ...state
            }
        }
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
    
    if(action.type === "REMOVE_SESSION") {
        const filteredSession = state.sessions.filter(session => session.id !== action.payload)
        return {
            ...state,
            sessions: filteredSession
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
    removeSession(id) {
        dispatch({type: "REMOVE_SESSION", payload: id})
    },

   }
   return <SessionContext.Provider value={context}>{children}</SessionContext.Provider>
}

export default SessionContextProvider