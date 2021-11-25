let globalJs = {
    // 时间戳转日期
    formatDate(value, timeType) {
        if (value != null) {
            let date = new Date(value);
            let y = date.getFullYear();
            let MM = date.getMonth() + 1;
            MM = MM < 10 ? "0" + MM : MM;
            let d = date.getDate();
            d = d < 10 ? "0" + d : d;
            let h = date.getHours();
            h = h < 10 ? "0" + h : h;
            let m = date.getMinutes();
            m = m < 10 ? "0" + m : m;
            let s = date.getSeconds();
            s = s < 10 ? "0" + s : s;
            if (timeType == "date") {
                // 时间戳转日期-yyyy-MM-dd
                return y + "-" + MM + "-" + d;
            } else if (timeType == "dateTime") {
                // 时间戳转日期-yyyy-MM-dd HH:mm:ss
                return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
            } else if (timeType == "time") {
                // 时间戳转时间-HH:mm:ss
                return h + ":" + m + ":" + s;
            }
        } else {
            value = "";
        }
    },
}

export default globalJs