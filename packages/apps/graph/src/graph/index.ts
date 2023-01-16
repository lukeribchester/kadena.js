import './objects/Block';
import './objects/Transaction';
import './Query/hello';
import './Query/blocks';
import './Query/lastBlockHeight';
import './Subscription/newBlocks';

import { builder } from './builder';

builder.queryType({});
// no mutation fields defined yet, hence commented
// builder.mutationType({});
builder.subscriptionType({});