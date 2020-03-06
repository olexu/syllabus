module.exports = function (grunt) {
    grunt.initConfig({
        clean: [
            "Output",
            "Source/Syllabus/bin",
            "Source/WebDeployPackages"
        ],
        shell: {
            options: { stdout: true },

            frontendYarn: { command: "cd Source/Syllabus/ClientApp && yarn" },
            frontendLint: { command: "cd Source/Syllabus/ClientApp && yarn lint" },
            frontendTest: { command: "cd Source/Syllabus/ClientApp && yarn test" },
            frontendBuild: { command: "cd Source/Syllabus/ClientApp && yarn build" },

            backendTest: { command: "dotnet test /p:Configuration=Release Source/Syllabus.Tests/Syllabus.Tests.csproj" },
            backendBuild: { command: "dotnet publish Source/Syllabus/Syllabus.csproj --configuration Release /p:WebPublishMethod=Package /p:PackageAsSingleFile=true /p:PackageLocation=../WebDeployPackages" }
        },
        copy: {
            output: {
                files: [
                    { expand: true, cwd: "Source/WebDeployPackages", src: ["**"], dest: "Output/WebDeployPackages" }
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("frontend", ["shell:frontendYarn", "shell:frontendLint", "shell:frontendBuild"]);
    grunt.registerTask("backend", ["shell:backendTest", "shell:backendBuild"]);
    grunt.registerTask("output", ["copy:output"]);

    grunt.registerTask("default", ["clean", "frontend", "backend", "output"]);
};