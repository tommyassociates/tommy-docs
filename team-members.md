---
title: Team Members
description: Invite people, assign roles, scope to locations, manage documents, and deactivate when they leave.
---

A **team member** is anyone who belongs to your team — staff, contractors, managers, admins. This page covers everything you do with members: inviting them, assigning roles, scoping their access, and removing them.

You manage members from **Team Members** in the main menu (sometimes shown as **Team** depending on your role).

## The three ways to add members

<CardGroup cols={3}>
  <Card title="Add individual" icon="user-plus">
    For one-by-one invites. Best when onboarding gradually.
  </Card>
  <Card title="Share team invite link" icon="link">
    Generate a link or QR code. Anyone with it can join. Best for events or fast bootstraps.
  </Card>
  <Card title="Bulk upload" icon="document">
    Upload a CSV. Best when migrating from spreadsheets or another system.
  </Card>
</CardGroup>

## Add an individual

From **Team Members**, tap **Add individual**.

You'll see a form with five tabs. The first one is the only one you need to fill — the rest are optional and can be done later.

### Personal Details (required)

- **First name** and **Last name**
- **Email** or **Mobile number** — at least one is required (this is what they'll sign in with)
- **Employee start date** — optional, used in some pay calculations
- **Date of birth** — optional, used in some compliance flows
- **Locations** — pick one or more if you have multiple [locations](/locations); leave blank for team-wide
- **Roles** — pick one or more from the dropdown (defaults come from your [Solution](/solutions))
- **Skills** — optional tags
- **Tags** — optional tags
- **Pay template** — picks the pay rules that apply to this member; see Settings → Pay Templates

:::note
**Screenshot needed:** Add individual form with the Personal Details tab open.
:::

### Documents

For Solutions that require compliance — NDIS, Construction, Hospitality — you can upload required documents (Worker Screening, White Card, Food Safety, etc.) and set expiry dates. Tommy will warn you when a document is about to expire.

You can also do this later — the member can upload their own documents from their phone.

### Regular hours

Set the member's standard working pattern (e.g., "Mon–Fri 9–5"). Used for availability and overtime calculations. Optional.

### Integrations

If you've connected Xero, QuickBooks, or MYOB, this tab maps the member to the corresponding employee record in your accounting software. See [Integrations](/integrations).

### Manager Notes

Private notes visible only to managers and admins. Use for performance notes, special arrangements, or anything else you don't want the member to see.

### Send the invite

At the bottom of the form:

- **Send invite immediately** — Tommy sends an email or SMS with a sign-up link straight away
- **I will send invite later** — saves the member as pending; you can invite them when ready

Tap **Invite** (if sending now) or **Save team member** (if not).

## Share a team invite link

For fast bulk onboarding — induction days, casual hire events, or seasonal ramp-up — share a single link.

From **Team Members**, tap **Share team invite link**. You get:

- A **shareable URL**
- A **QR code** members can scan from their phone
- A short **invite code** they can type in

Anyone with the link or code joins your team as a regular member. They'll appear in your member list with whatever default role you set in **Settings → Permissions**.

:::tip
Use the QR code on a printed sign at orientation. Members scan, sign up, and they're in your team within a minute.
:::

:::warning
The invite link doesn't expire by default. If you're worried about strangers joining, generate a fresh code from time to time and revoke the old one.
:::

## Bulk upload

From **Team Members**, tap **Bulk upload**. Tommy gives you a CSV template with columns for:

- First name, Last name
- Email, Mobile number
- Roles, Locations, Tags
- Start date, Date of birth
- Pay template

Fill it in, upload, and Tommy creates the members and queues invitations. You'll get a results summary showing what succeeded and what failed (usually due to duplicate emails or invalid roles).

## Roles and permissions

Roles are labels — "Support Worker", "Site Manager", "Barista". They're how you describe what someone does.

Permissions are what someone can do in Tommy — see all shifts, approve timesheets, edit team settings.

Most of the time the role-to-permission mapping is automatic: someone tagged as a manager gets manager permissions; a worker gets worker permissions. To customise, see **Settings → Permissions**.

The common patterns:

| Role pattern | What they can do |
|---|---|
| **Owner / Admin** | Everything — settings, integrations, billing, all data |
| **Location Manager** | Manage shifts, approve timesheets, manage members at their assigned locations |
| **Worker / Member** | View their own shifts, clock in/out, submit their own timesheets |

## Editing a member

Tap any member in the list to open their profile. You can update everything you set during the invite, plus:

- View their **shift history** and **timesheets**
- View their **clock-in attendances**
- Reset their **Kiosk PIN** (for [Kiosk Mode](/timeclock#kiosk-mode))
- Re-send their invite if they didn't receive the first one

## Deactivating a member

When someone leaves, **don't delete them** — you'll lose their historical timesheets and shift history. Instead, deactivate them:

<Steps>
  <Step title="Open the member's profile">
    From Team Members, tap their name.
  </Step>
  <Step title="Tap Deactivate">
    Confirm the dialog. They lose access immediately.
  </Step>
  <Step title="Their data stays put">
    Past shifts, timesheets, and attendances remain. They'll just stop appearing in active member lists.
  </Step>
</Steps>

If they come back later, you can reactivate them — same profile, same history.

## Bulk operations

From the member list, you can select multiple members at once to:

- **Bulk update** roles, locations, or tags
- **Bulk export** to CSV
- **Bulk message** via in-app chat or notifications

## What's next

<CardGroup cols={2}>
  <Card title="Locations" icon="map" href="/locations">
    Scope members to specific work sites.
  </Card>
  <Card title="User Settings" icon="user" href="/user-settings">
    What members see when they manage their own profile.
  </Card>
  <Card title="Scheduling" icon="calendar" href="/scheduling">
    Now you've got members, build their shifts.
  </Card>
  <Card title="Permissions" icon="lock-closed" href="/user-settings#permissions">
    Customise who can see and do what.
  </Card>
</CardGroup>
