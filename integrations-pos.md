---
title: GoTab & Swift POS
description: Sync staff and roster with your point-of-sale. For hospitality and retail teams.
---

For hospitality and retail teams, your point-of-sale system already knows who's working a shift, what they sold, and when the venue is busy. The Tommy POS integrations connect that to your scheduling and timesheet flow so you don't have to re-enter staff in two systems.

Tommy supports two POS providers:

- **GoTab** — cloud POS for hospitality
- **Swift POS** — POS for hospitality and retail

If your POS is something else, get in touch — we add integrations based on customer demand.

## What it does

| Capability | What it means |
|---|---|
| **Sync staff** | Tommy team members and POS employees stay in sync. Add a new hire in Tommy, they appear at the till the next day. |
| **Sync roster** | Published shifts in Tommy reflect on the POS so the right people can clock in at the till. |
| **Pull sales data** | (Optional, by Solution) Sales by member or by hour-of-day to inform schedule planning. |

## Connect GoTab

<Steps>
  <Step title="Open Settings → Integrations">
    Tap **GoTab** in the available integrations list.
  </Step>
  <Step title="Authorise with GoTab">
    Sign in to GoTab and grant Tommy access to your venue.
  </Step>
  <Step title="Pick your venue">
    If you run multiple venues in GoTab, pick the one that matches this Tommy team. For multi-venue, set up a Tommy team per venue or talk to support.
  </Step>
  <Step title="Map team members to GoTab employees">
    Auto-matched by name. Resolve mismatches manually.
  </Step>
  <Step title="Choose what to sync">
    Tick which directions: staff in, staff out, roster sync, sales data import.
  </Step>
</Steps>

:::note
**Screenshot needed:** GoTab connection screen with sync direction toggles.
:::

## Connect Swift POS

<Steps>
  <Step title="Open Settings → Integrations">
    Tap **Swift POS** in the available integrations list.
  </Step>
  <Step title="Provide your Swift API credentials">
    Swift uses an API key rather than OAuth. Get this from your Swift admin console.
  </Step>
  <Step title="Map team members to Swift employees">
    Auto-matched by employee code or name. Resolve mismatches manually.
  </Step>
  <Step title="Choose what to sync">
    Tick which directions to enable.
  </Step>
</Steps>

:::note
**Screenshot needed:** Swift POS connection screen with API key field.
:::

## Where this fits

POS integrations don't replace [Time Clock](/timeclock) — they sit alongside it.

| Approach | When to use |
|---|---|
| **Tommy Time Clock only** | Members clock in via Tommy app or Kiosk Mode. POS doesn't track attendance. |
| **POS clock-in only** | Members clock in via the POS terminal. Tommy imports the records. |
| **Both** | Members clock in via Tommy for the official record; POS knows who's on shift for till access. Most common in hospitality. |

The default is **Both** — Tommy handles attendance and timesheets, POS handles till access. Sync just keeps the two staff lists aligned.

## Multi-venue setups

If you run several venues, you have two patterns:

**One Tommy team per venue** — clean separation, separate billing, separate admin. Recommended if venues are run independently.

**One Tommy team across venues, with [Locations](/locations)** — central admin, single billing, location managers per venue. Recommended if it's one business with multiple sites.

For POS sync, the per-venue approach is simpler — each Tommy team connects to one POS venue. The multi-location approach requires POS-side support for multi-venue exports.

## Sync schedule

- **Staff sync** every few hours both directions
- **Roster sync** within a minute of publishing
- **Sales import** (where supported) daily

Force an immediate sync from **Settings → Integrations → [Provider] → Sync now**.

## Disconnecting

From **Settings → Integrations → [Provider] → Disconnect**.

Past sync data stays in both systems. Future syncs stop.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| **Staff names duplicated in POS** | Both systems had the staff member before the first sync | Merge in the POS; Tommy will pick up the survivor on next sync |
| **Auth expired (GoTab)** | OAuth tokens expire | Reconnect from the integration page |
| **API key invalid (Swift)** | Key revoked or rotated in Swift | Generate a new key, update in Tommy |
| **Roster not appearing on POS** | Roster sync direction not enabled | Toggle on in the integration's sync settings |

If you're stuck, email **support@mytommy.com** with the provider's error code from the integration status page.

## Related

<CardGroup cols={2}>
  <Card title="Integrations overview" icon="link" href="/integrations">
    All providers and how connecting works.
  </Card>
  <Card title="Time Clock" icon="clock" href="/timeclock">
    The other half of attendance — Tommy's own clock.
  </Card>
  <Card title="Solutions: Hospitality" icon="cup" href="/solutions#hospitality">
    Where POS integrations are most commonly used.
  </Card>
  <Card title="Locations" icon="map" href="/locations">
    Multi-venue setup patterns.
  </Card>
</CardGroup>
