import { Card, Text, Button } from "@nextui-org/react";

export const Moviemenu = () => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
    <Card css={{ width: "90%", height: "100%" }}>
      <Card.Body css={{ p: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <Card.Image
          src="/movie-menu.png"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
          <Text size={90} weight="bold" transform="uppercase" color="$red700">
            Movies
          </Text>
          <Text h2 color="white">
            Browse Your Movie
          </Text>
        </div>
      </Card.Body>
      <div style={{ position: "absolute", bottom: "50px", right: "50px" }}>
        <Button
          flat
          auto
          rounded
          css={{
            color: "#94f9f0",
            bg: "$red700",
            width: "320px",
          }}
        >
          <Text
            css={{ color: "inherit" }}
            size={12}
            weight="bold"
            transform="uppercase"
          >
            Browse Now
          </Text>
        </Button>
      </div>
    </Card>
  </div>
);