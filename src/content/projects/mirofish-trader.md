---
title: Mirofish Trader
summary: An auditable multi-agent trading research system. Competing AI traders turn market signals into risk-gated decisions across stocks and prediction markets.
year: 2026
stack: [Python, LangGraph, FastAPI, Vue 3, LLM agents]
featured: true
order: 2
colors: ["#ff6b4a", "#8b5cf6"]
---

## The problem

Asking an LLM "should I buy AAPL?" is easy. Building a system that can safely act on the answer is hard. It has to gather real evidence, argue with itself, size the position, respect a budget, and leave a paper trail you can audit afterward. It also must never touch real money by accident.

## How it works

Each decision runs as a LangGraph pipeline:

1. **Collect seeds** from 15+ sources: SEC EDGAR, FRED, Finnhub, GDELT, BLS, Treasury, Reddit, Bluesky, and Kalshi/Polymarket odds.
2. **Predict.** A swarm of agents (MiroFish) simulates how the market reacts and produces a prediction with confidence.
3. **Gate on risk.** Position sizing, per-trader budgets, and a cohort-wide kill switch.
4. **Execute or skip** through broker adapters (Alpaca, Coinbase, Kalshi). Every decision is reconciled against confirmed fills.
5. **Log everything** as run artifacts for backtests, calibration, and post-run review.

On top sits the **Alpha Arena**: several trader configurations with different models, strategies, venues, and budgets run side by side as child processes. Each one keeps its own equity curve in a Vue 3 dashboard.

## Safety by design

Paper trading is the default. Live trading requires an explicit operator opt-in *and* a preflight check that fails closed. That check verifies secrets, storage isolation between paper and live, alert channels, and that no orders are already open at the broker. A `--profile debug` mode pins every LLM and broker to a fake for fast, cost-free iteration.

## What I learned

Most of the engineering went into making the system trustworthy rather than smart. That meant attributing each closed position back to the plan that opened it, separating paper state from live state, and building calibration tooling to check whether the predictions were actually right. The project has 2,400+ commits and over a thousand PRs, all gated by CI.
