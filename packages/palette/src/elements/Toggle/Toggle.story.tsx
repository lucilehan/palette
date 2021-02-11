import React from "react"
import { Box } from "../Box"
import { Link } from "../Link"
import { Toggle } from "./Toggle"

const SecondaryAction = () => {
  return (
    <Link
      onClick={(e) => {
        alert("hello world!")
        e.stopPropagation()
      }}
    >
      Alert
    </Link>
  )
}

export default {
  title: "Components/Toggle",
}

export const _Toggle = () => {
  return (
    <Box width="350px">
      <Toggle label="Test" expanded>
        <h1>Hello world</h1>
      </Toggle>
    </Box>
  )
}

export const ToggleDisabled = () => {
  return (
    <Box width="350px">
      <Toggle label="Test" expanded disabled>
        <h1>Hello world</h1>
      </Toggle>
    </Box>
  )
}

ToggleDisabled.story = {
  name: "Toggle disabled",
}

export const ToggleWithSecondaryAction = () => {
  return (
    <Box width="350px">
      <Toggle label="Test" expanded renderSecondaryAction={SecondaryAction}>
        <h1>Hello world</h1>
      </Toggle>
    </Box>
  )
}

ToggleWithSecondaryAction.story = {
  name: "Toggle with secondary action",
}

export const ToggleDisabledWithSecondaryAction = () => {
  return (
    <Box width="350px">
      <Toggle
        label="Test"
        expanded
        disabled
        renderSecondaryAction={SecondaryAction}
      >
        <h1>Hello world</h1>
      </Toggle>
    </Box>
  )
}

ToggleDisabledWithSecondaryAction.story = {
  name: "Toggle disabled with secondary action",
}
