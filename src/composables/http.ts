import { computed, reactive, ref } from 'vue'
import { axios } from '@/libs/services'

export function useHttp (method: string, url: string, data: any = {}) {
  const loading = ref(false)
  const inputs: any = reactive(data)
  const errorBag: any = reactive({})

  const request = async () => {
    if (!loading.value) {
      loading.value = true

      try {
        const configs = { method, url, data: inputs }
        const response = await axios.request(configs)
        inputs.value = data
        return Promise.resolve({ ...response.data })
      } catch (error) {
        const { data, status } = (error as any).response
        if (status === 422) {
          Object.keys(data.errors).forEach((key) => {
            errorBag[key] = data.errors[key][0]
          })
        }
        return Promise.reject({ error: data.message })
      } finally {
        loading.value = false
      }
    }
  }

  const errors = computed(() => ({
    get: (key: string) => errorBag[key],
    has: (key: string) => Boolean(errorBag[key]),
    clear: (key: string) => delete errorBag[key],
  }))

  return {
    errors: errors.value,
    inputs,
    loading,
    request,
  }
}
