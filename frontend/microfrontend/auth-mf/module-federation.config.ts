export const mfConfig = {
    name: "auth_mf",
    exposes: {
        './Login': './src/components/Login.tsx',
        './Register': './src/components/Register.tsx',
        './useAuthToken': './src/utils/useAuthToken.ts'
    },
    remotes: {
        'shared_feature': 'shared_feature@http://localhost:8084/mf-manifest.json'
    },
    shared: ["react", "react-dom", "react-router-dom"],
};
