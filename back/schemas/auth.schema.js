const { z } = require("zod");

const userRegex = /^[a-zA-Z ]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+/;

const registerSchema = z.object({
  userName: z
    .string({
      required_error: "El nombre de usuario es requerido",
    })
    .min(2, {
      message: "El nombre de usuario debe contener minimo 2 caracteres",
    })
    .refine((value) => userRegex.test(value), {
      message: "No se permiten caracteres especiales ni numeros",
    }),
  email: z
    .string({
      required_error: "Email es requerido",
    })
    .email({
      message: "Email invalido",
    })
    .max(30, {
      message: "El email no debe contener mas de 30 caracteres",
    }),

  password: z
    .string({
      required_error: "contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe contener mas de 6 caracteres",
    })
    .max(30, {
      message: "La contraseña no debe contener mas de 30 caracteres",
    })
    .refine((value) => passwordRegex.test(value), {
      message: "La contraseña debe contener al menos una mayuscula y un numero",
    }),
});

const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email es requerido",
    })
    .email({
      message: "Email invalido",
    })
    .max(30, {
      message: "El email no debe contener mas de 30 caracteres",
    }),

  password: z
    .string({
      required_error: "contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe contener mas de 6 caracteres",
    })
    .max(30, {
      message: "La contraseña no debe contener mas de 30 caracteres",
    }),
});

module.exports = {
  registerSchema,
  loginSchema,
};