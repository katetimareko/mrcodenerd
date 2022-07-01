import { Button, Container, Navbar } from "react-bootstrap";

const NavBarView = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        MrCodenerd
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export function App() {
  return (
    <NavBarView />
    );
}