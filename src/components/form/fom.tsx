import React, { useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

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

interface FormData {
  name: string;
  number: string;
  email: string;
  message: string;
  service: string;
}

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

function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    axios
      .post("https://eokw2uqd7i6hbkr.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(
          `Thanks for signing up! Check your inbox for updates 😊`
        );
      })
      .catch((e) => console.error(e));
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
          <form className={Style.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <InputGroup className={Style.inputGroup}>
                <InputLeftElement pointerEvents="none">
                  <AiOutlineUser />
                </InputLeftElement>
                <Input
                  focusBorderColor="red.400"
                  {...register("name")}
                  placeholder="Nombre y Apellido"
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
                  {...register("email")}
                  type="email"
                  placeholder="Correo Electrónico"
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
                  {...register("number")}
                  type="tel"
                  placeholder="Número De Whatsapp"
                />
              </InputGroup>
            </div>
            <div>
              <Select
                className={Style.select}
                placeholder="¿Qué servicio te interesa?"
                {...register("service")}
              >
                {services.map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Textarea
                className={Style.textArea}
                focusBorderColor="red.400"
                {...register("message")}
                placeholder="Comentarios"
                size="md"
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
