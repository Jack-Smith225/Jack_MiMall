/**
 * storage封装
 */

const STORAGE_KEY = 'mall';

export default {
  // 存储值
  setItem(key, value, module_name) {

    if (module_name) {
      let storage = this.getItem(module_name);
      storage[key] = value;
      this.setItem(module_name, storage)
    }else {
      let storage = this.getStorage();
      storage[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storage))
    }
  },
  // 获取某一个模块下面的属性
  getItem(key,module_name){
    if (module_name) {
      let val = this.getItem(module_name)
      if (val) {
        return val[key];
      }
    }
    return this.getStorage()[key];
  },
  // 获取整个数据
  getStorage(){
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || {});
  },
  clear(key, module_name) {
    let val = this.getStorage();
    if (module_name) {
      if (!val[module_name]) {
        return
      }
      delete val[module_name][key];
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
};
