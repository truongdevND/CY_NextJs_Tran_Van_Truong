import React from 'react';
import notificationStore from '@/stores/notificationStore';

function DialogNotification() {
    const { textMess, title, urlImg, openDialog, closeDialog, textBtn } = notificationStore();

    return (
        <div>
            {openDialog && (
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="flex flex-col justify-center items-center">
                                        <div>
                                            <img
                                                className="rounded-full object-cover w-[100px] h-[100px]"
                                                src={urlImg}
                                                alt={title || "Notification Image"}
                                            />
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0">
                                            <h3 className="text-base font-semibold text-gray-900" id="modal-title">
                                                {title}
                                            </h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">{textMess}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6">
                                    <button
                                        onClick={closeDialog}
                                        type="button"
                                        className={`mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white
                                         shadow-sm ring-1 ring-inset ring-gray-300 ${textBtn =='OK'
                                          ? "bg-blue-500 hover:bg-blue-400"
                                          : "bg-red-500 hover:bg-red-400"}`}
                                    >
                                        {textBtn}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DialogNotification;
