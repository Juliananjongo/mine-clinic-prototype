import { useState, type ReactNode } from "react"

type Screen = "login" | "dashboard" | "registration" | "records" | "appointments" | "queue" | "triage" | "consultation" | "emergency" | "laboratory" | "pharmacy" | "referrals" | "occupational" | "fitness" | "reports" | "statistics" | "users" | "audit" | "settings" | "integration" | "systemStatus" | "migration" | "notifications" | "profile"

type IconName = "grid" | "userPlus" | "search" | "calendar" | "queue" | "pulse" | "stethoscope" | "lab" | "pill" | "chart" | "users" | "bell" | "chevron" | "arrow" | "check" | "clock" | "plus" | "download" | "filter" | "logout" | "more" | "shield"

const iconPaths: Record<IconName, ReactNode> = {
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  userPlus: (
    <>
      <path d="M15 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M19 8v6M22 11h-6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  queue: (
    <>
      <path d="M4 6h16M4 12h11M4 18h8" />
      <circle cx="19" cy="17" r="3" />
    </>
  ),
  pulse: <path d="M3 12h4l2-7 4 14 2-7h6" />,
  stethoscope: (
    <>
      <path d="M6 3v6a4 4 0 0 0 8 0V3M4 3h4M12 3h4" />
      <path d="M10 17a5 5 0 0 0 10 0v-2" />
      <circle cx="20" cy="13" r="2" />
    </>
  ),
  lab: (
    <>
      <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />
      <path d="M8 14h8" />
    </>
  ),
  pill: (
    <>
      <path d="m10.5 20.5-7-7a5 5 0 0 1 7-7l7 7a5 5 0 0 1-7 7Z" />
      <path d="m7 17 10-10" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M20 8v6M23 11h-6" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </>
  ),
  chevron: <path d="m9 18 6-6-6-6" />,
  arrow: (
    <>
      <path d="m9 18-6-6 6-6" />
      <path d="M3 12h18" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  download: (
    <>
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </>
  ),
  filter: <path d="M3 5h18l-7 8v6l-4 2v-8Z" />,
  logout: (
    <>
      <path d="M10 17l5-5-5-5M15 12H3" />
      <path d="M14 4h6v16h-6" />
    </>
  ),
  more: (
    <>
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
}

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  )
}

