---
title: Scheduling
description: Build shifts from templates, publish to your team, and manage swaps, drops, and open shifts.
---

Scheduling is where you decide who works when. You build **shifts** — single blocks of work for one member on one date — usually from reusable **Shift Templates**. When you publish a shift, your member sees it on their phone and gets a reminder before it starts.

Open **Scheduling** from the main menu.

:::note
**Screenshot needed:** Main schedule grid with members down the left, days across the top, and a few shifts plotted in.
:::

## The schedule grid

The default view is a calendar grid. You can change it with the view controls at the top:

- **By member** — rows are members, columns are days
- **By location** — rows are locations, useful for multi-site teams
- **By role** — rows are roles, useful for coverage planning
- **By shift** — list view sorted by date

The date range defaults to a week. Use the navigation controls to move forward or back, or zoom out to a fortnight or month.

## Create a shift

Tap **New shift** (or click an empty cell on the grid).

Fill in:

| Field | What it does |
|---|---|
| **Member** | Who's working. Leave blank for an **open shift** anyone in scope can claim. |
| **Date and time** | When it runs. Or pick a Shift Template to fill these. |
| **Shift Template** | A reusable definition (e.g., "Morning Shift 6am–2pm") |
| **Location** | Where it happens — drives geofencing and member visibility |
| **Pay template** | Optional override of the member's default pay rules |
| **Break(s)** | Paid or unpaid breaks. Comes from the template if you used one. |
| **Notes** | Anything the member needs to know before they arrive |

Tap **Save shift** to keep it as a **Draft** (the member won't see it yet).

Tap **Publish** to make it live — the member is notified immediately.

:::note
**Screenshot needed:** New shift form with template selector and break editor.
:::

## Shift Templates

Templates save you re-entering the same hours every week. A template defines:

- A **name** (e.g., "Morning Shift", "Afternoon Support", "Closing Crew")
- **Default duration and times**
- **Default break rules**
- **Default pay template**

Your [Solution](/solutions) starts you with industry-appropriate templates — split shifts for hospitality, visit-style shifts for NDIS, full-day shifts for trades. Customise from **Settings → Scheduling → Shift Templates**.

To use a template when creating a shift, pick it from the **Shift Template** dropdown — Tommy fills the times and breaks for you. You can still edit before saving.

## Publishing

A shift in **Draft** state isn't visible to the member. This lets you build a whole week's roster without sending notifications mid-build.

When you're ready, you can:

- **Publish a single shift** from the shift detail view
- **Publish all draft shifts** in the current view via the bulk action
- **Schedule auto-publish** if you want drafts to release at a set time (e.g., every Friday 5pm for the following week)

Once published, the shift is on the member's phone. They get a notification, and a shift reminder fires before it starts. Members can adjust their reminder preferences in [user settings](/user-settings#notifications).

## Open shifts

An **open shift** has no member assigned. It's broadcast to anyone in scope (matching role and location). Members can claim it from their phone.

Use open shifts when:

- You need coverage but don't care who takes it
- You want to give your team first dibs before manually assigning
- You're managing a casual pool or agency talent

Set up an open shift the same way as a regular shift — just leave the **Member** field blank and set **Visibility** to who can claim it.

## Shift swaps and requests

Members can request changes from their phone, and managers can offer shifts back. Tommy supports four kinds of shift request:

| Kind | Who initiates | What it means |
|---|---|---|
| **Request** | Member | Member asks to pick up an open or unassigned shift |
| **Swap** | Member | Member proposes trading shifts with another member |
| **Drop** | Member | Member asks to be removed from a shift |
| **Offer** | Manager | Manager offers a shift to one or more members to claim |

A request moves through these statuses: `requested` → `shortlisted` (optional) → `approved` / `rejected` (or `canceled`).

Open a request from **Scheduling → Shift Requests**, review the impact (does the swap leave a gap? does the drop break coverage?), and approve or reject. Members are notified of the decision automatically.

:::tip
Set a swap policy from **Settings → Scheduling**. You can require both members to opt in before a swap goes through, or auto-approve swaps that don't change total hours.
:::

## Availability

If members have set their availability, Tommy flags conflicts when you build the schedule:

- Trying to schedule someone during their unavailable time? You'll see a warning before saving.
- Members can also block dates in advance ("away 12–18 June") that show up greyed out on the schedule grid.

Members manage their own availability from the app. Admins can override or set on behalf of members from the member's profile.

## Coverage requirements

For Solutions where minimum staffing matters (Retail, Hospitality), you can define **coverage requirements** by location, role, and time of day:

> "Bondi Store needs 2 cashiers between 11am–2pm Monday–Friday."

Tommy shows a coverage warning on the schedule grid when you're under-staffed. This won't block you from publishing, but you'll know.

Set coverage from **Settings → Scheduling → Coverage**.

## Copying shifts

Most teams have a roster pattern that repeats. Build it once, then copy:

- **Copy single shift** — duplicate a shift to another date
- **Copy week** — copy a whole week's roster forward
- **Copy member's pattern** — copy one person's shifts onto another

The copies start as drafts. Adjust as needed, then publish.

## Cancelling a shift

To cancel a published shift:

<Steps>
  <Step title="Open the shift">
    Tap the shift on the grid.
  </Step>
  <Step title="Tap Cancel">
    Confirm. The member is notified immediately.
  </Step>
  <Step title="Add a reason (optional)">
    Visible to the member and saved to the audit log.
  </Step>
</Steps>

Cancelled shifts don't generate timesheet entries. If the member already clocked in before the cancellation, the attendance is preserved and you'll need to handle it manually from [Timesheets](/timesheets).

## Notifications and reminders

When a shift is published, the member is notified. They get a reminder before it starts (members can configure their preferred lead time). When something changes — time, location, cancellation — they're notified again.

Admins can also set notifications for themselves: "tell me when a member declines a shift" or "tell me when a shift goes unclaimed within 24 hours of start".

## What's next

<CardGroup cols={2}>
  <Card title="Time Clock" icon="clock" href="/timeclock">
    The other half of the loop — members clocking in and out.
  </Card>
  <Card title="Timesheets" icon="document" href="/timesheets">
    Where shifts and attendances become pay.
  </Card>
  <Card title="Locations" icon="map" href="/locations">
    Multi-site scheduling and geofencing.
  </Card>
  <Card title="Solutions" icon="briefcase" href="/solutions">
    Industry-tuned shift templates and roles.
  </Card>
</CardGroup>
