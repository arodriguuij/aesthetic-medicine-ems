import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import {
  container,
  footer,
  globalMail,
  main,
  menu,
  messageMail,
  paddingX,
  paddingY,
  paragraph,
  track,
} from "./recipeMail.styles";
import { GiftCardFormWithDiscountAppliedGet } from "@/lib/card/cardSlide";
import { publicUrl } from "@/utils/utilsServer";

const RecipeMail = (giftCard: GiftCardFormWithDiscountAppliedGet) => (
  <Html>
    <Head />
    <Preview>Obtenga el resumen de su pedido</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={messageMail}>
          <Img
            src={`${publicUrl}Images/logo.avif`}
            width="66"
            height="50"
            alt="EMS logo"
            style={{ margin: "auto" }}
          />

          <Heading style={globalMail.heading}>Tarjeta de Regalo EMS</Heading>
          <Text style={globalMail.text}>Hola {giftCard.nameBuyer},</Text>
          <Text style={{ ...globalMail.text, marginTop: 4 }}>
            ¡Felicitaciones! Tu tarjeta de regalo de Medicina Estética EMS ya
            está disponible.
          </Text>
        </Section>
        <Hr style={globalMail.hr} />
        <Section
          style={{ ...paddingX, paddingTop: "40px", paddingBottom: "40px" }}
        >
          <Row>
            <Column>
              <Img
                src={`${publicUrl}${
                  giftCard.selectedGiftCardId === 1
                    ? "Images/GiftCard200.avif"
                    : giftCard.selectedGiftCardId === 2
                    ? "Images/GiftCard300.avif"
                    : "Images/GiftCard500.avif"
                }`}
                alt="Imagen Tarjeta de regalo"
                style={{ float: "left" }}
                width="260px"
              />
            </Column>
            <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
              <Text style={{ ...paragraph, fontWeight: "500" }}>
                Comprador: {giftCard.nameBuyer}
              </Text>
              <Text style={{ ...paragraph, fontWeight: "500" }}>
                Destinatario: {giftCard.nameReceiver}
              </Text>
              <Text style={globalMail.text}>Mensaje:</Text>
              <Text style={globalMail.text}>{giftCard.message}</Text>
            </Column>
          </Row>
        </Section>
        {giftCard.discount > 0 && (
          <>
            <Hr style={globalMail.hr} />
            <Section style={globalMail.defaultPadding}>
              <Row style={{ display: "inline-flex" }}>
                <Column style={{ width: "170px" }}>
                  <Text style={globalMail.paragraphWithBold}>
                    Descuento aplicado
                  </Text>
                  <Text style={track.number}>{giftCard.discount}%</Text>
                </Column>
                <Column>
                  <Text style={globalMail.paragraphWithBold}>
                    Precio pagado
                  </Text>
                  <Text style={track.number}>{giftCard.finalPrice}€</Text>
                </Column>
              </Row>
            </Section>
          </>
        )}
        <Hr style={globalMail.hr} />
        <Section style={globalMail.defaultPadding}>
          <Row style={{ display: "inline-flex" }}>
            <Column style={{ width: "170px" }}>
              <Text style={globalMail.paragraphWithBold}>Número de Orden</Text>
              <Text style={track.number}>#{giftCard.id}</Text>
            </Column>
            <Column>
              <Text style={globalMail.paragraphWithBold}>Fecha</Text>
              <Text style={track.number}>
                {new Date().toLocaleDateString()}
              </Text>
            </Column>
          </Row>
        </Section>
        <Hr style={globalMail.hr} />
        <Section style={menu.container}>
          <Row style={{ ...menu.content, paddingTop: "0" }}>
            <Column style={{ width: "50%" }} colSpan={1}>
              <Link
                href="https://www.medicinaesteticaems.com/"
                style={menu.text}
              >
                Devoluciones e Intercambios
              </Link>
            </Column>
            <Column style={{ width: "50%" }} colSpan={2}>
              <Link
                href="https://www.medicinaesteticaems.com/"
                style={menu.text}
              >
                Cómo Devolver
              </Link>
            </Column>
          </Row>
          <Hr style={globalMail.hr} />
          <Row style={menu.tel}>
            <Column>
              <Row>
                <Column style={{ width: "16px" }}>
                  <Img
                    src={`${publicUrl}Images/phone.avif`}
                    width="16px"
                    height="26px"
                    style={{ paddingRight: "14px" }}
                  />
                </Column>
                <Column>
                  <Text style={{ ...menu.text, marginBottom: "0" }}>
                    +34 611 88 21 39
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column>
              <Text
                style={{
                  ...menu.text,
                  marginBottom: "0",
                }}
              >
                Lunes: 15:00-20:00
              </Text>
              <Text
                style={{
                  ...menu.text,
                  marginBottom: "0",
                }}
              >
                Martes: 9:00-13:00 y 16:00-20:00
              </Text>
              <Text
                style={{
                  ...menu.text,
                  marginBottom: "0",
                }}
              >
                Miércoles: 9:00-13:00
              </Text>
              <Text
                style={{
                  ...menu.text,
                  marginBottom: "0",
                }}
              >
                Jueves: 10:00-14:00 y 16:00-20:00
              </Text>
              <Text
                style={{
                  ...menu.text,
                  marginBottom: "0",
                }}
              >
                Viernes: 9:30-14:30
              </Text>
            </Column>
          </Row>
        </Section>
        <Hr style={{ ...globalMail.hr, marginTop: "12px" }} />
        <Section style={paddingY}>
          <Row>
            <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
              Si tienes alguna pregunta o inquietud, no dudes en contactarnos.
              (Recuerda que si respondes a este correo, no podremos visualizar
              tu mensaje).
            </Text>
          </Row>
          <Row>
            <Text style={footer.text}>
              © 2024 Medicina Estética EMS. Todos los Derechos Reservados.
            </Text>
          </Row>
          <Row>
            <Text style={footer.text}>
              Medicina Estética EMS. C. Pablo Luengo, 23. 10300 Navalmoral de la
              Mata, Cáceres. España.
            </Text>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default RecipeMail;
