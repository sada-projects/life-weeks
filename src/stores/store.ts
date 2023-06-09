import { create } from "zustand";

interface IDate {
  date: Date;
  setDate: (name: Date) => void;
}

const useDate = create<IDate>()((set) => ({
  date: new Date(),
  setDate: (newDate) => set(() => ({ date: newDate })),
}));

export default useDate;
