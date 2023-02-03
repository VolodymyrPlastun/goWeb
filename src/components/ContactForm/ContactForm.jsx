import {
  Box,
  FirstInput,
  Title,
  SecInput,
  Form,
  Button,
  ErrorMessage,
} from "./ContactForm.styled";
import { useForm } from "react-hook-form";
import icon from "../../images/svg-sprite.svg";

export default function ContactForm() {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(data);

  return (
    <Box>
      <Title>Request Callback</Title>
      <Form 
      // onSubmit={handleSubmit(onSubmit)} 
      name="contact" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <FirstInput
          {...register("name", { required: "This is a required field" })}
          name="name"
          type="text"
          placeholder="Enter your name"
          autoFocus
        />
        {errors.name && (
          <ErrorMessage>
            <svg width="16" height="15">
              <use href={`${icon}#icon-worning`}></use>
            </svg>{" "}
            {errors.name.message}
          </ErrorMessage>
        )}
        <SecInput
          {...register("email", { required: "This is a required field" })}
          name="email"
          type="email"
          placeholder="Enter email*"
        />
        {errors.email && (
          <ErrorMessage>
            <svg width="16" height="15">
              <use href={`${icon}#icon-worning`}></use>
            </svg>{" "}
            {errors.email.message}
          </ErrorMessage>
        )}
        <Button type="submit" variant={"accent"}>
          Send
        </Button>
      </Form>
    </Box>
  );
}
