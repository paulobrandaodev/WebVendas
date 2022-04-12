import { configureStore } from '@reduxjs/toolkit'
import usuarioSlice from './Usuarios/usuarioSlice'

export const store = configureStore({
  reducer: {
      usuario: usuarioSlice
  },
})