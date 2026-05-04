---
title: MYOB
description: Sync employees and export approved timesheets to MYOB. Australian payroll standard.
---

MYOB is the long-standing Australian payroll and accounting standard. Tommy's MYOB integration syncs employees and pushes approved timesheets to MYOB Payroll.

## What it does

| Capability | What it means |
|---|---|
| **Import employees** | Pull existing MYOB employees into Tommy as team members |
| **Sync employees both ways** | Changes in either system propagate |
| **Export approved timesheets** | Push approved timesheets to MYOB Payroll |
| **Import payroll categories** | Pull pay categories so timesheets export with the right categorisation |

## Connect MYOB

<Steps>
  <Step title="Open Settings → Integrations">
    Tap **MYOB** in the available integrations list.
  </Step>
  <Step title="Authorise with MYOB">
    You'll be redirected to MYOB's auth page. Sign in and grant access.
  </Step>
  <Step title="Pick your MYOB file">
    If your MYOB account has multiple files, choose the one that matches this Tommy team.
  </Step>
  <Step title="Configure imports">
    Tommy offers to import employees and payroll categories. Accept these.
  </Step>
  <Step title="Map team members to MYOB employees">
    Auto-matched by email. Resolve any unmatched manually.
  </Step>
  <Step title="Test export one timesheet">
    Approve a single timesheet and confirm it lands in MYOB Payroll before going live.
  </Step>
</Steps>

:::note
**Screenshot needed:** MYOB connection / authorisation screen.
:::

## How approved timesheets reach MYOB

After approval, Tommy:

1. Looks up the matched MYOB employee
2. Maps each line item's pay rule to a MYOB **payroll category**
3. Creates a **timesheet entry** in MYOB Payroll
4. Returns a link to the MYOB record from the Tommy approval screen

Your payroll admin runs the pay cycle inside MYOB.

## Employee mapping

Matched by **email address** by default. Resolve mismatches:

<Steps>
  <Step title="Open Settings → Integrations → MYOB">
    Open the Mapping tab.
  </Step>
  <Step title="Find unmatched members">
    Members without a MYOB counterpart appear here.
  </Step>
  <Step title="Pick the matching employee">
    Use the dropdown.
  </Step>
  <Step title="Save">
    The mapping is stored.
  </Step>
</Steps>

## Sync schedule

By default:

- **Employees sync** every few hours both directions
- **Approved timesheets push** within a minute of approval
- **Payroll categories re-pull** daily

Force an immediate sync from **Settings → Integrations → MYOB → Sync now**.

## Disconnecting

From **Settings → Integrations → MYOB → Disconnect**.

Past data stays in both systems. Future syncs stop. You can reconnect later — auth is the only step that needs repeating.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| **Auth expired** | MYOB tokens expire periodically | Reconnect from the integration page |
| **Timesheet export fails** | Pay rule not mapped to a MYOB payroll category | Open Settings → Pay Templates, assign the right category |
| **Member not exporting** | Member not mapped to a MYOB employee | Map manually |
| **Duplicate employees** | Both systems created the employee | Merge in MYOB; Tommy picks up the survivor on next sync |
| **Wrong file in use** | More than one MYOB file linked | Disconnect and reconnect picking the right file |

For other issues, email **support@mytommy.com** with the MYOB error code shown on the integration's status page.

## Related

<CardGroup cols={2}>
  <Card title="Integrations overview" icon="link" href="/integrations">
    All providers and how connecting works.
  </Card>
  <Card title="Timesheets" icon="document" href="/timesheets">
    What gets exported.
  </Card>
  <Card title="Xero" icon="link" href="/integrations-xero">
    The Tommy-most-popular Australian alternative.
  </Card>
  <Card title="QuickBooks" icon="link" href="/integrations-quickbooks">
    The US equivalent.
  </Card>
</CardGroup>
