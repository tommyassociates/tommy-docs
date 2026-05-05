---
title: SwiftPOS & Roller
description: Sync sales and performance data from your point-of-sale into Tommy. For hospitality and retail teams.
---

For hospitality and retail teams, your point-of-sale system has the data Tommy needs to inform smarter scheduling — sales by hour, performance by team member, demand patterns across the week. Tommy supports two POS providers in this category:

- **SwiftPOS** — Sync sales and performance data from SwiftPOS
- **Roller** — Sync sales data from Roller POS for demand forecasting

Connect once and the data flows in automatically. You can use it as input for scheduling decisions; Tommy doesn't replace the POS itself.

## What it does

| Capability | Provider | What it means |
|---|---|---|
| **Sales data sync** | SwiftPOS, Roller | Pull sales totals and by-hour breakdowns into Tommy |
| **Performance data sync** | SwiftPOS | Sales attributed to specific staff members |
| **Demand forecasting** | Roller | Use historical sales data to plan future shift coverage |

:::note
The current Tommy POS integrations focus on **inbound** sales data, not roster/staff sync. If you need staff to clock in via the POS terminal, do that through Tommy's [Time Clock](/timeclock) or [Kiosk Mode](/timeclock#kiosk-mode) instead.
:::

## Connect SwiftPOS

<Steps>
  <Step title="Open Settings → Integrations">
    Tap **SwiftPOS** in the available integrations list.
  </Step>
  <Step title="Authorise with SwiftPOS">
    Provide the credentials for your SwiftPOS account. Get these from your SwiftPOS admin if you don't have them.
  </Step>
  <Step title="Pick your venue">
    If you run multiple venues, pick the one that matches this Tommy team.
  </Step>
  <Step title="Test the sync">
    Confirm sales totals from yesterday's trade match between SwiftPOS and Tommy.
  </Step>
</Steps>

:::note
**Screenshot needed:** SwiftPOS connection screen.
:::

## Connect Roller

<Steps>
  <Step title="Open Settings → Integrations">
    Tap **Roller** in the available integrations list.
  </Step>
  <Step title="Authorise with Roller">
    Sign in to Roller and grant Tommy access.
  </Step>
  <Step title="Confirm data flow">
    Once connected, sales data starts flowing for demand-forecasting features.
  </Step>
</Steps>

:::note
**Screenshot needed:** Roller connection screen.
:::

## Where this fits

POS integrations are **complementary** to Tommy's [Time Clock](/timeclock), not a replacement.

- **Tommy Time Clock** handles attendance, timesheets, payroll
- **POS integration** brings in sales context for scheduling decisions

If your venue uses a POS not yet listed (Square, Lightspeed, Toast, etc.) — get in touch via support@mytommy.com. New integrations are added based on customer demand.

## Disconnecting

From **Settings → Integrations → [Provider] → Disconnect**.

Past data stays in both systems. Future syncs stop.

## Related

<CardGroup cols={2}>
  <Card title="Integrations overview" icon="link" href="/integrations">
    All providers and how connecting works.
  </Card>
  <Card title="Time Clock" icon="clock" href="/timeclock">
    Where attendance data actually comes from.
  </Card>
  <Card title="Solutions: Hospitality" icon="cup" href="/solutions#hospitality">
    Where SwiftPOS is most commonly used.
  </Card>
  <Card title="Solutions: Retail" icon="shopping-bag" href="/solutions#retail">
    Roller pairs well with retail demand forecasting.
  </Card>
</CardGroup>
