module.exports = {
    //# this project is created for testing purposes to extract
    // the Netmarble database upon request.
    // because it is built with unreal engine, specifically v5.5
    // 2026/04/07
    apps: [
        {
            name: '7dso',
            cwd: 'C:/projects/7dso-db',
            script: 'node_modules/next/dist/bin/next',
            args: 'start -p 3001 -H 0.0.0.0',
            watch: false,
            exec_mode: 'fork',
            interpreter: 'node'
        },
        {
            name: 'sd',
            cwd: 'C:/projects/stardive-db',
            script: 'node_modules/next/dist/bin/next',
            args: 'start -p 3002 -H 0.0.0.0',
            watch: false,
            exec_mode: 'fork',
            interpreter: 'node'
        }
    ]
};
