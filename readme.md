## Login-Hnust-Auto

Automatically log in by compiling the generated `.exe` file

## Try it out!

Suppose you have prepared the `node` environment

### clone and install

```shell
$ git clone git@github.com:peterroe/login-hnust-auto.git
$ pnpm i
```

### config your account

edit `src/config.js`:

```js
module.exports = {
  userName: '1905010504',   // input your userName
  passWord: 'xxxxx',        // input your password
  ISP: 2                    // 0 | 1 | 2 | 3
}
```

### Generate exe program

Just run:

```shell
$ pnpm build
```

You will get the exclusive `login.exe` program of your account, and you can put it on the desktop.
