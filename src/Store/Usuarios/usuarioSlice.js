import { createSlice } from '@reduxjs/toolkit'

export const usuarioSlice = createSlice({
  name: 'usuario',
  initialState: {
      usuario: '',
      logado: false,
  },
  reducers: {
    alterarUsuario: (state, {payload}) => {
        return { ...state, logado: true, usuario: payload }
    },
    deslogarUsuario: (state) => {
        return { ...state, logado: false, usuario: '' }
    },
  },
})

export const { alterarUsuario, deslogarUsuario } = usuarioSlice.actions
export default usuarioSlice.reducer