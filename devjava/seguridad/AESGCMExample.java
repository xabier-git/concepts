import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.GCMParameterSpec;
import java.security.SecureRandom;
import java.util.Base64;

public class AESGCMExample {

    public static void main(String[] args) throws Exception {
        // 1. Generar clave AES
        KeyGenerator keyGen = KeyGenerator.getInstance("AES");
        keyGen.init(256); // Tamaño de la clave: 128, 192, o 256 bits
        SecretKey secretKey = keyGen.generateKey();

        // 2. Generar un IV único
        SecureRandom secureRandom = new SecureRandom();
        byte[] iv = new byte[12]; // Tamaño recomendado para GCM es 12 bytes
        secureRandom.nextBytes(iv);

        // 3. Configurar GCMParameterSpec
        int tagLength = 128; // Longitud del tag de autenticación en bits (128, 120, 112, 104, 96)
        GCMParameterSpec gcmSpec = new GCMParameterSpec(tagLength, iv);

        // Texto plano
        String plainText = "Este es un mensaje secreto con AES/GCM.";

        // 4. Inicializar Cipher para cifrado
        Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
        cipher.init(Cipher.ENCRYPT_MODE, secretKey, gcmSpec);

        // Datos Asociados (AAD) opcionales
        String aadData = "Metadatos asociados";
        cipher.updateAAD(aadData.getBytes());

        // Cifrar
        byte[] cipherText = cipher.doFinal(plainText.getBytes());
        String encryptedText = Base64.getEncoder().encodeToString(cipherText);

        System.out.println("Texto cifrado: " + encryptedText);
        System.out.println("IV (Base64): " + Base64.getEncoder().encodeToString(iv));

        // 5. Inicializar Cipher para descifrado
        cipher.init(Cipher.DECRYPT_MODE, secretKey, gcmSpec);
        cipher.updateAAD(aadData.getBytes());

        // Descifrar
        byte[] decryptedText = cipher.doFinal(Base64.getDecoder().decode(encryptedText));
        System.out.println("Texto descifrado: " + new String(decryptedText));
    }
}