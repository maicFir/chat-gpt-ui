
/**
 *
 * @returns true 移动端 false pc端
 */
export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };
/**
 * @param {Number} len uuid的长度
 * @param {Boolean} firstU 将返回的首字母置为"u"
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 */
export const guid = (len = 32, firstU = true, radix = 0) => {
    const chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid: any[] = [];
    radix = radix || chars.length;
  
    if (len) {
      // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
      for (let i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
    } else {
      let r;
      // rfc4122标准要求返回的uuid中,某些位为固定的字符
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
  
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | (Math.random() * 16);
          uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  };
  

  /**
 *
 * @returns 本地缓存
 * 例如:
 * 设置缓存 storageUtils.storage('name', "test") 缓存name到本地缓存
 * 获取缓存的值：storageUtils.storage("name")
 * 清除缓存： storageUtils.clear();
 * 清除指定的缓存值: storageUtils.clear('name')
 *
 */
export const storageUtils = {
    getStorage(key: string) {
      try {
        if (typeof window !== "undefined" && localStorage) {
          const value = (localStorage as any).getItem(key);
          return value ? JSON.parse(value) : null;
        }
      } catch (error) {
        console.error("获取缓存时发生错误:", error);
        return null;
      }
      return null;
    },
    setStorage(key: string, value: any) {
      try {
        if (typeof window !== "undefined" && localStorage) {
          localStorage.setItem(key, JSON.stringify(value));
        }
      } catch (error) {
        console.error("设置缓存时发生错误:", error);
      }
    },
    clear() {
      try {
        if (typeof window !== "undefined" && localStorage) {
          localStorage.clear();
        }
      } catch (error) {
        console.error("清除缓存时发生错误:", error);
      }
    },
    clearSomeKey(key?: string) {
      try {
        if (typeof window !== "undefined" && localStorage) {
          if (key) {
            const keys = Object.keys(localStorage);
            keys.forEach((item) => {
              // 如果当前键不是传入的 key，则删除
              if (item !== key) {
                localStorage.removeItem(item);
              }
            });
          } else {
            localStorage.clear();
          }
        }
      } catch (error) {
        console.error("清除缓存时发生错误:", error);
      }
    },
    remove(key: string) {
      try {
        if (typeof window !== "undefined" && localStorage) {
          localStorage.removeItem(key);
        }
      } catch (error) {
        console.error("清除缓存时发生错误:", error);
      }
    },
  };