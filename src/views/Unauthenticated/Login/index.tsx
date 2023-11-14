import { Center, Heading, Link as ChakraLink, Stack } from '@chakra-ui/react'
import { useAuth } from '@components/appProviders/Auth'
import { UserLogin } from '@components/appProviders/Auth/types'
import { Layout } from '@components/elements/Layout'
import { ControlledEmailInput } from '@components/forms/fields/Email/Controlled'
import { ControlledPasswordInput } from '@components/forms/fields/Password/Controlled'
import { Submit } from '@components/forms/Submit'
import { APP_ROUTES } from '@root/appRoutes'
import { APP_BRAND_BUTTON, APP_FORM_HEADINGS, APP_FORM_STACK_SPACING } from '@utils/appStyling'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'

const Login: React.FC = () => {
  const { email } = useParams<{ email: string }>()
  const { control, handleSubmit, watch } = useForm<UserLogin>()

  const { logIn } = useAuth()
  const handleLogin = React.useCallback((fieldValues: UserLogin) => logIn(fieldValues), [logIn])

  const emailInput = watch('email')

  return (
    <Layout
      bottomContent={
        <form onSubmit={handleSubmit(handleLogin)}>
          <Stack spacing={APP_FORM_STACK_SPACING.spacing}>
            <Heading size={APP_FORM_HEADINGS.size}>Login to DIVA Score</Heading>

            <ControlledEmailInput
              control={control}
              required
              name='email'
              label='Email'
              defaultValue={email}
            />
            <ControlledPasswordInput control={control} required name='password' label='Password' />

            <Submit
              label='Log In'
              control={control}
              colorScheme={APP_BRAND_BUTTON.colorScheme}
              bgGradient={APP_BRAND_BUTTON.bgGradient}
            />
            <Center>
              <ChakraLink
                color={'brand.500'}
                as={Link}
                to={`${APP_ROUTES.unauthenticated.forgotPassword}${
                  emailInput ? `/${emailInput}` : ''
                }`}
              >
                Forgot Password?
              </ChakraLink>
            </Center>
          </Stack>
        </form>
      }
    />
  )
}

export default Login
