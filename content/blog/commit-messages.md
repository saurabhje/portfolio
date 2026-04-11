---
title: "Writing Good Commit Messages"
description: "A commit message is a letter to your future self. Make it worth reading."
date: "2025-03-14"
tags: ["git", "workflow", "craft"]
featured: false
---

I review a lot of code. The thing that consistently signals whether someone cares about their craft — more than the code itself — is the quality of their commit messages.

## The format that works

```
<type>(<scope>): <short summary>

<optional body — what and why, not how>

<optional footer — breaking changes, issue refs>
```

The type can be: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`. The scope is whatever makes sense in context — a module, a route, a component.

## Short summary rules

- Use imperative mood: "Add" not "Added", "Fix" not "Fixed"
- Under 72 characters
- No period at the end
- Specific enough to understand without reading the diff

Bad: `fix bug`  
Good: `fix(auth): prevent token refresh loop on 401`

## The body is where the value is

The summary tells you *what* changed. The body tells you *why*. This is the part most people skip, and it's the part that matters most six months later.

A good body answers:
- What problem does this solve?
- Why this approach over the alternatives?
- What are the known tradeoffs?

## The real test

A commit message should let someone understand a change without looking at the diff. If they have to open the diff to understand why something changed, the message failed its job.

Your future self will thank you. So will your teammates.
