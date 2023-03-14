import type { ExtractPropTypes, PropType } from 'vue'

export const buttonProps = {
  msg: {
    type: String,
    default: '',
    required: true,
  },
  previcon: {
    type: Object as PropType<Record<string, any>>,
    default() {
      return {}
    },
  },
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
