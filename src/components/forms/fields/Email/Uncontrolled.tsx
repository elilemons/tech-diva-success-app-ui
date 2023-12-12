import * as React from 'react'
import { RefCallBack } from 'react-hook-form'

import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { APP_INPUT_COLORING } from '@root/utils/appStyling'
import { FieldType } from '../types'

type UncontrolledProps = FieldType & {
  inputRef?: RefCallBack
  value: string
}
export const UncontrolledEmailInput: React.FC<UncontrolledProps> = props => {
  const {
    name,
    className,
    label,
    invalid,
    errorMessage,
    value = '',
    disabled,
    onChange,
    inputRef,
    required,
    placeholder = 'you@domain.com',
  } = props

  return (
    <FormControl className={className} isRequired={required}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        data-cy={name}
        {...APP_INPUT_COLORING}
        ref={inputRef}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type='email'
        id={name}
        title={label}
        disabled={disabled}
        data-has-error={invalid}
        data-has-no-value={!value}
      />
      {invalid && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  )
}
