package com.ipty.boke.util;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Random;

public class VerifyCode {
    private int width = 70;
    private int height = 35;
    private Random random = new Random();
    private String[] fontNames = new String[]{"宋体", "华文楷体", "黑体", "华文新魏", "华文隶书", "微软雅黑", "楷体_GB2312"};
    private String codes = "23456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXZY";
    private Color bgColor = new Color(255, 255, 255);
    private String text;

    public VerifyCode() {
    }

    private Color randomColor() {
        int red = this.random.nextInt(150);
        int green = this.random.nextInt(150);
        int blue = this.random.nextInt(150);
        return new Color(red, green, blue);
    }

    private Font randomFont() {
        int index = this.random.nextInt(this.fontNames.length);
        String fontName = this.fontNames[index];
        int style = this.random.nextInt(4);
        int size = this.random.nextInt(5) + 24;
        return new Font(fontName, style, size);
    }

    private void drawLine(BufferedImage image) {
        int lineNum = 3;
        Graphics2D graphics2d = (Graphics2D)image.getGraphics();

        for(int i = 0; i < lineNum; ++i) {
            int x1 = this.random.nextInt(this.width);
            int y1 = this.random.nextInt(this.height);
            int x2 = this.random.nextInt(this.width);
            int y2 = this.random.nextInt(this.height);
            graphics2d.setStroke(new BasicStroke(1.5F));
            graphics2d.setColor(Color.BLUE);
            graphics2d.drawLine(x1, y1, x2, y2);
        }

    }

    private char randomChar() {
        int index = this.random.nextInt(this.codes.length());
        return this.codes.charAt(index);
    }

    private BufferedImage createImage() {
        BufferedImage image = new BufferedImage(this.width, this.height, 1);
        Graphics2D graphics2d = (Graphics2D)image.getGraphics();
        graphics2d.setColor(this.bgColor);
        graphics2d.fillRect(0, 0, this.width, this.height);
        return image;
    }

    public BufferedImage getImage() {
        BufferedImage image = this.createImage();
        Graphics2D graphics2d = (Graphics2D)image.getGraphics();
        StringBuilder string = new StringBuilder();

        for(int i = 0; i < 4; ++i) {
            String singleChar = String.valueOf(this.randomChar());
            string.append(singleChar);
            float x = (float)i * 1.0F * (float)this.width / 4.0F;
            graphics2d.setFont(this.randomFont());
            graphics2d.setColor(this.randomColor());
            graphics2d.drawString(singleChar, x, (float)(this.height - 5));
        }

        this.text = string.toString();
        this.drawLine(image);
        return image;
    }

    public String getText() {
        return this.text;
    }

    public static void output(BufferedImage image, OutputStream out) throws IOException {
        ImageIO.write(image, "JPEG", out);
    }

    public static byte[] getImageData(BufferedImage image) {
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            ImageIO.write(image, "JPEG", out);
        } catch (IOException var3) {
            var3.printStackTrace();
        }

        return out.toByteArray();
    }
}
