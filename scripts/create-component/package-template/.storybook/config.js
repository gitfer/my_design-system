import addons from '@storybook/addons'
import { addDecorator, configure } from '@storybook/react'

function loadStory() {
  require('../src/__stories__/index.story.js')
}

configure(loadStory, module)
