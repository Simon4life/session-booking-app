import Button from "./Button"

const Header = () => {
    return (
        <div id="main-header">
            <h1>Booking Session</h1>
            <nav>
                <ul>
                    <li>
                        <Button to={"/"}>Our Mission</Button>
                    </li>
                    <li>
                        <Button to={"/sessions"}>Browse Sessions</Button>
                    </li>
                    <li>
                        <Button to={"/"}>Upcomming Sessions</Button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;