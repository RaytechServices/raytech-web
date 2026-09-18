import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The 12-Week Tech Journal — $7 Pilot | Raytech Services",
  description:
    "Get church tech out of your head — from scattered notes to one written place. $7 digital pilot.",
};


export default function ChurchJournalPage() {
  return (
    <main
      style={{
        fontFamily: '"Source Sans 3", system-ui, sans-serif',
        background: "#f3efe6",
        color: "#1c1915",
        minHeight: "100vh",
        lineHeight: 1.55,
      }}
    >
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "2.5rem 1.25rem 3.5rem" }}>
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1.75rem",
          }}
        >
          Raytech Services
        </div>
        <div
          style={{
            display: "inline-block",
            background: "rgba(181,106,74,0.14)",
            color: "#b56a4a",
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "0.35rem 0.7rem",
            borderRadius: 999,
            marginBottom: "1.5rem",
          }}
        >
          Pilot Edition · Digital
        </div>
        <h1
          style={{
            fontFamily: "Fraunces, Georgia, serif",
            fontSize: "clamp(1.85rem, 5vw, 2.35rem)",
            lineHeight: 1.15,
            marginBottom: "0.65rem",
            fontWeight: 700,
          }}
        >
          The 12-Week Tech Journal
        </h1>
        <p
          style={{
            fontFamily: "Fraunces, Georgia, serif",
            fontStyle: "italic",
            color: "rgba(28,25,21,0.62)",
            fontSize: "1.05rem",
            marginBottom: "1.25rem",
          }}
        >
          Get church tech out of your head — from scattered notes to one written place.
        </p>

        <section
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: "1.25rem 1.25rem 1.35rem",
            margin: "0 0 1.5rem",
            border: "1px solid #d9d2c3",
          }}
        >
          <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/adam-casual.jpg"
              alt="Adam Raymer-Brown"
              width={72}
              height={72}
              style={{
                width: 72,
                height: 72,
                borderRadius: "999px",
                objectFit: "cover",
                flexShrink: 0,
                border: "2px solid #e8e2d4",
              }}
            />
            <div>
              <h2
                style={{
                  fontFamily: "Fraunces, Georgia, serif",
                  fontSize: "1.25rem",
                  margin: "0 0 0.35rem",
                  fontWeight: 700,
                }}
              >
                Hi. Read this first.
              </h2>
              <p style={{ margin: 0, fontSize: "0.92rem", color: "rgba(28,25,21,0.62)" }}>
                Adam Raymer-Brown · Raytech Services
              </p>
            </div>
          </div>
          <p style={{ marginBottom: "0.75rem" }}>
            Hi, my name is Adam. I&apos;ve spent 20 years in IT, and a lot of that time has been helping churches get
            organized.
          </p>
          <p style={{ marginBottom: "0.75rem" }}>
            Every time I start work at a new church, I ask the same questions. Where&apos;s the internet box? Who has
            the passwords? Who pays for the website? Most of the time the answers live in one person&apos;s head, and
            that person is tired of carrying it all.
          </p>
          <p style={{ marginBottom: "0.75rem" }}>
            So I made the journal I wish every one of my clients had filled out before I walked in the door. I hope you
            find it useful and easy to understand.
          </p>
          <p style={{ fontWeight: 700, marginBottom: "0.45rem" }}>Here&apos;s the deal I&apos;m making with you:</p>
          <ul style={{ margin: "0 0 0.85rem 1.1rem" }}>
            <li style={{ margin: "0.35rem 0" }}>
              You will <strong>not</strong> fix anything in this book. You&apos;re only writing down what&apos;s already
              there.
            </li>
            <li style={{ margin: "0.35rem 0" }}>
              You do <strong>not</strong> need to be &quot;a computer person.&quot; If you can fill out a permission
              slip, you can do this.
            </li>
            <li style={{ margin: "0.35rem 0" }}>
              About <strong>20 minutes, once a week, for 12 weeks.</strong> Then you stop. Really.
            </li>
            <li style={{ margin: "0.35rem 0" }}>
              <strong>&quot;I don&apos;t know&quot; is a good answer.</strong> Write it down and move on.
            </li>
            <li style={{ margin: "0.35rem 0" }}>Nobody is grading this. There&apos;s no wrong way to do it.</li>
          </ul>
          <p style={{ marginBottom: 0, fontSize: "0.95rem", color: "rgba(28,25,21,0.78)" }}>
            When you finish, your church will have one written place that says what you have, where it is, who takes
            care of it, and who to call. That&apos;s the whole point.
          </p>
        </section>

        <ul style={{ margin: "1rem 0 1.5rem 1.1rem" }}>
          <li style={{ margin: "0.4rem 0" }}>Write it down only — you don’t fix anything in this book</li>
          <li style={{ margin: "0.4rem 0" }}>About 20 minutes a week for 12 weeks</li>
          <li style={{ margin: "0.4rem 0" }}>“I don’t know” is a good answer</li>
          <li style={{ margin: "0.4rem 0" }}>Pilot thank-you: free print when the final edition ships</li>
        </ul>

        <p style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "2rem", fontWeight: 700, margin: "1.25rem 0 1.5rem" }}>
          $7{" "}
          <span style={{ fontSize: "1rem", fontWeight: 500, color: "rgba(28,25,21,0.62)", fontFamily: '"Source Sans 3", sans-serif' }}>
            digital download
          </span>
        </p>

        <div
          style={{
            background: "#e8e2d4",
            borderRadius: 10,
            padding: "1.15rem 1.25rem",
            marginBottom: "1.25rem",
            borderLeft: "3px solid #b56a4a",
          }}
        >
          <p style={{ fontWeight: 700, marginBottom: "0.45rem" }}>Step 1 — Pay $7</p>
          <p style={{ fontSize: "0.92rem", color: "rgba(28,25,21,0.72)", marginBottom: 0 }}>
            Use one of the links below. In the payment note, put your <strong>church name + email</strong>.
            X Money: open the X app → Send → <strong>@theraymerbrown</strong> → $7.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "stretch",
            gap: "0.75rem",
            margin: "0 0 1.5rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://www.paypal.com/paypalme/adamraymer826/7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pay $7 with PayPal"
            title="PayPal"
            style={{
              flex: "1 1 0",
              minWidth: 96,
              maxWidth: 140,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.35rem",
              textDecoration: "none",
              padding: "0.75rem 0.5rem",
              borderRadius: 12,
              background: "#fff",
              border: "1px solid #d9d2c3",
              color: "#1c1915",
            }}
          >
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "#003087",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "1.15rem",
                letterSpacing: "-0.02em",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              P
            </span>
            <span style={{ fontSize: "0.78rem", fontWeight: 700 }}>PayPal</span>
          </a>
          <a
            href="https://venmo.com/u/adam-raymer-brown?txn=pay&amount=7&note=12-Week%20Tech%20Journal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pay $7 with Venmo"
            title="Venmo"
            style={{
              flex: "1 1 0",
              minWidth: 96,
              maxWidth: 140,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.35rem",
              textDecoration: "none",
              padding: "0.75rem 0.5rem",
              borderRadius: 12,
              background: "#fff",
              border: "1px solid #d9d2c3",
              color: "#1c1915",
            }}
          >
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "#008CFF",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "1.15rem",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              V
            </span>
            <span style={{ fontSize: "0.78rem", fontWeight: 700 }}>Venmo</span>
          </a>
          <a
            href="https://x.com/theraymerbrown"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pay $7 with X Money to @theraymerbrown"
            title="X Money"
            style={{
              flex: "1 1 0",
              minWidth: 96,
              maxWidth: 140,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.35rem",
              textDecoration: "none",
              padding: "0.75rem 0.5rem",
              borderRadius: 12,
              background: "#fff",
              border: "1px solid #d9d2c3",
              color: "#1c1915",
            }}
          >
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "#000",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "1.2rem",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              𝕏
            </span>
            <span style={{ fontSize: "0.78rem", fontWeight: 700 }}>X Money</span>
          </a>
        </div>

        <div
          style={{
            background: "#e4eef5",
            borderRadius: 10,
            padding: "1.15rem 1.25rem",
            borderLeft: "3px solid #2f6f9f",
          }}
        >
          <p style={{ fontWeight: 700, marginBottom: "0.45rem" }}>Step 2</p>
          <p style={{ fontSize: "1.02rem", marginBottom: 0, color: "rgba(28,25,21,0.85)" }}>
            After payment is sent,{" "}
            <Link href="/church/thanks" style={{ color: "#2f6f9f", fontWeight: 700 }}>
              click here
            </Link>
            .
          </p>
        </div>

        <p style={{ marginTop: "1.5rem", fontSize: "0.92rem", color: "rgba(28,25,21,0.62)" }}>
          Gift for a church office? Pay $7 and put their email in the note, or just tell Adam and he’ll send it.
        </p>
        <div
          style={{
            marginTop: "2.5rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid #d9d2c3",
            fontSize: "0.85rem",
            color: "rgba(28,25,21,0.62)",
          }}
        >
          <p>
            Write it down. Serve well.
            <br />
            Adam Raymer-Brown · Raytech Services ·{" "}
            <a href="https://raytech.co" style={{ color: "#2f6f9f" }}>
              raytech.co
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
