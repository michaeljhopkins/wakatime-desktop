# wakatime-desktop
The official Wakatime Desktop Application built in [Electron](https://github.com/atom/electron)

### Installation:

For development, run:

```shell
npm install
npm start
```

### Building the Desktop Apps:

As for preparing the Windows/Mac/Linux apps for distribution. You will first need to run the ```npm install```.

Afterwards, run the following to build all the apps for all architectures and distributions:

```shell
# Requires GNU Make to be installed
make
```

-> or use the following commands to build for your specific OS:

```shell
make windows
make windows-64
make mac-64
make linux
make linx-64
```
