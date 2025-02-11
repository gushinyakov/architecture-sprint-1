export const mfConfig = {
    name: "shared_context",
    exposes: {
        './AuthContext': './src/context/AuthContext.ts',
        './CurrentUserContext': './src/context/CurrentUserContext.ts'
    },
    remotes: {
        // TODO? cycle dependency???
        // 'profile_mf': 'profile_mf@http://localhost:8082/mf-manifest.json',
    },
    shared: ["react", "react-dom"],
};
