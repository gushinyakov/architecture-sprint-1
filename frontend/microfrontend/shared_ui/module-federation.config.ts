export const mfConfig = {
    name: "shared_ui",
    exposes: {
        './Popup': './src/components/popup/Popup.tsx',
        './PopupWithForm': './src/components/popup/PopupWithForm.tsx',
    },
    shared: ["react", "react-dom"],
};
