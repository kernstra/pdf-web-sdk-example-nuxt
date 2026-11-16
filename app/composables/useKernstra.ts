// Owns the SDK's options. nuxt.config.ts:
//   runtimeConfig: { public: { kernstraLicense: '' } }
// Nuxt fills it from NUXT_PUBLIC_KERNSTRA_LICENSE: in .env for
// nuxi dev (Nuxt skips .env.local), in the server's environment
// in production.
import { Kernstra } from '@kernstra/pdf-web-sdk';

// Call it in setup; await what it returns once mounted.
export const useKernstra = () => {
  const { kernstraLicense } = useRuntimeConfig().public;
  return () => Kernstra.init({ license: kernstraLicense });
};
