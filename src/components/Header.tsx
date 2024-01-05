import Button from "./Button";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import UpcomingSessions from "./UpcomingSessions";

const Header = () => {
    const [isViewingSession, setIsViewingSession] = useState<boolean>(false);

    const closeModal = ():void => {
        setIsViewingSession(false);
    }
    const openModal = (): void => {
        setIsViewingSession(true);
    }
    return (
        <div id="main-header">
            {
                isViewingSession && <UpcomingSessions onClose={closeModal}/>
            }
            <h1>Booking Session</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Our Mission</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/sessions"}>Browse Sessions</NavLink>
                    </li>
                    <li>
                        <Button onClick={openModal}>Upcomming Sessions</Button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;