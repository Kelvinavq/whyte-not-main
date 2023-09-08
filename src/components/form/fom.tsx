import * as React from "react";
import Style from "./form.module.css";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { AiOutlineMail, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";

function Form() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [service, setService] = React.useState(0);
  let data = {
    name: "",
    email: "",
    phone: "",
    comment: "",
    services: "",
  };
  const services = [
    {
      id: 1,
      name: "Diseño y desarrollo web",
    },
    {
      id: 2,
      name: "Manejo de redes sociales",
    },
    {
      id: 3,
      name: "Producción audiovisual",
    },
    {
      id: 4,
      name: "Comunicación corporativa",
    },
    {
      id: 5,
      name: "Campaña de ADS",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
  
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        body: formData,
      });
  
      console.log('Response:', response); // Agregar este log
  
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          alert('¡Formulario enviado con éxito!');
        } else {
          alert('Hubo un error al enviar el formulario.');
        }
      } else {
        alert('Error en la solicitud al servidor.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };
  
  return (
    <section className={Style.containerCard} data-aos="fade-right">
      <Card className={Style.card} align="center">
        <CardHeader>
          <Heading
            size="md"
            textTransform="uppercase"
            className={Style.formTitle}
          >
            Todo lo hacemos posible, sólo contáctanos y cuéntanos sobre tu
            proyecto.
          </Heading>
        </CardHeader>
        <CardBody className={Style.containerForm}>
          <form
            action="/php/process.php"
            method="post"
            onSubmit={handleSubmit}
            className={Style.form}
          >
            <div>
              <InputGroup className={Style.inputGroup}>
                <InputLeftElement pointerEvents="none">
                  <AiOutlineUser />
                </InputLeftElement>
                <Input
                  focusBorderColor="red.400"
                  name="name"
                  placeholder="Nombre y Apellido"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            </div>
            <div>
              <InputGroup className={Style.inputGroup}>
                <InputLeftElement pointerEvents="none">
                  <AiOutlineMail />
                </InputLeftElement>
                <Input
                  focusBorderColor="red.400"
                  name="mail"
                  type="email"
                  placeholder="Correo Electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </div>
            <div>
              <InputGroup className={Style.inputGroup}>
                <InputLeftElement pointerEvents="none">
                  <AiOutlinePhone />
                </InputLeftElement>
                <Input
                  focusBorderColor="red.400"
                  name="phone"
                  type="tel"
                  placeholder="Número De Whatsapp"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </InputGroup>
            </div>
            <div>
              <Select
                className={Style.select}
                placeholder="¿Qué servicio te interesa?"
                value={service}
                onChange={(e) => setService(Number(e.target.value))}
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Textarea
                className={Style.textArea}
                focusBorderColor="red.400"
                name="comment"
                placeholder="Comentarios"
                size="md"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <Button className={Style.button} type="submit">
              Enviar
            </Button>
          </form>
        </CardBody>
      </Card>
    </section>
  );
}

export default Form;
