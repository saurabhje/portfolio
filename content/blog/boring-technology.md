---
title: "The Case for Boring Technology"
description: "Why choosing well-understood, battle-tested tools is often the most radical thing you can do."
date: "2025-04-05"
tags: ["engineering", "philosophy"]
featured: true
---

There's a particular kind of excitement that comes with new technology. A new framework drops, the benchmarks look impressive, the DX seems incredible, and suddenly every greenfield project feels like the perfect use case.

I've felt this many times. I've also shipped several projects where "exciting technology" became the primary source of production pain.

## What boring means

Boring technology isn't bad technology. It's technology that:

- Has been in production long enough to surface its failure modes
- Has a deep community that has already solved your problem
- Has documentation that was written after the authors understood what they built

PostgreSQL is boring. Linux is boring. HTTP is boring. These are not weaknesses.

## The cost of novelty

Every new tool you introduce has a learning curve — not just for you, but for everyone who touches the codebase after you. That cost is paid on every incident, every onboarding, every "why does this work this way?" conversation.

New tools also have sharp edges that haven't been found yet. Not bugs necessarily, but subtle design decisions that become painful at scale. The community hasn't had time to develop idiomatic patterns, so everyone is improvising.

## When novelty is worth it

None of this means you should never adopt new technology. Sometimes the new thing solves a real problem that the boring alternatives can't. The question to ask is: **what am I getting in exchange for the uncertainty?**

If the answer is "it's faster to build with" or "it feels more modern," that's probably not enough. If the answer is "it's the only viable solution to this specific constraint," that's different.

## A practical heuristic

Before adopting new technology, I try to find a production postmortem from someone who used it at scale. Not a glowing conference talk — an honest account of what broke and how they fixed it. If I can't find one, that tells me something.

---

The goal isn't to be conservative for its own sake. It's to be deliberate. Use what you understand. Understand what you use.