function Button({
  children,
  variant = "primary",
  icon,
  onClick,
  type = "button",
  className = "",
}: {
  children: ReactNode
  variant?: "primary" | "secondary" | "ghost" | "danger"
  icon?: IconName
  onClick?: () => void
  type?: "button" | "submit"
  className?: string
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} ${className}`}
    >
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
    </button>
  )
}

function Field({
  label,
  placeholder = "",
  type = "text",
  defaultValue,
  required,
  className = "",
}: {
  label: string
  placeholder?: string
  type?: string
  defaultValue?: string
  required?: boolean
  className?: string
}) {
  return (
    <label className={`field ${className}`}>
      <span>
        {label}
        {required && <b> *</b>}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </label>
  )
}

function SelectField({
  label,
  options,
  className = "",
  value,
  onChange,
}: {
  label: string
  options: string[]
  className?: string
  value?: string
  onChange?: (value: string) => void
}) {
  return (
    <label className={`field ${className}`}>
      <span>{label}</span>
      <select
        value={value}
        onChange={
          onChange ? (event) => onChange(event.target.value) : undefined
        }
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

function TextArea({
  label,
  placeholder,
  defaultValue,
}: {
  label: string
  placeholder?: string
  defaultValue?: string
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <textarea
        placeholder={placeholder}
        defaultValue={defaultValue}
        rows={4}
      />
    </label>
  )
}

function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode
  tone?: "success" | "warning" | "danger" | "info" | "neutral"
}) {
  return <span className={`badge badge-${tone}`}>{children}</span>
}

function Card({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`card ${className}`}>{children}</div>
}

function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
}) {
  return (
    <div className="page-header">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <div className="page-title" role="heading" aria-level={1}>
          {title}
        </div>
        {description && <p>{description}</p>}
      </div>
      {actions && <div className="header-actions">{actions}</div>}
    </div>
  )
}

function SectionTitle({ title, action }: { title: string action?: ReactNode }) {
  return (
    <div className="section-title">
      <div role="heading" aria-level={2}>
        {title}
      </div>
      {action}
    </div>
  )
}

const navigation: {
  section: string
  items: { screen: Screen label: string icon: IconName }[]
}[] = [
  {
    section: "WORKSPACE",
    items: [{ screen: "dashboard", label: "Dashboard", icon: "grid" }],
  },
  {
    section: "PATIENT CARE",
    items: [
      {
        screen: "records",
        label: "Patients",
        icon: "userPlus",
      },
      { screen: "appointments", label: "Appointments", icon: "calendar" },
      { screen: "queue", label: "Queue Management", icon: "queue" },
      { screen: "triage", label: "Nurse Triage", icon: "pulse" },
      { screen: "consultation", label: "Consultation", icon: "stethoscope" },
      {
        screen: "emergency",
        label: "Emergency & Injury-on-Duty",
        icon: "pulse",
      },
    ],
  },
  {
    section: "CLINICAL SERVICES",
    items: [
      { screen: "laboratory", label: "Laboratory", icon: "lab" },
      { screen: "pharmacy", label: "Pharmacy & Inventory", icon: "pill" },
      { screen: "referrals", label: "Referrals", icon: "arrow" },
    ],
  },
  {
    section: "OCCUPATIONAL HEALTH",
    items: [
      {
        screen: "occupational",
        label: "Occupational Medicals",
        icon: "shield",
      },
      { screen: "fitness", label: "Fitness-for-Work", icon: "check" },
    ],
  },
  {
    section: "INSIGHTS",
    items: [
      { screen: "reports", label: "Reports", icon: "chart" },
      { screen: "statistics", label: "Health Statistics", icon: "pulse" },
    ],
  },
  {
    section: "ADMINISTRATION",
    items: [
      { screen: "users", label: "Users & Roles", icon: "users" },
      { screen: "audit", label: "Audit Log", icon: "shield" },
      { screen: "settings", label: "System Settings", icon: "filter" },
    ],
  },
]

const screenTitles: Record<Screen, string> = {
  login: "Login",
  dashboard: "Dashboard",
  registration: "Patient Registration",
  records: "Patient Records",
  appointments: "Appointments",
  queue: "Queue Management",
  triage: "Nurse Triage",
  consultation: "Doctor Consultation",
  emergency: "Emergency & Injury-on-Duty",
  laboratory: "Laboratory",
  pharmacy: "Pharmacy",
  referrals: "Referrals",
  occupational: "Occupational Medicals",
  fitness: "Fitness-for-Work",
  reports: "Management Reports",
  statistics: "Health Statistics",
  users: "Users & Roles",
  audit: "Audit Log",
  settings: "System Settings",
  integration: "Employee Database Integration",
  systemStatus: "Backup & System Status",
  migration: "Historical Records & Migration",
  notifications: "Notifications",
  profile: "User Profile",
}

function Login({ onLogin }: { onLogin: (role: string) => void }) {
  const [username, setUsername] = useState("reception@mineclinic.demo")
  const [password, setPassword] = useState("prototype")
  const [showPassword, setShowPassword] = useState(false)
  const [role, setRole] = useState("Receptionist")
  const [useTwoFactor, setUseTwoFactor] = useState(false)
  const [twoFactor, setTwoFactor] = useState("")
  const [step, setStep] = useState<"credentials" | "twoFactor">("credentials")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const submit = () => {
    setError("")
    if (step === "credentials" && (!username.trim() || !password.trim())) {
      setError("Enter a staff ID and password to continue.")
      return
    }
    if (step === "twoFactor" && twoFactor !== "123456") {
      setError("Enter the demo verification code 123456.")
      return
    }
    if (step === "credentials" && useTwoFactor) {
      setStep("twoFactor")
      return
    }
    setLoading(true)
    window.setTimeout(() => onLogin(role), 650)
  }

  return (
    <main className="login-page">
      <section className="login-brand">
        <div className="brand-lockup">
          <div className="brand-mark">
            <Icon name="pulse" size={28} />
          </div>
          <div>
            <strong>Mine Clinic</strong>
            <span>Management System</span>
          </div>
        </div>
        <div className="login-message">
          <div className="eyebrow">MINE HEALTH OPERATIONS</div>
          <div role="heading" aria-level={1}>
            Care at the heart
            <br />
            of every shift.
          </div>
          <p>
            A calm, connected workspace for patient care, occupational health,
            and clinic operations.
          </p>
        </div>
        <div className="login-support">
          <Icon name="shield" />
          <span>Fictional prototype · no production services connected</span>
        </div>
      </section>
      <section className="login-form-wrap">
        <form
          className="login-card"
          onSubmit={(event) => {
            event.preventDefault()
            submit()
          }}
        >
          <div className="mobile-brand">
            <div className="brand-mark">
              <Icon name="pulse" />
            </div>
            <strong>Mine Clinic</strong>
          </div>
          {step === "credentials" ? (
            <>
              <div className="login-heading" role="heading" aria-level={1}>
                Welcome to Mine Clinic
              </div>
              <p>Choose a demo role or use the simulated sign-in form.</p>
              <div className="form-stack">
                <label className="field">
                  <span>Staff ID or email</span>
                  <input
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    aria-invalid={!!error && !username}
                    autoComplete="username"
                  />
                </label>
                <label className="field">
                  <span>Password</span>
                  <div className="password-field">
                    <input
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      type={showPassword ? "text" : "password"}
                      aria-invalid={!!error && !password}
                      autoComplete="current-password"
                    />
                    <button
                      className="password-toggle"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </label>
                <SelectField
                  label="Demo role"
                  value={role}
                  onChange={setRole}
                  options={[
                    "Admin",
                    "Doctor",
                    "Nurse",
                    "Receptionist",
                    "Pharmacy",
                    "Laboratory",
                    "Management",
                  ]}
                />
                <div className="login-options">
                  <label className="check-label">
                    <input
                      type="checkbox"
                      checked={useTwoFactor}
                      onChange={(event) => setUseTwoFactor(event.target.checked)}
                    />
                    Simulate 2FA
                  </label>
                  <button
                    className="text-button"
                    type="button"
                    onClick={() =>
                      setError(
                        "Password recovery is simulated. No email was sent.",
                      )
                    }
                  >
                    Forgot password?
                  </button>
                </div>
                {error && (
                  <div className="login-error" role="alert">
                    <Icon name="shield" size={17} /> {error}
                  </div>
                )}
                <Button type="submit" className="full-width">
                  {loading ? "Signing in…" : `Demo login as ${role}`}
                </Button>
                <div className="role-picker" aria-label="Quick demo roles">
                  {["Admin", "Doctor", "Nurse", "Receptionist"].map((item) => (
                    <button
                      type="button"
                      key={item}
                      className={role === item ? "active" : ""}
                      onClick={() => setRole(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <button
                type="button"
                className="back-link"
                onClick={() => {
                  setStep("credentials")
                  setError("")
                }}
              >
                <Icon name="arrow" size={16} /> Back to sign in
              </button>
              <div className="login-heading" role="heading" aria-level={1}>
                Verification code
              </div>
              <p>Simulated 2FA is on. Enter demo code 123456.</p>
              <div className="form-stack">
                <label className="field">
                  <span>Six-digit code</span>
                  <input
                    inputMode="numeric"
                    value={twoFactor}
                    maxLength={6}
                    onChange={(event) =>
                      setTwoFactor(event.target.value.replace(/\D/g, ""))
                    }
                    autoFocus
                  />
                </label>
                {error && (
                  <div className="login-error" role="alert">
                    <Icon name="shield" size={17} /> {error}
                  </div>
                )}
                <Button type="submit" className="full-width">
                  {loading ? "Verifying…" : "Verify and continue"}
                </Button>
              </div>
            </>
          )}
          <div className="prototype-note">
            <Icon name="shield" size={18} />
            <span>
              Demo authentication, not secure. No real accounts, integrations,
              or backups exist.
            </span>
          </div>
        </form>
      </section>
    </main>
  )
}

function Shell({
  screen,
  role,
  onNavigate,
  onLogout,
  children,
}: {
  screen: Screen
  role: string
  onNavigate: (screen: Screen) => void
  onLogout: () => void
  children: ReactNode
}) {
  const [collapsed, setCollapsed] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  return (
    <div className={`app-shell ${collapsed ? "is-collapsed" : ""}`}>
      <aside className="sidebar">
        <div className="brand-lockup sidebar-brand">
          <div className="brand-mark">
            <Icon name="pulse" />
          </div>
          <button
            className="collapse-button"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon name="chevron" size={16} />
          </button>
          <div>
            <strong>Mine Clinic</strong>
            <span>Management System</span>
          </div>
        </div>
        <nav>
          {navigation.map((group) => (
            <div className="nav-group" key={group.section}>
              <div className="nav-label">{group.section}</div>
              {group.items.map((item) => (
                <button
                  key={item.screen}
                  className={`nav-item ${
                    screen === item.screen ? "active" : ""
                  }`}
                  onClick={() => onNavigate(item.screen)}
                >
                  <Icon name={item.icon} />
                  <span>{item.label}</span>
                  {screen === item.screen && <Icon name="chevron" size={16} />}
                </button>
              ))}
            </div>
          ))}
        </nav>
        <button
          className="sidebar-profile"
          onClick={() => onNavigate("profile")}
        >
          <div className="avatar">NM</div>
          <div>
            <strong>Nandi Mokoena</strong>
            <span>{role}</span>
          </div>
          <Icon name="chevron" size={16} />
        </button>
      </aside>
      <div className="main-column">
        <header className="topbar">
          <div>
            <span>Clinic workspace</span>
            <strong>{screenTitles[screen]}</strong>
          </div>
          <button
            className="global-search"
            onClick={() => onNavigate("records")}
          >
            <Icon name="search" size={17} />
            <span>Search patient name, ID or employee number</span>
            <kbd>Ctrl K</kbd>
          </button>
          <div className="topbar-actions">
            <div className="demo-indicator">
              <i /> Demo data – not a real clinical system
            </div>
            <button
              className="icon-button notification-button"
              aria-label="Notifications"
              onClick={() => onNavigate("notifications")}
            >
              <Icon name="bell" />
              <b>4</b>
            </button>
            <button
              className="top-profile"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <div className="avatar">NM</div>
              <div>
                <strong>Nandi Mokoena</strong>
                <span>{role}</span>
              </div>
              <Icon name="chevron" size={14} />
            </button>
            {profileOpen && (
              <div className="profile-menu">
                <button onClick={() => onNavigate("profile")}>
                  <Icon name="users" size={16} /> Profile & account
                </button>
                <button onClick={() => onNavigate("profile")}>
                  <Icon name="shield" size={16} /> Change password
                </button>
                <button onClick={onLogout}>
                  <Icon name="logout" size={16} /> Sign out
                </button>
              </div>
            )}
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
  note,
  tone = "",
}: {
  icon: IconName
  label: string
  value: string
  note: string
  tone?: string
}) {
  return (
    <Card className="stat-card">
      <div className={`stat-icon ${tone}`}>
        <Icon name={icon} />
      </div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{note}</small>
      </div>
    </Card>
  )
}

function Dashboard({ go }: { go: (screen: Screen) => void }) {
  return (
    <>
      <PageHeader
        eyebrow="MONDAY, 24 JUNE 2025"
        title="Good morning, Nandi"
        description="Here is what is happening at the clinic today."
        actions={
          <Button icon="userPlus" onClick={() => go("registration")}>
            Register patient
          </Button>
        }
      />
      <div className="stats-grid">
        <StatCard
          icon="users"
          label="Patients today"
          value="48"
          note="12 more than yesterday"
        />
        <StatCard
          icon="calendar"
          label="Appointments"
          value="26"
          note="8 remaining today"
          tone="blue"
        />
        <StatCard
          icon="clock"
          label="In queue"
          value="14"
          note="Avg. wait 18 minutes"
          tone="amber"
        />
        <StatCard
          icon="lab"
          label="Results pending"
          value="7"
          note="3 marked as urgent"
          tone="violet"
        />
      </div>
      <div className="dashboard-alerts">
        <button onClick={() => go("queue")}>
          <span className="alert-symbol info">
            <Icon name="stethoscope" />
          </span>
          <span>
            <small>CURRENTLY ATTENDING</small>
            <strong>6 patients with clinicians</strong>
          </span>
          <Icon name="chevron" size={16} />
        </button>
        <button onClick={() => go("emergency")}>
          <span className="alert-symbol danger">
            <Icon name="pulse" />
          </span>
          <span>
            <small>REQUIRES ATTENTION</small>
            <strong>1 emergency priority case</strong>
          </span>
          <Icon name="chevron" size={16} />
        </button>
        <button onClick={() => go("pharmacy")}>
          <span className="alert-symbol warning">
            <Icon name="pill" />
          </span>
          <span>
            <small>PHARMACY STOCK</small>
            <strong>5 items below reorder level</strong>
          </span>
          <Icon name="chevron" size={16} />
        </button>
      </div>
      <div className="dashboard-grid">
        <Card>
          <SectionTitle
            title="Today's appointments"
            action={
              <button
                className="text-button"
                onClick={() => go("appointments")}
              >
                View all <Icon name="chevron" size={14} />
              </button>
            }
          />
          <div className="appointment-list">
            {[
              [
                "08:00",
                "Thabo Nkosi",
                "Annual medical",
                "Dr. Khumalo",
                "In progress",
              ],
              ["08:30", "Lerato Molefe", "Follow-up", "Dr. Khumalo", "Waiting"],
              [
                "09:00",
                "Petrus van Wyk",
                "Injury review",
                "Dr. Adams",
                "Confirmed",
              ],
              [
                "09:30",
                "Ayanda Dlamini",
                "Respiratory exam",
                "Dr. Adams",
                "Confirmed",
              ],
            ].map((row) => (
              <button
                className="appointment-row"
                onClick={() => go("records")}
                key={row[1]}
              >
                <strong>{row[0]}</strong>
                <div className="patient-avatar">
                  {row[1]
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <b>{row[1]}</b>
                  <span>
                    {row[2]} · {row[3]}
                  </span>
                </div>
                <Badge
                  tone={
                    row[4] === "In progress"
                      ? "success"
                      : row[4] === "Waiting"
                        ? "warning"
                        : "info"
                  }
                >
                  {row[4]}
                </Badge>
                <Icon name="chevron" size={16} />
              </button>
            ))}
          </div>
        </Card>
        <div className="side-stack">
          <Card>
            <SectionTitle title="Quick actions" />
            <div className="quick-grid">
              {[
                ["userPlus", "Register patient", "registration"],
                ["search", "Find patient", "records"],
                ["calendar", "Book appointment", "appointments"],
                ["queue", "Manage queue", "queue"],
                ["pulse", "Start triage", "triage"],
                ["stethoscope", "New consultation", "consultation"],
                ["pulse", "Record emergency", "emergency"],
              ].map(([icon, label, target]) => (
                <button
                  className="quick-action"
                  key={label}
                  onClick={() => go(target as Screen)}
                >
                  <span>
                    <Icon name={icon as IconName} />
                  </span>
                  <b>{label}</b>
                  <Icon name="chevron" size={16} />
                </button>
              ))}
            </div>
          </Card>
          <Card className="queue-summary">
            <SectionTitle
              title="Live queue"
              action={<Badge tone="success">LIVE</Badge>}
            />
            <div className="queue-count">
              <strong>14</strong>
              <span>patients waiting</span>
            </div>
            <div className="queue-bars">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="queue-meta">
              <span>
                Longest wait <b>34 min</b>
              </span>
              <span>
                At triage <b>4</b>
              </span>
            </div>
            <Button
              variant="secondary"
              className="full-width"
              onClick={() => go("queue")}
            >
              Open queue
            </Button>
          </Card>
        </div>
      </div>
      <Card className="recent-activity">
        <SectionTitle
          title="Recent activity"
          action={<Badge tone="neutral">Fictional demo events</Badge>}
        />
        <div>
          {[
            ["check", "Triage completed", "Lindiwe Zulu · 8 minutes ago"],
            [
              "lab",
              "Laboratory sample collected",
              "Michael Botha · 14 minutes ago",
            ],
            [
              "calendar",
              "Appointment checked in",
              "Nandi Mokoena · 21 minutes ago",
            ],
          ].map((item) => (
            <button
              key={item[1]}
              onClick={() => go(item[0] === "lab" ? "laboratory" : "queue")}
            >
              <span>
                <Icon name={item[0] as IconName} />
              </span>
              <div>
                <strong>{item[1]}</strong>
                <small>{item[2]}</small>
              </div>
              <Icon name="chevron" size={15} />
            </button>
          ))}
        </div>
      </Card>
    </>
  )
}

function FormActions({
  onCancel,
  onSave,
  saveLabel = "Save",
}: {
  onCancel: () => void
  onSave: () => void
  saveLabel?: string
}) {
  return (
    <div className="form-actions">
      <Button variant="ghost" icon="arrow" onClick={onCancel}>
        Back
      </Button>
      <div>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button icon="check" onClick={onSave}>
          {saveLabel}
        </Button>
      </div>
    </div>
  )
}

function Registration({
  go,
  notify,
}: {
  go: (screen: Screen) => void
  notify: (message: string) => void
}) {
  return (
    <>
      <PageHeader
        eyebrow="PATIENT ADMINISTRATION"
        title="Register a new patient"
        description="Create a clinic profile using the patient's identification and employment details."
      />
      <div className="form-layout">
        <div className="form-main">
          <Card>
            <SectionTitle title="Personal information" />
            <div className="form-grid">
              <Field
                label="National ID / Passport number"
                placeholder="Enter identification number"
                required
              />
              <SelectField label="Title" options={["Mr", "Ms", "Mrs", "Dr"]} />
              <Field
                label="First name"
                placeholder="Enter first name"
                required
              />
              <Field label="Last name" placeholder="Enter last name" required />
              <Field label="Date of birth" type="date" required />
              <SelectField
                label="Gender"
                options={["Select gender", "Male", "Female", "Other"]}
              />
              <Field label="Mobile number" placeholder="+27" />
              <Field label="Email address" placeholder="name@example.com" />
            </div>
          </Card>
          <Card>
            <SectionTitle title="Employment & medical scheme" />
            <div className="form-grid">
              <Field
                label="Employee number"
                placeholder="e.g. MN-10482"
                required
              />
              <SelectField
                label="Mine / Site"
                options={[
                  "Select site",
                  "North Shaft",
                  "West Plant",
                  "Central Works",
                ]}
              />
              <SelectField
                label="Department"
                options={[
                  "Select department",
                  "Mining",
                  "Engineering",
                  "Processing",
                  "Administration",
                ]}
              />
              <SelectField
                label="Medical scheme"
                options={[
                  "Mine Health Fund",
                  "Discovery Health",
                  "Private / Cash",
                ]}
              />
              <Field
                label="Medical aid number"
                placeholder="Enter membership number"
              />
              <Field
                label="Emergency contact"
                placeholder="Name and mobile number"
              />
            </div>
          </Card>
        </div>
        <aside>
          <Card className="info-card">
            <div className="info-icon">
              <Icon name="shield" />
            </div>
            <div role="heading" aria-level={2}>
              Privacy reminder
            </div>
            <p>
              Confirm patient identity before creating a profile. Only fictional
              sample information should be used in this prototype.
            </p>
          </Card>
          <Card>
            <SectionTitle title="Registration progress" />
            <div className="step-list">
              <div className="done">
                <span>1</span>
                <b>Patient details</b>
              </div>
              <div>
                <span>2</span>
                <b>Review information</b>
              </div>
              <div>
                <span>3</span>
                <b>Complete registration</b>
              </div>
            </div>
          </Card>
        </aside>
      </div>
      <FormActions
        onCancel={() => go("dashboard")}
        saveLabel="Register patient"
        onSave={() => {
          notify("Sample patient profile saved")
          go("records")
        }}
      />
    </>
  )
}

function Records({ go }: { go: (screen: Screen) => void }) {
  const [showPatient, setShowPatient] = useState(false)
  if (showPatient)
    return <PatientDetail onBack={() => setShowPatient(false)} go={go} />
  return (
    <>
      <PageHeader
        eyebrow="PATIENT RECORDS"
        title="Find a patient"
        description="Search by name, employee number, national ID or mobile number."
        actions={
          <Button icon="userPlus" onClick={() => go("registration")}>
            Register patient
          </Button>
        }
      />
      <Card className="search-card">
        <div className="search-box">
          <Icon name="search" />
          <input
            aria-label="Search patients"
            placeholder="Search patients..."
            defaultValue="Thabo"
          />
          <Button onClick={() => setShowPatient(false)}>Search</Button>
        </div>
        <div className="filter-row">
          <button className="filter-chip active">All patients</button>
          <button className="filter-chip">Recently viewed</button>
          <button className="filter-chip">Mine employees</button>
          <button className="filter-chip">
            <Icon name="filter" size={15} /> More filters
          </button>
        </div>
      </Card>
      <div className="results-label">3 RESULTS FOR “THABO”</div>
      <Card className="table-card">
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Patient ID</th>
              <th>Employee no.</th>
              <th>Mobile</th>
              <th>Last visit</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Thabo Nkosi",
                "PT-002914",
                "MN-10482",
                "072 555 0188",
                "24 Jun 2025",
                "Active",
              ],
              [
                "Thabo Maseko",
                "PT-002187",
                "MN-08921",
                "083 412 0991",
                "10 May 2025",
                "Active",
              ],
              [
                "Thabo Sibiya",
                "PT-001024",
                "Contractor",
                "071 825 3340",
                "12 Jan 2025",
                "Inactive",
              ],
            ].map((patient) => (
              <tr key={patient[1]} onClick={() => setShowPatient(true)}>
                <td>
                  <div className="person-cell">
                    <div className="patient-avatar">
                      {patient[0]
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <strong>{patient[0]}</strong>
                  </div>
                </td>
                <td>{patient[1]}</td>
                <td>{patient[2]}</td>
                <td>{patient[3]}</td>
                <td>{patient[4]}</td>
                <td>
                  <Badge tone={patient[5] === "Active" ? "success" : "neutral"}>
                    {patient[5]}
                  </Badge>
                </td>
                <td>
                  <button className="icon-button">
                    <Icon name="chevron" size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  )
}

function PatientDetail({
  onBack,
  go,
}: {
  onBack: () => void
  go: (screen: Screen) => void
}) {
  return (
    <>
      <button className="back-link" onClick={onBack}>
        <Icon name="arrow" size={17} /> Back to patient search
      </button>
      <Card className="patient-banner">
        <div className="large-avatar">TN</div>
        <div className="patient-identity">
          <div>
            <div role="heading" aria-level={1}>
              Thabo Nkosi
            </div>
            <Badge tone="success">Active patient</Badge>
          </div>
          <p>PT-002914 · Male · 42 years · Employee MN-10482</p>
        </div>
        <div className="patient-actions">
          <Button
            variant="secondary"
            icon="calendar"
            onClick={() => go("appointments")}
          >
            Book appointment
          </Button>
          <Button icon="stethoscope" onClick={() => go("queue")}>
            Add to queue
          </Button>
        </div>
      </Card>
      <div className="detail-grid">
        <div className="detail-main">
          <Card>
            <div className="tabs">
              <button className="active">Overview</button>
              <button>Consultations</button>
              <button>Lab results</button>
              <button>Medications</button>
              <button>Documents</button>
            </div>
            <SectionTitle title="Clinical summary" />
            <div className="summary-grid">
              <div>
                <span>Blood group</span>
                <strong>O+</strong>
              </div>
              <div>
                <span>Allergies</span>
                <strong className="danger-text">Penicillin</strong>
              </div>
              <div>
                <span>Chronic conditions</span>
                <strong>Hypertension</strong>
              </div>
              <div>
                <span>Current medication</span>
                <strong>Amlodipine 5 mg</strong>
              </div>
            </div>
          </Card>
          <Card>
            <SectionTitle title="Recent visits" />
            <div className="timeline">
              {[
                [
                  "24 Jun 2025",
                  "Annual medical examination",
                  "Dr. S. Khumalo",
                  "In progress",
                ],
                [
                  "04 Mar 2025",
                  "Hypertension follow-up",
                  "Dr. L. Adams",
                  "Completed",
                ],
                [
                  "12 Dec 2024",
                  "Routine consultation",
                  "Dr. S. Khumalo",
                  "Completed",
                ],
              ].map((item) => (
                <div className="timeline-item" key={item[0]}>
                  <i />
                  <div>
                    <strong>{item[1]}</strong>
                    <span>
                      {item[0]} · {item[2]}
                    </span>
                  </div>
                  <Badge
                    tone={item[3] === "In progress" ? "warning" : "success"}
                  >
                    {item[3]}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <aside>
          <Card>
            <SectionTitle title="Contact details" />
            <dl>
              <dt>Mobile</dt>
              <dd>072 555 0188</dd>
              <dt>Email</dt>
              <dd>thabo.nkosi@example.test</dd>
              <dt>Mine / site</dt>
              <dd>North Shaft</dd>
              <dt>Department</dt>
              <dd>Mining Operations</dd>
            </dl>
          </Card>
          <Card>
            <SectionTitle title="Emergency contact" />
            <dl>
              <dt>Name</dt>
              <dd>Nomsa Nkosi</dd>
              <dt>Relationship</dt>
              <dd>Spouse</dd>
              <dt>Mobile</dt>
              <dd>079 555 0124</dd>
            </dl>
          </Card>
        </aside>
      </div>
    </>
  )
}

function Appointments({
  go,
  notify,
}: {
  go: (screen: Screen) => void
  notify: (m: string) => void
}) {
  return (
    <>
      <PageHeader
        eyebrow="PATIENT CARE"
        title="Appointment scheduling"
        description="Manage clinic bookings and provider availability."
        actions={
          <>
            <Button variant="secondary" icon="calendar">
              Today
            </Button>
            <Button
              icon="plus"
              onClick={() => notify("New appointment form opened")}
            >
              New appointment
            </Button>
          </>
        }
      />
      <div className="schedule-layout">
        <Card className="calendar-card">
          <div className="calendar-head">
            <Button variant="ghost" icon="arrow">
              Previous
            </Button>
            <div role="heading" aria-level={2}>
              24–28 June 2025
            </div>
            <Button variant="ghost">
              Next <Icon name="chevron" size={16} />
            </Button>
          </div>
          <div className="week-grid">
            <div className="time-column">
              <span />
              <span>08:00</span>
              <span>09:00</span>
              <span>10:00</span>
              <span>11:00</span>
              <span>12:00</span>
              <span>13:00</span>
            </div>
            {["MON 24", "TUE 25", "WED 26", "THU 27", "FRI 28"].map(
              (day, index) => (
                <div
                  className={`day-column ${index === 0 ? "today" : ""}`}
                  key={day}
                >
                  <strong>{day}</strong>
                  {index === 0 && (
                    <>
                      <button
                        className="booking b1"
                        onClick={() => go("records")}
                      >
                        <b>08:00</b>
                        <span>Thabo Nkosi</span>
                        <small>Annual medical</small>
                      </button>
                      <button className="booking b2">
                        <b>10:00</b>
                        <span>Ayanda Dlamini</span>
                        <small>Respiratory exam</small>
                      </button>
                    </>
                  )}
                  {index === 1 && (
                    <button className="booking b3">
                      <b>09:00</b>
                      <span>Mpho Seabi</span>
                      <small>Follow-up</small>
                    </button>
                  )}
                </div>
              ),
            )}
          </div>
        </Card>
        <Card className="booking-panel">
          <SectionTitle title="Book appointment" />
          <Field label="Patient" defaultValue="Thabo Nkosi · PT-002914" />
          <SelectField
            label="Appointment type"
            options={[
              "Annual medical examination",
              "General consultation",
              "Follow-up",
              "Injury review",
            ]}
          />
          <SelectField
            label="Provider"
            options={["Dr. S. Khumalo", "Dr. L. Adams"]}
          />
          <div className="split-fields">
            <Field label="Date" type="date" defaultValue="2025-06-24" />
            <Field label="Time" type="time" defaultValue="14:00" />
          </div>
          <TextArea label="Notes" placeholder="Add an optional note..." />
          <div className="panel-actions">
            <Button variant="secondary" onClick={() => go("dashboard")}>
              Cancel
            </Button>
            <Button
              onClick={() => notify("Appointment reserved in this prototype")}
            >
              Confirm booking
            </Button>
          </div>
        </Card>
      </div>
    </>
  )
}

function Queue({
  go,
  notify,
}: {
  go: (screen: Screen) => void
  notify: (m: string) => void
}) {
  const [called, setCalled] = useState<string[]>([])
  const patients = [
    ["Q-014", "Lerato Molefe", "General consultation", "28 min", "Waiting"],
    ["Q-015", "Petrus van Wyk", "Injury review", "19 min", "Waiting"],
    ["Q-016", "Thabo Nkosi", "Annual medical", "12 min", "Triage"],
    ["Q-017", "Zinhle Gumede", "Follow-up", "6 min", "Waiting"],
  ]
  return (
    <>
      <PageHeader
        eyebrow="LIVE OPERATIONS"
        title="Patient queue"
        description="Monitor patient flow through reception, triage and consultation."
        actions={
          <Button
            icon="plus"
            onClick={() => notify("Sample patient added to the queue")}
          >
            Add patient to queue
          </Button>
        }
      />
      <div className="queue-stats">
        <div>
          <span>Waiting</span>
          <strong>10</strong>
        </div>
        <div>
          <span>In triage</span>
          <strong>4</strong>
        </div>
        <div>
          <span>With doctor</span>
          <strong>6</strong>
        </div>
        <div>
          <span>Completed</span>
          <strong>18</strong>
        </div>
        <div>
          <span>Average wait</span>
          <strong>18 min</strong>
        </div>
      </div>
      <Card className="table-card">
        <div className="table-toolbar">
          <SectionTitle title="Current queue" />
          <div>
            <button className="filter-chip active">
              All <b>20</b>
            </button>
            <button className="filter-chip">
              Waiting <b>10</b>
            </button>
            <button className="filter-chip">
              Triage <b>4</b>
            </button>
            <button className="filter-chip">
              Doctor <b>6</b>
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Queue no.</th>
              <th>Patient</th>
              <th>Visit reason</th>
              <th>Wait time</th>
              <th>Stage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient[0]}>
                <td>
                  <strong>{patient[0]}</strong>
                </td>
                <td>
                  <div className="person-cell">
                    <div className="patient-avatar">
                      {patient[1]
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <strong>{patient[1]}</strong>
                      <span>
                        PT-00{Math.floor(Math.random() * 8000 + 1000)}
                      </span>
                    </div>
                  </div>
                </td>
                <td>{patient[2]}</td>
                <td>
                  <span
                    className={patient[3] === "28 min" ? "warning-text" : ""}
                  >
                    {patient[3]}
                  </span>
                </td>
                <td>
                  <Badge
                    tone={
                      called.includes(patient[0])
                        ? "info"
                        : patient[4] === "Triage"
                          ? "success"
                          : "warning"
                    }
                  >
                    {called.includes(patient[0]) ? "Called" : patient[4]}
                  </Badge>
                </td>
                <td>
                  {patient[4] === "Triage" ? (
                    <Button variant="secondary" onClick={() => go("triage")}>
                      Open triage
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      onClick={() => setCalled([...called, patient[0]])}
                    >
                      {called.includes(patient[0]) ? "Called" : "Call patient"}
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  )
}

function PatientStrip() {
  return (
    <Card className="patient-strip">
      <div className="patient-avatar">TN</div>
      <div>
        <strong>Thabo Nkosi</strong>
        <span>PT-002914 · Male · 42 years</span>
      </div>
      <div className="strip-facts">
        <span>
          <small>Employee no.</small>MN-10482
        </span>
        <span>
          <small>Blood group</small>O+
        </span>
        <span>
          <small>Allergy</small>
          <b className="danger-text">Penicillin</b>
        </span>
      </div>
      <Badge tone="warning">Annual medical</Badge>
    </Card>
  )
}

function Triage({
  go,
  notify,
}: {
  go: (screen: Screen) => void
  notify: (m: string) => void
}) {
  return (
    <>
      <PageHeader
        eyebrow="NURSE WORKSPACE"
        title="Triage & vital signs"
        description="Record initial observations before the consultation."
      />
      <PatientStrip />
      <div className="form-layout">
        <div className="form-main">
          <Card>
            <SectionTitle title="Vital signs" />
            <div className="vitals-grid">
              <Field label="Temperature (°C)" defaultValue="36.7" />
              <Field label="Blood pressure (mmHg)" defaultValue="138/86" />
              <Field label="Heart rate (bpm)" defaultValue="78" />
              <Field label="Respiratory rate (/min)" defaultValue="16" />
              <Field label="SpO₂ (%)" defaultValue="98" />
              <Field label="Weight (kg)" defaultValue="82.4" />
              <Field label="Height (cm)" defaultValue="176" />
              <Field label="BMI" defaultValue="26.6" />
            </div>
          </Card>
          <Card>
            <SectionTitle title="Triage notes" />
            <SelectField
              label="Priority"
              options={["Routine", "Urgent", "Emergency"]}
            />
            <TextArea
              label="Presenting complaint"
              defaultValue="Patient attending scheduled annual medical examination. Reports occasional headaches."
            />
          </Card>
        </div>
        <aside>
          <Card>
            <SectionTitle title="Clinical flags" />
            <div className="flag-list">
              <div className="flag warning">
                <Icon name="pulse" />
                <span>
                  <b>Elevated blood pressure</b>138/86 mmHg
                </span>
              </div>
              <div className="flag danger">
                <Icon name="shield" />
                <span>
                  <b>Known allergy</b>Penicillin
                </span>
              </div>
            </div>
          </Card>
          <Card>
            <SectionTitle title="Previous readings" />
            <dl>
              <dt>04 Mar 2025</dt>
              <dd>BP 142/88 · 83.1 kg</dd>
              <dt>12 Dec 2024</dt>
              <dd>BP 136/84 · 82.8 kg</dd>
            </dl>
          </Card>
        </aside>
      </div>
      <FormActions
        onCancel={() => go("queue")}
        saveLabel="Submit to doctor"
        onSave={() => {
          notify("Triage recorded for prototype patient")
          go("consultation")
        }}
      />
    </>
  )
}

function Consultation({
  go,
  notify,
}: {
  go: (screen: Screen) => void
  notify: (m: string) => void
}) {
  return (
    <>
      <PageHeader
        eyebrow="DOCTOR WORKSPACE"
        title="Consultation"
        description="Document assessment, diagnosis and care plan."
      />
      <PatientStrip />
      <div className="consult-layout">
        <div className="consult-main">
          <Card>
            <SectionTitle title="Clinical assessment" />
            <TextArea
              label="History & presenting complaint"
              defaultValue="42-year-old male attending annual medical. Reports intermittent mild headaches over the past month. No visual changes, nausea or chest pain."
            />
            <TextArea
              label="Examination findings"
              defaultValue="Patient alert and comfortable. Cardiovascular and respiratory examinations unremarkable. Blood pressure mildly elevated."
            />
            <Field
              label="Diagnosis"
              defaultValue="Essential hypertension — stable"
            />
            <TextArea
              label="Care plan"
              defaultValue="Continue current medication. Counselled on hydration, sleep and blood pressure monitoring. Review in 3 months."
            />
          </Card>
        </div>
        <aside>
          <Card>
            <SectionTitle title="Clinical actions" />
            <button
              className="clinical-action"
              onClick={() => go("laboratory")}
            >
              <span>
                <Icon name="lab" />
              </span>
              <div>
                <b>Request laboratory tests</b>
                <small>Create a new lab order</small>
              </div>
              <Icon name="chevron" size={16} />
            </button>
            <button className="clinical-action" onClick={() => go("pharmacy")}>
              <span>
                <Icon name="pill" />
              </span>
              <div>
                <b>Prescribe medication</b>
                <small>Send to clinic pharmacy</small>
              </div>
              <Icon name="chevron" size={16} />
            </button>
            <button
              className="clinical-action"
              onClick={() => go("appointments")}
            >
              <span>
                <Icon name="calendar" />
              </span>
              <div>
                <b>Book follow-up</b>
                <small>Schedule a review</small>
              </div>
              <Icon name="chevron" size={16} />
            </button>
          </Card>
          <Card>
            <SectionTitle title="Triage summary" />
            <dl>
              <dt>Blood pressure</dt>
              <dd>138/86 mmHg</dd>
              <dt>Temperature</dt>
              <dd>36.7 °C</dd>
              <dt>SpO₂</dt>
              <dd>98%</dd>
              <dt>BMI</dt>
              <dd>26.6</dd>
            </dl>
          </Card>
        </aside>
      </div>
      <FormActions
        onCancel={() => go("queue")}
        saveLabel="Complete consultation"
        onSave={() => {
          notify("Consultation completed in prototype")
          go("dashboard")
        }}
      />
    </>
  )
}

function Laboratory({
  go,
  notify,
}: {
  go: (screen: Screen) => void
  notify: (m: string) => void
}) {
  const [submitted, setSubmitted] = useState(false)
  return (
    <>
      <PageHeader
        eyebrow="CLINICAL SERVICES"
        title="Laboratory requests & results"
        description="Create test requests and review incoming results."
        actions={
          <Button icon="plus" onClick={() => setSubmitted(false)}>
            New lab request
          </Button>
        }
      />
      <div className="lab-grid">
        <Card>
          <div className="tabs">
            <button className="active">
              Requests <Badge tone="warning">7</Badge>
            </button>
            <button>Results</button>
            <button>Completed</button>
          </div>
          <div className="lab-list">
            {[
              [
                "LAB-250624-018",
                "Thabo Nkosi",
                "Full blood count, Lipid profile",
                "Urgent",
                "Awaiting sample",
              ],
              [
                "LAB-250624-017",
                "Zinhle Gumede",
                "HbA1c, Glucose",
                "Routine",
                "Processing",
              ],
              [
                "LAB-250624-014",
                "Petrus van Wyk",
                "CRP, Full blood count",
                "Routine",
                "Result ready",
              ],
            ].map((item) => (
              <div className="lab-row" key={item[0]}>
                <div>
                  <strong>{item[1]}</strong>
                  <span>
                    {item[0]} · {item[2]}
                  </span>
                </div>
                <Badge tone={item[3] === "Urgent" ? "danger" : "neutral"}>
                  {item[3]}
                </Badge>
                <Badge
                  tone={
                    item[4] === "Result ready"
                      ? "success"
                      : item[4] === "Processing"
                        ? "info"
                        : "warning"
                  }
                >
                  {item[4]}
                </Badge>
                <button className="icon-button">
                  <Icon name="chevron" size={16} />
                </button>
              </div>
            ))}
          </div>
        </Card>
        <Card className="request-panel">
          <SectionTitle
            title={submitted ? "Request submitted" : "New laboratory request"}
          />
          {submitted ? (
            <div className="success-state">
              <span>
                <Icon name="check" size={28} />
              </span>
              <div role="heading" aria-level={2}>
                Request created
              </div>
              <p>LAB-250624-019 has been added to the prototype worklist.</p>
              <Button variant="secondary" onClick={() => setSubmitted(false)}>
                Create another request
              </Button>
            </div>
          ) : (
            <>
              <Field label="Patient" defaultValue="Thabo Nkosi · PT-002914" />
              <div className="field">
                <span>Tests requested</span>
                <div className="check-list">
                  {[
                    "Full blood count",
                    "Lipid profile",
                    "Liver function",
                    "HbA1c",
                  ].map((test, i) => (
                    <label key={test}>
                      <input type="checkbox" defaultChecked={i < 2} />
                      {test}
                    </label>
                  ))}
                </div>
              </div>
              <SelectField label="Priority" options={["Routine", "Urgent"]} />
              <TextArea
                label="Clinical notes"
                defaultValue="Annual medical screening and hypertension review."
              />
              <div className="panel-actions">
                <Button variant="secondary" onClick={() => go("consultation")}>
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    setSubmitted(true)
                    notify("Lab request added to prototype worklist")
                  }}
                >
                  Submit request
                </Button>
              </div>
            </>
          )}
        </Card>
      </div>
    </>
  )
}

function Pharmacy({ notify }: { notify: (m: string) => void }) {
  const [dispensed, setDispensed] = useState(false)
  return (
    <>
      <PageHeader
        eyebrow="CLINICAL SERVICES"
        title="Pharmacy & medication inventory"
        description="Review prescriptions, dispense medication and monitor stock."
        actions={
          <Button variant="secondary" icon="download">
            Export inventory
          </Button>
        }
      />
      <div className="stats-grid three">
        <StatCard
          icon="pill"
          label="Prescriptions today"
          value="31"
          note="8 awaiting dispense"
        />
        <StatCard
          icon="check"
          label="Dispensed"
          value="23"
          note="74% completion rate"
          tone="blue"
        />
        <StatCard
          icon="filter"
          label="Low stock items"
          value="5"
          note="2 require urgent reorder"
          tone="amber"
        />
      </div>
      <div className="pharmacy-layout">
        <Card className="table-card">
          <div className="table-toolbar">
            <SectionTitle title="Medication inventory" />
            <div className="mini-search">
              <Icon name="search" size={17} />
              <input placeholder="Search inventory" />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Medication</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Reorder level</th>
                <th>Expiry</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Amlodipine 5 mg",
                  "Cardiovascular",
                  "284",
                  "100",
                  "Mar 2027",
                  "In stock",
                ],
                [
                  "Paracetamol 500 mg",
                  "Analgesic",
                  "1,240",
                  "300",
                  "Dec 2026",
                  "In stock",
                ],
                [
                  "Amoxicillin 500 mg",
                  "Antibiotic",
                  "42",
                  "75",
                  "Sep 2026",
                  "Low stock",
                ],
                [
                  "Salbutamol inhaler",
                  "Respiratory",
                  "18",
                  "25",
                  "Jan 2027",
                  "Low stock",
                ],
                [
                  "Metformin 500 mg",
                  "Diabetes",
                  "368",
                  "120",
                  "Nov 2026",
                  "In stock",
                ],
              ].map((row) => (
                <tr key={row[0]}>
                  <td>
                    <strong>{row[0]}</strong>
                  </td>
                  <td>{row[1]}</td>
                  <td>
                    <strong>{row[2]}</strong>
                  </td>
                  <td>{row[3]}</td>
                  <td>{row[4]}</td>
                  <td>
                    <Badge tone={row[5] === "In stock" ? "success" : "warning"}>
                      {row[5]}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card className="dispense-card">
          <SectionTitle
            title="Awaiting dispense"
            action={<Badge tone="warning">8</Badge>}
          />
          <div className="dispense-patient">
            <div className="patient-avatar">TN</div>
            <div>
              <strong>Thabo Nkosi</strong>
              <span>RX-250624-041</span>
            </div>
            <Badge tone={dispensed ? "success" : "warning"}>
              {dispensed ? "Dispensed" : "Awaiting"}
            </Badge>
          </div>
          <div className="medication-order">
            <span>PRESCRIBED MEDICATION</span>
            <strong>Amlodipine 5 mg</strong>
            <p>Take one tablet orally once daily for 30 days.</p>
            <div>
              <span>Quantity</span>
              <b>30 tablets</b>
            </div>
          </div>
          <Button
            className="full-width"
            icon="check"
            variant={dispensed ? "secondary" : "primary"}
            onClick={() => {
              setDispensed(true)
              notify("Medication marked as dispensed; demo stock updated")
            }}
          >
            {dispensed ? "Dispensing recorded" : "Mark as dispensed"}
          </Button>
        </Card>
      </div>
    </>
  )
}

function Reports() {
  const data = [
    ["Mon", 62],
    ["Tue", 78],
    ["Wed", 55],
    ["Thu", 88],
    ["Fri", 70],
    ["Sat", 34],
  ]
  return (
    <>
      <PageHeader
        eyebrow="ADMINISTRATION"
        title="Management reports"
        description="Monitor clinic performance, patient activity and service delivery."
        actions={
          <>
            <SelectField
              label=""
              options={["This month", "Last month", "This quarter"]}
            />
            <Button variant="secondary" icon="download">
              Export report
            </Button>
          </>
        }
      />
      <div className="stats-grid">
        <StatCard
          icon="users"
          label="Total visits"
          value="1,248"
          note="+8.4% from last month"
        />
        <StatCard
          icon="clock"
          label="Average wait"
          value="21 min"
          note="-3 min from last month"
          tone="blue"
        />
        <StatCard
          icon="check"
          label="Completed visits"
          value="94.2%"
          note="+1.8% from last month"
          tone="amber"
        />
        <StatCard
          icon="pill"
          label="Prescriptions"
          value="684"
          note="+5.2% from last month"
          tone="violet"
        />
      </div>
      <div className="report-grid">
        <Card className="chart-card">
          <SectionTitle
            title="Patient visits by day"
            action={<Badge tone="neutral">24–29 June</Badge>}
          />
          <div className="bar-chart">
            <div className="y-axis">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>
            {data.map(([day, amount]) => (
              <div className="bar-column" key={day}>
                <div className="bar-wrap">
                  <i style={{ height: `${amount}%` }} />
                  <b>{amount}</b>
                </div>
                <span>{day}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <SectionTitle title="Visits by service" />
          <div className="service-list">
            {[
              ["General consultation", "42%", "420"],
              ["Annual medical", "25%", "250"],
              ["Injury care", "18%", "180"],
              ["Follow-up", "15%", "150"],
            ].map(([label, percent, count]) => (
              <div key={label}>
                <div>
                  <span>{label}</span>
                  <b>{count}</b>
                </div>
                <i>
                  <em style={{ width: percent }} />
                </i>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card>
        <SectionTitle title="Operational summary" />
        <div className="operational-grid">
          {[
            ["Busiest hour", "09:00 – 10:00"],
            ["Top provider", "Dr. S. Khumalo"],
            ["Lab turnaround", "4.2 hours"],
            ["Stock availability", "96.8%"],
            ["Patient satisfaction", "4.7 / 5"],
          ].map((item) => (
            <div key={item[0]}>
              <span>{item[0]}</span>
              <strong>{item[1]}</strong>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}

function Users({ notify }: { notify: (m: string) => void }) {
  return (
    <>
      <PageHeader
        eyebrow="ADMINISTRATION"
        title="Users & role management"
        description="Manage staff access and clinical workspace permissions."
        actions={
          <Button
            icon="userPlus"
            onClick={() => notify("Invite form opened for a prototype user")}
          >
            Invite user
          </Button>
        }
      />
      <div className="stats-grid three">
        <StatCard
          icon="users"
          label="Active users"
          value="38"
          note="Across 6 roles"
        />
        <StatCard
          icon="shield"
          label="Clinical users"
          value="24"
          note="Doctors, nurses and lab staff"
          tone="blue"
        />
        <StatCard
          icon="clock"
          label="Pending invites"
          value="3"
          note="Invitations expire in 5 days"
          tone="amber"
        />
      </div>
      <Card className="table-card">
        <div className="table-toolbar">
          <div className="mini-search">
            <Icon name="search" size={17} />
            <input placeholder="Search users..." />
          </div>
          <div>
            <button className="filter-chip active">All roles</button>
            <button className="filter-chip">Active</button>
            <button className="filter-chip">Pending</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Department</th>
              <th>Last active</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {[
              ["Nandi Mokoena", "Receptionist", "Front desk", "Now", "Active"],
              [
                "Dr. Sipho Khumalo",
                "Doctor",
                "Clinical",
                "5 min ago",
                "Active",
              ],
              ["Lindiwe Zulu", "Nurse", "Triage", "18 min ago", "Active"],
              [
                "Michael Botha",
                "Lab Technician",
                "Laboratory",
                "1 hour ago",
                "Active",
              ],
              [
                "Kagiso Radebe",
                "Pharmacist",
                "Pharmacy",
                "Pending invite",
                "Pending",
              ],
            ].map((user) => (
              <tr key={user[0]}>
                <td>
                  <div className="person-cell">
                    <div className="patient-avatar">
                      {user[0]
                        .split(" ")
                        .filter((n) => !n.includes("."))
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <strong>{user[0]}</strong>
                      <span>
                        {user[0]
                          .toLowerCase()
                          .replaceAll(" ", ".")
                          .replace("dr..", "")}
                        @example.test
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <Badge tone="info">{user[1]}</Badge>
                </td>
                <td>{user[2]}</td>
                <td>{user[3]}</td>
                <td>
                  <Badge tone={user[4] === "Active" ? "success" : "warning"}>
                    {user[4]}
                  </Badge>
                </td>
                <td>
                  <button className="icon-button">
                    <Icon name="more" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Card className="role-card">
        <SectionTitle
          title="Role permissions"
          action={
            <button className="text-button">
              Manage roles <Icon name="chevron" size={14} />
            </button>
          }
        />
        <div className="role-grid">
          {[
            [
              "Doctor",
              "Full clinical records, consultations and prescriptions",
              "8 users",
            ],
            ["Nurse", "Triage, vitals and patient queue access", "12 users"],
            ["Receptionist", "Registration, appointments and queue", "6 users"],
            ["Administrator", "Reports, users and system settings", "3 users"],
          ].map((role) => (
            <div key={role[0]}>
              <span>
                <Icon name="shield" />
              </span>
              <div>
                <strong>{role[0]}</strong>
                <p>{role[1]}</p>
                <small>{role[2]}</small>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}

function Modal({
  title,
  children,
  confirmLabel = "Confirm",
  danger = false,
  onClose,
  onConfirm,
}: {
  title: string
  children: ReactNode
  confirmLabel?: string
  danger?: boolean
  onClose: () => void
  onConfirm: () => void
}) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div role="heading" aria-level={2}>
            {title}
          </div>
          <button className="icon-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-actions">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant={danger ? "danger" : "primary"} onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}

function ScreenTabs({
  tabs,
  active,
  onChange,
}: {
  tabs: string[]
  active: string
  onChange: (tab: string) => void
}) {
  return (
    <div className="screen-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={active === tab ? "active" : ""}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

function EmptyState({
  title,
  description,
  action,
}: {
  title: string
  description: string
  action?: ReactNode
}) {
  return (
    <div className="empty-state">
      <span>
        <Icon name="search" size={24} />
      </span>
      <div role="heading" aria-level={2}>
        {title}
      </div>
      <p>{description}</p>
      {action}
    </div>
  )
}

function Emergency({
  go,
  notify,
}: {
  go: (screen: Screen) => void
  notify: (message: string) => void
}) {
  const [step, setStep] = useState<"entry" | "care">("entry")
  const [confirm, setConfirm] = useState(false)
  return (
    <>
      <div className="emergency-banner">
        <div>
          <Icon name="pulse" />
          <span>
            <strong>Emergency workflow</strong>
            Record immediate care first. Routine details can be completed later.
          </span>
        </div>
        <Badge tone="danger">PRIORITY ACCESS</Badge>
      </div>
      <PageHeader
        eyebrow="PATIENT CARE / URGENT"
        title="Emergency & injury-on-duty"
        description="Rapidly identify the patient and document urgent care without delaying treatment."
        actions={
          <Button variant="secondary" onClick={() => go("queue")}>
            View emergency queue
          </Button>
        }
      />
      <div className="workflow-steps">
        <div className="done">
          <span>1</span>
          <b>Rapid identification</b>
        </div>
        <div className={step === "care" ? "done" : ""}>
          <span>2</span>
          <b>Priority assessment</b>
        </div>
        <div>
          <span>3</span>
          <b>Care & disposition</b>
        </div>
      </div>
      {step === "entry" ? (
        <div className="form-layout">
          <div className="form-main">
            <Card>
              <SectionTitle title="Rapid patient identification" />
              <div className="callout info">
                <Icon name="search" />
                <span>
                  Search an existing patient first to reduce duplicate records.
                  If identity is unknown, create a temporary emergency record.
                </span>
              </div>
              <div className="form-grid">
                <Field
                  label="Employee, patient or approved ID"
                  placeholder="Search identifier"
                  required
                />
                <SelectField
                  label="Identity status"
                  options={["Identity confirmed", "Identity pending"]}
                />
                <Field label="First name" defaultValue="Sibusiso" required />
                <Field label="Last name" defaultValue="Mahlangu" required />
              </div>
            </Card>
            <Card>
              <SectionTitle title="Arrival & presenting problem" />
              <div className="form-grid">
                <Field
                  label="Arrival time"
                  type="datetime-local"
                  defaultValue="2025-06-24T08:42"
                />
                <SelectField
                  label="Arrival method"
                  options={["Walk-in", "Ambulance", "Mine response vehicle"]}
                />
                <SelectField
                  label="Priority"
                  options={["Immediate review", "Urgent", "Standard"]}
                />
                <SelectField
                  label="Assigned clinician"
                  options={["Dr. S. Khumalo", "Dr. L. Adams"]}
                />
              </div>
              <TextArea
                label="Presenting problem"
                defaultValue="Fictional demo: left forearm injury reported at North Shaft."
              />
            </Card>
          </div>
          <aside>
            <Card>
              <SectionTitle title="Injury-on-duty" />
              <label className="toggle-row">
                <span>
                  <b>Workplace incident</b>
                  Record an approved incident reference
                </span>
                <input type="checkbox" defaultChecked />
              </label>
              <Field label="Incident reference" defaultValue="IOD-DEMO-0241" />
              <SelectField
                label="Work location"
                options={["North Shaft", "West Plant", "Central Works"]}
              />
            </Card>
            <Card className="restricted-card">
              <Icon name="shield" />
              <div>
                <strong>Clinical safety</strong>
                <p>
                  Priority is assigned by authorized staff. This prototype does
                  not calculate urgency or recommend treatment.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      ) : (
        <div className="form-layout">
          <div className="form-main">
            <PatientStrip />
            <Card>
              <SectionTitle title="Immediate care documentation" />
              <TextArea
                label="Initial observations"
                placeholder="Record observations made by the attending clinician..."
              />
              <TextArea
                label="Care provided"
                placeholder="Document care provided and response..."
              />
              <div className="form-grid">
                <SelectField
                  label="Disposition"
                  options={[
                    "Continue clinic observation",
                    "Return to work",
                    "External referral",
                    "Hospital transfer",
                  ]}
                />
                <SelectField
                  label="Encounter status"
                  options={["In progress", "Ready for handover", "Complete"]}
                />
              </div>
              <TextArea
                label="Handover notes"
                placeholder="Record receiving team and relevant handover information..."
              />
            </Card>
          </div>
          <aside>
            <Card>
              <SectionTitle title="Linked actions" />
              <button
                className="clinical-action"
                onClick={() => go("laboratory")}
              >
                <span>
                  <Icon name="lab" />
                </span>
                <div>
                  <b>Request laboratory tests</b>
                  <small>Continue to laboratory request</small>
                </div>
                <Icon name="chevron" size={16} />
              </button>
              <button
                className="clinical-action"
                onClick={() => go("referrals")}
              >
                <span>
                  <Icon name="arrow" />
                </span>
                <div>
                  <b>Create urgent referral</b>
                  <small>Prepare handover information</small>
                </div>
                <Icon name="chevron" size={16} />
              </button>
            </Card>
          </aside>
        </div>
      )}
      <div className="form-actions">
        <Button
          variant="ghost"
          icon="arrow"
          onClick={() => (step === "care" ? setStep("entry") : go("dashboard"))}
        >
          Back
        </Button>
        <div>
          <Button
            variant="secondary"
            onClick={() => notify("Emergency draft saved locally in prototype")}
          >
            Save draft
          </Button>
          <Button
            onClick={() =>
              step === "entry" ? setStep("care") : setConfirm(true)
            }
          >
            {step === "entry" ? "Continue to assessment" : "Complete encounter"}
          </Button>
        </div>
      </div>
      {confirm && (
        <Modal
          title="Complete emergency encounter?"
          confirmLabel="Complete encounter"
          onClose={() => setConfirm(false)}
          onConfirm={() => {
            setConfirm(false)
            notify("Emergency encounter completed in prototype")
            go("dashboard")
          }}
        >
          <p>
            Confirm that immediate care, disposition and handover information
            have been recorded.
          </p>
        </Modal>
      )}
    </>
  )
}

function Referrals({ notify }: { notify: (message: string) => void }) {
  const [tab, setTab] = useState("Active referrals")
  const [openForm, setOpenForm] = useState(false)
  return (
    <>
      <PageHeader
        eyebrow="CLINICAL SERVICES"
        title="Referral management"
        description="Create, track and follow up approved external and internal referrals."
        actions={
          <Button icon="plus" onClick={() => setOpenForm(true)}>
            New referral
          </Button>
        }
      />
      <ScreenTabs
        tabs={["Active referrals", "Awaiting outcome", "Completed"]}
        active={tab}
        onChange={setTab}
      />
      <Card className="table-card">
        <div className="table-toolbar">
          <div className="mini-search">
            <Icon name="search" size={17} />
            <input placeholder="Search referrals" />
          </div>
          <div>
            <button className="filter-chip active">All urgency</button>
            <button className="filter-chip">Facility</button>
            <button className="filter-chip">This month</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Referral</th>
              <th>Patient</th>
              <th>Destination</th>
              <th>Clinician</th>
              <th>Date</th>
              <th>Urgency</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {[
              [
                "REF-250624-008",
                "Sibusiso Mahlangu",
                "Regional Hospital · Orthopaedics",
                "Dr. S. Khumalo",
                "24 Jun 2025",
                "Urgent",
                "Awaiting transfer",
              ],
              [
                "REF-250623-014",
                "Naledi Dube",
                "Vision Care Centre",
                "Dr. L. Adams",
                "23 Jun 2025",
                "Routine",
                "Appointment booked",
              ],
              [
                "REF-250618-005",
                "Mpho Seabi",
                "Occupational Specialist",
                "Dr. S. Khumalo",
                "18 Jun 2025",
                "Routine",
                "Awaiting outcome",
              ],
            ].map((row) => (
              <tr key={row[0]}>
                <td>
                  <strong>{row[0]}</strong>
                </td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>{row[4]}</td>
                <td>
                  <Badge tone={row[5] === "Urgent" ? "danger" : "neutral"}>
                    {row[5]}
                  </Badge>
                </td>
                <td>
                  <Badge tone="info">{row[6]}</Badge>
                </td>
                <td>
                  <button className="icon-button">
                    <Icon name="chevron" size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <span>Showing 1–3 of 18 referrals</span>
          <div>
            <Button variant="secondary">Previous</Button>
            <Button variant="secondary">Next</Button>
          </div>
        </div>
      </Card>
      {openForm && (
        <Modal
          title="Create referral"
          confirmLabel="Create referral"
          onClose={() => setOpenForm(false)}
          onConfirm={() => {
            setOpenForm(false)
            notify("Referral added to the prototype worklist")
          }}
        >
          <div className="modal-form">
            <Field label="Patient" defaultValue="Thabo Nkosi · PT-002914" />
            <Field label="Destination facility" placeholder="Facility name" />
            <div className="form-grid">
              <SelectField
                label="Urgency"
                options={["Routine", "Urgent", "Emergency"]}
              />
              <Field label="Follow-up date" type="date" />
            </div>
            <TextArea
              label="Reason and approved clinical summary"
              placeholder="Enter relevant referral information..."
            />
          </div>
        </Modal>
      )}
    </>
  )
}

function Occupational({
  go,
  notify,
}: {
  go: (screen: Screen) => void
  notify: (message: string) => void
}) {
  const [tab, setTab] = useState("Assessments")
  return (
    <>
      <PageHeader
        eyebrow="OCCUPATIONAL HEALTH"
        title="Occupational medicals"
        description="Manage configurable medical assessments by job category and exposure profile."
        actions={
          <Button icon="plus" onClick={() => notify("Assessment form opened")}>
            New assessment
          </Button>
        }
      />
      <ScreenTabs
        tabs={["Assessments", "Schedule", "Assessment categories", "History"]}
        active={tab}
        onChange={setTab}
      />
      <div className="stats-grid">
        <StatCard
          icon="calendar"
          label="Due this month"
          value="64"
          note="Across all departments"
        />
        <StatCard
          icon="clock"
          label="Overdue"
          value="12"
          note="Requires scheduling review"
          tone="amber"
        />
        <StatCard
          icon="pulse"
          label="In progress"
          value="8"
          note="Open assessments"
          tone="blue"
        />
        <StatCard
          icon="check"
          label="Completed"
          value="186"
          note="This quarter"
          tone="violet"
        />
      </div>
      <Card className="table-card">
        <div className="table-toolbar">
          <SectionTitle title={`${tab} worklist`} />
          <div>
            <button className="filter-chip active">All statuses</button>
            <button className="filter-chip">Job category</button>
            <button className="filter-chip">Department</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Job / Department</th>
              <th>Assessment type</th>
              <th>Assessment date</th>
              <th>Next due</th>
              <th>Clinician</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Thabo Nkosi",
                "Rock Drill Operator · Mining",
                "Periodic medical",
                "24 Jun 2025",
                "Pending decision",
                "Dr. S. Khumalo",
                "In Progress",
              ],
              [
                "Naledi Dube",
                "Plant Operator · Processing",
                "Periodic medical",
                "23 Jun 2025",
                "23 Jun 2026",
                "Dr. L. Adams",
                "Completed",
              ],
              [
                "Kabelo Mokoena",
                "Electrician · Engineering",
                "Return-to-work",
                "—",
                "20 Jun 2025",
                "Unassigned",
                "Overdue",
              ],
            ].map((row) => (
              <tr key={row[0]} onClick={() => go("fitness")}>
                <td>
                  <div className="person-cell">
                    <div className="patient-avatar">
                      {row[0]
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>
                    <strong>{row[0]}</strong>
                  </div>
                </td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>{row[4]}</td>
                <td>{row[5]}</td>
                <td>
                  <Badge
                    tone={
                      row[6] === "Completed"
                        ? "success"
                        : row[6] === "Overdue"
                          ? "danger"
                          : "warning"
                    }
                  >
                    {row[6]}
                  </Badge>
                </td>
                <td>
                  <Icon name="chevron" size={16} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div className="callout info page-callout">
        <Icon name="shield" />
        <span>
          Assessment content and due-date rules are configurable and pending
          confirmation by authorized mine and clinical stakeholders.
        </span>
      </div>
    </>
  )
}

function Fitness({
  go,
  notify,
}: {
  go: (screen: Screen) => void
  notify: (message: string) => void
}) {
  const [decision, setDecision] = useState("Pending Review")
  return (
    <>
      <button className="back-link" onClick={() => go("occupational")}>
        <Icon name="arrow" size={17} /> Back to occupational medicals
      </button>
      <PageHeader
        eyebrow="OCCUPATIONAL HEALTH / AUTHORIZED CLINICIAN"
        title="Fitness-for-work decision"
        description="Record an authorized decision linked to the occupational assessment."
      />
      <PatientStrip />
      <div className="form-layout">
        <div className="form-main">
          <Card>
            <SectionTitle title="Linked assessment" />
            <div className="record-summary">
              <div>
                <span>Assessment</span>
                <strong>Periodic medical · OCC-250624-031</strong>
              </div>
              <div>
                <span>Job category</span>
                <strong>Rock Drill Operator</strong>
              </div>
              <div>
                <span>Assessment date</span>
                <strong>24 Jun 2025</strong>
              </div>
              <Badge tone="warning">Awaiting decision</Badge>
            </div>
          </Card>
          <Card>
            <SectionTitle title="Authorized decision" />
            <div className="choice-grid">
              {[
                "Fit",
                "Fit with Restrictions",
                "Temporarily Unfit",
                "Pending Review",
              ].map((option) => (
                <button
                  className={decision === option ? "selected" : ""}
                  onClick={() => setDecision(option)}
                  key={option}
                >
                  <span>
                    {decision === option && <Icon name="check" size={14} />}
                  </span>
                  {option}
                </button>
              ))}
            </div>
            <div className="form-grid">
              <Field
                label="Effective date"
                type="date"
                defaultValue="2025-06-24"
              />
              <Field label="Review / expiry date" type="date" />
            </div>
            <TextArea
              label="Restrictions and follow-up requirements"
              placeholder="Record only authorized work restrictions and follow-up requirements..."
            />
          </Card>
        </div>
        <aside>
          <Card className="restricted-card">
            <Icon name="shield" />
            <div>
              <strong>Restricted clinical record</strong>
              <p>
                Management summaries show only approved fitness status,
                restrictions and dates. Clinical notes remain protected.
              </p>
            </div>
          </Card>
          <Card>
            <SectionTitle title="Clinician sign-off" />
            <dl>
              <dt>Authorized clinician</dt>
              <dd>Dr. Sipho Khumalo</dd>
              <dt>Professional role</dt>
              <dd>Occupational Medical Practitioner</dd>
              <dt>Decision status</dt>
              <dd>{decision}</dd>
            </dl>
          </Card>
        </aside>
      </div>
      <FormActions
        onCancel={() => go("occupational")}
        saveLabel="Sign off decision"
        onSave={() => {
          notify("Fitness decision signed in prototype")
          go("occupational")
        }}
      />
    </>
  )
}

function HealthStatistics() {
  const [category, setCategory] = useState("Attendance")
  return (
    <>
      <PageHeader
        eyebrow="INSIGHTS / AGGREGATED DATA"
        title="Health statistics"
        description="Review fictional, aggregated trends without exposing identifiable patient information."
        actions={
          <>
            <SelectField
              label=""
              options={["Last 30 days", "This quarter", "This year"]}
            />
            <Button variant="secondary" icon="download">
              Export aggregate
            </Button>
          </>
        }
      />
      <ScreenTabs
        tabs={[
          "Attendance",
          "Complaint categories",
          "Occupational health",
          "Injury trends",
          "Service utilization",
        ]}
        active={category}
        onChange={setCategory}
      />
      <div className="privacy-strip">
        <Icon name="shield" size={18} />
        Aggregated demo statistics · Small groups are suppressed for privacy
      </div>
      <div className="report-grid">
        <Card className="chart-card">
          <SectionTitle
            title={`${category} trend`}
            action={<Badge tone="neutral">Fictional data</Badge>}
          />
          <div className="line-chart">
            <div className="chart-grid" />
            <svg viewBox="0 0 700 220" preserveAspectRatio="none">
              <polyline
                points="0,170 100,145 200,155 300,92 400,118 500,65 600,82 700,38"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <polyline
                points="0,190 100,180 200,168 300,172 400,145 500,155 600,126 700,132"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity=".35"
              />
            </svg>
            <div className="chart-labels">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>
          </div>
        </Card>
        <Card>
          <SectionTitle title="Metric definitions" />
          <div className="definition-list">
            <div>
              <strong>Attendance</strong>
              <p>Completed and active clinic encounters by service date.</p>
            </div>
            <div>
              <strong>Service utilization</strong>
              <p>Share of visits using each configured clinic service.</p>
            </div>
            <div>
              <strong>Injury trend</strong>
              <p>
                Aggregated injury-on-duty records by approved classification.
              </p>
            </div>
          </div>
        </Card>
      </div>
      <Card className="table-card">
        <div className="table-toolbar">
          <SectionTitle title={`${category} summary`} />
          <Badge tone="info">No patient identifiers</Badge>
        </div>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Current period</th>
              <th>Previous period</th>
              <th>Change</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "General consultation",
                "420",
                "398",
                "+5.5%",
                "Completed visits",
              ],
              [
                "Occupational medical",
                "250",
                "242",
                "+3.3%",
                "Assessments opened",
              ],
              ["Injury care", "48", "54", "−11.1%", "Approved category"],
              ["Follow-up", "150", "143", "+4.9%", "Scheduled review"],
            ].map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  )
}

function AuditLog() {
  const [selected, setSelected] = useState<string | null>(null)
  return (
    <>
      <PageHeader
        eyebrow="ADMINISTRATION / RESTRICTED"
        title="Audit log"
        description="Review immutable demo events for record access and system changes."
        actions={
          <Button variant="secondary" icon="download">
            Export approved view
          </Button>
        }
      />
      <Card className="search-card">
        <div className="search-box">
          <Icon name="search" />
          <input placeholder="Search user, action or resource..." />
          <Button>Search events</Button>
        </div>
        <div className="filter-row">
          <button className="filter-chip active">All modules</button>
          <button className="filter-chip">Date range</button>
          <button className="filter-chip">Outcome</button>
          <button className="filter-chip">User</button>
        </div>
      </Card>
      <Card className="table-card">
        <table>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>User</th>
              <th>Action</th>
              <th>Resource</th>
              <th>Module</th>
              <th>Outcome</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {[
              [
                "24 Jun 2025 · 08:41:22",
                "Dr. S. Khumalo",
                "Viewed patient record",
                "PT-002914",
                "Patient care",
                "Success",
              ],
              [
                "24 Jun 2025 · 08:36:09",
                "Lindiwe Zulu",
                "Completed triage",
                "ENC-250624-018",
                "Triage",
                "Success",
              ],
              [
                "24 Jun 2025 · 08:31:14",
                "Nandi Mokoena",
                "Updated appointment",
                "APT-250624-026",
                "Appointments",
                "Success",
              ],
              [
                "24 Jun 2025 · 08:22:47",
                "System",
                "Employee lookup",
                "External HR service",
                "Integration",
                "Unavailable",
              ],
            ].map((row) => (
              <tr key={row[0]} onClick={() => setSelected(row[0])}>
                {row.slice(0, 5).map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
                <td>
                  <Badge tone={row[5] === "Success" ? "success" : "warning"}>
                    {row[5]}
                  </Badge>
                </td>
                <td>
                  <button className="icon-button">
                    <Icon name="chevron" size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <span>Showing 1–4 of 2,481 demo events</span>
          <div>
            <Button variant="secondary">Previous</Button>
            <Button variant="secondary">Next</Button>
          </div>
        </div>
      </Card>
      {selected && (
        <Modal
          title="Audit event details"
          confirmLabel="Close"
          onClose={() => setSelected(null)}
          onConfirm={() => setSelected(null)}
        >
          <div className="detail-list">
            <div>
              <span>Event ID</span>
              <strong>AUD-DEMO-784291</strong>
            </div>
            <div>
              <span>Timestamp</span>
              <strong>{selected}</strong>
            </div>
            <div>
              <span>Source</span>
              <strong>Clinic workspace · Demonstration</strong>
            </div>
            <div>
              <span>Integrity</span>
              <strong>Audit entries cannot be edited</strong>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

function Settings({
  go,
  notify,
}: {
  go: (screen: Screen) => void
  notify: (message: string) => void
}) {
  const [tab, setTab] = useState("Clinic details")
  const [saved, setSaved] = useState(false)
  const tabs = [
    "Clinic details",
    "Services",
    "Queue",
    "Appointments",
    "Occupational health",
    "Security",
  ]
  return (
    <>
      <PageHeader
        eyebrow="ADMINISTRATION / SYSTEM ADMINISTRATOR"
        title="System settings"
        description="Configure clinic-wide reference data and approved operational settings."
      />
      <div className="settings-layout">
        <Card className="settings-nav">
          {tabs.map((item) => (
            <button
              className={tab === item ? "active" : ""}
              onClick={() => setTab(item)}
              key={item}
            >
              {item}
              <Icon name="chevron" size={15} />
            </button>
          ))}
          <div className="settings-nav-label">SYSTEM OPERATIONS</div>
          <button onClick={() => go("integration")}>
            Employee integration <Icon name="chevron" size={15} />
          </button>
          <button onClick={() => go("systemStatus")}>
            Backup & system status <Icon name="chevron" size={15} />
          </button>
          <button onClick={() => go("migration")}>
            Historical migration <Icon name="chevron" size={15} />
          </button>
        </Card>
        <Card className="settings-panel">
          <SectionTitle title={tab} />
          {saved && (
            <div className="callout success">
              <Icon name="check" />
              <span>Prototype settings saved for this session.</span>
            </div>
          )}
          {tab === "Clinic details" ? (
            <>
              <div className="form-grid">
                <Field
                  label="Clinic name"
                  defaultValue="Mine Clinic"
                  required
                />
                <Field label="Facility reference" defaultValue="MC-DEMO-001" />
                <Field
                  label="Main contact number"
                  defaultValue="+27 10 555 0100"
                />
                <Field label="Operating hours" defaultValue="06:00 – 18:00" />
              </div>
              <TextArea
                label="Clinic address"
                defaultValue="Fictional Mine Operations, Gauteng"
              />
            </>
          ) : (
            <>
              <div className="callout info">
                <Icon name="shield" />
                <span>
                  These values are configurable and must be approved before a
                  production implementation.
                </span>
              </div>
              <div className="config-list">
                {[
                  `${tab} category A`,
                  `${tab} category B`,
                  `${tab} category C`,
                ].map((item) => (
                  <div key={item}>
                    <span>
                      <b>{item}</b>
                      Enabled in prototype
                    </span>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <i />
                    </label>
                  </div>
                ))}
              </div>
              <Button variant="secondary" icon="plus">
                Add configuration item
              </Button>
            </>
          )}
          <div className="panel-actions settings-actions">
            <Button variant="secondary">Discard changes</Button>
            <Button
              onClick={() => {
                setSaved(true)
                notify("Settings saved for this prototype session")
              }}
            >
              Save settings
            </Button>
          </div>
        </Card>
      </div>
    </>
  )
}

function Integration({
  go,
  notify,
}: {
  go: (screen: Screen) => void
  notify: (message: string) => void
}) {
  const [testing, setTesting] = useState(false)
  return (
    <>
      <button className="back-link" onClick={() => go("settings")}>
        <Icon name="arrow" size={17} /> Back to system settings
      </button>
      <PageHeader
        eyebrow="ADMINISTRATION / EXTERNAL SYSTEM"
        title="Employee database integration"
        description="Review the mock connection used for approved employee lookup."
        actions={
          <Button
            variant="secondary"
            onClick={() => {
              setTesting(true)
              window.setTimeout(() => {
                setTesting(false)
                notify("Test complete: no backend is connected")
              }, 900)
            }}
          >
            {testing ? "Testing connection..." : "Test connection"}
          </Button>
        }
      />
      <div className="integration-status">
        <div className="status-symbol warning">
          <Icon name="filter" />
        </div>
        <div>
          <span>CURRENT STATUS</span>
          <strong>Not configured</strong>
          <p>
            Employee lookup uses manual entry because no external HR system is
            connected to this prototype.
          </p>
        </div>
        <Badge tone="warning">MOCK CONTROLS</Badge>
      </div>
      <div className="detail-grid">
        <div className="detail-main">
          <Card>
            <SectionTitle title="Connection configuration" />
            <div className="form-grid">
              <SelectField
                label="Source system"
                options={["Not selected", "Client-approved HR source"]}
              />
              <SelectField
                label="Approved connection method"
                options={["Not configured", "Secure API", "Scheduled file"]}
              />
              <Field
                label="Connection endpoint"
                placeholder="Configured by authorized administrator"
              />
              <Field
                label="Synchronization schedule"
                defaultValue="Not configured"
              />
            </div>
            <div className="callout info">
              <Icon name="shield" />
              <span>
                Credentials are never shown in this design. Source employee data
                cannot be edited from the clinic system.
              </span>
            </div>
          </Card>
          <Card>
            <SectionTitle title="Approved field mapping" />
            <table>
              <thead>
                <tr>
                  <th>Source field</th>
                  <th>Clinic field</th>
                  <th>Use</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Employee identifier", "Employee number", "Patient match"],
                  ["Full name", "Patient name", "Identity verification"],
                  ["Department", "Department", "Record classification"],
                  ["Work location", "Mine / site", "Operational context"],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>
                      <Badge tone="neutral">Pending approval</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
        <aside>
          <Card>
            <SectionTitle title="Synchronization" />
            <dl>
              <dt>Last successful sync</dt>
              <dd>Never</dd>
              <dt>Last attempt</dt>
              <dd>Not recorded</dd>
              <dt>Records available</dt>
              <dd>0 external records</dd>
            </dl>
          </Card>
          <Card>
            <SectionTitle title="Recent errors" />
            <EmptyState
              title="No error log"
              description="Errors will appear here after an integration is configured."
            />
          </Card>
        </aside>
      </div>
    </>
  )
}

function SystemStatus({
  go,
  notify,
}: {
  go: (screen: Screen) => void
  notify: (message: string) => void
}) {
  const [confirm, setConfirm] = useState(false)
  return (
    <>
      <button className="back-link" onClick={() => go("settings")}>
        <Icon name="arrow" size={17} /> Back to system settings
      </button>
      <PageHeader
        eyebrow="ADMINISTRATION / DEMONSTRATION STATUS"
        title="Backup & system status"
        description="Demonstration states only — no backup, restore or monitoring service is connected."
        actions={
          <Button variant="secondary" onClick={() => setConfirm(true)}>
            Run backup check
          </Button>
        }
      />
      <div className="status-grid">
        {[
          ["Application service", "Available", "Prototype interface loaded"],
          ["Clinical database", "Demo only", "Browser session data"],
          ["Employee integration", "Not configured", "Manual entry available"],
          ["Backup service", "Not connected", "No data is being backed up"],
        ].map((item, index) => (
          <Card key={item[0]} className="status-card">
            <span className={index === 0 ? "ok" : "warning"}>
              <Icon name={index === 0 ? "check" : "clock"} />
            </span>
            <div>
              <small>{item[0]}</small>
              <strong>{item[1]}</strong>
              <p>{item[2]}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="report-grid">
        <Card className="table-card">
          <div className="table-toolbar">
            <SectionTitle title="Backup history" />
            <Badge tone="neutral">DEMONSTRATION</Badge>
          </div>
          <table>
            <thead>
              <tr>
                <th>Reference</th>
                <th>Started</th>
                <th>Type</th>
                <th>Result</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DEMO-BKP-001</td>
                <td>Not performed</td>
                <td>Example only</td>
                <td>
                  <Badge tone="neutral">Not connected</Badge>
                </td>
                <td>No backup backend configured</td>
              </tr>
            </tbody>
          </table>
        </Card>
        <Card>
          <SectionTitle title="Restore readiness" />
          <div className="metric-list">
            <div>
              <span>Last restore test</span>
              <strong>Not recorded</strong>
            </div>
            <div>
              <span>Storage allocation</span>
              <strong>Not connected</strong>
            </div>
            <div>
              <span>Recovery procedure</span>
              <strong>Pending client policy</strong>
            </div>
          </div>
        </Card>
      </div>
      {confirm && (
        <Modal
          title="Run demonstration backup check?"
          confirmLabel="Run check"
          onClose={() => setConfirm(false)}
          onConfirm={() => {
            setConfirm(false)
            notify("Demo check complete: no backup service connected")
          }}
        >
          <p>
            This checks the prototype state only. It will not create, restore or
            modify any real backup.
          </p>
        </Modal>
      )}
    </>
  )
}

function Migration({
  go,
  notify,
}: {
  go: (screen: Screen) => void
  notify: (message: string) => void
}) {
  return (
    <>
      <button className="back-link" onClick={() => go("settings")}>
        <Icon name="arrow" size={17} /> Back to system settings
      </button>
      <PageHeader
        eyebrow="ADMINISTRATION / PENDING CLIENT DECISION"
        title="Historical records & migration"
        description="Plan and validate a potential record migration without implying agreed scope."
        actions={
          <Button
            variant="secondary"
            onClick={() => notify("Migration review checklist opened")}
          >
            Review checklist
          </Button>
        }
      />
      <div className="decision-banner">
        <Badge tone="warning">PENDING CLIENT DECISION</Badge>
        <div>
          <strong>Historical migration is not yet confirmed</strong>
          <p>
            Paper scanning and digital record migration remain outside the
            confirmed prototype scope until source records and policy are
            reviewed.
          </p>
        </div>
      </div>
      <div className="stats-grid">
        <StatCard
          icon="users"
          label="Source records"
          value="—"
          note="Inventory not provided"
        />
        <StatCard
          icon="clock"
          label="Processed"
          value="0"
          note="No migration started"
          tone="blue"
        />
        <StatCard
          icon="filter"
          label="Validation errors"
          value="0"
          note="No files assessed"
          tone="amber"
        />
        <StatCard
          icon="search"
          label="Potential duplicates"
          value="0"
          note="Matching not configured"
          tone="violet"
        />
      </div>
      <Card className="table-card">
        <div className="table-toolbar">
          <SectionTitle title="Migration batches" />
          <Button variant="secondary" icon="plus">
            Define proposed batch
          </Button>
        </div>
        <EmptyState
          title="No migration batches"
          description="Once migration scope is approved, authorized administrators can create and validate controlled batches here."
        />
      </Card>
      <Card className="role-card">
        <SectionTitle title="Required approval stages" />
        <div className="approval-flow">
          {[
            "Source inventory",
            "Data mapping",
            "Validation sample",
            "Duplicate review",
            "Authorized approval",
            "Reconciliation",
          ].map((item, index) => (
            <div key={item}>
              <span>{index + 1}</span>
              <strong>{item}</strong>
              <small>Not started</small>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}

function Notifications({ go }: { go: (screen: Screen) => void }) {
  const [filter, setFilter] = useState("All")
  const [read, setRead] = useState<string[]>([])
  const items = [
    [
      "Emergency queue priority",
      "One priority encounter is awaiting clinician assignment.",
      "2 min ago",
      "emergency",
      "danger",
    ],
    [
      "Laboratory result ready",
      "A requested result is ready for authorized clinical review.",
      "12 min ago",
      "laboratory",
      "info",
    ],
    [
      "Medication stock below level",
      "Two inventory items require reorder review.",
      "35 min ago",
      "pharmacy",
      "warning",
    ],
    [
      "Occupational medical overdue",
      "Twelve assessments require scheduling review.",
      "1 hour ago",
      "occupational",
      "warning",
    ],
    [
      "Employee integration unavailable",
      "Manual patient registration remains available.",
      "Yesterday",
      "integration",
      "neutral",
    ],
  ]
  return (
    <>
      <PageHeader
        eyebrow="WORKSPACE"
        title="Notifications & task alerts"
        description="Concise operational alerts linked to permitted records and worklists."
        actions={
          <Button
            variant="secondary"
            onClick={() => setRead(items.map((item) => item[0]))}
          >
            Mark all as read
          </Button>
        }
      />
      <div className="notification-layout">
        <Card className="notification-filters">
          {[
            "All",
            "Patient care",
            "Clinical services",
            "Occupational",
            "System",
          ].map((item) => (
            <button
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
              key={item}
            >
              <span>{item}</span>
              {item === "All" && <Badge tone="info">5</Badge>}
            </button>
          ))}
        </Card>
        <Card className="notification-list">
          {items.map((item) => (
            <button
              key={item[0]}
              className={read.includes(item[0]) ? "read" : ""}
              onClick={() => {
                setRead([...read, item[0]])
                go(item[3] as Screen)
              }}
            >
              <span className={`notification-icon ${item[4]}`}>
                <Icon
                  name={
                    item[3] === "laboratory"
                      ? "lab"
                      : item[3] === "pharmacy"
                        ? "pill"
                        : item[3] === "integration"
                          ? "filter"
                          : "pulse"
                  }
                />
              </span>
              <div>
                <strong>{item[0]}</strong>
                <p>{item[1]}</p>
                <small>{item[2]}</small>
              </div>
              {!read.includes(item[0]) && <i />}
              <Icon name="chevron" size={16} />
            </button>
          ))}
        </Card>
      </div>
    </>
  )
}

function Profile({
  go,
  notify,
}: {
  go: (screen: Screen) => void
  notify: (message: string) => void
}) {
  const [tab, setTab] = useState("Account")
  const [password, setPassword] = useState(false)
  return (
    <>
      <PageHeader
        eyebrow="MY ACCOUNT"
        title="Profile & session"
        description="Manage your account details and view current access permissions."
      />
      <Card className="profile-banner">
        <div className="large-avatar">NM</div>
        <div>
          <div role="heading" aria-level={1}>
            Nandi Mokoena
          </div>
          <p>Receptionist · Front desk · Active session</p>
        </div>
        <Badge tone="success">Account active</Badge>
      </Card>
      <ScreenTabs
        tabs={["Account", "Access & role", "Session security"]}
        active={tab}
        onChange={setTab}
      />
      <div className="detail-grid">
        <div className="detail-main">
          <Card>
            <SectionTitle title={tab} />
            {tab === "Account" && (
              <div className="form-grid">
                <Field label="Full name" defaultValue="Nandi Mokoena" />
                <Field
                  label="Work email"
                  defaultValue="nandi.mokoena@example.test"
                />
                <Field label="Staff number" defaultValue="STAFF-DEMO-014" />
                <Field label="Department" defaultValue="Front desk" />
              </div>
            )}
            {tab === "Access & role" && (
              <div className="permission-list">
                {[
                  [
                    "Patient registration",
                    "Create and update demographic data",
                  ],
                  ["Appointments", "Schedule, reschedule and check in"],
                  ["Queue", "Add patients and update reception stage"],
                  ["Clinical notes", "No access"],
                  ["Administration", "No access"],
                ].map((item, index) => (
                  <div key={item[0]}>
                    <span>
                      <strong>{item[0]}</strong>
                      <small>{item[1]}</small>
                    </span>
                    <Badge tone={index < 3 ? "success" : "neutral"}>
                      {index < 3 ? "Permitted" : "Restricted"}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
            {tab === "Session security" && (
              <>
                <div className="detail-list">
                  <div>
                    <span>Signed in</span>
                    <strong>24 Jun 2025 · 06:58 SAST</strong>
                  </div>
                  <div>
                    <span>Session policy</span>
                    <strong>
                      Reauthentication after configured inactivity
                    </strong>
                  </div>
                  <div>
                    <span>Two-factor authentication</span>
                    <strong>Policy controlled · Demo state</strong>
                  </div>
                </div>
                <Button variant="secondary" onClick={() => setPassword(true)}>
                  Change password
                </Button>
              </>
            )}
            {tab === "Account" && (
              <div className="panel-actions">
                <Button
                  onClick={() =>
                    notify("Profile changes saved for this prototype session")
                  }
                >
                  Save changes
                </Button>
              </div>
            )}
          </Card>
        </div>
        <aside>
          <Card>
            <SectionTitle title="Current session" />
            <dl>
              <dt>Role</dt>
              <dd>Receptionist</dd>
              <dt>Workspace</dt>
              <dd>Mine Clinic</dd>
              <dt>Last activity</dt>
              <dd>Now</dd>
            </dl>
            <Button
              variant="secondary"
              className="full-width profile-signout"
              icon="logout"
              onClick={() => go("login")}
            >
              Sign out
            </Button>
          </Card>
        </aside>
      </div>
      {password && (
        <Modal
          title="Change password"
          confirmLabel="Update password"
          onClose={() => setPassword(false)}
          onConfirm={() => {
            setPassword(false)
            notify("Password update simulated")
          }}
        >
          <div className="modal-form">
            <Field label="Current password" type="password" />
            <Field label="New password" type="password" />
            <Field label="Confirm new password" type="password" />
          </div>
        </Modal>
      )}
    </>
  )
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("login")
  const [role, setRole] = useState("Receptionist")
  const [toast, setToast] = useState("")
  const notify = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(""), 2800)
  }
  if (screen === "login")
    return (
      <Login
        onLogin={(selectedRole) => {
          setRole(selectedRole)
          setScreen("dashboard")
        }}
      />
    )
  const renderScreen = () => {
    switch (screen) {
      case "dashboard":
        return <Dashboard go={setScreen} />
      case "registration":
        return <Registration go={setScreen} notify={notify} />
      case "records":
        return <Records go={setScreen} />
      case "appointments":
        return <Appointments go={setScreen} notify={notify} />
      case "queue":
        return <Queue go={setScreen} notify={notify} />
      case "triage":
        return <Triage go={setScreen} notify={notify} />
      case "consultation":
        return <Consultation go={setScreen} notify={notify} />
      case "emergency":
        return <Emergency go={setScreen} notify={notify} />
      case "laboratory":
        return <Laboratory go={setScreen} notify={notify} />
      case "pharmacy":
        return <Pharmacy notify={notify} />
      case "referrals":
        return <Referrals notify={notify} />
      case "occupational":
        return <Occupational go={setScreen} notify={notify} />
      case "fitness":
        return <Fitness go={setScreen} notify={notify} />
      case "reports":
        return <Reports />
      case "statistics":
        return <HealthStatistics />
      case "users":
        return <Users notify={notify} />
      case "audit":
        return <AuditLog />
      case "settings":
        return <Settings go={setScreen} notify={notify} />
      case "integration":
        return <Integration go={setScreen} notify={notify} />
      case "systemStatus":
        return <SystemStatus go={setScreen} notify={notify} />
      case "migration":
        return <Migration go={setScreen} notify={notify} />
      case "notifications":
        return <Notifications go={setScreen} />
      case "profile":
        return <Profile go={setScreen} notify={notify} />
      default:
        return <Dashboard go={setScreen} />
    }
  }
  return (
    <Shell
      screen={screen}
      role={role}
      onNavigate={setScreen}
      onLogout={() => setScreen("login")}
    >
      {renderScreen()}
      {toast && (
        <div className="toast">
          <span>
            <Icon name="check" size={17} />
          </span>
          {toast}
        </div>
      )}
    </Shell>
  )
}
