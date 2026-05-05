---
title: Time Clock
description: Clock in and out from a phone, tablet kiosk, or web browser. With GPS, photo, geofencing, and breaks.
---

Time Clock is how members record the hours they actually work. They tap **Clock in** when they start, **Clock out** when they finish, and Tommy turns those records into a timesheet.

Two ways to clock in:

- **From a member's phone** — most common. Each member clocks themselves.
- **From Kiosk Mode** — a shared tablet at the workplace. Members enter a PIN to clock themselves.

## Clocking in (from a phone)

The member opens Tommy and taps **Clock in**. Depending on your team's settings, Tommy may also:

- Capture **GPS location** to verify they're at the right place
- Take a **photo** to confirm identity (or PPE, or site state)
- Ask **shift task** questions (e.g., "Vehicle inspection completed?")

Tommy creates an **attendance** record with the time, location, and photo. The shift status changes to "in progress".

:::note
**Screenshot needed:** Mobile Time Clock screen with the big "Clock in" button.
:::

## Clocking out

When the shift ends, the member taps **Clock out**. Tommy captures the end time, location, and (if configured) a photo. If your team uses **mileage tracking**, the member is asked to confirm distance travelled.

The attendance record is closed. The hours flow into the member's [timesheet](/timesheets).

## Breaks

During a shift, members can log breaks:

- **Tap Start break** — pauses the elapsed time
- **Tap End break** — resumes counting

Breaks are either **paid** (count toward worked hours) or **unpaid** (subtracted). The default depends on the [Shift Template](/scheduling#shift-templates) and your **Settings → Time Policies**.

For longer shifts, Tommy can prompt for breaks automatically — useful in Solutions where break compliance matters (Hospitality, NDIS).

## GPS verification

Tommy can require members to have GPS available and be at the right location to clock in. It's how teams in regulated industries (NDIS, Construction) prove their members were where they said they were.

**How it works**

1. Each [Location](/locations) has GPS coordinates from its address
2. When a member taps **Clock in**, Tommy reads their phone's GPS
3. The location is captured against the attendance record

**Configure** — Go to **Settings → Time Clock** and toggle **Require GPS verification** on. Footer text: *"Require team members to be at the location when clocking in and out."*

NDIS and Construction Solutions ship with GPS required by default. General and Hospitality default to off.

## Photo verification

You can also require a photo on clock-in and clock-out. The member sees a camera screen, takes a photo, and Tommy attaches it to the attendance record. Managers see the photos alongside the timesheet.

**Configure** — **Settings → Time Clock → Require photo verification**. Footer text: *"Require team members to take a photo when clocking in and out."*

NDIS Solution ships with photo verification on by default. Hospitality and Retail default to off.

## Kiosk Mode

Kiosk Mode turns a shared tablet into a dedicated time clock for your team. Workers don't need their own phones — they walk up, enter a **Kiosk PIN**, and clock in.

Use Kiosk Mode for:

- Front-of-house at a hospitality venue
- The crib room on a building site
- Any workplace where workers don't all carry company phones

### Set up Kiosk Mode

<Steps>
  <Step title="Get a tablet">
    Any tablet that runs the Tommy app. Mount it where workers arrive — front desk, crew room, kitchen entry.
  </Step>
  <Step title="Sign in as an admin">
    Sign in to the Tommy app on the tablet with an admin account.
  </Step>
  <Step title="Enable Kiosk Mode">
    Go to Settings → Enable Kiosk Mode. The app switches to PIN-only mode.
  </Step>
  <Step title="Members set their PIN">
    Each member sets their Kiosk PIN from My Account → Kiosk PIN on their own phone. They can reset it any time.
  </Step>
  <Step title="Members clock in">
    They walk up to the tablet, enter their PIN, and tap Clock in. The tablet captures any required photo from its camera.
  </Step>
</Steps>

:::warning
The Kiosk PIN is independent of the member's account password. It's only valid on Kiosk Mode devices for clocking in/out — not for accessing other parts of Tommy. If a member forgets it, they can reset it from their own phone.
:::

### Exiting Kiosk Mode

Only an admin can exit Kiosk Mode — members can't tap their way out. From the tablet, an admin signs in with their full account password to disable Kiosk Mode and access the rest of the app.

## Mileage tracking

For Solutions where members travel between locations (NDIS visits, trade callouts, agency placements), Tommy can track mileage:

- On clock-out, the member is prompted to confirm distance travelled
- Or Tommy can calculate it automatically from clock-in/clock-out GPS positions

Mileage feeds into the timesheet at your configured rate (e.g., $0.85/km). It exports to payroll alongside hours.

Configure — **Settings → Mileage**.

## Manual adjustments

Sometimes someone forgets to clock — or the GPS fails, or they ran out of battery. Managers can manually create or adjust attendances:

- From the member's profile → Attendances
- From the timesheet itself (edit the line item)

Manual adjustments are flagged in the audit log so you can prove they're not falsified.

## Time clock policies

From **Settings → Time Clock**, you can toggle:

| Policy | What it does |
|---|---|
| **Auto clock out** | Automatically close stale attendances |
| **Require GPS verification** | Members must be at the location to clock in/out |
| **Require photo verification** | Members must take a photo when clocking in/out |
| **Allow mobile devices** | Members can clock in/out from their phone |
| **Allow web-browser** | Members can clock in/out from a browser (not recommended — GPS and photo are less reliable) |
| **Enable Tommy Kiosk** | Lock a device into Kiosk mode |
| **Prevent returning early from breaks** | Block clock-back-on inside the scheduled break window |
| **Confirm scheduled breaks were taken at Clock-Off** | Prompt member to confirm break compliance |

Defaults match your [Solution](/solutions). Most teams adjust two or three of these and leave the rest alone.

## What's next

<CardGroup cols={2}>
  <Card title="Timesheets" icon="document" href="/timesheets">
    What happens to clocked time after a shift ends.
  </Card>
  <Card title="Scheduling" icon="calendar" href="/scheduling">
    The other half of the loop — building the shifts that get clocked.
  </Card>
  <Card title="Locations" icon="map" href="/locations">
    Geofence setup and multi-site policies.
  </Card>
  <Card title="Settings" icon="cog" href="/user-settings">
    Time Clock policies, Kiosk PINs, mileage rates.
  </Card>
</CardGroup>
