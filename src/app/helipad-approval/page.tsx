"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HelipadApprovalPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/airport-noc");
  }, [router]);

  return null;
}
