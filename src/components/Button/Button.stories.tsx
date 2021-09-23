import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
}
export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
}
export const Large = Template.bind({})
Large.args = {
  size: 'lg',
}

export const NoProps = Template.bind({})
NoProps.args = {}

export const PrimaryContained = Template.bind({})
PrimaryContained.args = {
  size: 'sm',
  variant: 'contained',
  color: 'primary',
  fullWidth: false,
  disabled: false,
  children: 'Primary contained',
}

export const SecondaryContained = Template.bind({})
SecondaryContained.args = {
  size: 'sm',
  variant: 'contained',
  color: 'secondary',
  fullWidth: false,
  disabled: false,
  children: 'Secondary contained',
}
export const SuccessContained = Template.bind({})
SuccessContained.args = {
  size: 'sm',
  variant: 'contained',
  color: 'success',
  fullWidth: false,
  disabled: false,
  children: 'Secondary contained',
}

export const WarningContained = Template.bind({})
WarningContained.args = {
  size: 'sm',
  variant: 'contained',
  color: 'warning',
  fullWidth: false,
  disabled: false,
  children: 'Secondary contained',
}

export const ErrorContained = Template.bind({})
ErrorContained.args = {
  size: 'sm',
  variant: 'contained',
  color: 'error',
  fullWidth: false,
  disabled: false,
  children: 'Secondary contained',
}

// Outlined

export const PrimaryOutlined = Template.bind({})
PrimaryOutlined.args = {
  size: 'sm',
  variant: 'outlined',
  color: 'primary',
  fullWidth: false,
  disabled: false,
  children: 'Primary outlined',
}

export const SecondaryOutlined = Template.bind({})
SecondaryOutlined.args = {
  size: 'sm',
  variant: 'outlined',
  color: 'secondary',
  fullWidth: false,
  disabled: false,
  children: 'Secondary outlined',
}
export const SuccessOutlined = Template.bind({})
SuccessOutlined.args = {
  size: 'sm',
  variant: 'outlined',
  color: 'success',
  fullWidth: false,
  disabled: false,
  children: 'Secondary outlined',
}

export const WarningOutlined = Template.bind({})
WarningOutlined.args = {
  size: 'sm',
  variant: 'outlined',
  color: 'warning',
  fullWidth: false,
  disabled: false,
  children: 'Secondary outlined',
}

export const ErrorOutlined = Template.bind({})
ErrorOutlined.args = {
  size: 'sm',
  variant: 'outlined',
  color: 'error',
  fullWidth: false,
  disabled: false,
  children: 'Secondary outlined',
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  fullWidth: true,
}
export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
export const CustomClasses = Template.bind({})
CustomClasses.args = {
  classes: 'ml-12',
}
export const CrazyChildren = Template.bind({})
CrazyChildren.args = {
  children: (
    <div>
      Hello{' '}
      <span className='text-lg'>
        children <span className='p-1 bg-white rounded-full shadow-lg'>🎉</span>{' '}
      </span>
    </div>
  ),
}
