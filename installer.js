const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const isDirectory = (item) => {
    const stats = fs.statSync(item);
    
    return stats.isDirectory();
};

const copyDirectory = (src, dest) => {
    console.log('copyDirectory', src, dest);

    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest);
    }

    const items = fs.readdirSync(src);
    items.forEach(item => {
        const name = path.basename(item);
        const srcPath = path.join(src, name);
        if (isDirectory(srcPath)) {
            copyDirectory(
                srcPath,
                path.join(dest, name)
            );
        }
        else {
            console.log(
                'copying',
                srcPath,
                path.join(dest, name)
            );
            fs.copyFileSync(
                srcPath,
                path.join(dest, name)
            );
        }
    });
};

const nsisInstallPath = path.join('C:', 'Program Files (x86)', 'NSIS');

const installerPathExists = () => {
    return fs.existsSync(nsisInstallPath);
};

class Installer {
    constructor(debugMode) {
        this.debugMode = debugMode;
        this.pluginPaths = [];
        this.arguments = '';
    }

    debugLog(msg) {
        if (this.debugMode) {
            console.log(msg);
        }
    }

    getArguments() {
        return this.arguments;
    }

    setArguments(value) {
        this.debugLog(`Settings arguments: ${value}`);
        this.arguments = value;
    }

    addPluginPath(pluginPath) {
        this.debugLog(`Adding plugin path: ${pluginPath}`);
        this.pluginPaths.push(pluginPath);
    }

    createInstaller(scriptPath) {
        if (!installerPathExists()) {
            const installerPathMessage = `Installer path does not exist at ${nsisInstallPath}`;
            this.debugLog(installerPathMessage);
            throw new Error(installerPathMessage);
        }

        console.log(`Creating installer for: ${scriptPath}`);

        // Include any of the plugins that may have been requested.
        const nsisPluginPath = path.join(nsisInstallPath, 'plugins');
        this.pluginPaths.forEach(pluginPath => {
            console.log('Including plugin path', pluginPath);
            copyDirectory(pluginPath, nsisPluginPath);
        });

        // Increase verbosity for debug
        const args = [];
        if (this.arguments.indexOf('/V') === -1) {
            if (this.debugMode) {
                args.push('/V4');
            }
            else {
                args.push('/V1');
            }
        }
    
        args.push(this.arguments);
        args.push(`"${path.resolve(scriptPath)}"`);
    
        const nsis3Exe = path.join(nsisInstallPath, 'makensis.exe');
        const makeCommand = `'${nsis3Exe}' ${args.join(' ')}`;
        this.debugLog(`Running ${makeCommand}`);
        const process = execSync(makeCommand);
    }
};

module.exports = {
    Installer
};