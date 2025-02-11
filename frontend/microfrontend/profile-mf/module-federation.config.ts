export const mfConfig = {
    name: "profile_mf",
    exposes: {
        './UserProfile': './src/components/UserProfile.tsx',
        './userApi': './src/utils/user-api.ts',
        './models': './src/models/index.ts',
    },
    remotes: {
        'place_mf': 'place_mf@http://localhost:8088/mf-manifest.json',
        'shared_context': 'shared_context@http://localhost:8083/mf-manifest.json',
        'shared_feature': 'shared_feature@http://localhost:8084/mf-manifest.json',
        'shared_ui': 'shared_ui@http://localhost:8086/mf-manifest.json',
    },
    shared: ["react", "react-dom"],
};
