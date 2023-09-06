"use client";

import { useRouter } from "next/navigation";

const useNavigation = () => {
  const router = useRouter();

  /**
   * routing to link
   * @param link
   */
  const onLink = (link: string) => {
    router.push(link);
  };

  return { onLink };
};

export default useNavigation;
