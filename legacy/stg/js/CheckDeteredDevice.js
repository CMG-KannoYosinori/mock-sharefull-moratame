var _uaListDeteredDevice = [' SHF31 Build', ' OJS Build', ' SHF32 Build', ' KYF31 Build', ' SHF33 ', ' KYF32 ', ' SUA ', ' MYS ', ' KYV39 ', ' XVM ', ' KYF33 '];
var _uaLocal = window.navigator.userAgent.toLowerCase();

function _isNotDeteredDevice() {
  for (var i = 0; i < _uaListDeteredDevice.length; i++) {
    var reg = new RegExp(_uaListDeteredDevice[i].toLowerCase());
    if (_uaLocal.match(reg)) {
      return false;
    }
  }
  return true;
}
