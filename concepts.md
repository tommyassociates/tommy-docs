---
title: Core Concepts
description: The Tommy vocabulary in one page. Team, member, shift, timesheet, location, role — and what they all mean.
---

Tommy uses a small set of words to describe a workforce. This page is your cheat sheet — read it once and the rest of the docs make sense.

## Team

A **team** is your workspace in Tommy. It has its own members, shifts, timesheets, locations, and integrations. Most businesses have one team. If you run multiple distinct businesses, you can create a team for each — your account can belong to as many teams as you need, and you switch between them from the menu.

When you sign up, Tommy walks you through creating your first team. See [Onboarding](/onboarding).

## Solution

A **Solution** is an industry preset you pick when you create a team. It bundles the roles, shift templates, compliance documents, and features that make sense for your industry — so an NDIS provider starts with "Support Worker" roles and visit-based shifts, while a hospitality team starts with "Barista" and "Chef" roles and split-shift templates.

Six Solutions ship with Tommy: General, NDIS & Care Services, Hospitality, Retail, Staffing Agency, and Construction & Trades. See [Solutions](/solutions).

## Team member

A **team member** is a person who belongs to your team. Most are employees or contractors who work shifts; some are managers or admins. Each member has roles, optional location assignments, contact details, and (depending on your Solution) compliance documents.

Members are invited by email or mobile number. See [Team Members](/team-members).

## Role

A **role** is a label that says what someone does — "Support Worker", "Barista", "Site Manager". Roles drive who can be scheduled into which shifts, what permissions they have, and how their pay is calculated.

Each Solution starts you with a sensible default set of roles. You can add your own from **Settings → Roles & Positions**.

## Location

A **location** is a physical workplace, site, or service area. A location has an address, optional managers, and the team members who work there. Some teams have one location; others have dozens.

Locations matter for two reasons:

- **Scheduling** — shifts are tied to a location, so members see only what's relevant to them
- **Time clock** — Tommy can verify a member is at the right place when they clock in (geofencing)

See [Locations](/locations).

## Shift

A **shift** is a single block of scheduled work for one member on one date. It has a start time, end time, location, and a member assigned (or it's left open for someone to pick up).

Shifts are usually built from **Shift Templates** — reusable definitions like "Morning Shift 6am–2pm" — so you don't re-enter the same hours every week.

A shift goes through these states:

| State | Meaning |
|---|---|
| **Draft** | You're still building it. The member doesn't see it. |
| **Published** | The shift is live. The member sees it on their phone. |
| **Cancelled** | The shift was called off. |

See [Scheduling](/scheduling).

## Attendance

An **attendance** is the actual record of someone clocking in and out. It captures the time, the GPS location, and (if required) a photo. Attendances feed into timesheets.

See [Time Clock](/timeclock).

## Timesheet

A **timesheet** is the pay-period record for one member — a roll-up of every shift they worked, every break they took, and the resulting pay. Tommy builds it for you from the shifts and attendances; the member just reviews and submits.

A timesheet moves through these states:

| State | What happened |
|---|---|
| **Unsubmitted** | Tommy is still building it. The pay period isn't closed yet. |
| **Submitted** | The member submitted it for approval. |
| **Approved** | A manager approved it. Now it's locked and ready to export. |

See [Timesheets](/timesheets).

## Integration

An **integration** is a connection to another tool — your accounting software, your POS, your payroll system. Connect Xero once, and approved timesheets flow there automatically.

See [Integrations](/integrations).

## Pay template

A **pay template** is a reusable set of pay rules — a base rate, break rules, overtime multipliers, allowances. You assign a pay template to a member or a shift and Tommy uses it to calculate timesheet pay.

Pay templates live in **Settings → Pay Templates**.

## Availability

**Availability** is when a member is willing to work. Members set their availability in the app — "I can't work Tuesdays" or "I'm away the first week of June" — and Tommy uses it to flag conflicts when you build the schedule.

## Permissions

**Permissions** decide who can do what. Most permissions follow the role you assign — admins can do everything, location managers can manage shifts at their location, and members can only see their own data.

Tommy ships with sensible defaults. Customise them in **Settings → Permissions** if you need to.

## Putting it together

Here's how the pieces connect on a typical day:

<Steps>
  <Step title="A scheduler builds shifts">
    They open Scheduling, drag in a Shift Template, pick a member and a location, and **Publish**.
  </Step>
  <Step title="The member gets the shift on their phone">
    They see it in their schedule. A reminder fires before the shift starts.
  </Step>
  <Step title="The member clocks in">
    Tommy creates an **attendance** with the time, location, and (if needed) a photo.
  </Step>
  <Step title="The member clocks out">
    The shift ends. The attendance closes. Tommy adds the worked hours to their **timesheet**.
  </Step>
  <Step title="The member submits, the manager approves">
    At the end of the pay period, the member submits the timesheet. The manager approves.
  </Step>
  <Step title="Approved timesheets export to payroll">
    If you've connected an accounting integration, approved timesheets flow to Xero, QuickBooks, or MYOB automatically.
  </Step>
</Steps>

That loop — schedule, clock, approve, export — is the heart of Tommy. Everything else makes that loop fit your industry.
