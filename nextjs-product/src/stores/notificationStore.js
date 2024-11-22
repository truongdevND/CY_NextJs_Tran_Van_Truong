import { create } from 'zustand';

const notificationStore = create((set) => ({
  textMess: '',
  title: '',
  urlImg: '',
  openDialog: false,

  setNotification: ({ text, title, imgUrl }) =>
    set(() => ({
      textMess: text,
      title: title,
      urlImg: imgUrl || '',
      openDialog: true,
    })),

   closeDialog: () => set(() => ({ openDialog: false })),
}));

export default notificationStore;
