import { Navbar , Text, css} from "@nextui-org/react";
import { useState } from "react";


const Nav = () => {

    const [variant, setVariant] = useState("floating");

    const variants = ["static", "floating", "sticky"];

    return (
        <div>
          <Navbar css={{color: '$red700', }} variant={variant}>
            <Navbar.Brand >
              <Text b color="inherit" hideIn="xs">
                E-SPOT
              </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" >
              <Navbar.Link href="/">Home</Navbar.Link>
              <Navbar.Link href="/gamespage">Games</Navbar.Link>
              <Navbar.Link href="/moviespage">Movies</Navbar.Link>
              <Navbar.Link href="/about">About</Navbar.Link>
            </Navbar.Content>
          </Navbar>
        </div>
      );
    }

    export default Nav;
