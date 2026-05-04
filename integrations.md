---
title: Integrations
description: Connect Tommy to the tools you already use. Accounting, payroll, point of sale.
---

Integrations connect Tommy to the other tools running your business — most often the accounting software where payroll happens, and (for hospitality and retail) the point-of-sale system where the day's revenue is recorded.

Connect once, and Tommy keeps the data flowing. Approved timesheets push to payroll automatically. Staff sync between systems. No copy-pasting from one app to another.

You manage integrations from **Settings → Integrations**.

:::note
**Screenshot needed:** Integrations page showing connected and available providers.
:::

## What's available

<CardGroup cols={3}>
  <Card title="Xero" icon="link" href="/integrations-xero">
    Sync employees, push approved timesheets, and track invoices. Most popular in Australia, NZ, and the UK.
  </Card>
  <Card title="QuickBooks" icon="link" href="/integrations-quickbooks">
    Sync employees, export approved timesheets, and import payroll items. Most popular in the US.
  </Card>
  <Card title="MYOB" icon="link" href="/integrations-myob">
    Sync employees and export approved timesheets. Australian payroll standard.
  </Card>
  <Card title="GoTab & Swift POS" icon="shopping-cart" href="/integrations-pos">
    Sync staff and roster with your point-of-sale. For hospitality and retail.
  </Card>
</CardGroup>

## How connecting works

Most integrations follow the same flow:

<Steps>
  <Step title="Open Settings → Integrations">
    Pick the provider you want to connect.
  </Step>
  <Step title="Authorise via OAuth">
    Tommy redirects you to the provider's sign-in page. Sign in, grant access, and you're sent back to Tommy.
  </Step>
  <Step title="Map your data">
    Tell Tommy how to match your Tommy team members with employees in the provider's system. Most providers do this automatically by email or name.
  </Step>
  <Step title="Configure sync rules">
    Decide what flows where: timesheet exports, employee sync direction, sync frequency.
  </Step>
  <Step title="Test with a small batch">
    Run an export of one approved timesheet to confirm the data lands correctly before you switch over for real.
  </Step>
</Steps>

After setup, the integration runs quietly. Approved timesheets export on the schedule you set. Employee changes sync. You'll see a status badge next to each integration showing **Connected**, **Syncing**, or **Error** — tap into errors for details.

## What syncs where

| Data | Direction | Notes |
|---|---|---|
| **Employees / team members** | Tommy ↔ Provider | Most integrations sync both ways. Tommy uses email or name to match. |
| **Approved timesheets** | Tommy → Provider | Pushed after approval. Manual or scheduled. |
| **Payroll items** | Provider → Tommy | Pay codes (regular, overtime, allowances) imported so timesheets export with the right categorisation. |
| **Invoices** | Tommy → Provider | For billing flows (NDIS, Staffing Agency) — Tommy generates invoices from approved timesheets and pushes them to your accounting software. |
| **Account data** | Provider → Tommy | Chart-of-accounts pulled in so invoices and timesheet exports use the right accounts. |

## Choosing the right one

If you already have an accounting system, use that one. Don't switch tools just for Tommy.

If you don't have one yet:

- **Xero** — strong in Australia, NZ, UK. Easy onboarding. Good for service businesses.
- **QuickBooks** — strong in the US. Good ecosystem of payroll add-ons.
- **MYOB** — long-standing Australian standard. Good for businesses already on AccountRight.

For point of sale, the choice is driven by your hospitality/retail vendor, not Tommy.

## Multiple integrations

Many teams use more than one — for example, **Xero for accounting** and **GoTab for POS**. They don't conflict; each handles its own data.

If you connect two accounting systems (rare but possible — e.g., during a migration), pick one as the primary destination for timesheet exports. Tommy doesn't push the same timesheet to two systems automatically.

## Disconnecting

To disconnect an integration:

<Steps>
  <Step title="Open Settings → Integrations">
    Find the connected provider.
  </Step>
  <Step title="Tap Disconnect">
    Confirm the dialog.
  </Step>
  <Step title="Tommy stops syncing">
    Past data stays in both systems. Future timesheets won't push.
  </Step>
</Steps>

You can reconnect later — the auth setup is the only step you'll need to repeat.

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| **Connected but not syncing** | Auth token expired. Reconnect from Settings → Integrations. |
| **Employees aren't matching** | Email mismatch between Tommy and the provider. Edit the member's profile to match. |
| **Timesheet export failing** | Pay codes in Tommy don't map to payroll items in the provider. Check the integration's settings page. |
| **Duplicate employees** | Both systems created records before sync started. Merge in the provider; Tommy will pick up the survivor. |
| **Sync seems slow** | Most integrations sync on a schedule (every few hours). Tap **Sync now** for an immediate run. |

If you're stuck, email **support@mytommy.com** with the error code from the integration status page.

## Related

<CardGroup cols={2}>
  <Card title="Timesheets" icon="document" href="/timesheets">
    The data that flows out to your accounting integration.
  </Card>
  <Card title="Team Members" icon="users" href="/team-members">
    Employee mapping happens at the member level.
  </Card>
  <Card title="API Reference" icon="code" href="/api">
    For custom integrations beyond the built-in providers.
  </Card>
  <Card title="Settings" icon="cog" href="/user-settings">
    Integration setup lives in team settings.
  </Card>
</CardGroup>
