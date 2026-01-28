import {z} from "zod";

export const signUpSchema = z.object({
    username: z.string().min(3, "Kullanıcı adı en az 3 karakterli olmalı."),
    email: z.string().email("Geçerli bir e-posta giriniz"),
    password: z.string().min(6, "Parola en az 6 karakterli olmalı."),
    passwordRepeat: z.string(),
}).refine((data) => data.password === data.passwordRepeat, {
    message: "Şifreler eşleşmiyor",
    path: ["passwordRepeat"],
});

export type SignupFormValues = z.infer<typeof signUpSchema>;
