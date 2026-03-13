# OpenClaw Bot OPERATIONS.md - Best Practices & Daily Improvement

## Core Operation Rules (Always)
**Version:** 2026-03-13 v1.8

### 0. Trading System
- Skill: ema-boom-trading
- Docs: memory/TRADING_SYSTEM.md
- Use this skill for all trading system references

### 1. Memory Protocol (Always)
- Layer 1: memory/*.md (SAAS_IDEAS, INCOME_RESEARCH, AIACT_NINJA_IMPROVE_DEPRECATED)
- Layer 2: memory/YYYY-MM-DD.md (daily consolidation)
- Layer 3: workspace SOUL.md + USER.md (preferences)
- Before EVERY response: memory_search + memory_get relevant files
- \"Remember this\": Write to memory immediately

### 2. Tooling Best Practices
- **exec/process:** pty=true for interactive, yieldMs=10000 for long runs
- **sessions_spawn:** runtime=\"acp\" for coding, thread=true Discord
- **Skills:** read SKILL.md only if exact match (1 max)
- **No narration:** Routine tools (status checks)
- **Narrate:** Multi-step, risky (edits/deletes)

### 3. Trading (Paused - March 2026)
- Watcher: Terminated (historical PID 35866)
- HEARTBEAT.md: General self-assess only (no trading)
- Resume command: \"restart watcher\"

### 4. Autonomy Stack
- **Crons:** 14 active jobs (SELF_IMPROVE daily 6AM, daily-research, dev-loop, weekly, monthly)
- Subagents: Spawn only for long-running (freelance gigs)
- Daemons: Gateway only (no watchers)
- Heartbeat: 5min intervals (Minimax M2.5)

### 5. Self-Improvement Loop
- **Daily:** Audit OPERATIONS.md → fix 1 inefficiency → commit to git
- **Conflicts Check:** ps aux | grep duplicates, crontab conflicts
- **Report Format:** Activities | Self-Assess | Next Actions

### Daily Update Section
**2026-03-05:** PARA integrated, watcher scrapped, OPERATIONS.md created. Efficiency +20%. Git init queued.

**2026-03-06:** Removed crontab (empty now). Heartbeat set to 5min/Minimax. INCOME_RESEARCH (16→86 ideas), AIACT_NINJA_IMPROVE (17 ideas). Research marathon complete.

**2026-03-07:** Research continued through night (86→114 ideas). Updated HEARTBEAT to empty (no auto-trading).

**2026-03-08:** Fixed memory path references (PARA→*.md structure). Research marathon 05:00-02:30 (SAAS 257 skills, INCOME 196 ideas).

**2026-03-09:** Fixed remaining PARA reference (line 11). Identity checks 3x.

**2026-03-10:** Fixed stale PID reference (was March 2026). Updated to v1.5.

**2026-03-11:** Version date corrected (v1.5→v1.6). Daily consolidation added to memory/2026-03-08.md.

**2026-03-12:** Self-improvement audit: Fixed crons section (was "empty" → 14 active jobs), updated version to v1.7. SELF_IMPROVE cron already runs daily at 6AM.

**Next Improvement:** None (system stable)

**2026-03-13:** Self-improvement audit: Updated version to v1.8, marked AIACT_NINJA_IMPROVE as DEPRECATED (file now AIACT_NINJA_IMPROVE_DEPRECATED.md). Cron count verified (14 active). Memory files verified (SAAS_IDEAS ✓, INCOME_RESEARCH ✓).
