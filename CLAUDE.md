# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Money Tracker** — a client-side React + Vite app for tracking personal income, expenses, and monthly budgets. All data is persisted to `localStorage`; there is no backend.

## Commands

Run from `Money tracker/`:

```bash
npm run dev      # start Vite dev server
npm run build    # tsc type-check + production build
npm run preview  # serve the production build locally
```

No test runner is configured.

## Architecture

**Entry point:** `src/main.jsx` → `src/App.jsx`

`App.jsx` owns all state and passes it down as props:
- `transactions` — array of `{ id, type, amount, date, category, description }` objects, persisted to `localStorage` under `money-tracker-transactions`
- `monthlyBudget` — number persisted to `localStorage` under `money-tracker-settings`

**Components** (all in `src/components/`, receive props only, no local persistent state):
- `Dashboard` — totals cards (income, expenses, balance) across all time
- `AddTransaction` — form to add a new income or expense entry
- `BudgetSettings` — input to set `monthlyBudget`
- `BudgetProgress` — progress bar comparing current-month expenses vs `monthlyBudget`
- `CategoryChart` — Recharts pie chart of expenses broken down by category
- `TransactionList` — full transaction history with delete button per row

**Shared utilities** (`src/constants.js`):
- `EXPENSE_CATEGORIES` / `CATEGORY_COLORS` — single source of truth for category names and chart colors
- `getCurrentMonthExpenses(transactions)` — filters to the current calendar month
- `formatCurrency(amount)` / `formatDate(dateString)` — display helpers

When adding a new category, update both `EXPENSE_CATEGORIES` and `CATEGORY_COLORS` in `constants.js`.

## GitHub Workflow

After every feature addition, bug fix, or meaningful change in any project, push the changes to the user's GitHub profile (tohodic). Steps:

1. Stage the relevant files (`git add <files>`)
2. Commit with a clear message describing what changed
3. Push to the remote (`git push`)

If the project is not yet linked to a GitHub repo, create one via `gh repo create` and push the initial commit before continuing with the workflow above.
