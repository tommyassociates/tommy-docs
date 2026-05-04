---
title: QuickBooks
description: Sync employees, export approved timesheets, and import payroll items. Most popular in the US.
---

QuickBooks Online is Tommy's primary accounting integration in the US. Connected once, approved timesheets push to QuickBooks Payroll, employees stay in sync, and pay codes mapping is handled automatically.

## What it does

| Capability | What it means |
|---|---|
| **Import employees** | Pull existing QuickBooks employees into Tommy as team members |
| **Sync employees both ways** | Changes in either system propagate |
| **Export approved timesheets** | Push approved timesheets to QuickBooks Payroll |
| **Import payroll items** | Pull pay codes so timesheets export with the right categorisation |
| **Import account data** | Pull the chart of accounts |

## Connect QuickBooks

<Steps>
  <Step title="Open Settings → Integrations">
    Tap **QuickBooks** in the available integrations list.
  </Step>
  <Step title="Authorise with QuickBooks">
    You'll be redirected to Intuit's auth page. Sign in and grant access.
  </Step>
  <Step title="Pick your QuickBooks company">
    If your account has multiple companies, choose the one that matches this Tommy team.
  </Step>
  <Step title="Configure imports">
    Tommy offers to import existing employees, payroll items, and accounts. Accept these.
  </Step>
  <Step title="Map team members to QuickBooks employees">
    Tommy auto-matches by email. Review and resolve any mismatches manually.
  </Step>
  <Step title="Test export one timesheet">
    Approve a single timesheet and confirm it lands correctly in QuickBooks Payroll.
  </Step>
</Steps>

:::note
**Screenshot needed:** QuickBooks Online connection / authorisation screen.
:::

## How approved timesheets reach QuickBooks

After a manager approves a timesheet, Tommy:

1. Looks up the matched QuickBooks employee
2. Maps each line item's pay rule to a QuickBooks **payroll item**
3. Creates a **time activity** entry in QuickBooks Payroll
4. Returns a link to the QuickBooks record from the Tommy approval screen

Your payroll admin runs the pay cycle inside QuickBooks. Tommy prepares the data; QuickBooks does the payment.

## Employee mapping

Tommy matches by **email address** by default. To resolve mismatches:

<Steps>
  <Step title="Open Settings → Integrations → QuickBooks">
    Open the Mapping tab.
  </Step>
  <Step title="Find unmatched members">
    Members without a QuickBooks counterpart appear here.
  </Step>
  <Step title="Pick the matching employee">
    Use the dropdown.
  </Step>
  <Step title="Save">
    The mapping is stored. Future exports use it.
  </Step>
</Steps>

For new hires: create the employee in QuickBooks first, then invite to Tommy with the same email so they match on first sync.

## Sync schedule

By default:

- **Employees sync** every few hours both directions
- **Approved timesheets push** within a minute of approval
- **Payroll items and accounts re-pull** daily

Force an immediate sync from **Settings → Integrations → QuickBooks → Sync now**.

## Disconnecting

From **Settings → Integrations → QuickBooks → Disconnect**.

Past data stays in both systems. Future syncs stop. You can reconnect later — auth is the only step that needs repeating.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| **Auth expired** | QuickBooks tokens expire periodically | Reconnect from the integration page |
| **Timesheet export fails** | Pay rule not mapped to a QuickBooks payroll item | Open Settings → Pay Templates, assign the right QuickBooks payroll item |
| **Member not exporting** | Member not mapped to a QuickBooks employee | Map manually |
| **Duplicate employees** | Both systems created the employee | Merge in QuickBooks; Tommy picks up the survivor on next sync |
| **Time activity wrong amount** | Pay rate mismatch between Tommy and QuickBooks | Decide which is authoritative; sync rates periodically |

For other issues, email **support@mytommy.com** with the QuickBooks error code shown on the integration's status page.

## Related

<CardGroup cols={2}>
  <Card title="Integrations overview" icon="link" href="/integrations">
    All providers and how connecting works.
  </Card>
  <Card title="Timesheets" icon="document" href="/timesheets">
    What gets exported.
  </Card>
  <Card title="Xero" icon="link" href="/integrations-xero">
    The ANZ/UK equivalent.
  </Card>
  <Card title="MYOB" icon="link" href="/integrations-myob">
    The other big Australian option.
  </Card>
</CardGroup>
