import Footer from "@/components/Footer";

const DataDeletion = () => {
  return (
    <main className="min-h-screen">
      <div className="container max-w-3xl py-16 px-4">
        <a
          href="/"
          className="inline-block mb-8 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Back to Home
        </a>

        <h1 className="text-4xl font-bold mb-2">Data Deletion</h1>
        <p className="text-muted-foreground mb-12">Last Updated: February 25, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              How to Delete Your Data
            </h2>
            <p>
              Traction Health allows you to delete your account and all associated data
              directly from within the app. When you delete your account, we remove your
              personal information, habits, tasks, completion logs, and all other data
              linked to your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Delete Your Account from the App
            </h2>
            <p>To delete your account and data, follow these steps:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>Open the <strong>Traction Health</strong> app</li>
              <li>
                Go to <strong>Settings</strong> (tap the gear icon in the bottom tab bar)
              </li>
              <li>
                Tap <strong>Account</strong>
              </li>
              <li>
                Tap <strong>Delete Account</strong>
              </li>
              <li>Confirm the deletion when prompted</li>
            </ol>
            <p className="mt-4">
              Your account will be soft-deleted immediately, and your Firebase
              authentication record will be removed. After a 14-day grace period, all
              data is permanently deleted from our systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              What Data Is Deleted
            </h2>
            <p>When you delete your account, the following data is removed:</p>
            <ul className="list-disc pl-6 space-y-1 mt-4">
              <li>Account information (name, email, profile details)</li>
              <li>All habits and tasks you created</li>
              <li>Completion logs and streak data</li>
              <li>Push notification tokens and device profiles</li>
              <li>Settings and preferences</li>
              <li>
                Firebase authentication record (email/password, Google, Apple, or
                Facebook linked accounts)
              </li>
            </ul>
            <p className="mt-4">
              Anonymized crash logs and performance data retained by our third-party
              service providers (Sentry, LogRocket) may persist according to their own
              retention policies but cannot be linked back to your identity after account
              deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Request Deletion via Email
            </h2>
            <p>
              If you are unable to delete your account from within the app, you can
              request deletion by emailing us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:support@softmaxco.io"
                className="text-primary hover:underline"
              >
                support@softmaxco.io
              </a>
            </p>
            <p className="mt-2">
              Please include the email address associated with your account. We will
              process your request within 14 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Facebook Login Users
            </h2>
            <p>
              If you signed in using Facebook Login, you can also manage Traction
              Health's access to your data from your{" "}
              <a
                href="https://www.facebook.com/settings?tab=applications"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook App Settings
              </a>
              . Removing the app from Facebook will revoke its access, but to fully
              delete your Traction Health account and data, please use the in-app
              deletion or email us as described above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p>
              If you have any questions about data deletion or our data practices, please
              contact us at:
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
            <p>
              <strong>Privacy Policy:</strong>{" "}
              <a
                href="/privacy"
                className="text-primary hover:underline"
              >
                softmaxco.io/privacy
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default DataDeletion;
