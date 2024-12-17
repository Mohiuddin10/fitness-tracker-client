import { NavLink, Outlet } from "react-router";

export default function Test() {
  const profiles = ["asif", "nazrul", "jamal"];
  return (
    <div className="flex justify-between gap-4">
      <div className="border border-sky-500">
        <h2>This is test unit</h2>
        <div className="flex flex-col gap-2">
          {profiles.map(profile =>
            <NavLink key={profile} to={`/test/${profile}`} className={({isActive}) => {
                return isActive ? "text-red-800" : ""
            }}>
              Profile: {profile}
            </NavLink>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
