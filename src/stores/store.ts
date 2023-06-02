import { create } from "zustand";

interface IName {
  name: string;
  setName: (name: string) => void;
}

const useName = create<IName>((set) => ({
  name: "ahmad",
  setName: (name) => set(() => ({ name: name })),
}));

export default useName;
