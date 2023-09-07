import { createToast, destroyAllToasts } from 'vercel-toast'
import { i18n, ipc, store } from '@/electron'
import { track } from '@/services/analytics'
import { useAppStore } from '@/store/app'
import { addDays } from 'date-fns'
import { ref } from 'vue'
import axios from 'axios'

export const checkForRemoteNotification = async () => {
}

export const useSupportNotification = () => {
}
