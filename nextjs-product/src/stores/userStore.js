import { create } from 'zustand';

const userName = create((set) => ({
  userName: '',
 

  setNotification: ({ text }) =>
    set(() => ({
      userName: text,
     
    })),

}));

export default userName;
