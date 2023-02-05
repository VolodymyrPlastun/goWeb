import {
  Box,
  Input,
  Title,
  Form,
  Button,
  ErrorMessage,
  InputBox,
  Label,
} from "./ContactForm.styled";
import { useForm } from "react-hook-form";
import icon from "../../images/svg-sprite.svg";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Box>
      <Title>Request Callback</Title>
      <Form onSubmit={handleSubmit}
      name="contact" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <InputBox>
        
        <Input
          {...register("name", { required: "This is a required field" })}
          name="name"
          type="text"
          required
        />
            <Label>Enter your name</Label>
            {errors.name && (
          <ErrorMessage>
            <svg width="16" height="15">
              <use href={`${icon}#icon-worning`}></use>
            </svg>{" "}
            {errors.name.message}
          </ErrorMessage>
        )}
        </InputBox>
        
    
        <InputBox>
        
        <Input
          {...register("email", { required: "This is a required field" })}
          name="email"
          type="email"
          required
        />
        <Label>Enter email*</Label>
        {errors.email && (
          <ErrorMessage>
            <svg width="16" height="15">
              <use href={`${icon}#icon-worning`}></use>
            </svg>{" "}
            {errors.email.message}
          </ErrorMessage>
        )}
        </InputBox>
        
        
        <Button type="submit" variant={"accent"}>
          Send
        </Button>
      </Form>
    </Box>
  );
}
