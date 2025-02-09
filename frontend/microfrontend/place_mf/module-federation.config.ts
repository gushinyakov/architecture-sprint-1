export const mfConfig = {
    name: "place_mf",
    exposes: {
        './AddPlace': './src/components/AddPlace.tsx',
        './PlacesList': './src/components/PlacesList.tsx',
    },
    remotes: {
        'shared_context': 'shared_context@http://localhost:8083/mf-manifest.json',
        'shared_feature': 'shared_feature@http://localhost:8084/mf-manifest.json',
        'shared_ui': 'shared_ui@http://localhost:8086/mf-manifest.json',
    },
    shared: ["react", "react-dom"],
};
