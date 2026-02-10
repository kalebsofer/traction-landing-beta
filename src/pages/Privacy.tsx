import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <main className="min-h-screen">
      <div className="container max-w-3xl py-16 px-4">
        <a
          href="/"
          className="inline-block mb-8 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Back to Home
        </a>

        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last Updated: February 10, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p>
              Traction Health ("we," "us," or "our") operates the Traction Health mobile
              application (the "App"). This Privacy Policy explains how we collect, use,
              share, and protect your personal information when you use our App.
            </p>
            <p>
              By using the App, you agree to the collection and use of information in
              accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Information We Collect
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
              Account Information
            </h3>
            <p>When you create an account, we collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Name</strong> (first and last name)
              </li>
              <li>
                <strong>Email address</strong>
              </li>
              <li>
                <strong>Phone number</strong> (optional)
              </li>
            </ul>
            <p>
              You may also provide optional profile information such as date of birth,
              gender, avatar, and a personal motivation statement.
            </p>
            <p>
              You can sign up using email and password, Google Sign-In, or Apple Sign-In.
              If you use a third-party sign-in method, we receive your name and email
              address from that provider. We also support anonymous device-based accounts
              that do not require personal contact information.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
              Health and Fitness Data
            </h3>
            <p>
              The App is a habit and task tracking tool. All health and fitness data is
              manually entered by you. We collect:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Habit and task names, descriptions, and categories</li>
              <li>Completion logs (date, value, and completion status)</li>
              <li>Streak and completion rate metrics</li>
              <li>Schedule and reminder preferences</li>
            </ul>
            <p className="font-medium">
              We do not integrate with Apple HealthKit, Google Fit, or any automatic
              health data collection APIs. All wellness data in the App is provided
              directly by you.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
              User-Generated Content
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Custom habit and task names, descriptions, and categories</li>
              <li>
                Feedback and bug report text, including steps to reproduce and expected
                behavior
              </li>
              <li>
                Photos or screenshots submitted with bug reports (up to 5 per report)
              </li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
              Device Information
            </h3>
            <p>
              We collect certain device information to provide core App functionality:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Device identifier</strong> (a unique ID generated and stored
                locally on your device)
              </li>
              <li>Device model, platform (iOS/Android), and operating system version</li>
              <li>App version</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
              Diagnostics and Usage Data
            </h3>
            <p>To maintain and improve the App, we collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Crash data</strong> (crash logs and exception reports via Sentry)
              </li>
              <li>
                <strong>Performance data</strong> (app launch time, request latency, and
                error rates)
              </li>
              <li>
                <strong>Session data</strong> (interaction data via LogRocket for
                debugging purposes)
              </li>
              <li>
                <strong>Bug report diagnostics</strong> (device model, OS version, app
                version, screen size, locale, timezone, and network type, collected only
                when you submit a bug report)
              </li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
              Push Notification Tokens
            </h3>
            <p>
              If you enable push notifications, we collect your push notification token
              along with your device platform and model to deliver habit and task
              reminders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              How We Use Your Information
            </h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>App Functionality:</strong> To authenticate your account, sync
                your data across devices, deliver push notification reminders, and provide
                customer support.
              </li>
              <li>
                <strong>Analytics:</strong> To understand app performance, diagnose
                crashes and errors, and improve the user experience.
              </li>
            </ul>
            <p className="font-medium mt-4">We do not use your data for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Third-party advertising</li>
              <li>Targeted advertising or ad measurement</li>
              <li>Sharing with data brokers</li>
              <li>Tracking you across other apps or websites</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              How We Share Your Information
            </h2>
            <p>
              We share your information only with the following service providers, solely
              to operate and maintain the App:
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border border-border rounded-lg">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left p-3 font-medium">Service Provider</th>
                    <th className="text-left p-3 font-medium">Purpose</th>
                    <th className="text-left p-3 font-medium">Data Shared</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">Firebase (Google)</td>
                    <td className="p-3">Authentication, file storage</td>
                    <td className="p-3">
                      Email, name, auth tokens, bug report attachments
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">Sentry</td>
                    <td className="p-3">Crash reporting, performance monitoring</td>
                    <td className="p-3">Crash logs, performance metrics, device info</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">LogRocket</td>
                    <td className="p-3">Session replay, error debugging</td>
                    <td className="p-3">
                      User ID, session interaction data, error events
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Expo</td>
                    <td className="p-3">Push notification delivery</td>
                    <td className="p-3">Push notification tokens, device platform</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              These providers process data on our behalf and are contractually obligated
              to use it only for the purposes described above.
            </p>
            <p className="font-medium">
              We do not sell your personal information. We do not share your data with
              advertisers, data brokers, or any third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Data Retention
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Your account data and habit/task data are retained as long as your account
                is active.
              </li>
              <li>
                When you delete your account, we initiate deletion of your data with a
                14-day grace period, after which your data is permanently removed from our
                systems.
              </li>
              <li>
                Crash and diagnostic logs are retained according to the retention policies
                of our service providers (Sentry and LogRocket).
              </li>
              <li>
                Bug reports and feedback are retained to improve the App and may be
                removed upon request.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Data Security
            </h2>
            <p>We take reasonable measures to protect your information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Authentication tokens are stored in encrypted device storage (Secure
                Store on iOS, encrypted preferences on Android).
              </li>
              <li>
                All data transmitted between the App and our servers is encrypted using
                HTTPS/TLS.
              </li>
              <li>
                Passwords are never stored on your device; authentication is handled by
                Firebase.
              </li>
            </ul>
            <p>
              While we strive to protect your personal information, no method of
              electronic transmission or storage is completely secure. We cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Your Rights and Choices
            </h2>
            <p>Depending on your jurisdiction, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Access:</strong> Request a copy of the personal data we hold about
                you.
              </li>
              <li>
                <strong>Correction:</strong> Update or correct inaccurate personal
                information through your in-app profile settings.
              </li>
              <li>
                <strong>Deletion:</strong> Delete your account and associated data from
                within the App or by contacting us.
              </li>
              <li>
                <strong>Push Notifications:</strong> Disable push notifications at any
                time through your device settings.
              </li>
              <li>
                <strong>Anonymous Use:</strong> Use the App with a device-based account
                without providing personal contact information.
              </li>
            </ul>
            <p>To exercise any of these rights, contact us at the address listed below.</p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
              California Residents (CCPA)
            </h3>
            <p>If you are a California resident, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Know what personal information we collect, use, and disclose</li>
              <li>Request deletion of your personal information</li>
              <li>
                Not be discriminated against for exercising your privacy rights
              </li>
            </ul>
            <p>
              We do not sell personal information as defined by the California Consumer
              Privacy Act.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
              European Residents (GDPR)
            </h3>
            <p>
              If you are located in the European Economic Area, our legal bases for
              processing your information are:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Contract:</strong> Processing necessary to provide the App's
                services to you
              </li>
              <li>
                <strong>Legitimate Interest:</strong> Processing necessary for analytics,
                crash reporting, and improving the App
              </li>
              <li>
                <strong>Consent:</strong> Where required, such as for push notifications
              </li>
            </ul>
            <p>
              You may also have the right to data portability and the right to lodge a
              complaint with your local data protection authority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Children's Privacy
            </h2>
            <p>
              The App is not directed to children under the age of 13. We do not knowingly
              collect personal information from children under 13. If you believe we have
              collected information from a child under 13, please contact us so we can
              promptly delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              any material changes by posting the updated policy within the App or on our
              website and updating the "Last Updated" date above. Your continued use of
              the App after changes are posted constitutes your acceptance of the updated
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices,
              please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@softmaxco.io"
                className="text-primary hover:underline"
              >
                support@softmaxco.io
              </a>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://softmaxco.io"
                className="text-primary hover:underline"
              >
                softmaxco.io
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Privacy;
