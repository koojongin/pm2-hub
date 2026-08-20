module.exports = {
    //# this project is created for testing purposes to extract
    // the Netmarble database upon request.
    // because it is built with unreal engine, specifically v5.5
    // 2026/04/07
    apps: [
        // {
        //     name: '7dso',
        //     cwd: 'C:/projects/7dso-db',
        //     script: 'node_modules/next/dist/bin/next',
        //     args: 'start -p 3001 -H 0.0.0.0',
        //     watch: false,
        //     exec_mode: 'fork',
        //     interpreter: 'node'
        // },
        {
            name: 'sd',
            cwd: 'C:/projects/stardive-db',
            script: 'node_modules/next/dist/bin/next',
            args: 'start -p 3002 -H 0.0.0.0',
            watch: false,
            exec_mode: 'fork',
            interpreter: 'node'
        },
        {
            name: 'entaria',
            cwd: 'C:/projects/entaria',
            script: 'node_modules/tsx/dist/cli.mjs', // 👈 tsx 실행 파일을 직접 지정
            args: 'server.ts',
            instances: 1, // 👈 1개로 고정
            exec_mode: 'fork',
            watch: false,
            env: {
                NODE_ENV: 'production',
                PORT: 3003
            }
        },
        {
            name: 'ds',
            cwd: 'C:/projects/dragonsword-awakening',
            script: 'node_modules/next/dist/bin/next',
            args: 'start -p 3004 -H 0.0.0.0',
            watch: false,
            exec_mode: 'fork',
            interpreter: 'node'
        }
    ]
};
