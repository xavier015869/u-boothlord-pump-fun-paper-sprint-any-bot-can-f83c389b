// Dawn Sniper entrypoint for u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b.
//
// One program at main.ts (Node 22), run by the grader as `node /bot/main.ts`
// with this directory mounted at /bot. It wires the Dawn Sniper strategy
// (strategy.ts) to the agent-fun/replay/v2 harness through the vendored shim
// (vendor/makefun-bot.ts, a byte-identical copy of the kit's sdk/ts/makefun-bot.ts).
// The strategy trades pump.fun bonding curves on a 6-hour replay: it snipes
// launches at birth in small size, cuts losers fast, and lets winners run with
// a trailing stop, so one runner pays for many small losses.

import { runBot } from './vendor/makefun-bot.ts';
import { createStrategy, DEFAULT_PARAMS } from './strategy.ts';

// Pin the tuned parameters in the entrypoint so the run is reproducible from
// this file alone; onDone reports the final account to stderr (stdout carries
// replies only, so diagnostics must never go there).
await runBot({
  ...createStrategy(DEFAULT_PARAMS),
  onDone(state, done) {
    const cash = Number(state.account.cash_lamports) / 1e9;
    console.error(`dawn-sniper done: ${done.reason}, final cash ${cash.toFixed(6)} SOL, batches answered`);
  },
});
