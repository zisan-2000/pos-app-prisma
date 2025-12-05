"use client";

export function LogoutButton() {
  const handleLogout = () => {
    // TODO: hook into BetterAuth sign-out.
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
    >
      Logout
    </button>
  );
}

