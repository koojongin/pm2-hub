module.exports = {
    //# this project is created for testing purposes to extract
    // the Netmarble database upon request.
    // because it is built with unreal engine, specifically v5.5
    // 2026/04/07
    apps: [
        {
            name: '7dso',
            cwd: 'C:/projects/7dso-db',
            script: 'npm',
            args: 'start',
            watch: false
        },
        {
            name: 'stardive',
            cwd: 'C:/projects/stardive-db',
            script: 'npm',
            args: 'start',
            watch: false
        }
    ]
};
