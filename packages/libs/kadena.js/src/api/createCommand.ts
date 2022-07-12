import type {
  Command,
  CommandPayloadStringifiedJSON,
  SignatureWithHash,
} from '@kadena/types';

import { pullAndCheckHashs } from './pullAndCheckHashs';
import { pullSignature } from './pullSignature';
/**
 * Makes a single command given signed data.
 * @param signatures {array} - array of signature objects, see 'sign'
 * @param cmd {string} - stringified JSON blob used to create hash
 * @return valid Pact API command for send or local use.
 */
export function createCommand(
  signatures: Array<SignatureWithHash>,
  cmd: CommandPayloadStringifiedJSON,
): Command {
  return {
    hash: pullAndCheckHashs(signatures),
    sigs: signatures.filter(({ sig }) => sig).map(pullSignature),
    cmd,
  };
}