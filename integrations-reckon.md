---
title: Reckon One
description: Import employees and export approved time entries to Reckon. Australian SMB accounting.
---

Reckon One is an Australian small-to-mid-business accounting platform. Tommy's Reckon integration imports your existing Reckon employees into Tommy and exports approved time entries back to Reckon for payroll.

## What it does

| Capability | What it means |
|---|---|
| **Import employees** | Pull existing Reckon employees into Tommy as team members |
| **Export approved time entries** | Push approved timesheets to Reckon |
| **Map pay items** | Time entries map to Reckon pay items |

## Connect Reckon One

<Steps>
  <Step title="Open Settings → Integrations">
    Tap **Reckon One** in the available integrations list.
  </Step>
  <Step title="Authorise with Reckon">
    You'll be redirected to Reckon's auth page. Sign in and grant Tommy access.
  </Step>
  <Step title="Pick your Reckon book">
    If your account has multiple books, choose the one that matches this Tommy team.
  </Step>
  <Step title="Import employees">
    Tommy offers to import your existing Reckon employees. Accept this so future timesheet exports match correctly.
  </Step>
  <Step title="Map team members to Reckon employees">
    Auto-matched by email or name. Resolve any mismatches manually.
  </Step>
  <Step title="Test export one timesheet">
    Approve a single timesheet and confirm it lands correctly in Reckon before going live.
  </Step>
</Steps>

:::note
**Screenshot needed:** Reckon One connection / authorisation screen.
:::

## How approved timesheets reach Reckon

After approval, Tommy:

1. Looks up the matched Reckon employee
2. Maps each line item's pay rule to a Reckon pay item
3. Creates a time entry in Reckon
4. Returns a link to the Reckon record from the Tommy approval screen

Your payroll admin runs the pay cycle inside Reckon.

## Sync schedule

- **Approved timesheets push** within a minute of approval
- **Employees and pay items re-pull** daily

Force an immediate sync from **Settings → Integrations → Reckon One → Sync now**.

## Disconnecting

From **Settings → Integrations → Reckon One → Disconnect**.

Past data stays in both systems. Future syncs stop. You can reconnect later — auth is the only step that needs repeating.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| **Auth expired** | Reckon tokens expire periodically | Reconnect from the integration page |
| **Time entry export fails** | Pay rule not mapped to a Reckon pay item | Open Settings → Pay Templates, assign the right pay item |
| **Member not exporting** | Member not mapped to a Reckon employee | Map manually |
| **Duplicate employees** | Both systems created the employee | Merge in Reckon; Tommy picks up the survivor on next sync |

For other issues, email **support@mytommy.com** with the Reckon error code shown on the integration's status page.

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
  <Card title="MYOB" icon="link" href="/integrations-myob">
    The other big Australian option.
  </Card>
</CardGroup>
