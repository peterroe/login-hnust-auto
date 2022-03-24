const http = require('http')
const os = require('os')
const { 
  userName,
  passWord,
  ISP
} = require('./config.js')
    
function getIPAdress() {
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
      var iface = interfaces[devName];
      for (var i = 0; i < iface.length; i++) {
          var alias = iface[i];
          if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
              return alias.address;
          }
      }
  }
}

const myHost = getIPAdress();

let _ISP
switch (ISP) {
  case 0:
      _ISP = ''
    break;
  case 1:
      _ISP = 'telecom'
    break;
  case 2:
      _ISP = 'unicom'
    break;
  case 3:
      _ISP = 'cmcc'
    break;
  default:
    break;
}

http.get(`http://login.hnust.cn:801/eportal/?c=Portal&a=login&callback=dr1004&login_method=1&user_account=%2C0%2C${userName}%40${_ISP}&user_password=${passWord}&wlan_user_ip=${myHost}&wlan_user_ipv6=&wlan_user_mac=000000000000&wlan_ac_ip=&wlan_ac_name=&jsVersion=3.3.3&v=1700`, (res) => {
  if(res.statusCode == 200) {
      console.log(`User ${userName} login successfully!`);
    }
})