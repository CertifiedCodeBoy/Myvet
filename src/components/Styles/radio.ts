import { radioAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  control: {
    borderRadius: '50%', // change the border radius
    
    borderColor: 'gray.400', // change the border color
    _checked: {
      color: '#A0887F', // change the background color
      bg: '#A0887F', // change the background color
      borderColor: '#A0887F', // change the border color
      _hover: {
        bg: '#A0887F',
        color: '#A0887F', // change the background color
        borderColor: '#A0887F', // change the border color
    },
  },
  },
})

export const radioTheme = defineMultiStyleConfig({ baseStyle })