package com.ipty.boke.util;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.UUID;

public class NoteUtil {
    public NoteUtil() {
    }

    public static String createId() {
        UUID uuid = UUID.randomUUID();
        String id = uuid.toString();
        return id.replace("-", "");
    }

    public static String md5(String data) {
        try {
            byte[] md5 = md5(data.getBytes("utf-8"));
            return toHexString(md5);
        } catch (UnsupportedEncodingException var2) {
            var2.printStackTrace();
            return "";
        }
    }

    public static byte[] md5(byte[] data) {
        try {
            MessageDigest md = MessageDigest.getInstance("md5");
            md.update(data);
            return md.digest();
        } catch (NoSuchAlgorithmException var2) {
            var2.printStackTrace();
            return new byte[0];
        }
    }

    public static String toHexString(byte[] md5) {
        StringBuilder buf = new StringBuilder();
        byte[] var5 = md5;
        int var4 = md5.length;

        for(int var3 = 0; var3 < var4; ++var3) {
            byte b = var5[var3];
            buf.append(leftPad(Integer.toHexString(b & 255), '0', 2));
        }

        return buf.toString();
    }

    public static String leftPad(String hex, char c, int size) {
        char[] cs = new char[size];
        Arrays.fill(cs, c);
        System.arraycopy(hex.toCharArray(), 0, cs, cs.length - hex.length(), hex.length());
        return new String(cs);
    }

    public static void main(String[] args) {
        System.out.println(md5("123456"));
    }
}
