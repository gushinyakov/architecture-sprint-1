export const mfConfig = {
    name: "shared_feature",
    exposes: {
        './event-emitter': './src/utils/event_emitter/event-emitter.ts',
        './storage': './src/utils/storage/storage.ts'
    },
    shared: ["react", "react-dom", "react-router-dom"],
};
