import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

import {Controller, FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {type SignupFormValues, signUpSchema} from "@/auth/schema"
import axios from "axios";


function SignUp() {

    const singupForm = useForm<SignupFormValues>({
        resolver: zodResolver(signUpSchema),
        mode: "onTouched",
        defaultValues: {
            username: "",
            email: "",
            password: "",
            passwordRepeat: ""
        }
    });

    function onSubmit(data: SignupFormValues) {
        axios.post("/api/v1/users", {
            ...data
        })
    }

    return (
        <div className="w-full max-w-md m-auto">
            <FormProvider {...singupForm}>
                <form onSubmit={singupForm.handleSubmit(onSubmit)}>
                    <FieldSet>
                        <FieldLegend className="text-center">Sign Up</FieldLegend>
                        <FieldDescription className="text-center">Hoaxify Signup Page</FieldDescription>

                        <FieldGroup>
                            <Controller name="username" render={({field, fieldState}) => (
                                <Field>
                                    <FieldLabel>Username</FieldLabel>
                                    <Input {...field} />
                                    <FieldError errors={[fieldState.error]}/>
                                </Field>
                            )}/>

                            <Controller render={({field, fieldState}) => (
                                <Field>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input {...field}/>
                                    <FieldError errors={[fieldState.error]}/>
                                </Field>
                            )} name={"email"}/>

                            <Controller render={({field, fieldState}) => (
                                <Field>
                                    <FieldLabel>Password</FieldLabel>
                                    <Input type={"password"} {...field}/>
                                    <FieldError errors={[fieldState.error]}/>
                                </Field>
                            )} name={"password"}/>

                            <Controller render={({field, fieldState}) => (
                                <Field>
                                    <FieldLabel>Password</FieldLabel>
                                    <Input type={"password"} {...field}/>
                                    <FieldError errors={[fieldState.error]}/>
                                </Field>
                            )} name={"passwordRepeat"}/>

                            <Field>
                                <Button disabled={!singupForm.formState.isValid} className="cursor-pointer"
                                        type="submit">Submit</Button>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </form>
            </FormProvider>

        </div>
    );
}

export default SignUp;
