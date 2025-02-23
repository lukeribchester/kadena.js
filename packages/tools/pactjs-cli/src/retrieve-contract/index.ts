import { retrieveContract } from './retrieve-contract';

import { Command, Option } from 'commander';
import debug from 'debug';
import { z } from 'zod';

// eslint-disable-next-line @rushstack/typedef-var
const Options = z.object({
  module: z.string({
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    invalid_type_error: 'Error: -m, --module must be a string',
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    required_error: 'Error: -m, --module is required',
  }),
  out: z.string({
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    invalid_type_error: 'Error: -o, --out must be a string',
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    required_error: 'Error: -o, --out is required',
  }),
  network: z.enum(['mainnet', 'testnet']),
  chain: z
    .number({
      /* eslint-disable-next-line @typescript-eslint/naming-convention */
      invalid_type_error: 'Error: -c, --chain must be a number',
    })
    .min(0)
    .max(19),
});

export type TOptions = z.infer<typeof Options>;

export function retrieveContractCommand(
  program: Command,
  version: string,
): void {
  program
    .command('retrieve-contract')
    .description('Retrieve contract from api.chainweb.com in a /local call')
    .option(
      '-m, --module <module>',
      'The module you want to retrieve (e.g. "coin")',
    )
    .option('-o, --out <file>', 'File to write the contract')
    .option(
      '-n, --network <network>',
      'Network to retrieve from (default "mainnet")',
      'mainnet',
    )
    .addOption(
      new Option('-c, --chain <number>', 'Chain to retrieve from (default 1)')
        .argParser((value) => parseInt(value, 10))
        .default(1),
    )
    .action(async (args: TOptions) => {
      debug('retrieve-contract:action')({ args });
      try {
        Options.parse(args);
      } catch (e) {
        program.error(
          (e as z.ZodError).errors
            .map((err) => {
              if (err.code === 'invalid_type') {
                return `${err.message} (${err.expected} was ${err.received})`;
              }
              return err.message;
            })
            .reduce((a, b) => `${a}\n${b}`) +
            `\nReceived arguments ${JSON.stringify(args)}` +
            `\n${program.helpInformation(e)}`,
        );
      }
      await retrieveContract(program, version)(args).catch(console.error);
    });
}
