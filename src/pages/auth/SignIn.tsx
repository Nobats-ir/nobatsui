import React, {useState} from 'react';
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title, Text,
  Anchor,
} from '@mantine/core';
import classes from './SignIn.module.css';
import * as yup from 'yup';
import {useForm, yupResolver} from "@mantine/form";
import useAuth from "@/utils/hooks/useAuth";

export default function SignIn() {
  const [loading, setLoading] = useState<boolean>(false)
  const {signIn} = useAuth()
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Please enter a email')
      .email('Invalid email'),
    password: yup
      .string()
      .required('Please enter a password')
  });

  const form = useForm({
    initialValues: {
      email: 'javid@nobats.ir',
      password: '12345qwerty',
    },
    validate: yupResolver(schema),
  });

  async function handleSubmit(values: { email: string, password: string }) {
    setLoading(true)
    try {
      const res = await signIn(values)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className={classes.wrapper}>
          <Paper className={classes.form} radius={0} p={30}>
            <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
              به نوبتز خوش آمدید
            </Title>
            <Text ta="center" mt="md" mb={50}>
              To get more information about the template please check the <a href={'https://github.com/auronvila/mantine-template/wiki'}>documentation</a>
            </Text>
            <TextInput {...form.getInputProps('email')} name={'email'} label="ایمیل" withAsterisk placeholder="javid@nobats.ir" size="md"/>
            <PasswordInput {...form.getInputProps('password')} name={'password'} label="Password" placeholder="رمز" mt="md" size="md"/>
            <Button loading={loading} type={'submit'} fullWidth mt="xl" size="md">
              ورود
            </Button>
            <Text ta="center" mt="md">
             هنوز ثبت نام نکردید؟{' '}
             <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()}>
               ثبت نام
             </Anchor>
            </Text>
          </Paper>
        </div>
      </form>
    </div>
  );
}
