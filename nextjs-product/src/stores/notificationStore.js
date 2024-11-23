import { create } from 'zustand';

const notificationStore = create((set) => ({
  textMess: '',
  title: '',
  urlImg: '',
  textBtn:'',
  openDialog: false,

  setNotification: ({ text, title, imgUrl,textBtn }) =>
    set(() => ({
      textMess: text,
      title: title,
      urlImg: imgUrl || '',
      textBtn: textBtn || '',
      openDialog: true,
    })),

   closeDialog: () => set(() => ({ openDialog: false })),
}));

export default notificationStore;
