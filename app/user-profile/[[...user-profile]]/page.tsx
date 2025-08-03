import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  return (
    <div className="flex justify-center items-center py-24">
      <UserProfile path="/user-profile" routing="path" />
    </div>
  );
}
