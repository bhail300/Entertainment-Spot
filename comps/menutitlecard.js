import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Menutitlecard = () => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <Card css={{ w: "100%", h: "850px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, bottom: 50, left: "60%", transform: "translateX(-50%)" }}>
        <Col>
          <Text size={90} weight="bold" transform="uppercase" color="$red700">
            Entertainment-Spot
          </Text>
          <Text h2 color="white">
            Find your entertain
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="/game-gallery.jpeg"
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
          style={{ position: "relative" }}
        />
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
      </Card.Body>
    </Card>
  </div>
);
