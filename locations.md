---
title: Locations
description: Set up the places your team works. Locations scope shifts, verify time-clock attendance, and structure permissions.
---

A **location** is a physical place your team works — an office, a venue, a store, a building site, a participant's home. Locations matter for two reasons:

1. **Scheduling** — every shift is tied to a location, so members see only what's relevant to them
2. **Time clock** — Tommy can verify a member is at the right place when they clock in (geofencing)

If you only have one location, you barely need to think about this — Tommy creates one for you during onboarding. If you have multiple, this page is for you.

## Add a location

Go to **Settings → Locations** and tap **Add location**.

You'll be asked for:

- **Location name** — what your team calls it ("Bondi Store", "Main Office", "Site 4 Bondi Junction")
- **Location address** — used for geofencing and integrations
- Optional: **Description**, **Phone number**, **Manager(s)**

Tommy resolves the address to coordinates so it can power geofenced clock-in. The address must be specific enough to map (street + suburb at minimum).

:::note
**Screenshot needed:** Add Location form with name and address fields.
:::

## Assign location managers

A **location manager** is someone who can manage members and shifts at that location, but doesn't need full team admin rights. Typical use: a store manager who runs their own roster but shouldn't see other stores' data.

From the location's edit screen, pick one or more existing team members as managers. They'll automatically get permissions to:

- View and edit shifts at that location
- View and approve timesheets for members at that location
- Manage member assignments at that location

Permissions outside their location stay locked.

## Assign members to locations

Members can be tied to one or many locations. From a member's profile, set their **Locations** field to one or more.

What that does:

- The member sees only shifts at their assigned locations
- They can only clock in within the geofence of their assigned locations (if geofencing is on)
- Location managers see them in their member lists

If a member works across all your locations (a roving manager, a casual who picks up anywhere), leave Locations blank — they'll see everything.

## Geofencing — verifying clock-ins

For Solutions that need to prove members were at the right place ([NDIS & Care Services](/solutions#ndis-care-services), [Construction & Trades](/solutions#construction-trades)), Tommy can require members to be physically at the location to clock in.

**How it works**

- Each location has GPS coordinates from its address
- When a member taps **Clock in**, Tommy reads their phone's GPS
- If they're within your configured radius, the clock-in succeeds
- If they're outside, Tommy can warn them or block the clock-in entirely

**Configure** — Go to **Settings → Time Clock** and set:

- **Geofence radius** — how close someone has to be (e.g., 50 metres, 200 metres)
- **Behaviour outside the geofence** — Warn, Block, or Allow with a reason

See [Time Clock](/timeclock#geofencing) for the full setup.

:::tip
Start with **Warn** rather than **Block**. GPS isn't perfect and you'll otherwise get angry phone calls about members standing in front of the building who can't clock in.
:::

## Multi-location scheduling

In [Scheduling](/scheduling), you can:

- Filter the schedule by location to focus on one site
- View all locations at once for a roving overview
- Drag shifts between locations
- Set per-location coverage requirements (e.g., "always have 2 baristas at Bondi between 7–11am")

If you run a chain or multi-site service, set up each location separately — even if the staff overlap. It's worth the upfront five minutes.

## Service areas vs fixed locations

Some teams (NDIS, trades, agencies) work at the **client's** location rather than a fixed business address. You have two options:

**Option 1 — One location per recurring site**

If you regularly visit the same places (a participant's home, a recurring building site, a long-term venue), make each one a location. You get geofencing on every visit.

**Option 2 — One regional location**

If you cover a broad area and locations change constantly, create one or a few region-based locations ("Inner West", "North Shore"). You lose geofencing precision but don't drown in admin.

Most NDIS providers do Option 1; most trades and agencies do Option 2.

## Renaming and removing

You can rename a location any time — Tommy updates the references automatically.

Removing a location is harder, because past shifts and timesheets reference it. Instead of deleting, archive the location: open it, set it to **Inactive**. Past data stays intact; the location stops appearing in new shift forms.

## What's next

<CardGroup cols={2}>
  <Card title="Time Clock & Geofencing" icon="map-pin" href="/timeclock#geofencing">
    Set up geofence radius, photo capture, and clock-in policies.
  </Card>
  <Card title="Permissions" icon="lock-closed" href="/user-settings#permissions">
    How location managers get their scoped access.
  </Card>
  <Card title="Scheduling" icon="calendar" href="/scheduling">
    Build shifts that know where they are.
  </Card>
  <Card title="Team Members" icon="users" href="/team-members">
    Assign members to one or many locations.
  </Card>
</CardGroup>
