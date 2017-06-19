package cn.gov.bjsat.dexc;

import javax.annotation.Resource;
import java.lang.management.ManagementFactory;
import java.lang.management.RuntimeMXBean;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.util.Enumeration;
import java.util.ResourceBundle;
import java.util.regex.Pattern;

import java.security.MessageDigest;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by grf11_000 on 2015/10/9.
 */
public class Utils {

    /**
     * MD5加码。32位
     *
     * @param inStr
     * @return
     */
    public static String MD5(String inStr) {
        MessageDigest md5 = null;
        try {
            md5 = MessageDigest.getInstance("MD5");
        } catch (Exception e) {
            System.out.println(e.toString());
            e.printStackTrace();
            return "";
        }
        char[] charArray = inStr.toCharArray();
        byte[] byteArray = new byte[charArray.length];

        for (int i = 0; i < charArray.length; i++)
            byteArray[i] = (byte) charArray[i];

        byte[] md5Bytes = md5.digest(byteArray);

        StringBuffer hexValue = new StringBuffer();

        for (int i = 0; i < md5Bytes.length; i++) {
            int val = ((int) md5Bytes[i]) & 0xff;
            if (val < 16)
                hexValue.append("0");
            hexValue.append(Integer.toHexString(val));
        }

        return hexValue.toString();
    }


//    返回可读的日期格式
    public static String getDateString() {
        return  new SimpleDateFormat("yyyy-MM-dd HH:m:s").format(new Date());
    }


    /**
     * 返回当前JVM的pid
     *
     * @return
     */
    public static int getPid() {
        int pid = 0;
        RuntimeMXBean runtime = ManagementFactory.getRuntimeMXBean();
        String name = runtime.getName();
        int index = name.indexOf("@");
        if (index != -1) {
            pid = Integer.parseInt(name.substring(0, index));
        }

        return pid;
    }


    private static final Pattern IPV4_PATTERN =
            Pattern.compile(
                    "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$");



    /**
     * 返回当前主机的ip
     *
     * @return
     */
    public static String getHost() {
        String host = "";
        try {
            for (Enumeration<NetworkInterface> interfaces = NetworkInterface.getNetworkInterfaces(); interfaces.hasMoreElements(); ) {
                NetworkInterface networkInterface = interfaces.nextElement();
                if (networkInterface.isLoopback() || networkInterface.isVirtual() || !networkInterface.isUp()) {
                    continue;
                }
                Enumeration<InetAddress> addresses = networkInterface.getInetAddresses();
                while (addresses.hasMoreElements()) {
                    InetAddress inetAddress = addresses.nextElement();
                    host = inetAddress.getHostAddress();
                    if (IPV4_PATTERN.matcher(host).matches()) {
                        break;
                    }
                }
            }
        } catch (Exception e) {

        }
        return host;
    }


    public static String getZookeeperConfig(){
        String result=null;
        try {
            ResourceBundle resourceBundle=ResourceBundle.getBundle("zookeeper");
            result=resourceBundle.getString("zookeeper");
        }catch (Exception e){
            e.printStackTrace();

        }
        return result;
    }


}
