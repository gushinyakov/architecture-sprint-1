export const mfConfig = {
    name: "app_host",
    exposes: {},
    remotes: {
        'auth_mf': 'auth_mf@http://localhost:8081/mf-manifest.json',
        'profile_mf': 'profile_mf@http://localhost:8082/mf-manifest.json',
        'place_mf': 'place_mf@http://localhost:8088/mf-manifest.json',
        'shared_context': 'shared_context@http://localhost:8083/mf-manifest.json',
        'shared_feature': 'shared_feature@http://localhost:8084/mf-manifest.json',
        'shared_notification': 'shared_notification@http://localhost:8085/mf-manifest.json',
    },
    shared: ["react", "react-dom", "react-router-dom"],
};
