---
title: Xero
description: Sync employees, push approved timesheets, and track invoices. Most popular in Australia, NZ, and the UK.
---

Xero is Tommy's most-used accounting integration, especially in Australia, New Zealand, and the UK. Once connected, approved timesheets flow to Xero Payroll automatically, employees stay in sync, and (for invoicing flows) you can push invoices to Xero from approved Tommy data.

## What it does

| Capability | What it means |
|---|---|
| **Import employees** | Pull existing Xero employees into Tommy as team members |
| **Sync employees both ways** | Changes in either system propagate |
| **Export approved timesheets** | Push approved timesheets to Xero Payroll |
| **Import payroll items** | Pull pay codes (regular, overtime, allowances) so timesheets export with the right categorisation |
| **Import account data** | Pull the chart of accounts for invoicing |
| **Push invoices** | For NDIS and Staffing Agency Solutions — generate invoices from approved timesheets and push them to Xero |

## Connect Xero

<Steps>
  <Step title="Open Settings → Integrations">
    Tap **Xero** in the available integrations list.
  </Step>
  <Step title="Authorise with Xero">
    You'll be redirected to Xero. Sign in and grant Tommy access to your organisation.
  </Step>
  <Step title="Pick your Xero organisation">
    If your Xero account has multiple organisations, choose the one that matches this Tommy team.
  </Step>
  <Step title="Configure imports">
    Tommy offers to import existing employees and payroll items. Accept these — it makes mapping easier later.
  </Step>
  <Step title="Map team members to Xero employees">
    Tommy auto-matches by email. Review the matches and resolve any mismatches manually.
  </Step>
  <Step title="Test export one timesheet">
    Approve a single timesheet (use a low-stakes one) and watch it flow to Xero. Check the result in Xero Payroll before you switch over for the whole team.
  </Step>
</Steps>

:::note
**Screenshot needed:** Xero connection screen with "Authorise" button.
:::

## How approved timesheets reach Xero

After a manager approves a timesheet, Tommy:

1. Looks up the matched Xero employee
2. Maps each line item's pay rule to a Xero **payroll item** (Regular Hours, Overtime, Allowance, etc.)
3. Creates a **timesheet draft** in Xero Payroll
4. Returns a link to the Xero timesheet from the Tommy approval screen

The Xero timesheet is a **draft** — your bookkeeper or payroll admin reviews and processes the pay run inside Xero. Tommy doesn't run payroll for you; it prepares the data so payroll is one click away.

## Employee mapping

Tommy matches team members to Xero employees by **email address** by default. If emails don't match, you'll see unmatched members in the integration's setup screen — match them manually:

<Steps>
  <Step title="Open Settings → Integrations → Xero">
    You'll see a "Mapping" tab.
  </Step>
  <Step title="Find unmatched members">
    Tommy lists members without a Xero counterpart.
  </Step>
  <Step title="Pick the matching Xero employee">
    Use the dropdown next to each member.
  </Step>
  <Step title="Save">
    The mapping is stored. Future timesheet exports use it.
  </Step>
</Steps>

For new hires, the cleanest pattern is: create the employee in Xero first, then invite to Tommy with the same email — they'll match automatically.

## Sync schedule

By default, Tommy:

- **Syncs employees every few hours** in both directions
- **Pushes approved timesheets** within a minute of approval
- **Re-pulls payroll items and accounts** daily

You can force an immediate sync from **Settings → Integrations → Xero → Sync now**.

## Invoicing flow (NDIS, Staffing Agency)

If your Solution uses invoicing, the Xero integration extends to invoice push. After approving timesheets:

1. Tommy generates an invoice grouped by client/participant
2. The invoice line items map to Xero **invoice items** (you import these from Xero on first connect)
3. The invoice is pushed to Xero as a **draft invoice**
4. Your finance team reviews and sends from Xero

This is configured separately under **Settings → Invoicing** once Xero is connected.

## Disconnecting

From **Settings → Integrations → Xero → Disconnect**.

Past data stays in both systems. Future timesheets won't push, and employee sync stops. You can reconnect later — only the auth step needs to be repeated.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| **Auth expired** | Xero OAuth tokens expire periodically | Reconnect from the integration page |
| **Timesheet export fails** | Pay rule has no Xero payroll item mapping | Open Settings → Pay Templates and assign the right Xero payroll item |
| **Member not exporting** | Member not mapped to a Xero employee | Map manually from the integration page |
| **Duplicate employees in Xero** | Both systems created the employee independently | Merge in Xero; Tommy will pick up the survivor on next sync |
| **Wrong amount in Xero timesheet** | Tommy uses the rate from the pay template; Xero uses its own rate. They can drift | Decide which system is authoritative; sync rates periodically |

If you're stuck, email **support@mytommy.com** with the Xero error code visible on the integration's status page.

## Related

<CardGroup cols={2}>
  <Card title="Integrations overview" icon="link" href="/integrations">
    All providers and how connecting works.
  </Card>
  <Card title="Timesheets" icon="document" href="/timesheets">
    What gets exported.
  </Card>
  <Card title="QuickBooks" icon="link" href="/integrations-quickbooks">
    The US equivalent.
  </Card>
  <Card title="MYOB" icon="link" href="/integrations-myob">
    The other big Australian option.
  </Card>
</CardGroup>
