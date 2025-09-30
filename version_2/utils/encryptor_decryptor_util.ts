
import crypto                       from "crypto";
import GlobalVariableManagerUtil    from "./global_variable_manager_util";
import LoggerUtil                   from "./logger_util";

class EncryptorDecryptorUtil {
    public readonly name = "encryptor_decryptor_util";
    private readonly encrypt_v1_algorithm: string;
    private readonly encrypt_v1_iv_length: number;
    private readonly global_vars: GlobalVariableManagerUtil;
    private readonly encrypt_v1_secret_key: string;
    private logger: LoggerUtil;

    constructor () {
        this.encrypt_v1_algorithm   = "aes-256-cbc";
        this.encrypt_v1_iv_length   = 16;
        this.global_vars            = GlobalVariableManagerUtil.getInstance();
        this.encrypt_v1_secret_key  = this.getEncryptV1SecretKey();

        this.logger                 = new LoggerUtil({ prefix: this.name, show_timestamp: false });

    }

    // Method to get encryption secret key
    private getEncryptV1SecretKey (): string {
        const encryption_secret_key = this.global_vars.getVariable("ENCRYPT_V1_SECRET_KEY");

        if(encryption_secret_key) { return encryption_secret_key } 

        const new_encrypt_secret_key = crypto.randomBytes(32).toString("hex");

        this.global_vars.setVariable("ENCRYPT_V1_SECRET_KEY", new_encrypt_secret_key);

        return new_encrypt_secret_key;
    }

    // Method to encrypt a text
    public encryptV1(text: string): string | null {
        try {
            const iv            = crypto.randomBytes(this.encrypt_v1_iv_length);
            const cipher        = crypto.createCipheriv(this.encrypt_v1_algorithm, Buffer.from(this.encrypt_v1_secret_key), iv);
            let encrypted       = cipher.update(text, "utf8", "hex");

            encrypted += cipher.final("hex");
            return iv.toString("hex") + ":" + encrypted;
        }
        catch(error: unknown) {
            this.logger.error(`Failed to encrypt v1 string`, { error })
            return null;
        }
    }

    // Method to decrypt encryptV1 encryption
    public decryptV1(text: string): string | null {
        try {
            const [iv_hex, encrypted]   = text.split(":");
            const iv                    = Buffer.from(iv_hex, "hex");
            const decipher              = crypto.createDecipheriv(this.encrypt_v1_algorithm, Buffer.from(this.encrypt_v1_secret_key), iv);
            let decrypted               = decipher.update(encrypted, "hex", "utf8");
            decrypted                   += decipher.final("utf8");

            return decrypted;
        }
        catch(error: unknown) {
            this.logger.error(`Failed to decrypt v1 string`, { error })
            return null;
        }
    }

}

export default EncryptorDecryptorUtil;