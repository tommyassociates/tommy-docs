---
title: Settings
description: Team settings (admins) and personal account settings (everyone). Profile, notifications, security, locations, roles, integrations.
---

Tommy has two settings surfaces:

- **Team settings** — for owners and admins to configure the whole team
- **My Account** — for every member to manage their own profile

This page covers both. Most members only need the second half.

## Team settings (admins)

Open **Settings** from the menu. You'll see grouped sections:

### Team

The day-to-day team controls.

| Section | What it does |
|---|---|
| **Team Details** | Team name, ABN/tax ID, address, logo, contact details |
| **Features** | Turn modules on or off (Scheduling, Time Clock, Timesheets, Mileage, etc.) |
| **Permissions** | Customise who can do what — beyond the role defaults |
| **System Notifications** | What Tommy sends to the team (shift reminders, timesheet alerts) |
| **Subscription** | Billing, plan, payment method |
| **Home Screen** | Customise what members see when they open the app |
| **Locations** | Add and manage physical work sites — see [Locations](/locations) |
| **Roles & Positions** | The role list members can be assigned (e.g., "Barista", "Support Worker") |
| **Skills** | Skill tags for filtering and matching |
| **Tags** | Free-form labels for any other categorisation |
| **Import** | Bulk-import members, shifts, or other data from CSV |
| **Export** | Download team data — see Activity Logs and reports |
| **Notifications** | Your own notification preferences as a team admin |
| **Activity Logs** | Audit trail of changes (who did what, when) |

### Compliance

Settings for industries that need it (NDIS, Construction, Hospitality).

| Section | What it does |
|---|---|
| **Time Policies** | Grace periods, overtime rules, break enforcement |
| **Pay Templates** | Pay rates, allowances, multipliers — see [Timesheets](/timesheets#pay-templates) |
| **Accrual Policies** | How leave (annual, sick, personal) accrues |
| **Manage Accruals** | Manual adjustments to leave balances |

### Leave Management

| Section | What it does |
|---|---|
| **Leave Requests** | Approve and decline leave; review balances |

### Time & Attendance

The Workforce modules' admin controls.

| Section | What it does |
|---|---|
| **Scheduling** | Default shift behaviour, publish rules, swap policies |
| **Time Clock** | GPS, photo, geofencing, Kiosk Mode — see [Time Clock](/timeclock) |
| **Shift Tasks** | Pre/post-shift checklists members must complete |
| **Shift Tasks Answers** | Review submitted task responses |
| **Mileage** | Mileage rates and reimbursement |
| **Timesheets** | Submission rules, approval flow, lock behaviour |
| **Availability** | Whether members can set unavailable dates |
| **Special Days** | Public holidays and pay-rate overrides |

### Invoicing

For Solutions that bill clients (NDIS, Staffing Agency).

| Section | What it does |
|---|---|
| **Invoicing** | Invoice templates, branding, terms |
| **Products** | Service items billed to clients |
| **Permissions** | Who can create and send invoices |

### Integrations

Connect Xero, QuickBooks, MYOB, POS systems. See [Integrations](/integrations).

### Danger Zone

| Action | What it does |
|---|---|
| **Close Team** | Permanently archives the team. **This cannot be undone.** Approved timesheets remain accessible to members. |

:::warning
Closing a team is irreversible. If you only want to stop billing, downgrade your subscription instead.
:::

## My Account (every member)

This is what members see when they open settings. It's also available to admins — your team-admin status doesn't replace your personal settings.

| Section | What it does |
|---|---|
| **My Details** | First name, last name, email, mobile, avatar, timezone, language |
| **My QR Code** | Quick-scan code for joining other teams or kiosk login |
| **Notifications** | When and how Tommy notifies you (push, email, SMS) |
| **Kiosk PIN** | Your PIN for [Kiosk Mode](/timeclock#kiosk-mode) clock-in |
| **Language** | Display language |
| **Debugging** | Diagnostic info for support tickets |
| **Add Team** | Join another team you've been invited to |
| **About** | App version, support contact |
| **Tommy Account** | Email, password, two-factor authentication |
| **Logout** | Sign out of this device |

### Notifications

Members can fine-tune what Tommy notifies them about and when:

- **Shift reminders** — how long before a shift to remind them (default: 30 minutes)
- **Timesheet alerts** — submission and approval updates
- **Quiet hours** — block notifications during specified times
- **Channel** — push, email, SMS, or all three

### Security & two-factor

From **Tommy Account**, members can:

- Change their **password**
- Enable **two-factor authentication** (TOTP via authenticator app, or SMS code)
- View **sign-in history** — last sign-in time, IP address, device

:::tip
Encourage members handling client data (NDIS support workers, agency talent) to enable two-factor. From a security audit perspective, it's the easiest single uplift.
:::

### Availability (members)

If your team has Availability enabled, members can mark unavailable times:

- One-off blocks ("away 12–18 June")
- Recurring patterns ("never Tuesdays after 6pm")

Tommy uses these when you build the schedule and warns you about conflicts. See [Scheduling](/scheduling#availability).

### Closing your personal account

From **Tommy Account → Close Account**, members can close their personal Tommy account.

Note that closing your personal account doesn't close the teams you're a member of — you just stop having access. If you own a team, you'll need to either transfer ownership or close the team first (see Danger Zone above).

## Permissions deep-dive

Tommy ships with these built-in roles (visible in the app i18n as):

| Role label | What they typically do |
|---|---|
| **Team Admin** | Everything — manage settings, integrations, members, all data |
| **Location Manager** | Manage shifts, members, and timesheets scoped to assigned locations |
| (regular member) | See and submit their own data; clock in and out |

To customise — for example, "this manager can approve timesheets but can't change pay templates" — go to **Settings → Permissions**. Each capability can be granted independently to roles or individuals.

:::note
**Screenshot needed:** Permissions matrix screen showing roles down, capabilities across.
:::

## What's next

<CardGroup cols={2}>
  <Card title="Team Members" icon="users" href="/team-members">
    Invite and manage the people in your team.
  </Card>
  <Card title="Integrations" icon="link" href="/integrations">
    Connect your accounting and payroll software.
  </Card>
  <Card title="Time Clock" icon="clock" href="/timeclock">
    GPS, photo, geofencing, Kiosk PIN setup.
  </Card>
  <Card title="Timesheets" icon="document" href="/timesheets">
    Pay templates, approval flow, exports.
  </Card>
</CardGroup>
