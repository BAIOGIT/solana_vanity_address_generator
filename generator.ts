import { generateSolanaVanityKeypair } from 'solana-vanity-generator';

interface GenerateOptions {
  prefix: string;
  suffix: string;
  timeoutSeconds: number;
  cores: number;
}

export async function createVanitySuffix(suffix: String) {
  try {
    const options: GenerateOptions = {
      prefix: null,
      suffix: suffix,
      timeoutSeconds: 600,
      cores: 48,
    };

    const result = await generateSolanaVanityKeypair(options);
    console.log('Generated keypair:', result);
    return result.privateKey;

  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Error:', error);
    }
    return false;
  }
}

// const vanity = await createVanitySuffix('pump');

export async function createVanityPrefix(prefix: String) {
  try {
    const options: GenerateOptions = {
      prefix: prefix,
      suffix: null,
      timeoutSeconds: 600,
      cores: 48,
    };

    const result = await generateSolanaVanityKeypair(options);
    console.log('Generated keypair:', result);
    return result.privateKey;

  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Error:', error);
    }
    return false;
  }
}

const vanity = createVanityPrefix('pump');
