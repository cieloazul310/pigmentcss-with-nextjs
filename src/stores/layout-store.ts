import { createStore } from "zustand/vanilla";

export type LayoutState = {
  drawerOpen: boolean;
};

export type LayoutActions = {
  toggleDrawer: () => void;
  setDrawerOpen: (open: boolean) => void;
};

export type LayoutStore = LayoutState & LayoutActions;

export const defaultInitState: LayoutState = {
  drawerOpen: false,
};

export const createLayoutStore = (
  initState: LayoutState = defaultInitState,
) => {
  return createStore<LayoutStore>()((set) => ({
    ...initState,
    toggleDrawer: () => set((state) => ({ drawerOpen: !state.drawerOpen })),
    setDrawerOpen: (drawerOpen) => set(() => ({ drawerOpen })),
  }));
};
