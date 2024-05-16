import  { create } from "zustand";

  export const useStore = create((set) => ({
  total: 0,
  pedido: [],
  
  agregar: ({nombre, cantidad}) => set((state) => ({ pedido: [...state.pedido, {nombre, cantidad}] }))
}));
