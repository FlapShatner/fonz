export type Option = {
 id: string
 label: string
 handle: string
 secondaryVariant: string
 variants: Variant[]
}

export type Variant = {
 size: string
 secondary: Secondary[]
}

export type Secondary = {
 id: string
 label: string
 ar: string
 grid: boolean
}

export const options = [
 {
  id: 'de',
  label: 'Contour Cut Decal',
  handle: 'ai-designed-contour-cut-decal',
  secondaryVariant: 'none',
  variants: [
   {
    size: '3"',
    secondary: [
     {
      id: 'de1',
      label: 'Contour Cut',
      ar: '1:1',
      grid: true,
     },
    ],
   },
   {
    size: '4"',
    secondary: [
     {
      id: 'de2',
      label: 'Contour Cut',
      ar: '1:1',
      grid: true,
     },
    ],
   },
   {
    size: '5"',
    secondary: [
     {
      id: 'de3',
      label: 'Contour Cut',
      ar: '1:1',
      grid: true,
     },
    ],
   },
   {
    size: '6"',
    secondary: [
     {
      id: 'de4',
      label: 'Contour Cut',
      ar: '1:1',
      grid: true,
     },
    ],
   },
   {
    size: '7"',
    secondary: [
     {
      id: 'de5',
      label: 'Contour Cut',
      ar: '1:1',
      grid: true,
     },
    ],
   },
   {
    size: '8"',
    secondary: [
     {
      id: 'de6',
      label: 'Contour Cut',
      ar: '1:1',
      grid: true,
     },
    ],
   },
   {
    size: '10"',
    secondary: [
     {
      id: 'de7',
      label: 'Contour Cut',
      ar: '1:1',
      grid: true,
     },
    ],
   },
   {
    size: '12"',
    secondary: [
     {
      id: 'de8',
      label: 'Contour Cut',
      ar: '1:1',
      grid: true,
     },
    ],
   },
   {
    size: '15"',
    secondary: [
     {
      id: 'de9',
      label: 'Contour Cut',
      ar: '1:1',
      grid: true,
     },
    ],
   },
   {
    size: '18"',
    secondary: [
     {
      id: 'de10',
      label: 'Contour Cut',
      ar: '1:1',
      grid: true,
     },
    ],
   },
  ],
 },
 {
  id: 'dp',
  label: 'Digital Print',
  handle: 'ai-designed-digital-print',
  secondaryVariant: 'Orientation',
  variants: [
   {
    size: '11"x14"',
    secondary: [
     {
      id: 'dp1',
      label: 'Vertical',
      ar: '4:5',
      grid: true,
     },
     {
      id: 'dp2',
      label: 'Horizontal',
      ar: '5:4',
      grid: true,
     },
    ],
   },
   {
    size: '16"x20"',
    secondary: [
     {
      id: 'dp3',
      label: 'Vertical',
      ar: '4:5',
      grid: true,
     },
     {
      id: 'dp4',
      label: 'Horizontal',
      ar: '5:4',
      grid: true,
     },
    ],
   },
   {
    size: '18"x24"',
    secondary: [
     {
      id: 'dp5',
      label: 'Vertical',
      ar: '3:4',
      grid: true,
     },
     {
      id: 'dp6',
      label: 'Horizontal',
      ar: '4:3',
      grid: true,
     },
    ],
   },
   {
    size: '24"x36"',
    secondary: [
     {
      id: 'dp7',
      label: 'Vertical',
      ar: '2:3',
      grid: true,
     },
     {
      id: 'dp8',
      label: 'Horizontal',
      ar: '3:2',
      grid: true,
     },
    ],
   },
  ],
 },
 {
  id: 'ba',
  label: 'Banner',
  handle: 'ai-designed-banner',
  secondaryVariant: 'none',
  variants: [
   {
    size: `2'x4'`,
    secondary: [
     {
      id: 'ba1',
      label: `2'x4'`,
      ar: '2:1',
      grid: true,
     },
    ],
   },
   {
    size: `2'x5'`,
    secondary: [
     {
      id: 'ba2',
      label: `2'x5'`,
      ar: '5:2',
      grid: false,
     },
    ],
   },
   {
    size: `2'x6'`,
    secondary: [
     {
      id: 'ba3',
      label: `2'x6'`,
      ar: '3:1',
      grid: false,
     },
    ],
   },
   {
    size: `2'x8'`,
    secondary: [
     {
      id: 'ba4',
      label: `2'x8'`,
      ar: '4:1',
      grid: false,
     },
    ],
   },
   {
    size: `3'x4'`,
    secondary: [
     {
      id: 'ba5',
      label: `3'x4'`,
      ar: '4:3',
      grid: true,
     },
    ],
   },
   {
    size: `3'x5'`,
    secondary: [
     {
      id: 'ba6',
      label: `3'x5'`,
      ar: '5:3',
      grid: true,
     },
    ],
   },
   {
    size: `3'x6'`,
    secondary: [
     {
      id: 'ba7',
      label: `3'x6'`,
      ar: '2:1',
      grid: true,
     },
    ],
   },
   {
    size: `3'x8'`,
    secondary: [
     {
      id: 'ba8',
      label: `3'x8'`,
      ar: '8:3',
      grid: false,
     },
    ],
   },
   {
    size: `3'x10'`,
    secondary: [
     {
      id: 'ba9',
      label: `3'x10'`,
      ar: '10:3',
      grid: false,
     },
    ],
   },
   {
    size: `3'x12'`,
    secondary: [
     {
      id: 'ba10',
      label: `3'x12'`,
      ar: '4:1',
      grid: false,
     },
    ],
   },
   {
    size: `4'x4'`,
    secondary: [
     {
      id: 'ba11',
      label: `4'x4'`,
      ar: '1:1',
      grid: true,
     },
    ],
   },
   {
    size: `4'x5'`,
    secondary: [
     {
      id: 'ba12',
      label: `4'x5'`,
      ar: '5:4',
      grid: true,
     },
    ],
   },
   {
    size: `4'x6'`,
    secondary: [
     {
      id: 'ba13',
      label: `4'x6'`,
      ar: '3:2',
      grid: true,
     },
    ],
   },
   {
    size: `4'x8'`,
    secondary: [
     {
      id: 'ba14',
      label: `4'x8'`,
      ar: '2:1',
      grid: true,
     },
    ],
   },
   {
    size: `4'x10'`,
    secondary: [
     {
      id: 'ba15',
      label: `4'x10'`,
      ar: '5:2',
      grid: false,
     },
    ],
   },
   {
    size: `4'x12'`,
    secondary: [
     {
      id: 'ba16',
      label: `4'x12'`,
      ar: '3:1',
      grid: false,
     },
    ],
   },
  ],
 },
 {
  id: 'wi',
  label: 'Truck Back Window Graphics',
  handle: 'ai-truck-back-window-graphics',
  secondaryVariant: 'none',
  variants: [
   {
    size: 'Choose size at checkout',
    secondary: [
     {
      id: 'wi1',
      label: 'Choose size at checkout',
      ar: '4:1',
      grid: false,
     },
    ],
   },
  ],
 },
 {
  id: 'mb',
  label: 'Mailbox Wrap (includes mailbox)',
  handle: 'ai-designed-wrapped-mailbox',
  secondaryVariant: 'none',
  variants: [
   {
    size: `18.75"x8"`,
    secondary: [
     {
      id: 'mb1',
      label: `Standard`,
      ar: '7:3',
      grid: true,
     },
    ],
   },
   {
    size: `21"x11"`,
    secondary: [
     {
      id: 'mb2',
      label: `XL`,
      ar: '21:11',
      grid: true,
     },
    ],
   },
  ],
 },
 {
  id: 'ts',
  label: 'T-Shirt',
  handle: 'ai-designed-printed-t-shirt',
  secondaryVariant: 'Color',
  variants: [
   {
    size: 'Small',
    secondary: [
     {
      id: 'ts1',
      label: 'Black',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts2',
      label: 'White',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts3',
      label: 'Red',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts4',
      label: 'Blue',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts5',
      label: 'Grey',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts6',
      label: 'Brown',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts7',
      label: 'Olive Green',
      ar: '1:1',
      grid: true,
     },
    ],
   },
   {
    size: 'Medium',
    secondary: [
     {
      id: 'ts8',
      label: 'Black',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts9',
      label: 'White',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts10',
      label: 'Red',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts11',
      label: 'Blue',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts12',
      label: 'Grey',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts13',
      label: 'Brown',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts14',
      label: 'Olive Green',
      ar: '1:1',
      grid: true,
     },
    ],
   },
   {
    size: 'Large',
    secondary: [
     {
      id: 'ts15',
      label: 'Black',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts16',
      label: 'White',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts17',
      label: 'Red',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts18',
      label: 'Blue',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts19',
      label: 'Grey',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts20',
      label: 'Brown',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts21',
      label: 'Olive Green',
      ar: '1:1',
      grid: true,
     },
    ],
   },
   {
    size: 'XL',
    secondary: [
     {
      id: 'ts22',
      label: 'Black',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts23',
      label: 'White',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts24',
      label: 'Red',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts25',
      label: 'Blue',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts26',
      label: 'Grey',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts27',
      label: 'Brown',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts28',
      label: 'Olive Green',
      ar: '1:1',
      grid: true,
     },
    ],
   },
   {
    size: '2XL',
    secondary: [
     {
      id: 'ts29',
      label: 'Black',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts30',
      label: 'White',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts31',
      label: 'Red',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts32',
      label: 'Blue',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts33',
      label: 'Grey',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts34',
      label: 'Brown',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts35',
      label: 'Olive Green',
      ar: '1:1',
      grid: true,
     },
    ],
   },
   {
    size: '3XL',
    secondary: [
     {
      id: 'ts36',
      label: 'Black',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts37',
      label: 'White',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts38',
      label: 'Red',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts39',
      label: 'Blue',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts40',
      label: 'Grey',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts41',
      label: 'Brown',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts42',
      label: 'Olive Green',
      ar: '1:1',
      grid: true,
     },
    ],
   },
   {
    size: '4XL',
    secondary: [
     {
      id: 'ts43',
      label: 'Black',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts44',
      label: 'White',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts45',
      label: 'Red',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts46',
      label: 'Blue',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts47',
      label: 'Grey',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts48',
      label: 'Brown',
      ar: '1:1',
      grid: true,
     },
     {
      id: 'ts49',
      label: 'Olive Green',
      ar: '1:1',
      grid: true,
     },
    ],
   },
  ],
 },
 {
  id: '3d',
  label: '3D Printed Model',
  handle: 'ai-designed-3d-printed-model',
  secondaryVariant: 'none',
  variants: [
   {
    size: 'Coming Soon',
    secondary: [
     {
      id: '3d1',
      label: 'Coming Soon',
      ar: '1:1',
      grid: false,
     },
    ],
   },
  ],
 },
]
