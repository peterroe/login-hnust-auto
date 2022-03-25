## Login-Hnust-Auto

Automatically log in by compiling the generated `.exe` file

## Try it out!

Suppose you have prepared the `node` environment

### clone and install

```shell
$ git clone https://github.com/peterroe/login-hnust-auto.git
$ cd login-hnust-auto
$ pnpm i  # or npm i
```

### config your account

edit `src/config.js`:

```js
module.exports = {
  userName: '1905010504',   // input your userName
  passWord: 'xxxxx',        // input your password
  ISP: 2                    // 0:校园网 | 1:电信 | 2:联通 | 3:移动
}
```

### Generate exe program

Just run:

```shell
$ pnpm build  # or npm run build
```

You will get the exclusive `login.exe` program of your account, and you can put it on the desktop.
