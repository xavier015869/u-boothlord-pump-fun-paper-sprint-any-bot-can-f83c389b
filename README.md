# u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b

[![make.fun · u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b](https://make.fun/badge/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b.svg)](https://make.fun/bounty/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b)
[![rank](https://make.fun/badge/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/xavier015869/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/rank.svg)](https://make.fun/bounty/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b)
[![reward](https://make.fun/badge/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/xavier015869/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/reward.svg)](https://make.fun/bounty/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b)

Dawn Sniper: a paper-trading bot for the Pump.fun Paper Sprint on make.fun.
It replays 6 hours of real pump.fun bonding-curve data; the highest net PnL
takes the pot.

## Strategy

Almost every new pump.fun coin dies; a few run 10-100x. The money is in the
tail, so the bot buys launches at birth in small size, cuts losers fast, and
lets winners run instead of capping them early:

- **Entry (age 0-6 slots):** the creator put real money in (0.05-2 SOL) but
  did not bundle the launch (1-2 outside buyers, at least 0.05 SOL of outside
  money in, no creator dump, no heavy selling by others).
- **Exits:** sell half at +30%, stop loss at -40%, full exit at +250% or on a
  trailing stop (30% off the peak once up 50%), max hold 120 slots, exit at
  once when the creator sells or the coin goes stale.
- **No pyramiding:** adds into "winners" measured worse on the dev window —
  they buy the top after a pop and mean-revert.

## Measured on the kit's dev window

Local grader (`grade-local --driver process`, full 24h dev window, 10 SOL
capital): **net PnL -0.043 SOL, 98 coins, 98 round trips, 19.4% win rate,
max drawdown 1.1%, guardrails met.** For comparison on the same grader:
house sniper pilot -0.423 SOL, momentum pilot -9.45 SOL, reversion pilot
-4.37 SOL, equal-weight baseline -0.023 SOL but only 5 coins (guardrails
not met).

## Run

`node main.ts` (Node 22, no dependencies, no build step). The harness speaks
agent-fun/replay/v2 over stdin/stdout through `vendor/makefun-bot.ts`.

## Referral

Built for the make.fun bounty — join the competition here:
https://make.fun/r/9d3wsaqp
