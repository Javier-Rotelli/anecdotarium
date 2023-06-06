"use client";
import Image from "next/image";
import { getAvatarUrl } from "@/lib/avatars";

const UserPic = () => {
  const avatarUrl = getAvatarUrl();
  return (
    <Image
      src={avatarUrl.toString()}
      alt="user avatar"
      unoptimized
      width={38}
      height={38}
    />
  );
};

export default UserPic;
