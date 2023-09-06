import { ref } from 'vue'

const dialog = {
  state: ref(false),
  open: () => dialog.state.value = true,
  close: () => dialog.state.value = false,
}

export function useCommon () {
  return {
    dialog,
  }
}
