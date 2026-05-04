---
title: Timesheets
description: Submit, approve, and export. Timesheets build themselves from clocked time and flow to your accounting software.
---

Timesheets are how worked hours become pay. Tommy builds them automatically from the shifts and [attendances](/timeclock) for each member, the member submits them at the end of the pay period, and a manager approves. Approved timesheets export to your accounting software for payroll.

If you've set up [Scheduling](/scheduling), [Time Clock](/timeclock), and a [pay template](/user-settings#pay-templates), timesheets are mostly hands-off.

## The timesheet lifecycle

A timesheet moves through these states:

| State | Meaning |
|---|---|
| **Draft** | Tommy is still building it. The pay period isn't closed yet. |
| **Submitted** | The member submitted it for approval. |
| **Approved** | A manager approved it. It's locked and ready to export. |

:::note
**Screenshot needed:** Timesheet detail view showing line items and the Submit / Approve buttons.
:::

## What's on a timesheet

For each member, per pay period, the timesheet shows:

- **Line items** — one per shift or manual entry, with start, end, breaks, and hours
- **Attendances** — the clock-in/out records that drove the line items
- **Adjustments** — manual edits (with audit trail)
- **Mileage** — if your team tracks it
- **Allowances** — extras like meal, travel, on-call (from the pay template)
- **Calculated pay** — base hours × rate, plus overtime, allowances, mileage
- **Notes** — from the member, manager, or both

Members see only their own timesheet. Managers see every timesheet they have permission to approve (typically: every member at their location, or every member if they're a team admin).

## Submitting (member)

At the end of the pay period, the member opens **Timesheets** in the app, reviews their hours, and taps **Submit**.

Before submitting, they can:

- **Edit a line item** — adjust times, add a missed clock-in, fix break duration
- **Add a note** — context for the manager ("worked through lunch on Tuesday")
- **Attach evidence** — photos or documents (medical certs, mileage receipts)

Edits are tracked. The original clocked time is always recoverable from the audit log.

Once submitted, the timesheet status flips to **Submitted** and the manager is notified.

## Approving (manager)

The manager opens the submitted timesheet and reviews:

- Hours total
- Any flagged exceptions (overtime, late clock-in, missed breaks)
- Edits or notes from the member
- Calculated pay

Then they tap **Approve**, **Deny**, or edit-and-approve.

| Action | What it does |
|---|---|
| **Approve** | Locks the timesheet. Ready to export. |
| **Deny** | Returns it to the member with a note. They edit and re-submit. |
| **Edit and approve** | Adjust line items in place, then approve. The member sees the changes. |

After approval, the timesheet is **locked** — no further edits without an admin reopening it.

:::tip
For larger teams, use **bulk approve** from the timesheets list. You can review summaries side-by-side and approve a whole pay period in one pass.
:::

## Pay templates

A **pay template** is the rule set Tommy uses to calculate pay for a member or shift:

- **Base rate** — dollars per hour
- **Overtime** — multiplier and threshold (e.g., 1.5× after 38 hours/week)
- **Allowances** — meal, travel, uniform
- **Penalties** — Saturday, Sunday, public holiday rates
- **Break rules** — paid vs unpaid, automatic deductions
- **Mileage rate** — dollars per kilometre

Each member has a default pay template. Each shift can override with a different template (useful for casual rates or special projects).

Manage templates from **Settings → Pay Templates**.

For NDIS and Staffing Agency Solutions, you can also map pay templates to **billing rates** for invoicing the funder or client.

## Manual timesheets

Sometimes there's no shift to drive a timesheet — a member did a one-off task, attended training, or worked off-roster. Managers can create a manual timesheet entry:

<Steps>
  <Step title="Open the member's timesheet">
    From Timesheets, find the member and the pay period.
  </Step>
  <Step title="Tap Add line item">
    Pick a date, start, end, and pay template.
  </Step>
  <Step title="Add a note explaining the entry">
    Helps with audit later.
  </Step>
  <Step title="Save">
    The line item is added to the draft timesheet. The member can see it before submitting.
  </Step>
</Steps>

## Exporting

Approved timesheets can leave Tommy three ways:

### Export to your accounting integration

If you've connected [Xero](/integrations-xero), [QuickBooks](/integrations-quickbooks), or [MYOB](/integrations-myob), approved timesheets push automatically (or on a schedule you configure).

This is the recommended path — no CSV juggling, no manual entry, no transposition errors.

### Download as CSV

From the Timesheets list, select the period and tap **Export → CSV**. You get a flat file you can email to a bookkeeper or upload to any payroll system that takes CSV.

### Download as PDF

From a single timesheet, tap **Download → PDF**. Useful for printing, signing, archiving, or sharing with someone who doesn't have access to Tommy.

## Reopening an approved timesheet

If you find an error after approval — wrong rate, missed allowance, fraudulent clock-in — an admin can **Reopen** the timesheet:

- The status flips back to Submitted
- Edits become possible
- After fixing, re-approve

Reopens are flagged in the audit log. If the timesheet has already been exported to payroll, you'll need to handle the reconciliation in your accounting system manually.

## Status notifications

Tommy notifies people automatically as timesheets move through states:

- **Member submits** → Manager is notified
- **Manager approves** → Member is notified
- **Manager denies** → Member is notified with the reason
- **Approval reminder** → If a submitted timesheet sits unapproved past your configured threshold, the manager gets a reminder

Tune notification timing from **Settings → System Notifications**.

## Common questions

<AccordionGroup>
  <Accordion title="Who can edit a timesheet, and when?">
    Members can edit their own timesheet while it's in **Draft**. After submitting, they can't edit unless the manager denies it back. Managers can edit at any state. Admins can edit and reopen approved timesheets, but only with an audit-log entry.
  </Accordion>
  <Accordion title="What if a member forgot to clock in?">
    The member can edit the timesheet line item before submitting and add the missing time, with a note explaining what happened. Or the manager can adjust during approval. Either way, the change is logged.
  </Accordion>
  <Accordion title="How are overtime and penalties calculated?">
    By the pay template. Tommy applies overtime multipliers when worked hours cross the threshold, and penalty rates on weekends or public holidays (defined in Settings → Special Days). The math is shown on the timesheet so you can see exactly how the totals were derived.
  </Accordion>
  <Accordion title="Can a member dispute an approved timesheet?">
    Yes — they can flag it from their app, which prompts an admin to reopen and review. If you need a formal dispute trail, the audit log captures every change with timestamps.
  </Accordion>
  <Accordion title="What happens to clocked time on a cancelled shift?">
    The attendance is preserved. It appears on the timesheet as a line item without an associated shift, flagged for manager review. Approve or remove it during approval.
  </Accordion>
</AccordionGroup>

## What's next

<CardGroup cols={2}>
  <Card title="Integrations" icon="link" href="/integrations">
    Connect Xero, QuickBooks, or MYOB to push approved timesheets to payroll.
  </Card>
  <Card title="Time Clock" icon="clock" href="/timeclock">
    Where the line items come from.
  </Card>
  <Card title="Scheduling" icon="calendar" href="/scheduling">
    Where the shifts come from.
  </Card>
  <Card title="Settings" icon="cog" href="/user-settings">
    Pay templates, time policies, special days.
  </Card>
</CardGroup>
