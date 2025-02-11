export const mfConfig = {
    name: "shared_notification",
    exposes: {
        './Notification': './src/components/Notification.tsx'
    },
    remotes: {
        'shared_feature': 'shared_feature@http://localhost:8084/mf-manifest.json',
        'shared_ui': 'shared_ui@http://localhost:8086/mf-manifest.json'
    },
    shared: ["react", "react-dom", "react-router-dom"],
};
