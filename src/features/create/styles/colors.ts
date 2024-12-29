import { iris, slate, tomato, grass, amber, blue } from '@radix-ui/colors';

const colors = {
  white: '#fff',
  black: '#000',
  gray: slate.slate1,
  solid: {
    background: iris.iris9,
    hover: iris.iris10,
  },
  backgrounds: {
    app: slate.slate2,
    subtle: iris.iris2,
  },
  interactive: {
    primary: iris.iris3,
    hover: iris.iris4,
    active: iris.iris5,
  },
  border: {
    default: slate.slate6,
    primary: iris.iris6,
    focused: iris.iris7,
    hover: iris.iris8,
  },
  text: {
    primary: slate.slate12,
    error: tomato.tomato10,
    success: grass.grass10,
    warning: amber.amber10,
    info: blue.blue10,
    lowContrast: iris.iris11,
    highContrast: iris.iris12,
  },
};

export default colors;
