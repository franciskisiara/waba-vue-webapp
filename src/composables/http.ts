import { computed, reactive, ref } from 'vue'
import { axios } from '@/libs/services'

export function useHttp (fields: any = {}) {
  const loading = ref(false)
  const errorBag: any = reactive({})
  const inputs: any = reactive(fields)

  const request = async (configs: any) => {
    if (!loading.value) {
      loading.value = true

      try {
        configs = { ...configs, data: inputs }
        const response = await axios.request(configs)
        inputs.value = fields
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
