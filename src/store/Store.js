import  { create } from "zustand";

  export const useStore = create((set) => ({
  
    
  pedido: [],
 
  
  agregar: (producto, cantidad,idProducto) => set((state) => ({ pedido: [...state.pedido, { producto, cantidad,idProducto }] })),
  // borrar: () => set((state) => (console.log('algo'))),
  vaciar: () => set({ pedido: [] }),
  // verProductos: () => set((state) => console.log(state.pedido)),
  
  
}))
